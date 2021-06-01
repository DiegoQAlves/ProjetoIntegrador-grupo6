const { Usuario } = require("../models");
const Bcrypt = require("bcrypt");

const userController = {
  create: (_req, res) => res.render("auth/register"),
  store: async (req, res) => {
    const { name, email, username, password } = req.body;

    const usuario = await Usuario.create({
      nome: name,
      email: email,
      senha: Bcrypt.hashSync(password, 10)
    });

    if (!usuario) {
      return res.send("Houve um erro ao salvar o usuario");
    }

    return res.redirect("/home");
  },
};

module.exports = userController;
