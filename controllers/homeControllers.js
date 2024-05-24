const homeController = {
    index: async (req, res) => {
        return await res.send("Página inicial")
    }
}

module.exports = homeController;