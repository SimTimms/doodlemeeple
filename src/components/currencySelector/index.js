import React, { useEffect } from 'react';
import { MenuItem, Select } from '@material-ui/core';
import { useStyles } from './styles';

export default function CurrencySelector({ selectedCurrency }) {
  const [currency, setCurrency] = React.useState(0);
  const currencyArray = ['GBP', 'USD'];

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
        onChange={() => {}}
        label="Age"
      >
        {currencyArray.map((item) => {
          return <MenuItem value={item}>{item}</MenuItem>;
        })}
      </Select>
    </div>
  );
}
