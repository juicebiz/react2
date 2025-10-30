export default function initProductsApi(http){
  return {
    async all(){
      const response = await http.get('/products/index.php', { params: { delay: true } })
      return response.data;
    },
    async get(id){
      const response = await http.get('/products/index.php', { params: { id, delay: true } })
      return response.data;
    }
  }
}