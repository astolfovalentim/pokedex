const express = require("express");
const res = require("express/lib/response");
const path = require("path");
const app = express();
let message = "";

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const menu = [
  {
    title: "pokedex",
    link: "/",
  },
  {
    title: "adicionar",
    link: "/cadastro",
  },
];

const pokedex = [
  {
    id: 1,
    nome: "Bulbasaur",
    descricao:
      "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    tipo: "Grass",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    altura: "0,7m",
    peso: "6,9kg",
    categoria: "Seed",
    habilidade: "Overgrow",
  },
  {
    id: 2,
    nome: "Charmander",
    descricao:
      "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    tipo: "Fire",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    altura: "0,6m",
    peso: "8,5kg",
    categoria: "Lizard",
    habilidade: "Blaze",
  },

  {
    id: 3,
    nome: "Squirtle",
    descricao:
      "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
    tipo: "Water",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    altura: "0,5m",
    peso: "9,0kg",
    categoria: "Tiny Turtle",
    habilidade: "Torrent",
  },
  {
    id: 4,
    nome: "Pikachu",
    descricao:
      "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
    tipo: "Eletric",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    altura: "0,4m",
    peso: "6,0kg",
    categoria: "Mouse",
    habilidade: "Static",
  },
];
let pokemon = undefined;

//Rotas
app.get("/", (req, res) => {
  setTimeout(() => {
    message = "";
  }, 5000);
  res.render("index", { pokedex, pokemon, menu, message });
});

app.post("/create", (req, res) => {
  const pokemon = req.body;
  pokemon.id = pokedex.length + 1;
  pokedex.push(pokemon);
  message = "Pokemon foi cadastrado com sucesso!";
  res.redirect("/");
});

app.get("/detalhes/:id", (req, res) => {
  const id = req.params.id - 1;

  res.render("detalhes", { pokedex, id, menu });
});

app.get("/cadastro", (req, res) => {
  res.render("cadastro", { pokedex, menu });
});

app.listen(3000, () =>
  console.log("Servidor rodando em http:// localhost:3000")
);
