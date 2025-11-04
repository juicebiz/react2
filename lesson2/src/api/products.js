import timeout from "@/shared/promises";

export default function initProductsApi(http){
  return {
    async all(){
      const response = await http.get('/products/index.php', { params: { delay: true } })
      return response.data;
    },
    async get(id){
      const response = await http.get('/products/index.php', { params: { id, delay: true } })
      return response.data;
    },
    async gallery(id){
      const response = await http.get('/products/gallery.php', { params: { id, err: true } })
      return response.data;
    },
    async add({ title, price, rest }){
      return timeout(500).then(() => {
        if(Math.random() > 0.95){
          return Promise.reject({
            status: 500
          })
        }
        
        const errors = {};

        if(!price){
          errors.price = 'required';
        }

        if(!rest){
          errors.rest = 'required';
        }

        if(!title){
          errors.title = 'required';
        }
        else if(title.length < 5){
          errors.title = 'len,5';
        }

        if(Object.keys(errors).length < 1){
          return { id: 1000, title, price, rest }
        }       

        return Promise.reject({
          status: 422,
          data: errors
        })
      })
    }
  }
}