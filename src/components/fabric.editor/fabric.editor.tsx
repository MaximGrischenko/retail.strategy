import React, {useContext} from "react";
import {FabricContext, IContextProvider} from "../../context/fabric.context";

interface IFabricEditor {
  json?: {},
  width: number,
  height: number
}

const initialState = {
  version: "3.6.3",
  objects: []
}

const FabricEditor:React.FC<IFabricEditor> = ({json, width= 600, height= 400}) => {
  const canvasEl = React.useRef<HTMLCanvasElement | null>(null);
  const [canvasState, setCanvasState] = React.useState(initialState);
  const [canvasHistory, setCanvasHistory] = React.useState([initialState]);
  const {canvas, createCanvas, setActiveElement, loadFromJSON} = React.useContext(FabricContext) as IContextProvider;

  React.useLayoutEffect(() => {
    if(json) {
      if(canvasEl && canvasEl.current) loadFromJSON(canvasEl.current, json);
    } else {
      if(canvasEl && canvasEl.current) {
        createCanvas(canvasEl.current)
      }
    }
  }, [canvasEl, createCanvas, loadFromJSON])

  const updateActiveElement = React.useCallback((e) => {
    if(!e) return;
    const _updates = e.target.canvas.toJSON();
    setCanvasState(_updates);
    //TODO .slice(-4) Limit history depth;
    setCanvasHistory(history => [...history, _updates].slice(-4))
    setActiveElement(canvas?.getActiveObject());
    canvas?.renderAll();
  }, [canvas, setActiveElement])

  React.useEffect(() => {
    if(!canvas) return;
    canvas.on("selection:created", updateActiveElement);
    canvas.on("selection:updated", updateActiveElement);
    canvas.on("selection:cleared", updateActiveElement);

    return () => {
      canvas.off("selection:created");
      canvas.off("selection:cleared");
      canvas.off("selection:updated");
      canvas.dispose();
    }
  }, [canvas, updateActiveElement])

  const handleHistory = React.useCallback((step: number) => {
    const _index = canvasHistory.indexOf(canvasState);
    const _json = canvasHistory[_index + step];
    canvas?.loadFromJSON(canvasEl.current, _json as any);
    setCanvasState(_json);
  }, [canvas, setActiveElement, canvasHistory, setCanvasHistory]);

  const onUndo = React.useCallback(() => {handleHistory(-1)}, [handleHistory]);
  const onRedo = React.useCallback(() => {handleHistory(1)}, [handleHistory]);

  return (
    <div></div>
  )
}