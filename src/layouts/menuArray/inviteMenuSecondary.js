export default function inviteMenuSecondary(counts, menu) {
  return [
    {
      name: 'Invite List',
      icon: 'local_activity',
      machineName: 'invite_list',
      link: () =>
        menu.updateMenuContext({
          ...menu,
          workPage: {
            ...menu.workPage,
            secondaryPage: 'invite_list',
            jobId: null,
            inviteId: null,
          },
        }),
      count: counts.inviteList,
    },
    menu.workPage.inviteId
      ? {
          name: 'Viewing Invite',
          icon: 'local_activity',
          machineName: 'view_invite',
          link: () =>
            menu.updateMenuContext({
              ...menu,
              workPage: {
                ...menu.workPage,
                secondaryPage: 'view_invite',
                jobId: null,
                inviteId: null,
              },
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
