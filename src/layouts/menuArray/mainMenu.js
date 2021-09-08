import Cookies from 'js-cookie';

export default function mainMenu(history, counts, mainMenuContext) {
  return [
    {
      name: 'Home',
      icon: 'home',
      machineName: 'home',
      link: () =>
        mainMenuContext.updateMenuContext({
          primaryPage: 'home',
          jobPage: { ...mainMenuContext.jobPage },
          workPage: { ...mainMenuContext.workPage },
          homePage: { primaryPage: 'community', secondaryPage: 'dashboard' },
        }),
      count: null,
    },
    /* {
      name: 'Notifications',
      icon: 'notifications',
      machineName: 'tasks',
      link: () =>
        mainMenuContext.updateMenuContext({
          primaryPage: 'tasks',
          jobPage: { ...mainMenuContext.jobPage },
          workPage: { ...mainMenuContext.workPage },
          homePage: { ...mainMenuContext.homePage },
        }),
      count: null,
    },*/
    {
      name: 'Job Ads',
      icon: 'post_add',
      machineName: 'jobs',
      link: () =>
        mainMenuContext.updateMenuContext({
          primaryPage: 'jobs',
          jobPage: { ...mainMenuContext.jobPage },
          workPage: { ...mainMenuContext.workPage },
          homePage: { ...mainMenuContext.homePage },
        }),
      count: { icon: 'star', count: counts.jobAds },
    },
    {
      name: 'Work',
      icon: 'work',
      machineName: 'work',
      link: () =>
        mainMenuContext.updateMenuContext({
          primaryPage: 'work',
          jobPage: { ...mainMenuContext.jobPage },
          workPage: { ...mainMenuContext.workPage },
          homePage: { ...mainMenuContext.homePage },
        }),
      count: { icon: 'star', count: counts.work },
    },
    {
      name: 'Messages',
      icon: 'chat',
      machineName: 'messages',
      link: () =>
        mainMenuContext.updateMenuContext({
          primaryPage: 'messages',
          jobPage: { ...mainMenuContext.jobPage },
          workPage: { ...mainMenuContext.workPage },
          homePage: { ...mainMenuContext.homePage },
        }),
      color: '',
      count:
        counts.messages > 0
          ? { icon: 'local_post_office', count: counts.messages }
          : { icon: 'mail', count: counts.messages },
    },
    {
      name: 'Account',
      icon: 'account_circle',
      machineName: 'account',
      link: () =>
        mainMenuContext.updateMenuContext({
          primaryPage: 'account',
          jobPage: { ...mainMenuContext.jobPage },
          workPage: { ...mainMenuContext.workPage },
          homePage: { ...mainMenuContext.homePage },
        }),
      count: null,
    },
  ];
}
