import { makeAutoObservable, runInAction } from "mobx"

class Alerts{
  messages = [];
  ai = 0;

  constructor(rootStore){
    makeAutoObservable(this, {
      ai: false
    });

    this.root = rootStore;
  }

  add(text, type = 'danger'){
    const id = ++this.ai;
    this.messages.push({ id, text, type });

    setTimeout(() => {
      const index = this.messages.findIndex(msg => msg.id === id);

      if(index > -1){
        runInAction(() => this.messages.splice(index, 1));
      }
    }, 5000);
  }
}

export default Alerts;