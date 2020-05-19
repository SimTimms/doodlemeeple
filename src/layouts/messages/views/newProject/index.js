import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import { useStyles } from './styles';
import { ProjectComponent, ProjectHeader } from './components';
import { Link } from 'react-router-dom';
import {
  FileGallery,
  InvitesWidget,
  MediaGallery,
  ActionButton,
} from '../../../../components';

import { TagsWidget } from '../../../../components/tags';
import { CardHeader } from '../../../../components';
import tim from '../../../../assets/tim.jpg';

export function NewProject({ projectId }) {
  const classes = useStyles();

  const user = {
    profileImg: tim,
    name: 'Tim Simms',
  };
  const newId = 'ID128';
  return (
    <Slide
      direction="left"
      in={true}
      mountOnEnter
      unmountOnExit
      style={{ width: 700 }}
    ></Slide>
  );
}
