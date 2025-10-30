import axios from 'axios'

const http = axios.create({
  baseURL: 'https://faceprog.ru/courseapi',
  timeout: 10000
});

http.id = Math.random();

export default http;