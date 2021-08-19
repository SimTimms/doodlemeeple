export default function quoteViewMenu(pageValues, setPageValues) {
  return [
    {
      name: 'Back',
      icon: 'chevron_left',
      machineName: 'back',
      link: () =>
        setPageValues({
          ...pageValues,
          secondaryPage: 'quotes_in',
        }),
      count: null,
    },
    {
      name: 'Quote Details',
      icon: 'local_activity',
      machineName: 'view_quote',
      link: () =>
        setPageValues({
          ...pageValues,
          secondaryPage: 'view_quote',
        }),
      count: null,
    },
    pageValues.contractId
      ? {
          name: 'Contract',
          icon: 'local_activity',
          machineName: 'contract',
          link: () =>
            setPageValues({
              ...pageValues,
              secondaryPage: 'contract',
            }),
          count: null,
        }
      : {
          name: 'Locked',
          icon: 'lock',
          machineName: 'contract',
          link: () => null,
          count: null,
          disabled: true,
        },
  ];
}
