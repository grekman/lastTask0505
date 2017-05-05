function f2(event) {
  console.log(event);

  if (event.key=='Escape' ) {
   document.querySelector('.test').style.left = '-70vh';
 }
 else if (event.key=='m' ) {
  document.querySelector('.test').style.left = '0';
}
}

function f1(event) {
  console.log(event);
   document.querySelector('.test').style.left = '0';
}

function f3(event) {
  console.log(event);
  document.querySelector('.test').style.left = '-70vh';
}

document.addEventListener('keydown', f2)
document.querySelector('.test').addEventListener('mouseover',f1)
document.querySelector('.test').addEventListener('mouseout',f3)
