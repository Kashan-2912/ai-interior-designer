import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../../components/ui/alert-dialog";

import { Button } from "../../../components/ui/button";

import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

function AiOutputDialog({ openDialog, closeDialog, orgImageUrl, aiImageUrl }) {
  return (
    <AlertDialog open={openDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Result:</AlertDialogTitle>
          <ReactBeforeSliderComponent
            firstImage={{
                imageUrl: aiImageUrl
            }}
            secondImage={{
                imageUrl: orgImageUrl
            }}
          />

          <Button onClick={() => closeDialog(false)}>Close</Button>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default AiOutputDialog;
