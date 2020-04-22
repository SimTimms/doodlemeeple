import React from 'react';
import Button from '@material-ui/core/Button';
import { Mutation } from 'react-apollo';
import { UPDATE_GAME } from '../../../../../../data/mutations';
import { readableErrors } from '../../../../../../utils/readableErrors';
import Icon from '@material-ui/core/Icon';

export function UpdateGameButton({
  game,
  disabledValue,
  setDisabledValue,
  toast,
}) {
  const validate = game.name.length < 3 ? false : disabledValue;

  return (
    <Mutation
      mutation={UPDATE_GAME}
      variables={{
        name: game.name,
        img: game.img,
        backgroundImg: game.backgroundImg,
        summary: game.summary,
        location: game.location,
        gallery: game.gallery,
        showreel: game.showreel,
        type: game.type,
      }}
      onCompleted={() => {
        toast();
      }}
    >
      {(SignupMutation) => {
        return (
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <Button
              onClick={() => {
                setDisabledValue(false);
                SignupMutation();
              }}
              variant="contained"
              color="primary"
              style={{ margin: 10 }}
              disabled={!validate}
            >
              <Icon style={{ fontSize: 18, color: '#fff' }}>save</Icon>
            </Button>
          </div>
        );
      }}
    </Mutation>
  );
}
