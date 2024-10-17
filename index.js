const Numbers = [];

const createNumbers = function () {
  const tabellaNumbers = document.getElementById("tombola");
  for (let i = 0; i < 76; i++) {
    Numbers.push([]);
    const numbersCellsDiv = document.createElement("div");
    numbersCellsDiv.classList.add("cells");

    const numbersCellsH3 = document.createElement("h3");
    numbersCellsH3.innerText = i + 1;
    numbersCellsH3.classList.add("numbersh3");

    numbersCellsDiv.appendChild(numbersCellsH3);
    tabellaNumbers.appendChild(numbersCellsDiv);
  }
};
createNumbers();

const createButton = function () {
  const button = document.createElement("button");
  button.innerText = "Estrai numero";
  button.style.textAlign = "center";
  button.style.padding = "20px 20px";
  button.style.fontSize = "16px";
  button.style.cursor = "pointer";
  button.style.margin = "2rem";

  button.onclick = function () {
    const RandomNumbers = Math.floor(Math.random() * 76) + 1;
    console.log(RandomNumbers);
    const selectedNumbers = document.getElementsByClassName("numbersh3");
    selectedNumbers[RandomNumbers].style.backgroundColor = "pink";
    const selectedNumberscartellina = document.getElementsByClassName("numbersCartellina");
    selectedNumberscartellina[RandomNumbers].style.backgroundColor = "pink";
  };
  const div1 = document.getElementById("tombola");
  div1.classList.add ("div1");
  div1.appendChild(button);
};


createButton();

const numbersCartellina = [];
const createCartellina = function () {
const cartellina = document.getElementById("cartellina");
    for (let i = 0; i < 24; i ++ ) {
        numbersCartellina.push ([]);
        const numbersH3 = document.createElement("h3");
        numbersH3.innerText = i +1;
        numbersH3.classList.add ("numbersCartellina");
        const cartellinaDiv = document.createElement ("div");
        cartellinaDiv.classList.add("cartellinaDiv");

        cartellinaDiv.appendChild(numbersH3);
        cartellina.appendChild(cartellinaDiv);
    }
    };
    createCartellina ();

