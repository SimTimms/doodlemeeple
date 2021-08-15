export default function inviteMenuSecondary(counts, pageValues, onClickEvent) {
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
      count: counts.inviteList,
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
