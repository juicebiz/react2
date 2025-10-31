import { makeAutoObservable, runInAction } from "mobx"

class Cart{
  items = [];
  token = null;
  proccessId = [];

  constructor(rootStore, cartApi){
    makeAutoObservable(this, {
      itemById: false,
      getCnt: false,
      inProccess: false
    });

    this.root = rootStore;
    this.cartApi = cartApi;
  }

  get count(){
    return this.items.length;
  }

  get total(){
    return this.items.reduce((total, item) => total + ( item.price * item.cnt ), 0);
  }

  itemById(id){
    return this.items.find(item => item.id === id);
  }

  getCnt(id){
    return this.itemById(id)?.cnt ?? 0;
  }

  inProccess(id){
    return this.proccessId.includes(id);
  }

  async load(){
    const oldToken = localStorage.getItem('CART_TOKEN');
    const { cart, token, needUpdate } = await this.cartApi.load(oldToken);

    if(needUpdate){
      localStorage.setItem('CART_TOKEN', token);
    }
   
    runInAction(() => {
      this.token = token;
      this.items = cart;
    });
  }

  add = this.withProccessControl(async function(id, { title, price, cnt }){
    const res = await this.cartApi.add(this.token, id);

    if(res){
      runInAction(() => this.items.push({ id, title, price, cnt }));
    }
  }, 'Ошибка при добавлении товара');

  remove = this.withProccessControl(async function(id){
    const res = await this.cartApi.remove(this.token, id);

    if(res){
      const index = this.items.findIndex(i => i.id === id);

      if(index !== -1){
        runInAction(() => this.items.splice(index, 1));
      }
    }
  }, 'Ошибка при удалении товара');

  change = this.withProccessControl(async function(id, cnt){
    const item = this.itemById(id);

    if(item && cnt > 0){
      const res = await this.cartApi.change(this.token, id, cnt);

      if(res){
        runInAction(() => item.cnt = cnt); 
      }
    }
  }, 'Ошибка при изменении количества товара');

  clean(){
    this.items.splice(0, this.items.length);
  }

  withProccessControl(fn, errMsg){
    return async function(id, ...args){
      if(this.inProccess(id)){
        return;
      }

      this.proccessId.push(id);

      try{
        const res = await fn.call(this, id, ...args);
        return res;
      }
      catch(e){
        this.root.alerts.add(errMsg);
        console.log(e);
        // show notice 
      }
      finally{
        const index = this.proccessId.findIndex(i => i === id);

        if(index !== -1){
          runInAction(() => this.proccessId.splice(index, 1));
        }
      }
    }
  }
}

export default Cart;