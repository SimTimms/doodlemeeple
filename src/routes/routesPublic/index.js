import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
//import { AboutLayout } from '../layouts';
//import PreviewLayout from '../layouts/preview';
import { PublicLayout } from '../../layouts/public';
import { LoginRoutes } from '../../modules/loginModule';

export default function PublicRoutes({ theme, props: { ...props } }) {
  return (
    <Switch>
      {LoginRoutes(props)}
      {/*
      <Route
        path="/public-preview/:pathParam?"
        render={(props) => (
          <PreviewLayout {...props} theme={theme} publicView={true} />
        )}
        />
      <Route path="/about">
        <AboutLayout theme={theme} />
      </Route>
      <Route
        path="/:page/:token"
        render={(props) => <PublicLayout {...props} theme={theme} />}
      />
       
      <Route
        path="/:page"
        render={(props) => <PublicLayout {...props} theme={theme} />}
      /> */}
    </Switch>
  );
}
