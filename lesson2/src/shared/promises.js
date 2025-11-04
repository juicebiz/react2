export default function timeout(time){
  return new Promise(r => {
    setTimeout(r, time);
  })
}