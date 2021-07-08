import React from 'react';
import { Row } from '../../../components';
import * as badges from '../../../assets/badge';

export default function Badges({ creative }) {
  return !creative.badges ? null : (
    <Row pl={5}>
      {creative.badges.map((badge, index) => {
        if (index > 3) {
          return null;
        }
        const badgeArr = [];
        badgeArr.push(
          <img
            src={badges[badge.badgeIcon]}
            title={badge.description}
            key={`badge_${index}_${creative._id}`}
            style={{ maxHeight: 16, maxWidth: 16, margin: 2 }}
            alt=""
          />
        );

        return badgeArr;
      })}
    </Row>
  );
}
