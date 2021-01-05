import React from "react";
import {useSelector} from "react-redux";
import {contentSelector, settingsSelector} from "../../redux/modules/dialog.module";
import {Dialog, createStyles, makeStyles, Grow} from "@material-ui/core";
import {TransitionProps} from "@material-ui/core/transitions";

const useStyles = makeStyles(() => createStyles({
  paper: {
    justifyContent: "center",
    alignItems: "center"
  }
}));

const Transition = () => React.forwardRef(function Transition(
  props: TransitionProps & {children?: React.ReactElement<any, any>},
  ref: React.Ref<unknown>
) {
  return <Grow ref={ref} {...props} />
})

export const DialogContainer: React.FC = () => {
  const classes = useStyles();
  const content = useSelector(contentSelector);
  const settings = useSelector(settingsSelector);

  return (
    <Dialog
      open={!!content.children}
      fullWidth
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="sm"
      aria-labelledby="dialog-container"
      transitionDuration={{enter: 500, exit: 300}}
      TransitionComponent={Transition}
      PaperProps={{classes: {root: classes.paper}, elevation: 2}}
    >
      {
        content.children
      }
    </Dialog>
  )
}