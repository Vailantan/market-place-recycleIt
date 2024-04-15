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
      modelViewer.shadowIntensity = 1; // Set shadow intensity
      modelViewer.shadowSoftness = 1; // Set shadow softness
      modelViewer.style.setProperty('--model-viewer-shadow-color', 'rgba(0, 0, 0, 0.4)')
      return () => {
     
      };
    }, []);
  
    return (

        <div style={{display:"flex",justifyContent:"center",marginTop:"10%",height: "400px"
      }}>
        <model-viewer style={{width: "368px",height: "347px"}} ref={modelViewerRef}></model-viewer>
        </div>
    );
}

export default Model;
