import React from 'react';
import {
  Column,
  CardComponent,
  Row,
  Divider,
  FieldTitle,
  MenuButtonTab,
  MenuButtonMulti,
} from '../../../../components';
import autosave from '../../../../utils/autosave';
import {
  ARTIST_TYPES,
  MARKETING_TYPES,
  DEVELOPMENT_TYPES,
  CREATOR_TYPES,
  TYPE_HELPER,
} from '../../../../utils';
import { checkLength } from '../../unlock';

export default function Section5({ setJob, job, mutation }) {
  const [page, setPage] = React.useState(1);
  const locked =
    !checkLength(job.name, 'name') ||
    !checkLength(job.genre, 'genre') ||
    !checkLength(job.summary, 'summary') ||
    !checkLength(job.creativeSummary, 'creativeSummary');
  return (
    <CardComponent locked={locked} lockedMsg="Keywords">
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
              <MenuButtonTab
                title="Visual"
                onClickEvent={() => {
                  setPage(1);
                }}
                active={page === 1}
              />
              <MenuButtonTab
                title="Marketing"
                onClickEvent={() => {
                  setPage(2);
                }}
                active={page === 2}
              />
              <MenuButtonTab
                title="Development"
                onClickEvent={() => {
                  setPage(3);
                }}
                active={page === 3}
              />
              <MenuButtonTab
                title="Industry"
                onClickEvent={() => {
                  setPage(4);
                }}
                active={page === 4}
              />
            </Row>
            <Divider />
            {(page === -1 || page === 1) &&
              ARTIST_TYPES.map((type) => (
                <MenuButtonMulti
                  title={TYPE_HELPER(type)}
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
                  active={job.keywords.indexOf(type) > -1 ? true : false}
                  iconPos="right"
                />
              ))}
            {(page === -1 || page === 2) &&
              MARKETING_TYPES.map((type) => (
                <MenuButtonMulti
                  title={TYPE_HELPER(type)}
                  active={job.keywords.indexOf(type) > -1 ? true : false}
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
                />
              ))}
            {(page === -1 || page === 3) &&
              DEVELOPMENT_TYPES.map((type) => (
                <MenuButtonMulti
                  title={TYPE_HELPER(type)}
                  active={job.keywords.indexOf(type) > -1 ? true : false}
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
                />
              ))}
            {(page === -1 || page === 4) &&
              CREATOR_TYPES.map((type) => (
                <MenuButtonMulti
                  title={TYPE_HELPER(type)}
                  active={job.keywords.indexOf(type) > -1 ? true : false}
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
                />
              ))}
          </Column>
        </div>
      </Column>
    </CardComponent>
  );
}
