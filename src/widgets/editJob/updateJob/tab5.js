import React from 'react';
import { Query } from 'react-apollo';
import { FAVOURITES } from '../../../data/queries';
import { CreativeContext, MenuContext } from '../../../context';
import { PickArtist } from '../../../layouts/app/views/pickArtist';

export default function Tab5() {
  return (
    <Query query={FAVOURITES} fetchPolicy="network-only">
      {({ data, loading }) => {
        return loading ? null : (
          <CreativeContext.Provider>
            <MenuContext.Consumer>
              {(menu) => (
                <PickArtist
                  jobId={menu.jobPage.jobId}
                  autosaveIsOn={true}
                  favourites={data.profile.favourites.map(
                    (fav) => fav.receiver && fav.receiver._id
                  )}
                />
              )}
            </MenuContext.Consumer>
          </CreativeContext.Provider>
        );
      }}
    </Query>
  );
}
