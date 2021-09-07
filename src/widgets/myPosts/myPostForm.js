import React, { useEffect } from 'react';
import { useStyles } from './styles';
import {
  MenuButtonStandard,
  FieldBox,
  InputLabel,
  Column,
  Uploader,
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
  const { type, objectId, postId } = props;
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
                <InputLabel
                  title="Image"
                  icon={null}
                  value={null}
                  maxLength={null}
                  info={'Include an image with this post.....if you want.'}
                  warning={''}
                />
                <div
                  className={classes.image}
                  style={{
                    backgroundImage: `url(${myPost.featuredImage})`,
                  }}
                >
                  <Uploader
                    cbImage={(url) => {
                      setMyPost({
                        ...myPost,
                        featuredImage: url,
                      });
                    }}
                    styleOverride={null}
                    className={null}
                    cbDelete={null}
                    hasFile={false}
                    size="2MB PNG JPG GIF"
                    imageCategory="myPost"
                  />
                </div>

                <FieldBox
                  value={myPost.name}
                  title="Post Header"
                  maxLength={26}
                  minLength={5}
                  onChangeEvent={(e) => {
                    setMyPost({
                      ...myPost,
                      name: e,
                    });
                  }}
                  replaceMode="loose"
                  placeholder="Example: My new game"
                  info="What's this post about?"
                  warning=""
                  size="s"
                  multiline={false}
                />
                <FieldBox
                  value={myPost.summary}
                  title="Content"
                  maxLength={256}
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

                <FieldBox
                  value={myPost.showreel}
                  title="Video"
                  maxLength={226}
                  minLength={5}
                  onChangeEvent={(e) => {
                    setMyPost({
                      ...myPost,
                      showreel: e,
                    });
                  }}
                  replaceMode="loose"
                  placeholder="Example: https://youtube.com?my_vid"
                  info="Include a video"
                  warning=""
                  size="s"
                  multiline={false}
                />

                <FieldBox
                  value={myPost.url}
                  title="URL"
                  maxLength={512}
                  onChangeEvent={(e) => {
                    setMyPost({
                      ...myPost,
                      url: e,
                    });
                  }}
                  replaceMode="loose"
                  placeholder="Example: https://mywebshop.com"
                  info="Add a link if you'd like"
                  warning=""
                  size="s"
                  multiline={false}
                />

                <Divider />

                {myPost._id === 'new' ? (
                  <Column mw={200}>
                    <Mutation
                      mutation={CREATE_MY_POST}
                      variables={{
                        ...myPost,
                      }}
                      onCompleted={(data) => {
                        toaster('Saved');
                        menu.updateMenuContext({
                          ...menu.homePage,
                          myPostId: data.myPostCreateOne.recordId,
                        });
                      }}
                    >
                      {(mutation) => {
                        return (
                          <MenuButtonStandard
                            title="Create"
                            icon="add"
                            fullWidth={true}
                            disabled={myPost.name.length < 5}
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
