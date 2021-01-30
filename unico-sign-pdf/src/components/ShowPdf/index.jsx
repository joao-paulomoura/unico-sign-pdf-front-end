import React from 'react';
import { Document } from 'react-pdf';
import { FixedSizeList as Window } from 'react-window';
import './style.css'

const ShowPdf = (props) => {
  return (
    <Document
      className="document-container"
      file={props.file}
      onLoadSuccess={props.loadSuccess}
    >
      <Window
        height={1000}
        itemCount={props.pagesArray}
        itemSize={900}
        width={650}
      >
        {props.page}
      </Window>
    </Document>);
}

export default ShowPdf;