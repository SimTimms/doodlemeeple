import React from 'react';
import {
  IconButton,
  Column,
  CardComponent,
  Row,
  Divider,
  FieldTitle,
  MenuButtonShortcut,
} from '../../../../../../../components';
import autosave from '../../../../../../../utils/autosave';
import {
  ARTIST_TYPES,
  MARKETING_TYPES,
  DEVELOPMENT_TYPES,
  TYPE_HELPER,
} from '../../../../../../../utils';
import { checkLength } from '../../unlock';

export default function Section5({ setJob, job, mutation }) {
  const [page, setPage] = React.useState(1);
  const locked =
    !checkLength(job.name, 'name') ||
    !checkLength(job.genre, 'genre') ||
    !checkLength(job.summary, 'summary') ||
    !checkLength(job.creativeSummary, 'creativeSummary');
  return (
    <CardComponent locked={locked} lockedMsg="Invites">
      <Column a="center" j="center">
        <FieldTitle
          name="Keywords"
          description="Choose the skills that you're looking for, we'll automatically filter the Creative Roster based on these keywords"
          warning=""
          inline={false}
        />
        <Divider />
        <div style={{ width: 450 }}>
          <Column>
            <Row j="space-between">
              <MenuButtonShortcut
                text={{
                  name: 'Show All',
                  color: '#222',
                  icon: 'chevron_right',
                  count: 0,
                }}
                onClickEvent={() => {
                  setPage(-1);
                }}
                active={page === -1}
              />
              <MenuButtonShortcut
                text={{
                  name: 'Creative',
                  color: '#222',
                  icon: 'chevron_right',
                  count: 0,
                }}
                onClickEvent={() => {
                  setPage(1);
                }}
                active={page === 1}
              />{' '}
              <MenuButtonShortcut
                text={{
                  name: 'Marketing',
                  color: '#222',
                  icon: 'chevron_right',
                  count: 0,
                }}
                onClickEvent={() => {
                  setPage(2);
                }}
                active={page === 2}
              />
              <MenuButtonShortcut
                text={{
                  name: 'Development',
                  color: '#222',
                  icon: 'chevron_right',
                  count: 0,
                }}
                onClickEvent={() => {
                  setPage(3);
                }}
                active={page === 3}
              />
            </Row>
            <Divider />
            {(page === -1 || page === 1) &&
              ARTIST_TYPES.map((type) => (
                <IconButton
                  title={TYPE_HELPER(type)}
                  icon={
                    job.keywords.indexOf(type) > -1
                      ? 'local_post_office'
                      : 'add'
                  }
                  color={
                    job.keywords.indexOf(type) > -1 ? 'primary' : 'text-dark'
                  }
                  onClickEvent={() => {
                    setJob({
                      ...job,
                      keywords:
                        job.keywords.indexOf(type) === -1
                          ? [...job.keywords, type]
                          : job.keywords.filter((item) => item !== type),
                    });
                    autosave(mutation);
                  }}
                  styleOverride={{
                    width: '100%',
                    margin: 0,
                    marginBottom: 5,
                  }}
                  iconPos="right"
                />
              ))}
            {(page === -1 || page === 2) &&
              MARKETING_TYPES.map((type) => (
                <IconButton
                  title={TYPE_HELPER(type)}
                  icon={
                    job.keywords.indexOf(type) > -1
                      ? 'local_post_office'
                      : 'add'
                  }
                  color={
                    job.keywords.indexOf(type) > -1 ? 'primary' : 'text-dark'
                  }
                  onClickEvent={() => {
                    setJob({
                      ...job,
                      keywords:
                        job.keywords.indexOf(type) === -1
                          ? [...job.keywords, type]
                          : job.keywords.filter((item) => item !== type),
                    });
                    autosave(mutation);
                  }}
                  styleOverride={{
                    width: '100%',
                    margin: 0,
                    marginBottom: 5,
                  }}
                  iconPos="right"
                />
              ))}{' '}
            {(page === -1 || page === 3) &&
              DEVELOPMENT_TYPES.map((type) => (
                <IconButton
                  title={TYPE_HELPER(type)}
                  icon={
                    job.keywords.indexOf(type) > -1
                      ? 'local_post_office'
                      : 'add'
                  }
                  color={
                    job.keywords.indexOf(type) > -1 ? 'primary' : 'text-dark'
                  }
                  onClickEvent={() => {
                    setJob({
                      ...job,
                      keywords:
                        job.keywords.indexOf(type) === -1
                          ? [...job.keywords, type]
                          : job.keywords.filter((item) => item !== type),
                    });
                    autosave(mutation);
                  }}
                  styleOverride={{
                    width: '100%',
                    margin: 0,
                    marginBottom: 5,
                  }}
                  iconPos="right"
                />
              ))}
          </Column>
        </div>
      </Column>
    </CardComponent>
  );
}
