import React from 'react';
import chaos from '../../assets/agressor.png';
import chaosSecondary from '../../assets/agressor-trim.png';
import ropeImg from '../../assets/agressor-rope.png';
import aquilaImg from '../../assets/agressor-aquila.png';
import penantImg from '../../assets/agressor-penant.png';
import jewelImg from '../../assets/agressor-jewel.png';
import skullImg from '../../assets/agressor-skulls.png';
import gunbeltsImg from '../../assets/agressor-gunbelts.png';
import helmetImg from '../../assets/agressor-helmet.png';
import eyesImg from '../../assets/agressor-eyes.png';
import missilesImg from '../../assets/agressor-missiles.png';
import grassImg from '../../assets/agressor-grass.png';
import baseImg from '../../assets/agressor-base.png';
import paintImg from '../../assets/paint.png';
import paintGreyImg from '../../assets/paintgrey.png';
import aquilaIcon from '../../assets/aquilaicon.jpg';
import ropeIcon from '../../assets/ropeicon.jpg';
import pendantIcon from '../../assets/pendanticon.jpg';
import skullsIcon from '../../assets/skullsicon.jpg';
import primayIcon from '../../assets/primaryicon.jpg';
import helmetIcon from '../../assets/helmeticon.jpg';
import trimIcon from '../../assets/trimicon.jpg';
import missilesIcon from '../../assets/missilesicon.jpg';
import jewelIcon from '../../assets/jewelicon.jpg';
import eyesIcon from '../../assets/eyesicon.jpg';
import gunbeltIcon from '../../assets/gunbelticon.jpg';
import grassIcon from '../../assets/grassicon.jpg';
import baseIcon from '../../assets/baseicon.jpg';

const colors = {
  blue: 'hue-rotate(40deg) brightness(50%) saturate(200%)',
  ultramarine: 'hue-rotate(45deg) saturate(150%) brightness(70%)',
  teal: 'hue-rotate(0deg) saturate(100%) brightness(100%)',
  purple: 'hue-rotate(80deg)',
  pink: 'hue-rotate(120deg)',
  red: 'hue-rotate(160deg)',
  darkRed: 'hue-rotate(180deg) saturate(200%) brightness(70%)',
  orange: 'hue-rotate(200deg)',
  yellow: 'hue-rotate(240deg)',
  scorpion: 'hue-rotate(280deg)',
  green: 'hue-rotate(320deg)',
  silver: 'hue-rotate(0deg) saturate(0%) brightness(120%)',
  white: 'hue-rotate(0deg) saturate(0%) brightness(200%)',
  corvus: 'hue-rotate(300deg) saturate(0%) brightness(30%)',
  black: 'hue-rotate(300deg) saturate(0%) brightness(20%)',
  xv88: 'hue-rotate(36.8deg) saturate(100%) brightness(44.7%)',
};

export function Chaos() {
  const [primary, setPrimary] = React.useState(
    'hue-rotate(40deg) brightness(50%) saturate(200%)',
  );
  const [trim, setTrim] = React.useState(
    'hue-rotate(40deg) brightness(50%) saturate(200%)',
  );
  const [rope, setRope] = React.useState(
    'hue-rotate(40deg) brightness(50%) saturate(200%)',
  );
  const [aquila, setAquila] = React.useState(
    'hue-rotate(40deg) brightness(50%) saturate(200%)',
  );
  const [penant, setPenant] = React.useState(
    'hue-rotate(40deg) brightness(50%) saturate(200%)',
  );
  const [jewel, setJewel] = React.useState(
    'hue-rotate(40deg) brightness(50%) saturate(200%)',
  );
  const [skull, setSkull] = React.useState(
    'hue-rotate(40deg) brightness(50%) saturate(200%)',
  );
  const [gunbelts, setGunbelts] = React.useState(
    'hue-rotate(40deg) brightness(50%) saturate(200%)',
  );
  const [helmet, setHelmet] = React.useState(
    'hue-rotate(40deg) brightness(50%) saturate(200%)',
  );
  const [eyes, setEyes] = React.useState(
    'hue-rotate(40deg) brightness(50%) saturate(200%)',
  );
  const [missiles, setMissiles] = React.useState(
    'hue-rotate(40deg) brightness(50%) saturate(200%)',
  );
  const [base, setBase] = React.useState(
    'hue-rotate(40deg) brightness(50%) saturate(200%)',
  );
  const [grass, setGrass] = React.useState(
    'hue-rotate(40deg) brightness(50%) saturate(200%)',
  );
  const [part, setPart] = React.useState(0);

  function setColor(color) {
    switch (part) {
      case 1:
        setTrim(color);
        break;
      case 2:
        setAquila(color);
        break;
      case 3:
        setRope(color);
        break;
      case 4:
        setPenant(color);
        break;
      case 5:
        setJewel(color);
        break;
      case 6:
        setSkull(color);
        break;
      case 7:
        setGunbelts(color);
        break;
      case 8:
        setHelmet(color);
        break;
      case 9:
        setEyes(color);
        break;
      case 10:
        setMissiles(color);
        break;
      case 11:
        setBase(color);
        break;
      case 12:
        setGrass(color);
        break;
      default:
        setPrimary(color);
        break;
    }
  }
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: '#fff',
        position: 'fixed',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#fff',
          display: 'flex',
        }}
      >
        <div
          style={{
            height: '100%',
            background: '#222',
            display: 'flex',
            flexDirection: 'column',

            overflow: 'auto',
          }}
        >
          <img
            src={primayIcon}
            style={{ width: 80, margin: 2 }}
            onClick={() => setPart(0)}
          />
          <img
            src={trimIcon}
            style={{ width: 80, margin: 2 }}
            onClick={() => setPart(1)}
          />
          <img
            src={aquilaIcon}
            style={{ width: 80, margin: 2 }}
            onClick={() => setPart(2)}
          />
          <img
            src={ropeIcon}
            style={{ width: 80, margin: 2 }}
            onClick={() => setPart(3)}
          />
          <img
            src={pendantIcon}
            style={{ width: 80, margin: 2 }}
            onClick={() => setPart(4)}
          />
          <img
            src={jewelIcon}
            style={{ width: 80, margin: 2 }}
            onClick={() => setPart(5)}
          />
          <img
            src={skullsIcon}
            style={{ width: 80, margin: 2 }}
            onClick={() => setPart(6)}
          />
          <img
            src={gunbeltIcon}
            style={{ width: 80, margin: 2 }}
            onClick={() => setPart(7)}
          />
          <img
            src={helmetIcon}
            style={{ width: 80, margin: 2 }}
            onClick={() => setPart(8)}
          />
          <img
            src={eyesIcon}
            style={{ width: 80, margin: 2 }}
            onClick={() => setPart(9)}
          />
          <img
            src={missilesIcon}
            style={{ width: 80, margin: 2 }}
            onClick={() => setPart(10)}
          />
          <img
            src={baseIcon}
            style={{ width: 80, margin: 2 }}
            onClick={() => setPart(11)}
          />
          <img
            src={grassIcon}
            style={{ width: 80, margin: 2 }}
            onClick={() => setPart(12)}
          />
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <img
              src={paintGreyImg}
              style={{ filter: colors.xv88, width: 40 }}
              onClick={() => setColor(colors.xv88)}
            />
            <img
              src={paintImg}
              style={{ filter: colors.teal, width: 40 }}
              onClick={() => setColor(colors.teal)}
            />
            <img
              src={paintImg}
              style={{ filter: colors.blue, width: 40 }}
              onClick={() => setColor(colors.blue)}
            />
            <img
              src={paintImg}
              style={{ filter: colors.ultramarine, width: 40 }}
              onClick={() => setColor(colors.ultramarine)}
            />
            <img
              src={paintImg}
              style={{ filter: colors.purple, width: 40 }}
              onClick={() => setColor(colors.purple)}
            />
            <img
              src={paintImg}
              style={{ filter: colors.pink, width: 40 }}
              onClick={() => setColor(colors.pink)}
            />
            <img
              src={paintImg}
              style={{ filter: colors.red, width: 40 }}
              onClick={() => setColor(colors.red)}
            />
            <img
              src={paintImg}
              style={{ filter: colors.darkRed, width: 40 }}
              onClick={() => setColor(colors.darkRed)}
            />
            <img
              src={paintImg}
              style={{ filter: colors.orange, width: 40 }}
              onClick={() => setColor(colors.orange)}
            />
            <img
              src={paintImg}
              style={{ filter: colors.yellow, width: 40 }}
              onClick={() => setColor(colors.yellow)}
            />
            <img
              src={paintImg}
              style={{ filter: colors.scorpion, width: 40 }}
              onClick={() => setColor(colors.scorpion)}
            />
            <img
              src={paintImg}
              style={{ filter: colors.green, width: 40 }}
              onClick={() => setColor(colors.green)}
            />
            <img
              src={paintImg}
              style={{ filter: colors.silver, width: 40 }}
              onClick={() => setColor(colors.silver)}
            />
            <img
              src={paintImg}
              style={{ filter: colors.white, width: 40 }}
              onClick={() => setColor(colors.white)}
            />
            <img
              src={paintImg}
              style={{ filter: colors.corvus, width: 40 }}
              onClick={() => setColor(colors.corvus)}
            />
            <img
              src={paintImg}
              style={{ filter: colors.black, width: 40 }}
              onClick={() => setColor(colors.black)}
            />
          </div>

          <div
            style={{
              width: '100%',
              height: '100%',
              background: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={chaos}
              style={{ maxWidth: 200, filter: primary, position: 'absolute' }}
            />
            <img
              src={chaosSecondary}
              style={{ maxWidth: 200, filter: trim, position: 'absolute' }}
            />
            <img
              src={aquilaImg}
              style={{ maxWidth: 200, filter: aquila, position: 'absolute' }}
            />
            <img
              src={ropeImg}
              style={{ maxWidth: 200, filter: rope, position: 'absolute' }}
            />
            <img
              src={penantImg}
              style={{ maxWidth: 200, filter: penant, position: 'absolute' }}
            />
            <img
              src={jewelImg}
              style={{ maxWidth: 200, filter: jewel, position: 'absolute' }}
            />
            <img
              src={helmetImg}
              style={{ maxWidth: 200, filter: helmet, position: 'absolute' }}
            />
            <img
              src={eyesImg}
              style={{ maxWidth: 200, filter: eyes, position: 'absolute' }}
            />
            <img
              src={skullImg}
              style={{ maxWidth: 200, filter: skull, position: 'absolute' }}
            />
            <img
              src={missilesImg}
              style={{ maxWidth: 200, filter: missiles, position: 'absolute' }}
            />
            <img
              src={gunbeltsImg}
              style={{ maxWidth: 200, filter: gunbelts, position: 'absolute' }}
            />
            <img
              src={baseImg}
              style={{ maxWidth: 200, filter: base, position: 'absolute' }}
            />
            <img
              src={grassImg}
              style={{ maxWidth: 200, filter: grass, position: 'absolute' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
