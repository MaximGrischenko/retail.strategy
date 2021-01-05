import React from "react";
import * as actions from "../action.creators/dialog.actions";

export interface IDialogSettings {

}
export interface IContentRecord {
  children: React.ReactNode,
  settings?: IDialogSettings
}
export interface IStateRecord {
  content?: IContentRecord
}

type InferTypes<T> = T extends {[key: string]: infer U} ? U : never;
export type IActionTypes = ReturnType<InferTypes<typeof actions>>