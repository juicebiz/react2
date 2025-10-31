import initHttp from "@/shared/http";
import initApi from "./index";

const baseURL = "https://faceprog.ru/courseapi";

const http = initHttp(baseURL);
const api = initApi(http);

export { http, api };