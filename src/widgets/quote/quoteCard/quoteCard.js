import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';
import { Row, Column, IconButton } from '../../../components';
import { nameShortener } from '../../../utils';

export default function QuoteCard({ contract }) {
  const classes = useStyles();
  if (!contract.job) return null;
  return (
    <div
      className={clsx({
        [classes.creativeCard]: true,
      })}
    >
      <Column j="space-between" h="100%">
        <Row j="space-between">
          <Column a="flex-start">
            <Typography className={classes.title} component="h1">
              {nameShortener(contract.job.name, 60)}
            </Typography>
            <a
              href={`${process.env.REACT_APP_URL}/public-preview/${contract.job.user._id}`}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.meta}
            >
              <Typography className={classes.meta}>
                {nameShortener(contract.job.user.name, 60)}
              </Typography>
            </a>
          </Column>
          {contract.status === 'declined' ? (
            <Typography className={classes.error}>
              Declined by Creator
            </Typography>
          ) : (
            <a
              href={`/app/edit-quote/${contract._id}`}
              style={{ textDecoration: 'none' }}
            >
              <IconButton
                title="Edit"
                color="primary"
                icon="edit"
                onClickEvent={() => {}}
              />
            </a>
          )}
        </Row>
      </Column>
    </div>
  );
}
