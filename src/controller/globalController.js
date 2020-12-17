import Book from "../model/Book";

const homeController = (req, res) => {
  res.render("screens/home.pug");
};

const bookController = async (req, res) => {
  const bookList = await Book.find({}, {});

  console.log(bookList);

  return res.render("screens/book.pug", { bookList });
};

const globalController = {
  homeController,
  bookController,
};

export default globalController;
