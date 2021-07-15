import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';
import { Query } from 'react-apollo';
import BgImg from './bgImg';
import {
  Row,
  Column,
  IconButton,
  LargeImage,
  Divider,
  DividerMini,
} from '../../../components';
import { PROFILE_PREVIEW } from '../data';
import { nameShortener } from '../../../utils';
import { TYPE_HELPER } from '../../../utils';
import ImageThumbs from './imageThumbs';
import Name from './name';
import Socials from './socials';
import GallerySection from './gallerySection';

export default function FullProfileCard({ history, creativeId }) {
  const classes = useStyles();

  const [previewImage, setPreviewImage] = React.useState(null);
  const [large, setLarge] = React.useState(null);
  const [page, setPage] = React.useState(0);
  const [shareLink, setShareLink] = React.useState(false);

  return (
    <div
      className={clsx({
        [classes.creativeCard]: true,
      })}
    >
      <LargeImage large={large} setLarge={setLarge} />
      <Query
        query={PROFILE_PREVIEW}
        fetchPolicy="network-only"
        variables={{ userId: creativeId }}
      >
        {({ loading, data }) => {
          if (!data) return null;
          const creative = data.userById;
          !previewImage && setPreviewImage(data.userById.profileBG);
          return (
            <Column>
              <Column>
                <BgImg
                  previewImage={previewImage}
                  onClick={() => {
                    setLarge(previewImage);
                  }}
                  skill={creative.sections}
                />
                <ImageThumbs
                  creativeId={creative._id}
                  profileBG={creative.profileBG}
                  setPreviewImage={setPreviewImage}
                  setLarge={setLarge}
                />
              </Column>
              <Column w={600}>
                <Name creative={creative} />

                <Divider />
                <Typography align="center" className={classes.summary}>
                  {nameShortener(creative.summary ? creative.summary : '', 60)}
                </Typography>
                {creative.sections.length > 1 && (
                  <Column bg="#333" w={400}>
                    <DividerMini />
                    <Typography
                      className={classes.catTitle}
                      align="center"
                      style={{ color: '#bbb' }}
                    >
                      Select a Skill
                    </Typography>
                    <DividerMini />
                    <Row pl={10} pr={10}>
                      {creative.sections &&
                        creative.sections.map((section, index) => {
                          return (
                            <Typography
                              className={classes.catTitle}
                              align="center"
                              style={{ cursor: 'pointer' }}
                              onClick={() => setPage(index)}
                            >{`${TYPE_HELPER(section.type)}`}</Typography>
                          );
                        })}
                    </Row>
                    <DividerMini />
                  </Column>
                )}
                {creative.sections &&
                  creative.sections.map((section, index) => {
                    return (
                      (index === page || page === -1) && (
                        <GallerySection
                          section={section}
                          key={`section_${index}`}
                        />
                      )
                    );
                  })}
                <Column a="center" p="0 0 10px 0">
                  <Column w={400}>
                    <Column w={400} bg="#ddd">
                      <Typography style={{ color: '#222', padding: 5 }}>
                        Social
                      </Typography>
                    </Column>
                    <Divider />
                    <Row j="space-between" w="100%">
                      <Socials creative={creative} />
                      {creative.website && (
                        <a
                          href={`${
                            creative.website.indexOf('http') === -1
                              ? `https://${creative.website}`
                              : creative.website
                          }`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={classes.website}
                        >
                          <Typography className={classes.website}>
                            Website
                          </Typography>
                        </a>
                      )}
                    </Row>
                  </Column>
                  <Column w={400}>
                    <Divider />
                    {shareLink ? (
                      <Typography
                        className={classes.shareLink}
                        onClick={() => setShareLink(false)}
                        style={{ cursor: 'pointer' }}
                      >{`${process.env.REACT_APP_URL}/preview/${creative._id}`}</Typography>
                    ) : (
                      <Typography
                        className={classes.shareLink}
                        onClick={() => setShareLink(true)}
                        style={{ cursor: 'pointer' }}
                      >{`Share This Profile`}</Typography>
                    )}
                    <Divider />
                  </Column>
                  {history && (
                    <IconButton
                      title="Hire on DoodleMeeple"
                      color="text-dark"
                      icon=""
                      iconPos="right"
                      onClickEvent={() =>
                        history.push(`/app/edit-job/new/${creative._id}`)
                      }
                      styleOverride={{
                        width: '100%',
                        borderRadius: 0,
                        borderTop: '1px solid #eee',
                        margin: 0,
                        justifyContent: 'center',
                      }}
                    />
                  )}
                </Column>
              </Column>
            </Column>
          );
        }}
      </Query>
    </div>
  );
}
