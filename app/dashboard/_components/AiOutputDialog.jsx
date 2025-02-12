import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../../../components/ui/alert-dialog";

import { Button } from "../../../components/ui/button";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

function AiOutputDialog({ openDialog, closeDialog, orgImageUrl, aiImageUrl }) {
  return (
    <AlertDialog open={openDialog} onOpenChange={closeDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Result:</AlertDialogTitle>
        </AlertDialogHeader>

        <ReactBeforeSliderComponent
          firstImage={{ imageUrl: aiImageUrl }}
          secondImage={{ imageUrl: orgImageUrl }}
        />

        <Button onClick={() => closeDialog(false)}>Close</Button>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default AiOutputDialog;
