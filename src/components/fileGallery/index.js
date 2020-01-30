import React from 'react';
import Icon from '@material-ui/core/Icon';
import { useStyles } from './styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export function FileGallery({ items }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {items.map((tile, index) => (
        <Card className={classes.card} variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {tile}
            </Typography>
            <Typography variant="h5" component="h2"></Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Open</Button>
          </CardActions>
        </Card>
      ))}

      <div
        style={{
          height: '100%',
          background: '#ddd',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center ',
          padding: 10,
        }}
      >
        <Icon style={{ fontSize: 50, color: '#fff' }}>add_circle</Icon>
      </div>
    </div>
  );
}
