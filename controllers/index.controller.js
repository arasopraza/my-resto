module.exports = {
  index: async (req, res) => {
    const name = "Lord";
    return res.render("index", { name });
  },
};
