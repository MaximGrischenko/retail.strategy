import * as actions from "../action.constants/dialog.constants";
import {IContentRecord, IDialogSettings} from "../module.interfaces/dialog.interface";

export const showDialogContent = (content?: IContentRecord): {type: typeof actions.SHOW_DIALOG_CONTENT, content?: IContentRecord} => ({
  type: actions.SHOW_DIALOG_CONTENT,
  content
});
export const showDialogContentSuccess = (content?: IContentRecord): {type: typeof actions.SHOW_DIALOG_CONTENT_SUCCESS, content?: IContentRecord} => ({
  type: actions.SHOW_DIALOG_CONTENT_SUCCESS,
  content
});

export const dialogChangeSettings = (settings?: IDialogSettings): {type: typeof actions.DIALOG_CHANGE_SETTINGS, settings?: IDialogSettings} => ({
  type: actions.DIALOG_CHANGE_SETTINGS,
  settings
});
export const dialogChangeSettingsSuccess = (settings?: IDialogSettings): {type: typeof actions.DIALOG_CHANGE_SETTINGS_SUCCESS, settings?: IDialogSettings} => ({
  type: actions.DIALOG_CHANGE_SETTINGS_SUCCESS,
  settings
});