import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PreviewLayout from '../layouts/preview';
import { Row, Column, Grid } from '../components';
import Icon from '@material-ui/core/Icon';
import aquila from '../assets/aquila.png';
export default function ProfileRoutes({ theme, props: { ...props } }) {
  return (
    <Switch>
      <Route
        path="/user-profile/:pathParam?"
        render={(props) => (
          <PreviewLayout {...props} theme={theme} publicView={true} />
        )}
      />
      <Route
        path="/lifetime"
        render={(props) => {
          const age = 38;
          const futureYears = 65 - age;
          const income = 40000 * futureYears;

          const total = futureYears * 30;
          const tax = (income - (income - 12000 * futureYears)) * 0.35;

          const blockAmount = income / total;
          const cTaxBlocks = (1200 * futureYears) / blockAmount;
          const carTaxBlocks =
            (120 * futureYears + 300 * futureYears) / blockAmount;
          const mortgageBlocks = 145000 / blockAmount;
          const foodBlocks = (7200 * futureYears) / blockAmount;
          const mortgageInterestBlocks = (145000 * 0.18) / blockAmount;
          const taxBlocks = tax / blockAmount;
          const arr = [];

          for (let i = 0; i < total; i++) {
            const isMortgage = i < mortgageBlocks;
            const isMortgageInterest =
              !isMortgage && i - mortgageBlocks < mortgageInterestBlocks;
            const isTax =
              !isMortgage &&
              !isMortgageInterest &&
              i - mortgageBlocks - mortgageInterestBlocks < taxBlocks;
            const isFood =
              !isMortgage &&
              !isMortgageInterest &&
              !isTax &&
              i - mortgageBlocks - mortgageInterestBlocks - taxBlocks <
                foodBlocks;
            const isCTax =
              !isMortgage &&
              !isMortgageInterest &&
              !isTax &&
              !isFood &&
              i -
                mortgageBlocks -
                mortgageInterestBlocks -
                taxBlocks -
                foodBlocks <
                cTaxBlocks;
            const isCar =
              !isMortgage &&
              !isMortgageInterest &&
              !isTax &&
              !isFood &&
              !isCTax &&
              i -
                mortgageBlocks -
                mortgageInterestBlocks -
                taxBlocks -
                foodBlocks -
                cTaxBlocks <
                carTaxBlocks;
            arr.push(
              <div
                style={{
                  background: isMortgage
                    ? '#ff7a6b'
                    : isMortgageInterest
                    ? '#ffc569'
                    : isTax
                    ? '#ff8ce8'
                    : isFood
                    ? '#d4a3ff'
                    : isCTax
                    ? '#b6adff'
                    : isCar
                    ? '#a1ceff'
                    : '#222',
                  width: 30,
                  height: 30,
                  margin: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 2,
                  border: '1px solid rgba(0,0,0,0.1)',
                }}
                title={blockAmount}
              >
                {isFood ||
                isMortgage ||
                isMortgageInterest ||
                isTax ||
                isCTax ||
                isCar ? (
                  <Icon
                    style={{
                      fontSize: 16,
                      color: 'rgba(255,255,255,0.8)',
                    }}
                  >
                    {isFood
                      ? 'lunch_dining'
                      : isMortgage
                      ? 'cottage'
                      : isMortgageInterest
                      ? 'cottage'
                      : isTax
                      ? 'paid'
                      : isCTax
                      ? 'maps_home_work'
                      : isCar
                      ? 'commute'
                      : null}
                  </Icon>
                ) : (
                  <img src={aquila} />
                )}
              </div>
            );
          }
          return (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${40}, 1fr)`,
                width: 100,
              }}
            >
              {arr}
            </div>
          );
        }}
      />
    </Switch>
  );
}
