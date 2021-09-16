import React from 'react';
import { Column, MenuButtonStandard } from '../../../components';
import { randomKey } from '../../../utils';

export default function OnlineStores({ webshops }) {
  return (
    <Column w="100%">
      <Column w={300}>
        {webshops.map((webshop, index) => (
          <a
            href={`${webshop.url}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', width: '100%' }}
            key={randomKey()}
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
