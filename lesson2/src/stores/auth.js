import { makeAutoObservable } from "mobx"

class Auth{
  user = {};

  constructor(rootStore){
    makeAutoObservable(this);
    this.root = rootStore;
  }

  get isAuth(){
    return this.user !== null;
  }

  setUser(user){
    this.user = user
  }
}

export default Auth;