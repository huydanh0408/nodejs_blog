// const NewsController = function () {
//   this.index = function (req, res) {
//     res.render("news");
//   };
// };

class NewsController {
  // [GET] /news
  index(req, res) {
    res.render("news");
  }

  // [GET] /news/:slug
  show(req, res) {
    res.send("NEWS DETAILS");
  }
}

module.exports = new NewsController();
