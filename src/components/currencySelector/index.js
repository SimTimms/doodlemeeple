import React, { useEffect } from 'react';
import { MenuItem, Select } from '@material-ui/core';
import { useStyles } from './styles';
import autosave from '../../utils/autosave';

export default function CurrencySelector({
  selectedCurrency,
  onChangeEvent,
  contract,
  mutation,
}) {
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
        onChange={(e) => {
          autosave(mutation, 'currency');
          onChangeEvent({ ...contract, currency: e.target.value });
        }}
        label="Age"
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
