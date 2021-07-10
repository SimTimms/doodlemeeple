import React from 'react';
import { Column, IconButton, Row } from '../../../components';
import { useStyles } from './styles';
import { CategoryBox, CategoryBoxMini } from './categoryBox';

export function CreativeCategories({ history }) {
  const classes = useStyles();

  return (
    <Column a="space-between" j="space-between">
      <Column a="center" j="center">
        <Row>
          <CategoryBoxMini type="artist" title="Artist" history={history} />
          <CategoryBoxMini
            type="mini-painter"
            title="Miniature Painters"
            history={history}
          />
          <CategoryBoxMini
            type="graphic-artist"
            title="Graphic Artists"
            history={history}
          />
        </Row>
        <Row>
          <CategoryBoxMini type="reviewer" title="Reviewer" history={history} />
          <CategoryBoxMini
            type="video-editor"
            title="Video"
            history={history}
          />
          <CategoryBoxMini
            type="marketing"
            title="Marketing"
            history={history}
          />
        </Row>
        <Row>
          <CategoryBoxMini
            type="proof-reader"
            title="Proof Reader"
            history={history}
          />
          <CategoryBoxMini
            type="translator"
            title="Translator"
            history={history}
          />
          <CategoryBoxMini
            type="play-tester"
            title="Play Tester"
            history={history}
          />
        </Row>
      </Column>

      <Column>
        <div className={classes.panelButton}>
          <IconButton
            color="text-white-mini"
            disabled={false}
            onClickEvent={() => {
              history.push('/app/creative-roster');
            }}
            icon="chevron_right"
            title="All Categories"
            styleOverride={{
              width: '100%',
              marginLeft: 0,
              marginRight: 0,
              borderRadius: 0,
            }}
            type="button"
            iconPos="right"
          />
        </div>
      </Column>
    </Column>
  );
}
