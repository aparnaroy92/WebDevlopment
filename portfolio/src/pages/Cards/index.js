import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
/* Image imports*/
import image from '../../assets/rentalbanc.png';
//Firestore import
import firebaseDB from '../../firestore';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export function Cards() {
  const classes = useStyles();
  
  /* Try 2
  const snapshot = await db.collection('experience').doc('csueb').get();
  snapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
  });
  */
/* Try 1
  db.collection('experience').doc('csueb').get()
  .then(doc => {
    if(!doc.exists){
      console.log('No such document available!');
    }
    else{
      const data = doc.data();
      console.log(data); 
    }
    
  })
  .catch(err=>{
    console.error('Error getting the document!', err);
    process.exit();
  })
*/
  const [val, setjd] = useState([]);
  const firestore = firebaseDB.firestore();
  const fetchjd = () => {
    const response = firestore.collection('experience').doc('csueb');
    return response.get().then(item => {
      setjd(item.data().jobDesc);
    });
  }

  useEffect(()=> {
      fetchjd();
      console.log(val);
  },[]);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Brand Image"
          height="60"
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Rentalbanc
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {val}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          WHAT I DID?
        </Button>
      </CardActions>
    </Card>
  );
}
export default Cards;