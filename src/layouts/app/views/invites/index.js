import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import { useStyles } from './styles';
import tim from 'src/assets/tim.jpg';
import { InviteHeader } from './components';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export function Invites() {
  const classes = useStyles();
  const projectId = 'ID123';
  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div>
        <Typography variant="h6" color="textPrimary">
          Invites
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <Card className={classes.card}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              width: '100%',
              padding: 10,
            }}
          >
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              width="140"
              image={tim}
              title="Contemplative Reptile"
              style={{
                borderRadius: '50%',
                border: '10px solid #ddd',
                width: 140,
              }}
            />
            <CardContent>
              <InviteHeader title="Tim Simms" project="Awesome Board Game" />
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
              <Divider style={{ margin: 10 }} />
              <Link
                to={`/app/project/${projectId}`}
                style={{ maxWidth: 326, width: '100%', lineHeight: 0.6 }}
              >
                <Button variant="contained" color="primary">
                  View Project
                </Button>
              </Link>
            </CardContent>
          </div>
        </Card>
      </div>
    </Slide>
  );
}
