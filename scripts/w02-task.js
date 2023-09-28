/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Tiffany Claire Nocos';
let currentYear = '2023'
let profilePicture = '/absolute/path/to/images/face.jpg';



/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector(`img[src="${profilePicture}"]`);

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
const favoriteFoods = ["Pizza", "Sushi", "Chocolate", "Burgers", "Ice Cream"];
foodElement.textContent = favoriteFoods.join(', ');
const additionalFavoriteFood = "Tacos";
favoriteFoods.push(additionalFavoriteFood);
foodElement.innerHTML = favoriteFoods.join('<br>'); 




