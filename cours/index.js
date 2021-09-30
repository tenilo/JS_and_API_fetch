//XMLHttpRequest
/*
function reqListener(){
   // console.log(this.responseText);
}
let req = new XMLHttpRequest();
req.onload = reqListener;
//req.open('get', 'data.txt', true);
//req.open('get', 'data.json', true)
req.open('get', 'https://api.blablagues.net/?rub=blagues', true)
req.send();

//-------------------------------------
// Methode fetch
// pour un fichier texte
fetch("data.txt")
  .then((res) => res.text())
  .then((data) => console.log(data));
//pour un fichier json
fetch("data.json")
  .then((res) => res.json())
  .then((data) => console.log(data));



const myHeaders = new Headers();
  const init = {
    method: "GET",
    headers: myHeaders, //objet avec des méthodes à l'intérieur
    mode: "cors", // mode de transmission
    cache: "default",
  };
  fetch("data.json", init).then((res) => console.log(res));

  //CRUD => Create (POST), Read (Get), Update (PUT), Delete (DELETE)
  */

  const init2 = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ // transformation de l'objet à envoyer en json
      pseudo: "From Scratch",
      message: "yo les gens!",
    }),
    mode: "cors",
    credentials: "same-origin",
  }
  
  document.querySelector("form").addEventListener("submit", () =>{
    fetch('http://localhost:3000/posts', init2).then(() => 
    console.log("data envoyée")
    );
  });
  
  // Asynchrone
  setTimeout(() =>{
    console.log("test");
  }, 2000);

  //async/await
  async function fetchData(){
    await fetch('monlien')
    // attend que le await soit exécuté avant de faire la suite
    executeFonction();
  }

  