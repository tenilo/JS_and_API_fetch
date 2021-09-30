
const header = document.getElementById('header');
const content = document.getElementById('content');


function getJoke(){
 fetch("https://api.blablagues.net/?rub=blagues")
   .then((res) => res.json())
   .then((data) => {
      header.textContent = data.data.content.text_head;
      content.textContent = data.data.content.text !== "" 
        ? data.data.content.text
        : data.data.content.text_hidden;
    });

}
getJoke();
// on signifie que lorsqu'on clique sur le body, la fonction getJoke doit être exécutée
document.body.addEventListener("click", getJoke);

