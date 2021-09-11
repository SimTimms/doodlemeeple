import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';
import { Query } from 'react-apollo';
import BgImg from './bgImg';
import {
  Row,
  Column,
  LargeImage,
  Divider,
  DividerMini,
  DividerWithBorder,
  HrefLink,
  MainTitle,
  SubTitle,
  MenuButtonStandard,
} from '../../../components';
import { Badges } from '../components';
import { PROFILE_PREVIEW } from '../data';
import { TYPE_HELPER, randomKey } from '../../../utils';
import ImageThumbs from './imageThumbs';
import Socials from './socials';
import GallerySection from './gallerySection';
import { HistoryContext } from '../../../context';

export default function FullProfileCard({ creativeId }) {
  const classes = useStyles();

  const [previewImage, setPreviewImage] = React.useState(null);
  const [large, setLarge] = React.useState(null);
  const [page, setPage] = React.useState(-1);
  const [shareLink, setShareLink] = React.useState(false);

  return (
    <HistoryContext.Consumer>
      {(history) => (
        <div
          className={clsx({
            [classes.creativeCard]: true,
          })}
        >
          <LargeImage large={large} setLarge={setLarge} />

          <Query
            query={PROFILE_PREVIEW}
            variables={{ userId: creativeId }}
            onCompleted={(data) =>
              !previewImage &&
              setPreviewImage(data.userByIdWithTracker.profileBG)
            }
          >
            {({ loading, data }) => {
              if (!data) return null;
              const creative = data.userByIdWithTracker;

              return (
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

                  <Row a="flex-start" j="space-between">
                    <Column j="flex-start" w="100%" mw={700}>
                      <DividerWithBorder />
                      <Row j="space-between" w="100%">
                        <MainTitle title={creative.name} />
                        <Badges creative={creative} />
                      </Row>
                      <Divider />
                      <Typography align="left" className={classes.summary}>
                        {creative.summary}
                      </Typography>
                      <Column w="100%" a="flex-start">
                        <DividerWithBorder />
                        <SubTitle title="Skills" />
                        <Divider />
                        {creative.sections &&
                          creative.sections.map((section, index) => {
                            return (
                              <Typography
                                style={{ cursor: 'pointer' }}
                                onClick={() => setPage(index)}
                                key={randomKey()}
                              >{`${TYPE_HELPER(section.type)}`}</Typography>
                            );
                          })}
                        {creative.sections.length > 1 && (
                          <Typography
                            style={{ cursor: 'pointer' }}
                            onClick={() => setPage(-1)}
                          >{`View All`}</Typography>
                        )}
                        {creative.sections &&
                          creative.sections.map((section, index) => {
                            return (
                              (index === page || page === -1) && (
                                <GallerySection
                                  section={section}
                                  key={`section_${index}_${randomKey()}`}
                                />
                              )
                            );
                          })}
                      </Column>
                    </Column>
                    <Column a="flex-start" j="flex-start" mw={300} w="50%">
                      <Column w="100%" a="flex-start">
                        <DividerWithBorder />
                        <MainTitle title="Options" />
                        <DividerMini />
                        <MenuButtonStandard
                          title="Hire on DoodleMeeple"
                          icon=""
                          onClickEvent={() =>
                            history.push(`/app/new-job-post/${creative._id}`)
                          }
                          fullWidth={true}
                        />
                        <DividerMini />
                        {shareLink ? (
                          <Typography
                            className={classes.shareLink}
                            style={{ cursor: 'pointer' }}
                          >{`${process.env.REACT_APP_URL}/preview/${creative._id}`}</Typography>
                        ) : (
                          <MenuButtonStandard
                            title="Share Link"
                            onClickEvent={() => setShareLink(true)}
                            fullWidth={true}
                          />
                        )}
                      </Column>
                      <Column w="100%" a="flex-start">
                        <DividerWithBorder />
                        <MainTitle title="Social" />
                        <DividerMini />
                        <Socials creative={creative} />
                      </Column>
                      {creative.website && (
                        <Column w="100%" a="flex-start">
                          <DividerWithBorder />
                          <MainTitle title="Website" />
                          <DividerMini />
                          <HrefLink
                            title={creative.website}
                            url={creative.website}
                          />
                        </Column>
                      )}
                      {creative.publicEmail && (
                        <Column w="100%" a="flex-start">
                          <DividerWithBorder />
                          <MainTitle title="Email" />
                          <DividerMini />
                          <HrefLink
                            title={creative.publicEmail}
                            url={`mailto:${creative.publicEmail}`}
                          />
                        </Column>
                      )}
                    </Column>
                  </Row>
                </Column>
              );
            }}
          </Query>
        </div>
      )}
    </HistoryContext.Consumer>
  );
}
