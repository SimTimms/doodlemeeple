import React, { useEffect } from 'react';
import {
  FieldBox,
  Column,
  CardComponent,
  MenuButtonStandard,
  Row,
  DividerMini,
} from '../../components';
import { Typography } from '@material-ui/core';

export default function Webshop({
  webshopIn,
  game,
  setGame,
  newMode,
  setStore,
  index,
}) {
  const [webshop, setWebshop] = React.useState({
    name: '',
    url: '',
    price: '',
  });
  const [editMode, setEditMode] = React.useState(false);
  useEffect(() => {
    setWebshop({ index: index, ...webshopIn });
    newMode && setEditMode(true);
  }, [webshopIn, newMode, index]);

  if (!editMode) {
    return (
      <Column w="100%">
        <Row w="100%" j="space-between">
          <Row w="100%" j="space-between" pr={10}>
            <Typography>{webshop.name}</Typography>
            <Typography>{webshop.price}</Typography>
          </Row>
          <MenuButtonStandard
            icon="edit"
            mr={true}
            onClickEvent={() => setStore({ ...webshop, index: index })}
          />
          <MenuButtonStandard
            icon="delete"
            type="delete"
            onClickEvent={() =>
              setGame({
                ...game,
                webshop: [
                  ...game.webshop.filter(
                    (value, arrIndex) => index !== arrIndex
                  ),
                ],
              })
            }
          />
        </Row>
        <DividerMini />
      </Column>
    );
  }
  return (
    <CardComponent>
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
          title="Price"
          maxLength={10}
          onChangeEvent={(e) => {
            setWebshop({
              ...webshop,
              price: e,
            });
          }}
          replaceMode="loose"
          placeholder="Example: £59.99, 50.00 USD"
          info="How much can someone expect to pay for your game at this online store."
          warning=""
          size="s"
          multiline={false}
        />
        <DividerMini />
        {webshop.index === null ? (
          <MenuButtonStandard
            title="Create"
            onClickEvent={() => {
              setGame({
                ...game,
                webshop: [
                  ...game.webshop,
                  {
                    name: webshop.name,
                    url: webshop.url,
                    price: webshop.price,
                  },
                ],
              });
              setStore(null);
            }}
          />
        ) : (
          <MenuButtonStandard
            title="Save"
            onClickEvent={() => {
              let newArr = [...game.webshop];
              newArr.splice(webshop.index, 1, {
                name: webshop.name,
                url: webshop.url,
                price: webshop.price,
              });
              setGame({
                ...game,
                webshop: newArr,
              });
              setStore(null);
            }}
          />
        )}
      </Column>
    </CardComponent>
  );
}
