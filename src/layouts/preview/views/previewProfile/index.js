import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Card, Typography, Slide, Button } from '@material-ui/core';
import { useStyles } from './styles';
import { LoadIcon } from '../../../../components';
import { Query } from 'react-apollo';
import { PROFILE_PREVIEW, SECTIONS_PREVIEW } from '../../../../data/queries';

export function PreviewProfile({ theme, profileId }) {
  const classes = useStyles();
  const [userProfile, setUserProfile] = React.useState({
    profileBG: null,
    profileBGStyle: [0, 0],
    userName: '',
    userId: '',
    summary: '',
    sections: [],
    profileImg: null,
    profileImgStyle: [0, 0],
  });
  const [sections, setSections] = React.useState([]);

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <Query
          query={PROFILE_PREVIEW}
          variables={{ userId: profileId }}
          onCompleted={(data) => {
            const {
              name,
              summary,
              profileBG,
              id,
              profileBGStyle,
              profileImg,
              profileImgStyle,
            } = data.profilePreview;
            setUserProfile({
              profileBG: profileBG,
              profileBGStyle: profileBGStyle
                ? profileBGStyle.split(':')
                : [0, 0],
              userName: name,
              userId: id,
              summary,
              sections: [],
              profileImg,
              profileImgStyle: profileImgStyle
                ? profileImgStyle.split(':')
                : [0, 0],
            });
          }}
        >
          {({ loading, error, data }) => {
            if (loading) return <LoadIcon />;
            if (error) return <div>Error</div>;
            return <div></div>;
          }}
        </Query>

        <div className={classes.root}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              paddingBottom: 5,
            }}
          >
            <Link
              to={`/app/edit-profile`}
              style={{ maxWidth: 326, width: '100%', lineHeight: 0.6 }}
            >
              <Button
                variant="contained"
                color="primary"
                style={{ width: 60, marginLeft: 10 }}
              >
                <Icon style={{ fontSize: 18, color: '#fff' }}>edit</Icon>
              </Button>
            </Link>
          </div>
          <Card className={classes.card}>
            <div
              style={{ backgroundImage: `url(${userProfile.profileBG})` }}
              className={classes.header}
            ></div>

            <Query
              query={SECTIONS_PREVIEW}
              onCompleted={(data) => {
                setSections(data.getSections);
              }}
              variables={{ userId: profileId }}
              fetchPolicy="network-only"
            >
              {({ loading, error, data }) => {
                if (loading) return <LoadIcon />;
                if (error) return <div>Error</div>;
                return null;
              }}
            </Query>
          </Card>
        </div>
      </div>
    </Slide>
  );
}
