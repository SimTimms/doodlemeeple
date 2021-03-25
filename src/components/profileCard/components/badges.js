import React from 'react';
import { useStyles } from './styles';
import { Row } from '../../';
import * as badges from '../../../assets/badge';

export default function Badges({ creative }) {
  return !creative.badges ? null : (
    <Row j="flex-start" pl={5}>
      {creative.badges.map((badge, index) => {
        if (index > 3) {
          return;
        }
        const badgeArr = [];
        badgeArr.push(
          <img
            src={badges[badge.badgeIcon]}
            title={badge.description}
            key={`badge_${index}_${creative._id}`}
            style={{ maxHeight: 16, maxWidth: 16, margin: 2 }}
          />
        );

        return badgeArr;
      })}
    </Row>
  );
}
