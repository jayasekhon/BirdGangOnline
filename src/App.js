import logo from './logo.svg';
import './App.css';
import NavBar, { ElementsWrapper } from "react-scrolling-nav";
import { Unity, useUnityContext } from "react-unity-webgl";
import SideBar from "./sideBar.js"
import { Link } from "react-scroll";
import { Document, Page, pdfjs } from 'react-pdf';
import React, { useState } from 'react';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function PDFFile() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }
  
  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }
  
  function previousPage() {
    changePage(-1);
  }
  
  function nextPage() {
    changePage(1);
  }


  return (
<>
    <div className="main">
      <Document
        file={'TeamSteam_BirdGang_Report.pdf'}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} scale = {0.8}/>
      </Document>
      <div>
        <div className="pagec">
          Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </div>
        <div className="buttonc">
        <button
          type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
          className="Pre"
            
        >
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
           
        >
          Next
        </button>
        </div>
      </div>
      </div>
    </>
  );
}

function App(){
  const { unityProvider } = useUnityContext({
    loaderUrl: "/BirdGangGame/Build/BirdGangGame.loader.js",
    dataUrl: "/BirdGangGame/Build/BirdGangGame.data",
    frameworkUrl: "/BirdGangGame/Build/BirdGangGame.framework.js",
    codeUrl: "/BirdGangGame/Build/BirdGangGame.wasm",
  });


  return <div>
  <div className="App">

    <header className="nav">

    <nav className="nav__container__actions">

    <ul>

    <li>

      <Link activeClass="active" smooth spy to="game">

      <h1 id='game_colour'>GAME</h1>

      </Link>

    </li>

    <li>

      <Link activeClass="active" smooth spy to="about">

      <h1 id='about_colour'>ABOUT</h1>


      </Link>

    </li>

    <li>

      <Link activeClass="active" smooth spy to="team">

      <h1 id='team_colour'>THE TEAM</h1>

      </Link>

    </li>

    <li>

      <Link activeClass="active" smooth spy to="privacy">

      <h1 id='privacy_colour'>PRIVACY</h1>

      </Link>

    </li>

    </ul>

    </nav>

    </header>




  <section id="game">

    <Unity style = {{width: "80%", height:"80%", transform: 'translate(-50%, -50%)', position:'absolute', top:'calc(50% + 2rem)', left:'50%', justifySelf:"center", alignSelf:"center",}} unityProvider={unityProvider}/>

  </section>

  <section id="about">
    <h1>ABOUT</h1>
  <div class='row'>
    <div class='column'>
      <div class='left-column'>
      <p>BirdGang was created as part of the Unviersity of Bristol Computer Science M.Eng Games Project. It was awarded a first class mark, "judged as outstanding by the panel and entering truly professional territory". All aspects of the game were created in-house using the Unity Game Engine and Autodesk Maya. 
      </p>
      <p>
      Players enter the world as BirdGang recruits and are tasked with finding bad people, pooping on them, and ruining their day. AI bird flocks populate the sky and target any players who remain still for too long. Players locate one another using markers showing teammates positions. During the game, players will face four miniboss rounds. In each, they must work together to defeat them, using waypoints and help messages to communicate with one another. Each of the two-minute rounds are introduced by a cinematic cutscene and an audio overlay from the gang boss. 
      </p>
      <p>
      Source code for the project is available at: https://github.com/hamiltonrconnor/BirdGang
      </p>
      </div>
    </div>
    <div class='column'>
      <div class='right-column'>
        <PDFFile/>
      </div>
  </div>
</div>
    

  
  </section>

  <section id="team">
    <h1>THE TEAM</h1>
    <img src={'allbosses.png'}/>
    
  
  </section>

  <section id="privacy"><h1>PRIVACY</h1></section>

  </div></div>;
  //return <Unity style = {{width: "80%", position: 'absolute', left: '50%', top: '50%',
        //transform: 'translate(-50%, -50%)', justifySelf:"center", alignSelf:"center",}} unityProvider={unityProvider} />;
}


export default App;
