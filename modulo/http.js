const http = require("http");

http.createServer(router).listen(3000);

function router(req, res) {
  console.log("Nueva peticion");
  console.log(req.url);

  switch (req.url) {
    case "/hola":
      res.write("Hola cliente");
      res.end();
      break;

    default:
      res.write("Error 404");
      res.end();
  }
}

console.log("Escuchando al puerto 3000");
