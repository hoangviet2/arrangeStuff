import {getUserInformation, a, getCache} from './firebase-config.js'
import {LocalUser, isEmpty, triples} from './userInfo.js'
let idiot = document.getElementById("user-Name");
let greenFlag = document.getElementById("Green Flag");
let redFlag = document.getElementById("Red Flag");
let yellowFlag = document.getElementById("Yellow Flag");
let decodedCookie = decodeURIComponent(document.cookie);
console.log(decodedCookie);
async function fecthData(){
  //let data = await getUserInformation();
  const data = await getUserInformation();
  return new Promise(resolve => setTimeout(resolve,5000,data));
}
async function put(){
  idiot.innerHTML = '';
  redFlag.innerHTML = '';
  yellowFlag.innerHTML = '';
  greenFlag.innerHTML = '';
  const data = await fecthData();
  //console.log(a);
  idiot.innerHTML = "Xin chào " + LocalUser.full_name;
  redFlag.innerHTML = triples.reds;
  yellowFlag.innerHTML = triples.yellows;
  greenFlag.innerHTML = triples.greens;
}
put();