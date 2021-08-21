import React, { useEffect } from 'react';
import { useStyles } from './styles';
import {
  MenuButtonStandard,
  FieldBox,
  Column,
  Uploader,
  DividerMini,
  Divider,
} from '../../components';
import { Mutation, Query } from 'react-apollo';
import {
  CREATE_KICKSTARTER,
  UPDATE_KICKSTARTER,
  REMOVE_KICKSTARTER,
  KICKSTARTER_BY_ID,
} from './data';
import { toaster } from '../../utils/toaster';
import { MenuContext } from '../../context';

export default function KickstarterForm({ ...props }) {
  const classes = useStyles();
  const [kickstarter, setKickstarter] = React.useState({
    name: '',
    logo: '',
    featuredImage: '',
    summary: '',
    url: '',
    showreel: '',
    _id: 'new',
  });
  const [deleteConfirm, setDeleteConfirm] = React.useState(false);

  return (
    <MenuContext.Consumer>
      {(menu) => {
        return (
          <div className={classes.menuRoot}>
            <div style={{ padding: 10, maxWidth: 400, margin: 'auto' }}>
              <Column a="center" j="center">
                <div
                  className={classes.image}
                  style={{
                    backgroundImage: `url(${kickstarter.featuredImage})`,
                  }}
                >
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
                </div>
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
                  info="What's this project or kickstarter called?"
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
                  info="What's this project or kickstarter called?"
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
                  info="What's this project or kickstarter called?"
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
                  info="What's this project or kickstarter called?"
                  warning=""
                  size="s"
                  multiline={false}
                />
                <Divider />

                {kickstarter._id === 'new' ? (
                  <Column>
                    <Mutation
                      mutation={CREATE_KICKSTARTER}
                      variables={{
                        ...kickstarter,
                      }}
                      onCompleted={() => {
                        toaster('Saved');
                        menu.updateMenuContext({
                          ...menu.homePage,
                          secondaryPage: 'my_kickstarters',
                        });
                      }}
                    >
                      {(mutation) => {
                        return (
                          <MenuButtonStandard
                            title="Create"
                            icon="add"
                            disabled={kickstarter.name.length < 1}
                            onClickEvent={() => {
                              mutation();
                            }}
                          />
                        );
                      }}
                    </Mutation>
                  </Column>
                ) : (
                  <Column mw={200}>
                    <Mutation
                      mutation={UPDATE_KICKSTARTER}
                      variables={{
                        ...kickstarter,
                      }}
                      onCompleted={(data) => {
                        toaster('Saved');
                      }}
                    >
                      {(updateMutation) => {
                        return (
                          <MenuButtonStandard
                            title="Update"
                            icon="update"
                            disabled={false}
                            onClickEvent={() => {
                              updateMutation();
                            }}
                          />
                        );
                      }}
                    </Mutation>
                    <DividerMini />
                    <Mutation
                      mutation={REMOVE_KICKSTARTER}
                      variables={{
                        _id: kickstarter._id,
                      }}
                      onCompleted={() => {
                        toaster('Removed');
                        menu.updateMenuContext({
                          ...menu.homePage,
                          kickstarterId: null,
                          secondaryPage: 'my_kickstarters',
                        });
                      }}
                    >
                      {(deleteMutation) => {
                        return (
                          <MenuButtonStandard
                            title={
                              deleteConfirm ? 'Confirm Deletion' : 'Delete'
                            }
                            type="delete"
                            onClickEvent={() => {
                              deleteConfirm
                                ? deleteMutation()
                                : setDeleteConfirm(true);
                            }}
                          />
                        );
                      }}
                    </Mutation>
                  </Column>
                )}
              </Column>
            </div>
            <Query
              query={KICKSTARTER_BY_ID}
              fetchPolicy="network-only"
              variables={{ _id: menu.homePage.kickstarterId }}
              onCompleted={(data) =>
                data.kickstarterById !== null &&
                setKickstarter({ ...data.kickstarterById })
              }
            >
              {({ data }) => {
                return null;
              }}
            </Query>
          </div>
        );
      }}
    </MenuContext.Consumer>
  );
}
