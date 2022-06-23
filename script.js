// Stampiamo dopo 1,5,10 secondi l'orario corrente in questo formato

// "Ora" : "Minuti"
// possiamo scrivere 3 timeout diversi, oppure come bonus usiamo un array con i tempi [1,5,10].forEach

(function () {
  const getHour1 = () => {
    console.log("Ogni secondo", new Date().getHours() + ':' + new Date().getMinutes());

  const timeOut1 = setTimeout(getHour1, 1000);
  console.log({ timeOut1});
  };

  const getHour2 = () => {
    console.log(
      "Ogni 5 secondi", new Date().getHours() + ":" + new Date().getMinutes()
    );

    const timeOutId2 = setTimeout(getHour2, 5000);
    console.log({ timeOutId2 });
  };

  const getHour3 = () => {
    console.log(
      "Ogni 10 secondi", new Date().getHours() + ":" + new Date().getMinutes()
    );

    const timeOutId3 = setTimeout(getHour3, 10_000);
    console.log({ timeOutId3 });
  };

  getHour1();
  getHour2();
  getHour3();

  clearTimeout(timeOut1);
  clearTimeout(timeOutId2);
  clearTimeout(timeOutId3);
});



console.clear();
// Fare il console.log analogo a quello mostrato su time.is
(function update() {
  const clock = document.getElementById("clock");
  const date = new Date(); // (*)
  const hours = date.getHours();
  clock.children[0].innerHTML = hours;

  const minutes = date.getMinutes();
  clock.children[1].innerHTML = minutes;

  const seconds = date.getSeconds();
  clock.children[2].innerHTML = seconds;
  
  const timerId = setInterval(update, 1000);

  // console.log({ timerId });
})();

//   (function () {
//  const fn = () => {
//     console.log(new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds());
//   };

//   fn();
//   clearInterval(timerId);
//   document.body.innerHTML = `
 
// `;
//   }) ()
//   ;


//  fatto sopra:
  // Prendiamo l'esercizo 1 di Interval e stampiamo la data nel body usando document.body.innerHTML = "...""

 


  // dato un array [42, 23, 1, 7, 12, 99] estraiamo ogni secondo, come se fosse un tombola, un numero. Cancelliamo l'interval quando avremo pescato tutti i numeri possibili. tip: Contiamo quante volte abbiamo fatto partire l'intervallo