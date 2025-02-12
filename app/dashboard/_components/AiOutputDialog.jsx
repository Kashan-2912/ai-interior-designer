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
  const downloadImage = async () => {
    try {
      const response = await fetch(aiImageUrl);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      
      const a = document.createElement("a");
      a.href = url;
      a.download = "ai-generated-image.jpg";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading the image:", error);
    }
  };

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

        <div className="flex justify-between mt-4">
          <Button onClick={() => closeDialog(false)}>Close</Button>
          <Button onClick={downloadImage}>Download Image</Button>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default AiOutputDialog;
