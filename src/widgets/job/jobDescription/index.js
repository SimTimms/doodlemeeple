import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';
import { BgImg } from './components';
import { Row, Column, IconButton } from '../../../components';
import imageOptimiser from '../../../utils/imageOptimiser';
import BigImage from '../../bigImage';
import ReactPlayer from 'react-player';
import Cookies from 'js-cookie';
import { Mutation } from 'react-apollo';
import { CREATE_CONTRACT } from '../../../data/mutations';

export default function JobDescription({ job, history }) {
  const userId = Cookies.get('userId');
  const classes = useStyles();
  const [large, setLarge] = React.useState(null);
  const [previewImage, setPreviewImage] = React.useState(null);
  useEffect(() => {
    job.gallery.images.length > 0 && setPreviewImage(job.gallery.images[0].img);
  }, [job]);

  return (
    <div
      className={clsx({
        [classes.creativeCard]: true,
      })}
    >
      {large !== null && <BigImage large={large} setLarge={setLarge} />}
      <Column j="space-between" h="100%">
        <Column j="flex-start">
          <Typography className={classes.jobName}>{job.name}</Typography>
          {job.genre && (
            <Typography align="center" className={classes.meta}>
              {`Genre: ${job.genre}`}
            </Typography>
          )}
        </Column>
        {job.summary && (
          <Column a="flex-start">
            <Typography className={classes.title}>Summary</Typography>
            <Typography className={classes.summary}>{job.summary}</Typography>
          </Column>
        )}
        {job.creativeSummary && (
          <Column a="flex-start">
            <div className={classes.divider}></div>
            <Typography className={classes.title}>Creative Summary</Typography>
            <Typography className={classes.summary}>
              {job.creativeSummary}
            </Typography>
          </Column>
        )}
        {job.showreel && (
          <Column a="flex-start">
            <div className={classes.divider}></div>
            <Typography className={classes.title}>Video Message</Typography>
            <ReactPlayer
              url={job.showreel}
              playing
              controls={true}
              muted={true}
              style={{
                width: '100%',
              }}
              width="100%"
            />
          </Column>
        )}
        {job.timeframe && (
          <Column a="flex-start">
            <div className={classes.divider}></div>
            <Typography className={classes.title}>Timeframe</Typography>
            <Typography className={classes.summary}>{job.timeframe}</Typography>
          </Column>
        )}
        {job.budget && (
          <Column a="flex-start">
            <div className={classes.divider}></div>
            <Typography className={classes.title}>Budget</Typography>
            <Typography className={classes.summary}>{job.budget}</Typography>
          </Column>
        )}
        {job.gallery.images.length > 0 && (
          <Column a="flex-start">
            <div className={classes.divider}></div>
            <Typography className={classes.title}>Reference Images</Typography>
            <BgImg
              previewImage={previewImage}
              onClick={() => {
                setLarge(previewImage);
              }}
            />
            <Row h={60} w="100%" bg="#222" of="hidden" wrap="wrap">
              {job.gallery.images.map((image) => (
                <div
                  className={classes.imageThumb}
                  style={{
                    backgroundImage: `url(${imageOptimiser(image.img)})`,
                  }}
                  onMouseEnter={() => setPreviewImage(image.img)}
                  onClick={() => {
                    setPreviewImage(image.img);
                    setLarge(image.img);
                  }}
                ></div>
              ))}
            </Row>
          </Column>
        )}
        {job.scope && (
          <Column a="flex-start">
            <div className={classes.divider}></div>
            <Typography className={classes.title}>Scope</Typography>
            <Typography className={classes.summary}>{job.scope}</Typography>
          </Column>
        )}
        {job.mechanics && (
          <Column a="flex-start">
            <div className={classes.divider}></div>
            <Typography className={classes.title}>Mechanics</Typography>
            <Typography className={classes.summary}>{job.mechanics}</Typography>
          </Column>
        )}
        {job.extra && (
          <Column a="flex-start">
            <div className={classes.divider}></div>
            <Typography className={classes.title}>Notes</Typography>
            <Typography className={classes.summary}>{job.extra}</Typography>
          </Column>
        )}
        <Column>
          {job.submitted === 'accepted' && (
            <Typography style={{ marginBottom: 20, marginTop: 10 }}>
              This job has been assigned
            </Typography>
          )}
          {job.submitted !== 'accepted' && !userId && (
            <a
              href={`/app/view-public-job/${job._id}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <div className={classes.divider}></div>
              <IconButton
                title="Apply on DoodleMeeple"
                icon="chevron_right"
                iconPos="right"
                onClickEvent={() => {}}
              />
            </a>
          )}
          {userId && userId !== job.user._id && (
            <Mutation
              mutation={CREATE_CONTRACT}
              variables={{
                currency: 'GBP',
                cost: '100',
                jobId: job._id,
                status: '',
              }}
              onCompleted={(data) => {
                history.push(
                  `/app/edit-quote/${data.contractCreateOne.recordId}`
                );
              }}
            >
              {(mutation) => {
                return (
                  <Column>
                    <div className={classes.divider}></div>
                    <IconButton
                      disabled={false}
                      color="warning"
                      title={'Create a Quote'}
                      icon="fact_check"
                      onClickEvent={() => {
                        mutation();
                      }}
                    />
                  </Column>
                );
              }}
            </Mutation>
          )}
          {job.contactEmail && job.submitted !== 'accepted' && (
            <Column>
              <div className={classes.divider}></div>
              <Typography className={classes.title}>
                You may also send applications to
              </Typography>
              <Typography className={classes.summary}>
                {job.contactEmail}
              </Typography>
            </Column>
          )}
        </Column>
      </Column>
    </div>
  );
}
