
import './App.css';
import React, { useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Document, Page, pdfjs } from 'react-pdf';
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
          <Page pageNumber={pageNumber} width={250}/>
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


function TwoCol(){

    return(
        <div class="column">
            <div class="left-column">
                <p>BirdGang was created as part of the Unviersity of Bristol Computer Science M.Eng Games Project. It was awarded a first class mark, "judged as outstanding by the panel and entering truly professional territory". All aspects of the game were created in-house using the Unity Game Engine and Autodesk Maya. 
                </p>
                <p>
                Players enter the world as BirdGang recruits and are tasked with finding bad people, pooping on them, and ruining their day. AI bird flocks populate the sky and target any players who remain still for too long. Players locate one another using markers showing teammates positions. During the game, players will face four miniboss rounds. In each, they must work together to defeat them, using waypoints and help messages to communicate with one another. Each of the two-minute rounds are introduced by a cinematic cutscene and an audio overlay from the gang boss. 
                </p>
                <p>
                Source code for the project is available at: https://github.com/hamiltonrconnor/BirdGang
                </p>
            </div>
            <div class='right-column'>
                <div class='pdf'>
                    <PDFFile />
                </div>
                
            </div>
        </div>

    );


}
export default TwoCol;