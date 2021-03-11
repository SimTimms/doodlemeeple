import React from 'react';
import { useStyles } from './styles';
import { Row } from '../../';
import * as badges from '../../../assets/badge';

export default function Badges({ creative }) {
  return !creative.badges ? null : (
    <Row j="center" w="100%" pl={5}>
      {creative.badges.map((badge, index) => {
        const badgeArr = [];
        console.log(badge);
        badgeArr.push(
          <img
            src={badges[badge.badgeIcon]}
            title={badges[badge.description]}
            key={`badge_${index}_${creative._id}`}
            style={{ maxHeight: 16, maxWidth: 16, margin: 2 }}
          />
        );

        return badgeArr;
      })}
    </Row>
  );
}
