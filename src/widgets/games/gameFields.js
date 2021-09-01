import React from 'react';
import { useStyles } from './styles';
import { FieldBox, Column, Uploader } from '../../components';

export default function GameFields({ game, setGame }) {
  const classes = useStyles();

  return (
    <Column a="center" j="center">
      <div
        className={classes.image}
        style={{
          backgroundImage: `url(${game.featuredImage})`,
        }}
      >
        <Uploader
          cbImage={(url) => {
            setGame({
              ...game,
              featuredImage: url,
            });
          }}
          styleOverride={null}
          className={null}
          cbDelete={null}
          hasFile={false}
          size="2MB PNG JPG GIF"
          imageCategory="game"
        />
      </div>
      <FieldBox
        value={game.name}
        title="Project Name"
        maxLength={86}
        minLength={1}
        onChangeEvent={(e) => {
          setGame({
            ...game,
            name: e,
          });
        }}
        replaceMode="loose"
        placeholder="Example: Mouse Stompa"
        info="What's this project or game called?"
        warning=""
        size="s"
        multiline={false}
      />
      <FieldBox
        value={game.summary}
        title="Summary"
        maxLength={512}
        onChangeEvent={(e) => {
          setGame({
            ...game,
            summary: e,
          });
        }}
        replaceMode="loose"
        placeholder="Example: Mouse Stompa"
        info="What's this project or game called?"
        warning=""
        size="s"
        multiline={true}
      />
      <FieldBox
        value={game.url}
        title="URL"
        maxLength={512}
        onChangeEvent={(e) => {
          setGame({
            ...game,
            url: e,
          });
        }}
        replaceMode="loose"
        placeholder="Example: Mouse Stompa"
        info="What's this project or game called?"
        warning=""
        size="s"
        multiline={false}
      />

      <FieldBox
        value={game.showreel}
        title="showreel"
        maxLength={512}
        onChangeEvent={(e) => {
          setGame({
            ...game,
            showreel: e,
          });
        }}
        replaceMode="loose"
        placeholder="Example: Mouse Stompa"
        info="What's this project or game called?"
        warning=""
        size="s"
        multiline={false}
      />
    </Column>
  );
}
