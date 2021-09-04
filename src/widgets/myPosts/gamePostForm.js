import React, { useEffect } from 'react';
import { useStyles } from './styles';
import {
  MenuButtonStandard,
  FieldBox,
  Column,
  DividerMini,
  Divider,
} from '../../components';
import { Mutation, Query } from 'react-apollo';
import { CREATE_MY_POST, REMOVE_MY_POST, MY_POST_BY_ID } from './data';
import { toaster } from '../../utils/toaster';
import { MenuContext } from '../../context';
import PostToBoard from './postToBoard';
import Update from './update';

export default function MyPostForm({ ...props }) {
  const classes = useStyles();
  const { type, objectId, postId, updateEvent, comments } = props;
  const [myPost, setMyPost] = React.useState({
    name: '',
    logo: '',
    featuredImage: '',
    summary: '',
    url: '',
    showreel: '',
    _id: 'new',
    type: type ? type : 'public',
    game: type === 'game' ? objectId : null,
  });
  const [deleteConfirm, setDeleteConfirm] = React.useState(false);

  useEffect(() => {
    setMyPost({
      ...myPost,
      type: type ? type : 'public',
      game: type === 'game' ? objectId : null,
    });
  }, [type, objectId]);

  return (
    <MenuContext.Consumer>
      {(menu) => {
        return (
          <div className={classes.menuRoot}>
            <div style={{ padding: 10, maxWidth: 400, margin: 'auto' }}>
              <Column a="center" j="center">
                <FieldBox
                  value={myPost.summary}
                  title="Comment"
                  maxLength={256}
                  minLength={3}
                  onChangeEvent={(e) => {
                    setMyPost({
                      ...myPost,
                      summary: e,
                    });
                  }}
                  replaceMode="loose"
                  placeholder="Example: My new game is available for sale now....."
                  info="Go ahead, say what you've got to say, unless it's crude, sweary, or illegal, in which case please keep that to yourself. See our terms and conditions"
                  warning=""
                  size="s"
                  multiline={true}
                />

                <Divider />

                {myPost._id === 'new' ? (
                  <Column mw={100}>
                    <Mutation
                      mutation={CREATE_MY_POST}
                      variables={{
                        ...myPost,
                      }}
                      onCompleted={(data) => {
                        toaster('Saved');
                        updateEvent([data.myPostCreateOne.record, ...comments]);
                      }}
                    >
                      {(mutation) => {
                        return (
                          <MenuButtonStandard
                            title="Submit"
                            icon="add"
                            fullWidth={true}
                            disabled={myPost.summary.length < 3}
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
                    <Update myPost={myPost} />
                    <DividerMini />
                    <PostToBoard myPost={myPost} setMyPost={setMyPost} />
                    <DividerMini />
                    <Mutation
                      mutation={REMOVE_MY_POST}
                      variables={{
                        _id: myPost._id,
                      }}
                      onCompleted={() => {
                        toaster('Removed');
                        menu.updateMenuContext({
                          ...menu.homePage,
                          myPostId: null,
                          secondaryPage: 'my_posts',
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
                            icon="delete"
                            onClickEvent={() => {
                              deleteConfirm
                                ? deleteMutation()
                                : setDeleteConfirm(true);
                            }}
                            fullWidth={true}
                          />
                        );
                      }}
                    </Mutation>
                  </Column>
                )}
              </Column>
            </div>
            <Query
              query={MY_POST_BY_ID}
              fetchPolicy="network-only"
              variables={{ _id: postId }}
              onCompleted={(data) =>
                data.myPostById !== null && setMyPost({ ...data.myPostById })
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
