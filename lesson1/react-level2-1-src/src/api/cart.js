export default function initCartApi(http){
  return {
    async load(token = null){
      const response = await http.get('/cart/load.php', { params: { token } })
      return response.data;
    },
    async add(token, id){
      const response = await http.get('/cart/add.php', { params: { token, id } })
      return response.data;
    },
    async remove(token, id){
      const response = await http.get('/cart/remove.php', { params: { token, id } })
      return response.data;
    },
    async change(token, id, cnt){
      const response = await http.get('/cart/change.php', { params: { token, id, cnt } })
      return response.data;
    }
  }
}

/* export default class CartApi{
  constructor(http){
    this.http = http;
  }

  async load(token = null){
    const response = await this.http.get('/cart/load.php', { params: { token } })
    return response.data;
  }

  async add(token, id){
    const response = await this.http.get('/cart/add.php', { params: { token, id } })
    return response.data;
  }

  async remove(token, id){
    const response = await this.http.get('/cart/remove.php', { params: { token, id } })
    return response.data;
  }

  async change(token, id, cnt){
    const response = await this.http.get('/cart/change.php', { params: { token, id, cnt } })
    return response.data;
  }
} */