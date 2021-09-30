
// web API: ce sont les api du navigateur
/**
 * nous avons le localStorage
 */
localStorage.data = "je stock une mangue";
localStorage.removeItem("data");

/**
 * sessionStorage: ce sont nous données stockées lorsque nous 
 * sommes sur une page de navigation, elle est perdue une fois que l'on quitte la page
 contrairement au localStorage dont les données de navigation sont stockées pendant longtemps 
*/
sessionStorage.dataSettings = "55px";

sessionStorage.clear();

/**
 * les cookies sont des données qui sont envoyées d'un server ver un navigateur,
 * ensuite le cookie est stocké dans le navigateur
 */
