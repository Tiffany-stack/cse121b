/* LESSON 3 - Programming Tasks */

/* Profile Object  */
document.addEventListener('DOMContentLoaded', function () {
    // Your code for adding elements here

    let myProfile = {
        name: "Tiffany Nocos"
    }

    // Use forward slashes in the file path for the photo
    myProfile.photo = "C:\Users\User\Desktop\cse121b\scripts\face.jpg";

    myProfile.favoriteFoods = [
        'Pizza',
        'Burrito',
        'Ice Cream',
        'Burger',
        'Apple Pie'
    ];

    /* Populate Profile Object with placesLive objects */

    myProfile.hobbies = ['Reading', 'Gaming', 'Listening to Music', 'Playing Tennis'];

    myProfile.placesLived = [];

    myProfile.placesLived.push(
        {
            place: 'Cebu, Philippines',
            length: '1 year'
        },
        {
            place: 'Lapu-Lapu City, Philippines',
            length: '18 years'
        }
    );

    /* DOM Manipulation - Output */

    document.querySelector('#name').textContent = myProfile.name;

    document.querySelector('#photo').src = myProfile.photo;

    document.querySelector('#photo').alt = myProfile.name;

    const favoriteFoodsList = document.querySelector('#favorite-foods');

    myProfile.favoriteFoods.forEach(food => {
        const listItem = document.createElement('li');
        listItem.textContent = food;
        favoriteFoodsList.appendChild(listItem);
    });

    /* Name */

    /* Photo with attributes */


    /* Favorite Foods List*/
    // Create a list of favorite foods
    myProfile.favoriteFoods.forEach(food => {
        // Create a new <li> element for each food
        let li = document.createElement('li');
        li.textContent = food;

        // Append each <li> element to the <ul> element with the ID "favorite-foods"
        document.querySelector('#favorite-foods').appendChild(li);
    });

    /* Hobbies List */

    // Create a list of hobbies
    myProfile.hobbies.forEach(hobby => {
        // Create a new <li> element for each hobby
        let li = document.createElement('li');
        li.textContent = hobby;

        // Append each <li> element to the <ul> element with the ID "hobbies"
        document.querySelector('#hobbies').appendChild(li);
    });

    /* Places Lived DataList */

    // Create a list of places lived
    myProfile.placesLived.forEach(place => {
        // Create a <dt> element for the place
        let dt = document.createElement('dt');
        dt.textContent = place.place;

        // Create a <dd> element for the length
        let dd = document.createElement('dd');
        dd.textContent = place.length;

        // Append the <dt> and <dd> elements to the <dl> element with the ID "places-lived"
        document.querySelector('#places-lived').appendChild(dt);
        document.querySelector('#places-lived').appendChild(dd);
    });

});
