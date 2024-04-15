import React, { useRef, useEffect,useContext } from 'react';
import '@google/model-viewer/dist/model-viewer.min.js';
import { MyContext } from '../App';
function Model() {
    const modelViewerRef = useRef();
    const { value } = useContext(MyContext);
    const [src, setSrc] = value;

    useEffect(() => {
      console.log(src);
      const modelViewer = modelViewerRef.current;
      modelViewer.src = src;
      modelViewer.alt = "model";
      modelViewer.cameraControls = true;
      modelViewer.ar = true;
      modelViewer['ar-modes'] = 'webxr';
      return () => {
     
      };
    }, []);
  
    return (
        <div>
        <model-viewer ref={modelViewerRef}></model-viewer>
        </div>
    );
}

export default Model;
