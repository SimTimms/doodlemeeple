import React from 'react';
import { Route } from 'react-router-dom';

export default function DashboardRoutes(props) {
  return <Route path="/dashboard" render={(props) => <div>Dashs</div>} />;
}
