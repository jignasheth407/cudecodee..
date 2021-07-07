import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './card.css';
import {AiOutlinePlus} from 'react-icons/ai'
import {TiTick} from 'react-icons/ti'
import {IoIosArrowForward} from 'react-icons/io'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
      <>
      
      <p className="first_pera">Dashboard <IoIosArrowForward /> <span>Education Project</span></p>
      <div className="d-flex">
        <h2 className="first_heading">Education Project</h2>
        <button className="btn details_btn">View Details</button>
      </div>
    <Card className="main_container">
      <CardContent>
          <h4 className="second_heading">Apps</h4>
      <Grid container spacing={3}>
       
        <Grid item lg={3}>
          <Paper className="first_card">
            <AiOutlinePlus />
            <h4>Create New App</h4>
          </Paper>
        </Grid>
        <Grid item lg={3}>
          <Paper className="second_card">
            <div className="d-flex">
              <img src="https://dummyimage.com/34x34/000/fff" />
              <h5>App name</h5>
            </div>
            <p className="text-left">Created Date: 24 Jan 2020</p>
            <div className="d-flex">
              <div className="published_text"><TiTick className="tick_icon"/><span>Published</span></div>
              <div className="ml-auto"><button className="btn learning_btn">Learning</button></div>
            </div>
          </Paper>
        </Grid>
        <Grid item lg={3}>
          <Paper className="third_card">
          <div className="d-flex">
              <img src="https://dummyimage.com/34x34/000/fff" />
              <h5>App name</h5>
            </div>
            <p className="text-left">Created Date: 24 Jan 2020</p>
            <div className="d-flex">
              <div className="draft_text"><span>Draft</span></div>
              <div className="ml-auto"><button className="btn gaming_btn">Gaming</button></div>
            </div>
          </Paper>
        </Grid>
        
      </Grid>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
    </>
  );
}
