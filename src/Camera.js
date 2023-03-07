import React from "react";
import Webcam from "react-webcam";

const Cameras = () => {
    const [imageSrc, setimageSrc] = React.useState("");
  return (
    <>
      <Webcam
        audio={false}
        height={200}
        screenshotFormat="image/jpeg"
        // videoConstraints={videoConstraints}
      />
     {({ getScreenshot }) => (
          <button
                onClick={() => {
                  const src = Webcam.getScreenshot();
                  setimageSrc(src);
                }}
          > 
            Capture photo
          </button>
      )}
      <img src={imageSrc} width="100" height="50" />
    </>
  );
}

export default Cameras;