import React, { useRef, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import { useStyles } from './styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { IconButton } from '../../../../../../components';
import clsx from 'clsx';
import logo from '../../../../../../assets/logo.svg';
import animalsFG from '../../../../../../assets/animals_fg.png';
import animalsBG from '../../../../../../assets/animals_bg.png';
import dwarfFG from '../../../../../../assets/dwarf_fg.png';
import dwarfBG from '../../../../../../assets/dwarf_bg.png';
import soldierFG from '../../../../../../assets/soldier_fg.png';
import soldierBG from '../../../../../../assets/soldier_bg.png';
import dmBack from '../../../../../../assets/dm_back.jpg';

export function Featured({ posts, history }) {
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:800px)');
  const [mouseX, setMouseX] = React.useState(0);
  const [mouseY, setMouseY] = React.useState(0);
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });
  const myRef = useRef(null);

  const getDimensions = () => {
    return {
      width: myRef.current.offsetWidth,
      height: myRef.current.offsetHeight,
    };
  };

  useEffect(() => {
    const handleResize = () => {
      setDimensions(getDimensions());
    };

    if (myRef.current) {
      setDimensions(getDimensions());
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [myRef]);

  function handleMouseEnter(e) {
    setMouseX(-(e.clientX - dimensions.width / 2) / 10);
    setMouseY(-(e.clientY - dimensions.height / 2) / 10);
  }

  function handleMouseMove(e) {
    setMouseX(-(e.clientX - dimensions.width / 2) / 10);
    setMouseY(-(e.clientY - dimensions.height / 2) / 10);
  }

  function handleMouseLeave(e) {
    setMouseX(-(e.clientX - dimensions.width / 2) / 10);
    setMouseY(-(e.clientY - dimensions.height / 2) / 10);
  }

  return (
    <div
      className={clsx({
        [classes.messageWrapper]: !mobile,
        [classes.messageWrapperMobile]: mobile,
      })}
    >
      {posts.map((post, index) => {
        const media = post._embedded['wp:featuredmedia']
          ? post._embedded['wp:featuredmedia']['0'].source_url
          : null;

        return (
          <div className={classes.card} key={`conversation_${index}`}>
            <div
              className={classes.postImageWrapper}
              onMouseEnter={(e) => handleMouseEnter(e)}
              onMouseMove={(e) => handleMouseMove(e)}
              onMouseLeave={(e) => handleMouseLeave(e)}
            >
              <div
                className={classes.postImage}
                style={{
                  backgroundImage: `url(${dmBack})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  opacity: 0.2,
                }}
              ></div>
              <div className={classes.rowWrapper}>
                <div className={classes.postHeader}>
                  <img src={logo} style={{ maxWidth: 400, marginTop: 30 }} />

                  <Typography
                    style={{
                      color: 'rgba(0,0,0,0.4)',
                      marginTop: 0,
                      textAlign: 'center',
                      paddingBottom: 30,
                    }}
                    component="h6"
                    variant="h6"
                  >
                    Professional Creative Talent
                  </Typography>
                </div>
              </div>
              <div
                ref={myRef}
                className={classes.postImage}
                style={{
                  backgroundImage: `url(${animalsBG})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'bottom left',
                  width: 400,
                  opacity: 0.2,
                  marginLeft: mouseX / 10,
                  marginTop: mouseY / 10,
                  left: 0,
                }}
              ></div>
              <div
                className={classes.postImage}
                style={{
                  backgroundImage: `url(${animalsFG})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'bottom left',
                  width: 400,
                  marginLeft: -mouseX / 10,
                  marginTop: -mouseY / 10,
                  left: 0,
                }}
              ></div>
              <div
                ref={myRef}
                className={classes.postImage}
                style={{
                  backgroundImage: `url(${dwarfBG})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'bottom right',
                  opacity: 0.2,
                  marginRight: mouseX / 10,
                  marginTop: 40 + mouseY / 10,
                  width: 200,
                  right: 0,
                }}
              ></div>
              <div
                className={classes.postImage}
                style={{
                  backgroundImage: `url(${dwarfFG})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'bottom right',
                  marginRight: -mouseX / 10,
                  marginTop: 40 + -(mouseY + 40) / 10,
                  width: 200,
                  right: 0,
                }}
              ></div>
              <div
                ref={myRef}
                className={classes.postImage}
                style={{
                  backgroundImage: `url(${soldierBG})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'bottom right',
                  opacity: 0.2,
                  marginRight: 60 + mouseX / 5,
                  marginTop: 90 + mouseY / 5,
                  width: 500,
                  right: 0,
                }}
              ></div>
              <div
                className={classes.postImage}
                style={{
                  backgroundImage: `url(${soldierFG})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'bottom right',
                  marginRight: 50 + -(mouseX / 20),
                  marginTop: 40 + -(mouseY + 40) / 20,
                  width: 500,
                  right: 0,
                }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
