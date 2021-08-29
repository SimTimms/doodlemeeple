import React, { useEffect } from 'react';
import {
  FieldBox,
  Column,
  CardComponent,
  MenuButtonStandard,
} from '../../components';
import { Typography } from '@material-ui/core';

export default function Webshop({ webshopIn, game, setGame, newMode }) {
  const [webshop, setWebshop] = React.useState({
    name: '',
    url: '',
    price: '',
  });
  const [editMode, setEditMode] = React.useState(false);

  useEffect(() => {
    setWebshop(webshopIn);
    newMode && setEditMode(true);
  }, [webshopIn, newMode]);

  if (!editMode) {
    return (
      <CardComponent type="premium">
        <Typography>asd</Typography>
      </CardComponent>
    );
  }
  return (
    <CardComponent type="premium" premiumId="Where to buy">
      <Column a="center" j="center">
        <FieldBox
          value={webshop.name}
          title="Online Store Name"
          maxLength={86}
          onChangeEvent={(e) => {
            setWebshop({
              ...webshop,
              name: e,
            });
          }}
          replaceMode="loose"
          placeholder="Example: Amazon"
          info="What's this name of the online store where this game is sold?"
          warning=""
          size="s"
          multiline={false}
        />
        <FieldBox
          value={webshop.url}
          title="URL"
          maxLength={512}
          onChangeEvent={(e) => {
            setWebshop({
              ...webshop,
              url: e,
            });
          }}
          replaceMode="loose"
          placeholder="Example: https://amazon.co.uk/my_game"
          info="Provide a link to your game on the online shop."
          warning=""
          size="s"
          multiline={false}
        />
        <FieldBox
          value={webshop.price}
          title="Price (USD)"
          maxLength={512}
          onChangeEvent={(e) => {
            setWebshop({
              ...webshop,
              price: e,
            });
          }}
          replaceMode="loose"
          placeholder="Example: 59.99"
          info="How much can someone expect to pay for your game at this online store."
          warning=""
          size="s"
          multiline={false}
        />
        <MenuButtonStandard
          title="Create"
          onClickEvent={() =>
            setGame({ ...game, webshop: [...game.webshop, webshop] })
          }
        />
      </Column>
    </CardComponent>
  );
}
