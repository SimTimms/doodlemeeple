import React from 'react';
import Icon from '@material-ui/core/Icon';
import { useStyles } from './styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function FileGallery({ items, files, setFiles, edit }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {items.map((tile, index) => (
        <Card className={classes.card} variant="outlined" key={`card_${index}`}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {tile}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Open</Button>
          </CardActions>
        </Card>
      ))}

      {edit && (
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
          <Icon
            style={{ fontSize: 50, color: '#fff' }}
            onClick={() => {
              const newArr = [...files, 'New.txt'];
              setFiles(newArr);
            }}
          >
            add_circle
          </Icon>
        </div>
      )}
    </div>
  );
}

export default FileGallery;
