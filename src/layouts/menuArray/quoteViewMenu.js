export default function quoteViewMenu(menu) {
  return [
    {
      name: 'Back',
      icon: 'chevron_left',
      machineName: 'back',
      link: () =>
        menu.updateMenuContext({
          ...menu,
          jobPage: {
            ...menu.jobPage,
            secondaryPage: 'quotes_in',
          },
        }),
      count: null,
    },
    {
      name: 'Quote Details',
      icon: 'local_activity',
      machineName: 'view_quote',
      link: () =>
        menu.updateMenuContext({
          ...menu,
          jobPage: {
            ...menu.jobPage,
            secondaryPage: 'view_quote',
          },
        }),
      count: null,
    },
    menu.jobPage.contractId
      ? {
          name: 'Contract',
          icon: 'local_activity',
          machineName: 'contract',
          link: () =>
            menu.updateMenuContext({
              ...menu,
              jobPage: {
                ...menu.jobPage,
                secondaryPage: 'contract',
              },
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
