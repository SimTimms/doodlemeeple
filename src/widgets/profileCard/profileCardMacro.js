import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';
import { Query } from 'react-apollo';
import { BgImg, ProfileImg } from './components';
import { Row, Column } from '../../components';
import { PROFILE_IMAGES } from './data';
import imageOptimiser from '../../utils/imageOptimiser';

export default function ProfileCardMacro({ creative, setLarge, history }) {
  const classes = useStyles();

  const [previewImage, setPreviewImage] = React.useState(null);
  const [images, setImages] = React.useState([]);

  useEffect(() => {
    setPreviewImage(creative.profileBG);
    setImages([{ img: creative.profileBG }]);
  }, [creative]);

  return (
    <div
      className={clsx({
        [classes.creativeCard]: true,
      })}
    >
      <Row>
        <ProfileImg creative={creative} />
        <Column a="flex-start">
          <a
            href={`/user-profile/${creative._id}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: '#222', width: '100%' }}
          >
            <Typography
              style={{ fontWeight: 'bold', textDecoration: 'underline' }}
            >
              {creative.name}
            </Typography>
          </a>
          <Typography className={classes.types}>
            {creative.sections.map(
              (section, index) => `${index > 0 ? ', ' : ''} ${section.type}`
            )}
          </Typography>
          {creative.publicEmail && (
            <a
              href={`mailto:${creative.publicEmail}`}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.email}
            >
              <Typography className={classes.email}>
                {`${creative.publicEmail}`}{' '}
              </Typography>
            </a>
          )}
        </Column>
      </Row>
    </div>
  );
}
