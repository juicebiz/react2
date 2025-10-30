import initApp from "./application";


export default function initServerApp(){
  const { app } = initApp();

  // get url, router push url, wait async data etc

  return { app };
}