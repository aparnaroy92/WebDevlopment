import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ReactTypingEffect from "react-typing-effect";


/* Image imports*/
import img from './../../assets/icon.jpg'
import image from './../../assets/aparna.jpg';

import {
  Link,
} from "react-router-dom";


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

function Home() {
  const classes = useStyles();
  return (
    
    <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">AR</a>
              <div className={classes.root}>
                <Avatar alt="Remy Sharp" src={img} className={classes.large} />
              </div>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to='/'>Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/Aboutme'>About Me</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/Experience'>Experience</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/Projects'>Projects</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/Contact'>Contact</Link>
                  </li>
                </ul>
              </div>
        </nav>
    </div>
  );
}

export default Home;
