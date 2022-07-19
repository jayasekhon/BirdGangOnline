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
  }
  function goToPrevPage({ pageNumber }) {
    setPageNumber(pageNumber - 1);
  }
  function goToNextPage({ pageNumber }) {
    setPageNumber(pageNumber + 1);
  }


  return (
    <div>
      <nav>
          <button onClick={this.goToPrevPage}>Prev</button>
          <button onClick={this.goToNextPage}>Next</button>
      </nav>
    <div>
      <Document file="/TeamSteam_BirdGang_Report.pdf" onLoadSuccess={onDocumentLoadSuccess} onLoadError={console.error}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
    </div>
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
    <PDFFile/>

  
  </section>

  <section id="team"><h1>THE TEAM</h1></section>

  <section id="privacy"><h1>PRIVACY</h1></section>

  </div></div>;
  //return <Unity style = {{width: "80%", position: 'absolute', left: '50%', top: '50%',
        //transform: 'translate(-50%, -50%)', justifySelf:"center", alignSelf:"center",}} unityProvider={unityProvider} />;
}


export default App;
