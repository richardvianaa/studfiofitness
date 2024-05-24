const database = require('../database/models');

var userAdmController = {
    cadastroADM: async (req, res) => {
        return await res.render("cadastroADM")
    },
    cadastroSucesso: async (req, res) => {
        return await res.render('cadastroSucesso');
    },
    registroADM: async (req, res) => {
        let { nomeADM, codeNomeADM, emailADM, passwordADM } = req.body;

        await database.UserADM.create({
            nomeADM, codeNomeADM, emailADM, passwordADM
        });

        return res.redirect("/cadastroSucesso");
    }

}


module.exports = userAdmController;