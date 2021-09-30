let userData = [];
const fetchUser = async () => {
    await fetch('https://randomuser.me/api/?results=24')
      .then((res) => res.json())
      /* on veut passer les données des utilisateurs récupérer dans
      le tableau userData*/
      .then((data) => userData = data.results);
    console.log(userData);
};
fetchUser();
const userDisplay = async () => {
    await fetchUser();
    const dateParser = (date) => {
      let newDate = new Date(date).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric"
      })
      return newDate;
    };
    document.body.innerHTML = userData
    /**le map permet parcourir l'objet et pour chaque utilisateur
     * d'appliquer la meme fonction. Nous l'avons utilisé car nous avons 
     * une collection de 24 personnes
     */
      .map(
          (user) => 
          `
          <div class="card">
            <img src=${user.picture.large} alt="photo de ${user.name.last}">
            <h3>${user.name.first} ${user.name.last}</h3>
            <p> ${user.location.city}, ${dateParser(user.dob.date)}</p>
            <em> Membre depuis : ${user.registered.date} jours</em>
          </div>
          
          `
      )
      .join("");
};
userDisplay();

// stringify convertit en JSON
// exemple  let setting = JSON.stringify(data)

// Parse transform json en objet js
