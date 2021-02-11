import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import ReactTypingEffect from "react-typing-effect";
import "./index.css";


/* Image imports*/
import image from '../../assets/aparna.jpg';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function Aboutme() {
  return (
    <div className="App">
        <div className="about-me">
          <ReactTypingEffect
            text="Aparna Roy"
            className="name"
            typingDelay="2000ms"
            style={{ letterSpacing: "0.181818em", color: "whitesmoke" }}
          />
          <div className="aboutImgCont">
              <img
                className="bioImg img-fluid"
                src={image}
                alt="Aparna Roy"
              />
            </div>
            <p>
              Hi there! My name is Aparna Roy, you can call me Eliz.
            </p>
          </div>
        </div>
  );
}

export default Aboutme;
