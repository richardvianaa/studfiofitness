const homeController = {
    index: async (req, res) => {
        return await res.render("pag-inicial")
    }
}

module.exports = homeController;