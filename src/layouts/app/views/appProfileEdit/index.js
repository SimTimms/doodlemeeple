import React from 'react';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { PROFILE } from '../../../../data/queries';
import TabProfile from './tabProfile';
import TabPreferences from './tabPreferences';
import Isolates from './isolates';
import { Column } from '../../../../components';

export default function AppProfileEdit({ history, ...props }) {
  const { isolate } = props;
  const classes = useStyles();
  const [profile, setProfile] = React.useState(null);
  const [sections, setSections] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [tabNbr, setTabNbr] = React.useState(0);

  if (!profile) {
    return (
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
    );
  }
  return (
    <div className={classes.root}>
      {isolate ? (
        <Isolates
          isolate={isolate}
          profile={profile}
          loading={loading}
          setProfile={setProfile}
          sections={sections}
          setSections={setSections}
          history={history}
        />
      ) : (
        <Column w="100%">
          {tabNbr === 0 ? (
            <TabProfile
              profile={profile}
              loading={loading}
              setProfile={setProfile}
              sections={sections}
              setSections={setSections}
              isolate={isolate}
              badges={profile.badges}
            />
          ) : (
            <TabPreferences setProfile={setProfile} profile={profile} />
          )}
        </Column>
      )}
    </div>
  );
}
