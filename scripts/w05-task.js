const cssStyles = `
  /* Your CSS styles go here */
  article {
    background: #f7f7f7;
    border: 1px solid #e1e1e1;
    border-radius: 5px;
    padding: 20px;
    margin: 10px;
    display: inline-block;
    width: 30%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  article h3 {
    font-size: 18px;
    color: #333;
    margin: 10px 0;
  }

  article img {
    width: 100%;
    height: auto;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

document.head.insertAdjacentHTML('beforeend', `<style>${cssStyles}</style>`);

const templesElement = document.getElementById('temples');
const templeList = [];

const displayTemples = (temples) => {
  temples.forEach((temple) => {
    const article = document.createElement('article');
    const h3 = document.createElement('h3');
    h3.textContent = temple.templeName;
    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.location;
    article.appendChild(h3);
    article.appendChild(img);
    templesElement.appendChild(article);
  });
};

const getTemples = async () => {
  const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
  const data = await response.json();
  templeList.push(...data);
  displayTemples(templeList);
};

const reset = () => {
  templesElement.innerHTML = '';
};

const sortBy = (temples) => {
  reset();
  const filter = document.getElementById('sortBy').value;
  switch (filter) {
    case 'utah':
      displayTemples(templeList.filter(temple => temple.location.includes('Utah')));
      break;
    case 'nonutah':
      displayTemples(templeList.filter(temple => !temple.location.includes('Utah')));
      break;
    case 'older':
      displayTemples(templeList.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
      break;
    case 'all':
      displayTemples(templeList);
      break;
  }
};

document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList) });

getTemples();
