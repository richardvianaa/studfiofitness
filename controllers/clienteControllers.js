const { formatDate } = require('date-fns');
const database = require('..//database/models');


var clienteController = {
    geral: async (req, res) => {
        let clienteAll = await database.UserCliente.findAll();

        return await res.render('geralClientes', { clienteAll })
    },
    cadastro: async (req, res) => {
        return await res.render("cadastroCliente")
    },
    registro: async (req, res) => {
        let {
            nomeCliente,
            codeNomeCliente,
            idadeCliente,
            emailCliente,
            numeroCliente,
            generoCliente,
            mensalidadeCliente,
            vencimentoCliente
        } = req.body;
        await database.UserCliente.create({
            nomeCliente,
            codeNomeCliente,
            idadeCliente,
            emailCliente,
            numeroCliente,
            generoCliente,
            mensalidadeCliente,
            vencimentoCliente
        });

        return res.redirect('/cadastroSucesso')
    }
}


module.exports = clienteController;