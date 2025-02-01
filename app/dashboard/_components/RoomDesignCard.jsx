import React, { useState } from "react";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import AiOutputDialog from "./AiOutputDialog";

function RoomDesignCard({ room }) {

  const [openDialog, setOpenDialog] = useState(false);
  const [closeDialog, setCloseDialog] = useState(true);

  const onClickHandler = () => {
    setOpenDialog(true);
    setCloseDialog(false);
  }

  return (
    <div className="shadow-md rounded-md cursor-pointer" onClick={() => onClickHandler()}>
      <ReactBeforeSliderComponent
        firstImage={{
          imageUrl: room?.originalImageUrl,
        }}
        secondImage={{
          imageUrl: room?.aiImage,
        }}
      />

      <div className="p-4">
        <h2>
          🏠 Room Type: {room?.roomType} 
        </h2>

        <h2>
        🎨 Design Type: {room?.designType}
        </h2>
      </div>

      {/* <AiOutputDialog 
        aiImageUrl={room?.aiImage} 
        orgImageUrl={room?.originalImageUrl} 
        closeDialog={closeDialog} 
        setCloseDialog={setCloseDialog}
        openDialog={openDialog} 
      /> */}

    </div>
  );
}

export default RoomDesignCard;
