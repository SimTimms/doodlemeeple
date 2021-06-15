import React, { useEffect } from 'react';
import { useStyles } from './styles';
import { useQuery } from '@apollo/client';
import { CREATIVES } from '../../data/queries';
import {
  ProfileCard,
  ProfileCardBlank,
  IconButton,
  Divider,
} from '../../components';
//import { PreviewProfile } from '../../layouts/preview/views/previewProfile';

export default function CreativeRosterProfiles({
  favourites,
  history,
  filter,
}) {
  const classes = useStyles();
  const [creativeArray, setCreativeArray] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [noMore, setNoMore] = React.useState(false);
  const [existingFilter, setExistingFilter] = React.useState(false);
  const [fullProfile, setFullProfile] = React.useState(false);
  const [query, { loading }] = useQuery(
    CREATIVES,
    {
      variables: { type: filter, page: page, job: null },
    },
    {
      onCompleted({ getCreatives }) {
        getCreatives.length === 0 && setNoMore(true);
        filter === existingFilter &&
          setCreativeArray([...creativeArray, ...getCreatives]);

        if (filter !== existingFilter) {
          setCreativeArray([...getCreatives]);
          setExistingFilter(filter);
          setNoMore(false);
          setPage(0);
        }
      },
    }
  );
  useEffect(() => {
    query();
  }, [query]);
  function fullProfileToggle(id) {
    id === setFullProfile ? setFullProfile(null) : setFullProfile(id);
  }
  if (loading) return 'Loading...';
  return (
    <div className={classes.cardWrapper}>
      {/*fullProfile && (
        <PreviewProfile
          profileId={fullProfile}
          publicView={true}
          history={history}
          setFullProfile={fullProfileToggle}
        />
      )*/}
      {creativeArray.map((creative, index) => {
        return (
          <ProfileCard
            history={history}
            creative={creative}
            favourite={favourites.indexOf(creative._id) > -1 ? true : false}
            key={`creative_${index}`}
            setFullProfile={fullProfileToggle}
          />
        );
      })}
      <Divider />
      <IconButton
        title={!noMore ? 'More' : 'Done'}
        icon="keyboard_arrow_down"
        onClickEvent={() => (!noMore ? setPage(page + 1) : null)}
      />
    </div>
  );
}
