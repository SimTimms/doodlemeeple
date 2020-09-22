import React, { useEffect } from 'react';
import { MenuItem, Select } from '@material-ui/core';
import { useStyles } from './styles';

export default function CurrencySelector({ selectedCurrency, onChangeEvent }) {
  const [currency, setCurrency] = React.useState(0);
  const currencyArray = ['GBP', 'USD', 'EUR'];

  useEffect(() => {
    setCurrency(selectedCurrency);
  }, [selectedCurrency]);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={currency}
        onChange={(e) => {
          onChangeEvent(e.target.value);
        }}
        label="Age"
        style={{ borderRadius: 5, marginLeft: 10 }}
      >
        {currencyArray.map((item, index) => {
          return (
            <MenuItem key={`currency_${index}`} value={item}>
              {item}
            </MenuItem>
          );
        })}
      </Select>
    </div>
  );
}
