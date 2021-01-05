import * as actions from "../action.creators/app.actions";

export interface IStateRecord {
  loading: boolean;
  error?: string;
}

type InferTypes<T> = T extends {[key: string]: infer U} ? U : never;
export type IActionTypes = ReturnType<InferTypes<typeof actions>>;