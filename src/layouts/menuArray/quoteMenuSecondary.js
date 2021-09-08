export default function quoteMenuSecondary(counts, menu) {
  return [
    {
      name: 'Quote List',
      icon: 'local_activity',
      machineName: 'quote_list',
      link: () =>
        menu.updateMenuContext({
          ...menu,
          workPage: {
            ...menu.workPage,
            secondaryPage: 'quote_list',
            jobId: null,
            inviteId: null,
          },
        }),
      count: counts.quote_list,
    },
    menu.workPage.contractId
      ? {
          name: 'Editing Quote',
          icon: 'local_activity',
          machineName: 'view_quote',
          link: () =>
            menu.updateMenuContext({
              ...menu,
              workPage: {
                ...menu.workPage,
                secondaryPage: 'view_quote',
                jobId: null,
                inviteId: null,
              },
            }),
          count: null,
        }
      : {
          name: 'Locked',
          icon: 'lock',
          machineName: 'view_quote',
          link: () => null,
          count: null,
          disabled: true,
        },
  ];
}
