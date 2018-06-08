export const routes = {
  DASHBOARD: {
    screen: 'home.dashboard',
    title: 'Dashboard',
    navigatorButtons: {
      rightButtons: [
        {
          title: 'Add',
          id: 'add-employee',
          buttonFontSize: 14, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
          buttonFontWeight: '600', // Set font weight for the button (can also be used in setButtons function to set different button style programatically)
        },
      ],
      fab: {
        collapsedId: 'share',
        collapsedIcon: require('../../img/edit.png'),
        expendedId: 'clear',
        expendedIcon: require('../../img/edit.png'),
        backgroundColor: '#ff505c',
        actions: [
          {
            id: 'mail',
            icon: require('../../img/edit.png'),
            backgroundColor: '#03A9F4'
          },
          {
            id: 'delete',
            icon: require('../../img/delete.png'),
            backgroundColor: '#4CAF50'
          }
        ]
      },
    }
  },
  LOGIN: {
    screen: 'user.login',
    title: 'Welcome',
    navigatorStyle: {
      navBarHidden: true
    },
  },
}