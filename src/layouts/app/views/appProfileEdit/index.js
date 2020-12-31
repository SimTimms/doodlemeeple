import React from 'react';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { PROFILE } from '../../../../data/queries';
import ProfileMenu from './profileMenu';
import TabProfile from './tabProfile';
import TabPreferences from './tabPreferences';
import { initialState } from './initialState';

export default function AppProfileEdit({ theme, history }) {
  const classes = useStyles();
  const [profile, setProfile] = React.useState(initialState);
  const [sections, setSections] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [changes, setChanges] = React.useState(0);
  const [tabNbr, setTabNbr] = React.useState(0);

  return (
    <div className={classes.root}>
      <ProfileMenu
        tabNbr={tabNbr}
        setTabNbr={setTabNbr}
        history={history}
        profile={profile}
        changes={changes}
      />
      {tabNbr === 0 ? (
        <TabProfile
          profile={profile}
          loading={loading}
          setProfile={setProfile}
          sections={sections}
          setSections={setSections}
        />
      ) : (
        <TabPreferences setProfile={setProfile} profile={profile} />
      )}
      <Query
        query={PROFILE}
        fetchPolicy="network-only"
        onCompleted={(data) => {
          setProfile({ ...data.profile });
          setLoading(false);
          setSections(data.profile.sections);
        }}
      >
        {() => {
          return null;
        }}
      </Query>
    </div>
  );
}
