function init () {
  const p = document.querySelector("p");
  console.log(p);
}

document.addEventListener('DOMContentLoaded', init());

let add = function (x, y, z) {
  const x = x;
  const y = y;
  const z = z;
  let result;

  while (x < z) {
     result = x + z;
    return result;
}
}