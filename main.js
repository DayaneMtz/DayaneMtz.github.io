let app = document.getElementById('typewriter'); //funcion automatica maquina de escribir
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#7F1E57"> Tec. electromecanica Ing. en electronica y sistemas Desarrolladora web .</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
