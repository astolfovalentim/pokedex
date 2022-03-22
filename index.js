const express = require("express");
const res = require("express/lib/response");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const pokedex = [
  {
    id: 1,
    nome: "Bulbasaur",
    descricao:
      "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    tipo: "Grass",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  },
  {
    id: 2,
    nome: "Venusaur",
    descricao:
      "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
    tipo: "Grass",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
  },

  {
    id: 3,
    nome: "Squirtle",
    descricao:
      "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
    tipo: "Water",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
  },
  {
    id: 4,
    nome: "Pikachu",
    descricao:
      "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
    tipo: "Eletric",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
  },
];

//Rotas
app.get("/", (req, res) => {
  res.render("index", { pokedex });
});

app.post("/create", (req, res) => {
  const pokemon = req.body;
  pokemon.id = pokedex.length + 1;
  pokedex.push(pokemon);
  res.redirect("/");
});

app.get("/update/:id", (req, res) => {
  const id = +req.params.id;

  const pokemon = pokedex.find((pokemon) => pokemon.id === id);

  res.render("index", { pokemon, pokedex });
});

app.listen(3000, () =>
  console.log("Servidor rodando em http:// localhost:3000")
);
