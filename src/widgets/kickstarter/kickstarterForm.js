import React from 'react';
import { Card } from '@material-ui/core';
import { IconButton, FieldBox, Column, Uploader } from '../../components';
import { Mutation, Query } from 'react-apollo';
import {
  CREATE_KICKSTARTER,
  UPDATE_KICKSTARTER,
  FEATURED_KICKSTARTER_WIDGET,
} from './data';
import { KickstarterProfile } from './profileCard';

export default function KickstarterForm() {
  const [kickstarter, setKickstarter] = React.useState({
    name: '',
    logo: '',
    featuredImage: '',
    summary: '',
    url: '',
    showreel: '',
    _id: 'new',
  });

  return (
    <Mutation
      mutation={CREATE_KICKSTARTER}
      variables={{
        ...kickstarter,
      }}
      onCompleted={(data) => {
        setKickstarter({
          ...kickstarter,
          _id: data.kickstarterCreateOne.recordId,
        });
        console.log(data);
      }}
    >
      {(mutation) => {
        return (
          <Card>
            <div style={{ padding: 10 }}>
              <Column a="center" j="center">
                <FieldBox
                  value={kickstarter.name}
                  title="Project Name"
                  maxLength={86}
                  onChangeEvent={(e) => {
                    setKickstarter({
                      ...kickstarter,
                      name: e,
                    });
                  }}
                  replaceMode="loose"
                  placeholder="Example: Mouse Stompa"
                  info="What's this project or game called?"
                  warning=""
                  size="s"
                  multiline={false}
                />
                <FieldBox
                  value={kickstarter.summary}
                  title="Summary"
                  maxLength={512}
                  onChangeEvent={(e) => {
                    setKickstarter({
                      ...kickstarter,
                      summary: e,
                    });
                  }}
                  replaceMode="loose"
                  placeholder="Example: Mouse Stompa"
                  info="What's this project or game called?"
                  warning=""
                  size="s"
                  multiline={true}
                />
                <FieldBox
                  value={kickstarter.url}
                  title="URL"
                  maxLength={512}
                  onChangeEvent={(e) => {
                    setKickstarter({
                      ...kickstarter,
                      url: e,
                    });
                  }}
                  replaceMode="loose"
                  placeholder="Example: Mouse Stompa"
                  info="What's this project or game called?"
                  warning=""
                  size="s"
                  multiline={false}
                />
                <FieldBox
                  value={kickstarter.showreel}
                  title="showreel"
                  maxLength={512}
                  onChangeEvent={(e) => {
                    setKickstarter({
                      ...kickstarter,
                      showreel: e,
                    });
                  }}
                  replaceMode="loose"
                  placeholder="Example: Mouse Stompa"
                  info="What's this project or game called?"
                  warning=""
                  size="s"
                  multiline={false}
                />
                <Uploader
                  cbImage={(url) => {
                    setKickstarter({
                      ...kickstarter,
                      featuredImage: url,
                    });
                  }}
                  styleOverride={null}
                  className={null}
                  cbDelete={null}
                  hasFile={false}
                  size="2MB PNG JPG GIF"
                  imageCategory="kickstarter"
                />

                {kickstarter._id === 'new' ? (
                  <IconButton
                    title="Create"
                    icon="add"
                    color="primary"
                    disabled={kickstarter.name.length < 1}
                    onClickEvent={() => {
                      mutation();
                    }}
                    styleOverride={null}
                    type="button"
                    iconPos="right"
                  />
                ) : (
                  <Mutation
                    mutation={UPDATE_KICKSTARTER}
                    variables={{
                      ...kickstarter,
                    }}
                    onCompleted={(data) => {
                      console.log(data);
                    }}
                  >
                    {(updateMutation) => {
                      return (
                        <IconButton
                          title="Update"
                          icon="add"
                          color="primary"
                          disabled={false}
                          onClickEvent={() => {
                            updateMutation();
                          }}
                          styleOverride={null}
                          type="button"
                          iconPos="right"
                        />
                      );
                    }}
                  </Mutation>
                )}
              </Column>
            </div>
            <Query
              query={FEATURED_KICKSTARTER_WIDGET}
              fetchPolicy="network-only"
              onCompleted={(data) => {
                //setKickstarterArray([...data.featuredKickstarterWidget]);
              }}
            >
              {({ data, loading }) => {
                console.log(data);
                if (data)
                  return data.featuredKickstarterWidget.map((kickstarter) => (
                    <KickstarterProfile kickstarter={kickstarter} />
                  ));
                return null;
              }}
            </Query>
          </Card>
        );
      }}
    </Mutation>
  );
}
