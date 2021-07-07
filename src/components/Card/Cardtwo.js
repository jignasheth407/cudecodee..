import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cardtwo.css';
import {AiOutlineInfoCircle} from 'react-icons/ai'

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
    <Card className="last_card">
      <CardContent>
          <p className="info_icon mb-0">Project Key <AiOutlineInfoCircle /></p>
          <Paper className="key_content">
            <p className="key mb-0 mt-2">KEY3456THKEY3456TH</p>
            <button className="btn key_btn">Copy Key</button>
          </Paper>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
     <p className="bhavna"><AiOutlineInfoCircle /> Copy this Key and add it to your SDK Config window in your Unity Project</p>
     </>
  );
}
