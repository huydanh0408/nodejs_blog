const Course = require('../models/Course');

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
    async index(req, res) {
        const courses = await Course.find({});
        res.json(courses);
        // res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
