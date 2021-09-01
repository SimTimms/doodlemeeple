import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { CardComponent } from '../../components';
import Webshop from './webshop';

export default function WebshopParent({ game, setGame }) {
  const classes = useStyles();
  const [store, setStore] = React.useState(null);

  return (
    <CardComponent type="premium" premiumId="Online Stores">
      {game.webshop &&
        game.webshop.map((webshop, index) => (
          <Webshop
            webshopIn={{ ...webshop }}
            setGame={setGame}
            game={game}
            key={`${index}_${Math.random().toString(36)}`}
            setStore={setStore}
            index={index}
          />
        ))}
      {!store ? (
        <Typography
          className={classes.newStore}
          onClick={() =>
            setStore({ index: null, name: '', url: '', price: '' })
          }
        >
          + Add an online store listing
        </Typography>
      ) : (
        <Webshop
          webshopIn={store}
          setGame={setGame}
          game={game}
          newMode={true}
          setStore={setStore}
          index={null}
        />
      )}
    </CardComponent>
  );
}
