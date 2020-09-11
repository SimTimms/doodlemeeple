import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { useStyles } from './styles';
import clsx from 'clsx';
import { ArtistCard } from './ArtistCard';
import { Divider, Column, Row, HeaderTwo, MenuButtonShortcut } from '../../';

function AddSection({ setSections, sections }) {
  const [display, setDisplay] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const classes = useStyles();

  return (
    <div>
      <CardContent
        className={clsx({
          [classes.root]: true,
          [classes.hide]: display,
        })}
        onClick={() => (display ? setDisplay(false) : setDisplay(true))}
      >
        <Icon style={{ fontSize: 18, color: '#fff' }}>add_circle</Icon>
        <Typography
          variant="body1"
          component="p"
          style={{ fontSize: 16, color: '#fff', marginLeft: 10 }}
        >
          {`Add a Section (${3 - sections.length})`}
        </Typography>
      </CardContent>

      <div
        className={clsx({
          [classes.skillWrapper]: true,
          [classes.skillWrapperOpen]: display,
        })}
      >
        <Divider />
        <Column>
          <Row j="space-between">
            <MenuButtonShortcut
              text={{
                name: 'Show All',
                color: '#222',
                icon: 'chevron_right',
                count: 0,
              }}
              onClickEvent={() => {
                setPage(0);
              }}
              active={page === 0}
            />
            <MenuButtonShortcut
              text={{
                name: 'Artist',
                color: '#222',
                icon: 'chevron_right',
                count: 0,
              }}
              onClickEvent={() => {
                setPage(1);
              }}
              active={page === 1}
            />
            <MenuButtonShortcut
              text={{
                name: 'Editor',
                color: '#222',
                icon: 'chevron_right',
                count: 0,
              }}
              onClickEvent={() => {
                setPage(2);
              }}
              active={page === 2}
            />
            <MenuButtonShortcut
              text={{
                name: 'Development',
                color: '#222',
                icon: 'chevron_right',
                count: 0,
              }}
              onClickEvent={() => {
                setPage(3);
              }}
              active={page === 3}
            />
            <MenuButtonShortcut
              text={{
                name: 'Marketing',
                color: '#222',
                icon: 'chevron_right',
                count: 0,
              }}
              onClickEvent={() => {
                setPage(4);
              }}
              active={page === 4}
            />
          </Row>
          {(page === 0 || page === 1) && (
            <Column>
              <HeaderTwo str="Artists" />
              <Divider />
              <ArtistCard
                setDisplay={setDisplay}
                sections={sections}
                setSections={setSections}
                type="artist"
              />
              <ArtistCard
                setDisplay={setDisplay}
                sections={sections}
                setSections={setSections}
                type="3d-artist"
              />
              <ArtistCard
                setDisplay={setDisplay}
                sections={sections}
                setSections={setSections}
                type="graphic-artist"
              />
              <ArtistCard
                setDisplay={setDisplay}
                sections={sections}
                setSections={setSections}
                type="voice-actor"
              />
            </Column>
          )}
          {(page === 0 || page === 2) && (
            <Column>
              <HeaderTwo str="Editors" />
              <Divider />
              <ArtistCard
                setDisplay={setDisplay}
                sections={sections}
                setSections={setSections}
                type="rulebook-editor"
              />
              <ArtistCard
                setDisplay={setDisplay}
                sections={sections}
                setSections={setSections}
                type="proof-reader"
              />
              <ArtistCard
                setDisplay={setDisplay}
                sections={sections}
                setSections={setSections}
                type="translator"
              />
              <ArtistCard
                setDisplay={setDisplay}
                sections={sections}
                setSections={setSections}
                type="video-editor"
              />
            </Column>
          )}
          {(page === 0 || page === 3) && (
            <Column>
              <HeaderTwo str="Development" />
              <Divider />
              <ArtistCard
                setDisplay={setDisplay}
                sections={sections}
                setSections={setSections}
                type="games-developer"
              />{' '}
              <ArtistCard
                setDisplay={setDisplay}
                sections={sections}
                setSections={setSections}
                type="world-builder"
              />
              <ArtistCard
                setDisplay={setDisplay}
                sections={sections}
                setSections={setSections}
                type="creator"
              />
              <ArtistCard
                setDisplay={setDisplay}
                sections={sections}
                setSections={setSections}
                type="play-tester"
              />
            </Column>
          )}
          {(page === 0 || page === 4) && (
            <Column>
              <HeaderTwo str="Marketing" />
              <Divider />
              <ArtistCard
                setDisplay={setDisplay}
                sections={sections}
                setSections={setSections}
                type="marketing"
              />
              <ArtistCard
                setDisplay={setDisplay}
                sections={sections}
                setSections={setSections}
                type="reviewer"
              />
              <ArtistCard
                setDisplay={setDisplay}
                sections={sections}
                setSections={setSections}
                type="social"
              />
            </Column>
          )}
        </Column>
      </div>
      <CardContent
        className={clsx({
          [classes.cancel]: true,
          [classes.hide]: !display,
        })}
        onClick={() => {
          setDisplay(false);
        }}
      >
        <Icon style={{ fontSize: 18, color: '#aaa' }}>keyboard_arrow_up</Icon>
      </CardContent>
    </div>
  );
}

export default AddSection;
