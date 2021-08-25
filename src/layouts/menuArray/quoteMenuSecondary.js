export default function quoteMenuSecondary(counts, pageValues, onClickEvent) {
  return [
    {
      name: 'Quote List',
      icon: 'local_activity',
      machineName: 'quote_list',
      link: () =>
        onClickEvent({
          ...pageValues,
          secondaryPage: 'quote_list',
          jobId: null,
          inviteId: null,
        }),
      count: counts.quote_list,
    },
    pageValues.contractId
      ? {
          name: 'Editing Quote',
          icon: 'local_activity',
          machineName: 'view_quote',
          link: () =>
            onClickEvent({
              ...pageValues,
              secondaryPage: 'view_quote',
              jobId: null,
              inviteId: null,
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
