const homeController = (req, res) => {
  res.render("screens/home.pug");
};

const bookController = (req, res) => {
  res.render("screens/book.pug");
};

const globalController = {
  homeController,
  bookController,
};

export default globalController;
