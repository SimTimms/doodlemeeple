import React from 'react';
import { Row } from '../../../components';
import Button from './button';
import menuArray from '../../menuArray';
import { HistoryContext, CountContext } from '../../../context';
export default function TopMenu({ profile }) {
  return (
    <HistoryContext.Consumer>
      {(history) => (
        <CountContext.Consumer>
          {(counts) => {
            return (
              <Row j="center">
                {menuArray(history, counts).map((menuItem) => {
                  return <Button menuItem={menuItem} />;
                })}
                <Button
                  menuItem={{
                    name: profile ? profile.name : 'Fetching...',
                    icon: 'face',
                    image: profile && profile.profileImg,
                    link: () => history.push('/app/edit-profile'),
                  }}
                />
              </Row>
            );
          }}
        </CountContext.Consumer>
      )}
    </HistoryContext.Consumer>
  );
}
