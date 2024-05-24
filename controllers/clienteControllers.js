const database = require('..//database/models');


var clienteController = {
    geral: async (req, res) => {
        return await res.send('Página de Clientes')
    },
    cadastro: async (req, res) => {
        return await res.render("cadastroCliente")
    },
    registro: async (req, res) => {
        let {
            nomeCliente,
            codeNomeCLiente,
            idadeCliente,
            emailCliente,
            numeroCliente,
            generoCliente
        } = req.body;

        let userCliente = await database.UserCliente.create({
            nomeCliente,
            codeNomeCLiente,
            idadeCliente,
            emailCliente,
            numeroCliente,
            generoCliente
        });

        return res.json(userCliente)
    }
}


module.exports = clienteController;