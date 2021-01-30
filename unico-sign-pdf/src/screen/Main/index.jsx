import React, { useEffect, useState } from 'react';
import { Page, pdfjs } from 'react-pdf';
import ShowPdf from '../../components/ShowPdf';
import './style.css'

const Main = () => {
  const [upload, setUpload] = useState();
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }, [])

  const renderPageList = () => {
    const pagesList = []
    Array.from(new Array(numPages), (page, index) => (
      pagesList.push(<Page key={`pagina_${index + 1}`} pageNumber={index + 1} />)
    ))

    return pagesList
  }

  const renderPage = ({ index, style }) => (
    <div style={style}>
      {renderPageList()[index]}
    </div>
  );

  return (
    <body className="container">
      <main className="main">
        <header className="header">
          <h1 className="title">Visualizador de PDF</h1>
        </header>
        <div className="upload">
          <label htmlFor="file">Enviar novo arquivo</label><br />
          <input onChange={event => setUpload(event.target.files[0])} type="file" />
        </div>
        <div>
          {upload &&
            <ShowPdf 
              file={upload}  
              loadSuccess={(file) => setNumPages(file.numPages)}
              pagesArray={renderPageList().length}
              page={renderPage}
            />
          }
        </div>
      </main>
    </body>
  );
}

export default Main