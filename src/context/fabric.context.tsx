import React from "react";
import {fabric} from "fabric";

export interface IContextProvider {
  canvas: fabric.Canvas | null,
  activeElement?: fabric.Object,
  setActiveElement: React.Dispatch<React.SetStateAction<fabric.Object | undefined>>,
  createCanvas: (el: HTMLCanvasElement) => void,
  loadFromJSON: (el: HTMLCanvasElement, json: any) => void
}

export const FabricContext = React.createContext<IContextProvider | undefined>(undefined);

export const ContextProvider = (children: React.ReactNode) => {
  const [canvas, setCanvas] = React.useState<fabric.Canvas | null>(null);
  const [activeElement, setActiveElement] = React.useState<fabric.Object | undefined>(undefined);

  const createCanvas = React.useCallback((el: HTMLCanvasElement) => {
    const _options: fabric.ICanvasOptions = {
      selection: true,
      defaultCursor: "default",
      backgroundColor: "#fff",
      preserveObjectStacking: true
    };

    const _canvas = new fabric.Canvas(el, _options);
    _canvas.renderAll();
    setCanvas(_canvas);
  }, []);

  const loadFromJSON = React.useCallback((el: HTMLCanvasElement, json) => {
    const _canvas = new fabric.Canvas(el);
    _canvas.loadFromJSON(
      json,
    () => {
        _canvas.renderAll.bind(_canvas);
      });
    _canvas.renderAll();
    setCanvas(_canvas);
  }, []);

  return (
    <FabricContext.Provider value={{canvas, createCanvas, loadFromJSON, activeElement, setActiveElement}}>
      {children}
    </FabricContext.Provider>
  )
}