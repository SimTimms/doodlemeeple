export default function inviteMenuSecondary(pageValues, onClickEvent) {
  return [
    {
      name: 'Invite List',
      icon: 'local_activity',
      machineName: 'invite_list',
      link: () =>
        onClickEvent({
          ...pageValues,
          secondaryPage: 'invite_list',
          jobId: null,
          inviteId: null,
        }),
      count: null,
    },
    {
      name: 'Quotes',
      icon: 'local_activity',
      machineName: 'quotes',
      link: () =>
        onClickEvent({
          ...pageValues,
          secondaryPage: 'quotes',
          jobId: null,
          inviteId: null,
        }),
      count: null,
    },
    pageValues.inviteId
      ? {
          name: 'Viewing Invite',
          icon: 'local_activity',
          machineName: 'view_invite',
          link: () =>
            onClickEvent({
              ...pageValues,
              secondaryPage: 'view_invite',
              jobId: null,
              inviteId: null,
            }),
          count: null,
        }
      : {
          name: 'Locked',
          icon: 'lock',
          machineName: 'view_invite',
          link: () => null,
          count: null,
          disabled: true,
        },
  ];
}
