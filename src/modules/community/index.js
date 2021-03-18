import React from 'react';
import { Column, IconButton, Row } from '../../components';
import { useStyles } from './styles';
import miniOne from '../../assets/miniOne.jpg';
import { CategoryBox, CategoryBoxMini } from './categoryBox';

export function CreativeCategories({ history }) {
  const classes = useStyles();

  return (
    <Column a="space-between" j="space-between" h={312}>
      <Column a="center" j="center">
        <Row>
          <CategoryBox
            title="Miniature Painters"
            type="mini-painter"
            history={history}
          />
          <CategoryBox
            img={miniOne}
            title="Artists"
            type="artist"
            history={history}
          />
          <CategoryBox
            title="Graphic Artists"
            type="graphic-artist"
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
            img={miniOne}
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
