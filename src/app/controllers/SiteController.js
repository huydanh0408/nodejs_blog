// const SiteController = function () {
//   // [GET] /
//   this.index = function (req, res) {
//     res.render("home");
//   };

//   // [GET] /search
//   this.search= function(req, res) {
//     res.render("search");
//   }
// };

class SiteController {
  // [GET] /
  index(req, res) {
    res.render("home");
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
