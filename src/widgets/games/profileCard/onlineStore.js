import React from 'react';
import {
  Row,
  Column,
  MenuButtonStandard,
  DividerMini,
  DividerWithBorder,
} from '../../../components';

export default function OnlineStores({ webshops }) {
  return (
    <Column w="100%">
      <DividerWithBorder />
      <Column w={300}>
        {webshops.map((webshop, index) => (
          <a
            href={`${webshop.url}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', width: '100%' }}
          >
            <MenuButtonStandard
              title={`${webshop.name} ${webshop.price ? 'from' : ''} ${
                webshop.price ? webshop.price : ''
              }`}
              icon="shopping_cart"
              onClickEvent={() => {}}
              mt={index > 0 && true}
              fullWidth={true}
            />
          </a>
        ))}
      </Column>
    </Column>
  );
}
