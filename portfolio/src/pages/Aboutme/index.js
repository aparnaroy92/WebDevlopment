import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactTypingEffect from "react-typing-effect";
import "./index.css";


/* Image imports*/
import image from '../../assets/aparna.jpg';
//Firestore import
import firebaseDB from '../../firestore';

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
  const [val, setDesc] = useState([]);
  const firestore = firebaseDB.firestore();
  const fetchDesc = () => {
    const response = firestore.collection('aboutme').doc('bio');
    return response.get().then(item => {
      setDesc(item.data().desc);
    });
  }

  useEffect(()=> {
      fetchDesc();
      console.log(val);
  },[]);

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
              Checking
              {val}
            </p>
          </div>
        </div>
  );
}

export default Aboutme;
