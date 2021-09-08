import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PreviewLayout from '../layouts/preview';
import { MenuContext } from '../context';

export default function ProfileRoutes({ theme, props: { ...props } }) {
  const [pageValues, setPageValues] = React.useState({
    primaryPage: 'profile',
  });
  return (
    <MenuContext.Provider
      value={{
        primaryPage: pageValues.primaryPage,

        updateMenuContext: setPageValues,
      }}
    >
      <Switch>
        <Route
          path="/user-profile/:pathParam?"
          render={(props) => (
            <PreviewLayout {...props} theme={theme} publicView={true} />
          )}
        />
      </Switch>
    </MenuContext.Provider>
  );
}
