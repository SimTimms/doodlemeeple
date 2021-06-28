import React from 'react';
import { useStyles } from './styles';
import { useQuery } from '@apollo/client';
import { CREATIVES } from '../../../../../data/queries';
import { ProfileCard, IconButton, Divider } from '../../../../../components';

export default function Creatives({
  favourites,
  job,
  removeInviteList,
  updateInviteList,
  inviteList,
  history,
}) {
  const classes = useStyles();
  const [creativeArray, setCreativeArray] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [noMore, setNoMore] = React.useState(false);

  const { loading, error, data } = useQuery(CREATIVES, {
    variables: { type: job.keywords, page: page, job: job._id },
    onCompleted({ getCreatives }) {
      creativeArray.length > 0 && getCreatives.length === 0 && setNoMore(true);
      setCreativeArray([...creativeArray, ...getCreatives]);
    },
  });
  return (
    <div
      style={{
        width: '100%',
        marginTop: 50,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      <div className={classes.creativeWrapper}></div>

      {creativeArray.map((creative, index) => {
        return (
          <ProfileCard
            history={history}
            creative={creative}
            favourite={favourites.indexOf(creative._id) > -1 ? true : false}
            gameId={job.gameId}
            jobId={job._id}
            invite={inviteList.filter((filterItem) => {
              return filterItem._id === creative._id;
            })}
            key={`creative_${index}`}
            updateInviteList={updateInviteList}
            removeInviteList={removeInviteList}
            disabled={inviteList.length >= 5 ? true : false}
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
