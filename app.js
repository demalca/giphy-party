console.log("Let's get this party started!");

const gifsCollection = document.querySelector("#gifs");
const form = document.querySelector("form");
const input = document.querySelector("#query");

addEventListener("submit", function (e) {
  e.preventDefault();
  getGiphy();
  form.reset();
});

async function getGiphy() {
  const query = input.value;
  console.log(query);
  const giphy = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: query,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
    },
  });
  console.log(giphy, giphy.data);
  addGiphy(giphy.data);
}

function addGiphy(giphy) {
  let count = giphy.data.length;
  let pick = Math.floor(Math.random() * count);
  let gifURL = giphy.data[pick].images.original.url;
  console.log(pick, giphy.data[pick].images.original.url);

  let newDiv = document.createElement("div");
  let gif = document.createElement("img");

  gif.src = gifURL;
  newDiv.append(gif);
  console.log(gif, gif.src);
  gifsCollection.append(newDiv);
}

addEventListener("click", function (e) {
  if (e.target.type === "button") {
    while (gifsCollection.firstChild) {
      gifsCollection.removeChild(gifsCollection.firstChild);
    }
  }
});
