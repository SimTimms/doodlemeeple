import React, { useEffect } from 'react';
import { Column, IconButton, Row } from '../../components';
import miniOne from '../../assets/miniOne.jpg';
import { CategoryBox, CategoryBoxMini } from './categoryBox';

export function CreativeCategories({ history }) {
  return (
    <Column a="space-between" j="space-between" h={300}>
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
          <CategoryBoxMini type="voice-actor" title="Voice" history={history} />
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
            type="games-developer"
            title="Developer"
            history={history}
          />
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
        <IconButton
          color="text-white-mini"
          disabled={false}
          onClickEvent={() => {
            history.push('/app/creative-roster');
          }}
          icon="chevron_right"
          title="All Categories"
          styleOverride={null}
          type="button"
          iconPos="right"
        />
      </Column>
    </Column>
  );
}
