import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import classes from "./VoiceSearch.module.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import GoogleListeningGif from "../../Images/Google Listening.gif";

const VoiceSearch = () => {
  const [isBrowserSupport, setIsBrowserSupport] = useState(true);
  const history = useHistory();

  const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  useEffect(() => {
    SpeechRecognition.startListening();

    return () => {
      resetTranscript();
    };
  }, [resetTranscript]);

  if (!browserSupportsSpeechRecognition) {
    setIsBrowserSupport(false);
    SpeechRecognition.stopListening();
  }

  const stoppingSpeechRecognition = () => {
    SpeechRecognition.stopListening();

    let searchValue = transcript.replace(/[^a-zA-Z0-9 ]/g, "");
    if (searchValue) history.push(`/${searchValue}/all`);
  };

  return (
    <div className={classes.gifContainer}>
      {!isBrowserSupport ? (
        <div className={classes.note}>
          Voice Search Not Supported in this Browser
        </div>
      ) : (
        <>
          <div className={classes.note}>
            Take A Deep Breath And Then Start Speaking
          </div>
          <img src={GoogleListeningGif} alt="" />
          <button onClick={stoppingSpeechRecognition}>
            Press After Speaking to see results
          </button>
        </>
      )}
    </div>
  );
};

export default VoiceSearch;
