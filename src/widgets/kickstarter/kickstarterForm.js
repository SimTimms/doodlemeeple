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
import { Mutation } from 'react-apollo';
import {
  CREATE_KICKSTARTER,
  UPDATE_KICKSTARTER,
  REMOVE_KICKSTARTER,
} from './data';
import { toaster } from '../../utils/toaster';

export default function KickstarterForm({ ...props }) {
  const classes = useStyles();
  const { kickstarterData, setKickstarterData } = props;
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

  useEffect(() => {
    kickstarterData &&
      kickstarter != kickstarterData &&
      setKickstarter({ ...kickstarterData });
  }, [kickstarterData]);

  return (
    <div className={classes.menuRoot}>
      <div style={{ padding: 10, maxWidth: 400, margin: 'auto' }}>
        <Column a="center" j="center">
          <div
            className={classes.image}
            style={{ backgroundImage: `url(${kickstarter.featuredImage})` }}
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
            <Mutation
              mutation={CREATE_KICKSTARTER}
              variables={{
                ...kickstarter,
              }}
              onCompleted={(data) => {
                toaster('Saved');
                setKickstarter({
                  ...kickstarter,
                  _id: data.kickstarterCreateOne.recordId,
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
                  setKickstarterData(null);
                  toaster('Removed');
                }}
              >
                {(deleteMutation) => {
                  return (
                    <MenuButtonStandard
                      title={deleteConfirm ? 'Confirm Deletion' : 'Delete'}
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
    </div>
  );
}
