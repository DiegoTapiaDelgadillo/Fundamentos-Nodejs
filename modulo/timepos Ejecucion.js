let suma = 0;
console.time("bucle");
for (let i = 0; i < 1000; i++) {
  suma += 1;
}
console.timeEnd("bucle");

function asincorna() {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log("Termina el proceso");
      resolve();
    });
  }, 1000);
}

console.time("asyc");
asincorna().then(() => {
  console.timeEnd("asyc");
});
