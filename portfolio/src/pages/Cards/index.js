import React from 'react';
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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export function Cards() {
  const classes = useStyles();

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
            A marketplace that lists rental properties.
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