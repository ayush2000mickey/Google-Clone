import React, { useEffect } from "react";
import { useHistory, Redirect } from "react-router-dom";

import classes from "./VoiceSearch.module.css";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import GoogleListeningGif from "../../Images/Google Listening.gif";

const VoiceSearch = () => {
  const history = useHistory();

  const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    <Redirect to="*" />;
  }

  useEffect(() => {
    SpeechRecognition.startListening();

    return () => {
      resetTranscript();
    };
  }, [resetTranscript]);

  const stoppingSpeechRecognition = () => {
    SpeechRecognition.stopListening();

    let searchValue = transcript.replace(/[^a-zA-Z0-9 ]/g, "");
    if (searchValue) history.push(`/${searchValue}/all`);
  };

  return (
    <div className={classes.gifContainer}>
      <div className={classes.note}>
        Take A Deep Breath And Then Start Speaking
      </div>
      <img src={GoogleListeningGif} alt="" />
      <button onClick={stoppingSpeechRecognition}>
        Press After Speaking to see results
      </button>
    </div>
  );
};

export default VoiceSearch;
