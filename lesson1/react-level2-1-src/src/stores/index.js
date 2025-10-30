import Alerts from "./alerts";
import Auth from "./auth";
import Cart from "./cart";

export default class RootStore{
  constructor(api){
    this.cart = new Cart(this, api.cart);
    this.alerts = new Alerts(this);
    this.auth = new Auth(this);
  }
}