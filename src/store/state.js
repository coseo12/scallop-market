export default {
  // App Component
  alerts: {
    // type : success, info, warningm error
    items: [
      {
        id: '1',
        type: 'error',
        msg: "I'm an error alert.",
        error: '',
      },
      {
        id: '2',
        type: 'info',
        msg: "I'm an info alert.",
        error: '',
      },
    ],
  },
  // Navigation drawers
  navigation_drawers: {
    dialog: false,
    drawer: null,
    items: [
      { icon: 'mdi-information', text: 'About', target: '/about' },
      { icon: 'mdi-ferry', text: 'Work Gallery', target: '/gallery' },
      { icon: 'mdi-shopping-outline', text: 'Market', target: '/market' },
      { icon: 'mdi-help-circle', text: 'Help', target: '/Help' },
      { icon: 'mdi-settings', text: 'Management', target: '/management' },
    ],
  },
  // market
  market: {
    items: [
      {
        id: 1,
        title: 'title1',
        subtitle: 'subtitle1',
        text: 'text1',
        src: 'https://picsum.photos/500/300?image=9',
      },
      {
        id: 2,
        title: 'title2',
        subtitle: 'subtitle2',
        text: 'text2',
        src: 'https://picsum.photos/500/300?image=10',
      },
      {
        id: 3,
        title: 'title3',
        subtitle: 'subtitle3',
        text: 'text3',
        src: 'https://picsum.photos/500/300?image=11',
      },
      {
        id: 4,
        title: 'title4',
        subtitle: 'subtitle4',
        text: 'text4',
        src: 'https://picsum.photos/500/300?image=12',
      },
      {
        id: 5,
        title: 'title5',
        subtitle: 'subtitle5',
        text: 'text5',
        src: 'https://picsum.photos/500/300?image=13',
      },
      {
        id: 6,
        title: 'title6',
        subtitle: 'subtitle6',
        text: 'text6',
        src: 'https://picsum.photos/500/300?image=14',
      },
      {
        id: 7,
        title: 'title7',
        subtitle: 'subtitle7',
        text: 'text7',
        src: 'https://picsum.photos/500/300?image=8',
      },
    ],
  },
  //CartComponent
  cart: {
    items: [
      {
        id: 1,
        headline: 'headline1',
        subtitle: 'subtitle1',
        text: 'text1',
        src: 'https://picsum.photos/500/300?image=15',
      },
      {
        id: 2,
        headline: 'headline2',
        subtitle: 'subtitle2',
        text: 'text2',
        src: 'https://picsum.photos/500/300?image=16',
      },
    ],
  },
  work_gallery: {
    items: [
      {
        id: 1,
        headline: 'headline1',
        subtitle: 'subtitle1',
        text: 'text1',
        src: 'https://picsum.photos/500/300?image=15',
      },
      {
        id: 2,
        headline: 'headline2',
        subtitle: 'subtitle2',
        text: 'text2',
        src: 'https://picsum.photos/500/300?image=16',
      },
      {
        id: 3,
        headline: 'headline3',
        subtitle: 'subtitle3',
        text: 'text3',
        src: 'https://picsum.photos/500/300?image=17',
      },
      {
        id: 4,
        headline: 'headline4',
        subtitle: 'subtitle4',
        text: 'text4',
        src: 'https://picsum.photos/500/300?image=18',
      },
      {
        id: 5,
        headline: 'headline5',
        subtitle: 'subtitle5',
        text: 'text5',
        src: 'https://picsum.photos/500/300?image=19',
      },
      {
        id: 6,
        headline: 'headline6',
        subtitle: 'subtitle6',
        text: 'text6',
        src: 'https://picsum.photos/500/300?image=20',
      },
      {
        id: 7,
        headline: 'headline7',
        subtitle: 'subtitle7',
        text: 'text7',
        src: 'https://picsum.photos/500/300?image=21',
      },
    ],
  },
};
