// The URL of the JSON file containing quotes.
const apiUrl = 'quotes.json'; 

//  HTML elements for interaction.
const quoteElement = document.getElementById('quote');
const generateButton = document.getElementById('generate');

//  Defining a function to fetch a random quote.
const fetchRandomQuote = async () => {
    try {
        //  Fetching data from the JSON file using the Fetch API.
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();

        //  Getting a random quote from the data.
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomQuote = data[randomIndex];

        // Displaying the random quote.
        quoteElement.textContent = `"${randomQuote.text}" - ${randomQuote.author}`;
    } catch (error) {
        console.error(error);
        quoteElement.textContent = 'Failed to fetch a quote. Please try again later.';
    }
};

generateButton.addEventListener('click', fetchRandomQuote);

fetchRandomQuote();
