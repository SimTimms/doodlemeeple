import React from 'react';
import KeywordButton from './KeywordButton';
import { Row } from '../../../../components';
import { t40k, tSigmar } from '../../../../assets/tags';
export default function KeywordWrapper({
  setProfile,
  profile,
  SignupMutation,
}) {
  const buttonArr = [
    { title: 'Fantasy' },
    { title: 'Sci-Fi' },
    { title: '40k' },
    { title: 'Age Of Sigmar' },
    { title: 'Digital' },
    { title: 'Card Art' },
    { title: 'Card Games' },
    { title: 'Board Games' },
    { title: 'Nature' },
    { title: 'Audio' },
    { title: 'Dark' },
    { title: 'Cheerful' },
    { title: 'Box Art' },
    { title: 'Colourful' },
    { title: 'Monotone' },
    { title: 'Serious' },
    { title: 'Zombie' },
    { title: 'Party' },
    { title: 'Cartoon' },
    { title: 'Deckbuilder' },
    { title: 'Euro' },
    { title: 'Horror' },
    { title: 'D&D' },
    { title: 'Table Top Simulator' },
  ];
  return (
    <Row wrap="wrap">
      {buttonArr.map((item, index) => {
        return (
          <KeywordButton
            title={item.title}
            setProfile={setProfile}
            profile={profile}
            SignupMutation={SignupMutation}
            icon={item.icon ? item.icon : null}
            key={`keyword_${index}`}
          />
        );
      })}
    </Row>
  );
}
