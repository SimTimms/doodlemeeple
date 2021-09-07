import React from 'react';
import { Typography } from '@material-ui/core';
import { Query, Mutation } from 'react-apollo';
import { QUOTE_VIEW_WIDGET } from './data';
import { Column, CardComponent, IconButton } from '../../components';
import { DECLINE_CONTRACT } from '../../data/mutations';
import { useStyles } from './styles';

export default function FullContractViewWidget({ quoteId, history }) {
  const classes = useStyles();

  return (
    <Column>
      <Query
        query={QUOTE_VIEW_WIDGET}
        variables={{ id: quoteId }}
        fetchPolicy="network-only"
      >
        {({ data }) => {
          if (data)
            return (
              <CardComponent>
                <Column>
                  <Column w={500}>
                    <Typography variant="h5">Quote Details</Typography>
                    <Column a="flex-start">
                      <Typography className={classes.title}>
                        Creative
                      </Typography>
                      <a
                        href={`${process.env.REACT_APP_URL}/user-profile/${data.contractById.user._id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: '#222',
                          width: '100%',
                        }}
                      >
                        <Typography className={classes.summary}>
                          {data.contractById.user.name}
                        </Typography>
                      </a>
                      {data.contractById.user.publicEmail && (
                        <a
                          href={`mailto: ${data.contractById.user.publicEmail}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: '#222',
                            width: '100%',
                          }}
                        >
                          <Typography className={classes.summary}>
                            {data.contractById.user.publicEmail}
                          </Typography>
                        </a>
                      )}
                      {data.contractById.user.website && (
                        <a
                          href={`${data.contractById.user.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: '#222',
                            width: '100%',
                          }}
                        >
                          <Typography className={classes.summary}>
                            {data.contractById.user.website}
                          </Typography>
                        </a>
                      )}
                    </Column>
                    <div className={classes.divider}></div>
                    <Column a="flex-start">
                      <Typography className={classes.title}>Cost</Typography>
                      <Typography className={classes.summary}>
                        {data.contractById.cost} {data.contractById.currency}
                      </Typography>
                    </Column>
                    <div className={classes.divider}></div>
                    <Column a="flex-start">
                      <Typography className={classes.title}>
                        Estimated Starting Time
                      </Typography>
                      <Typography className={classes.summary}>
                        {data.contractById.startDate}
                      </Typography>
                    </Column>
                    <div className={classes.divider}></div>
                    <Column a="flex-start">
                      <Typography className={classes.title}>
                        Expected End Time
                      </Typography>
                      <Typography className={classes.summary}>
                        {data.contractById.deadline}
                      </Typography>
                    </Column>
                    <div className={classes.divider}></div>
                    <Column a="flex-start">
                      <Typography className={classes.title}>
                        Other Details
                      </Typography>
                      <Typography className={classes.summary}>
                        {data.contractById.notes}
                      </Typography>
                    </Column>
                  </Column>
                  <Mutation
                    mutation={DECLINE_CONTRACT}
                    variables={{
                      contractId: data.contractById._id,
                    }}
                    onCompleted={() =>
                      history.push(`/app/view-job/${data.contractById.job._id}`)
                    }
                  >
                    {(mutation) => {
                      return (
                        <IconButton
                          title="Decline"
                          color="warning"
                          icon="thumb_down"
                          disabled={false}
                          onClickEvent={() => {
                            mutation();
                          }}
                          styleOverride={{ margin: 'auto', width: 200 }}
                          type="button"
                          iconPos="right"
                        />
                      );
                    }}
                  </Mutation>
                  <IconButton
                    title="Accept"
                    color="primary"
                    icon="thumb_up"
                    disabled={false}
                    onClickEvent={() => {
                      history.push(
                        `/app/view-job/${data.contractById.job._id}`
                      );
                    }}
                    styleOverride={{ margin: 'auto', width: 200 }}
                    type="button"
                    iconPos="right"
                  />
                </Column>
              </CardComponent>
            );
          return null;
        }}
      </Query>
    </Column>
  );
}
