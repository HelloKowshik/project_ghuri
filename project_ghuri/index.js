var result = document.querySelector('.result');
var r = document.querySelector('.d');
function setTime(){
let date = new Date();
result.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
var d = new Date();
setInterval(setTime,1000);
r.innerHTML = `${d.toDateString()}`;
