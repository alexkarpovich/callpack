class AccessControl {
  constructor(store) {
    this.store = store;
  }

  static isLoggedIn(nextState, replaceState) {
    const {auth} = this.store.getState();
    console.log(auth, 'Access Control');
    if (!auth.isAuthenticated) {
      replaceState({nextPathname: nextState.location.pathname}, '/signin')
    }
  }
}

export default AccessControl;
