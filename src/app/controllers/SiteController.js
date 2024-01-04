const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../utils/mongoose');

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
    // async await
    async index(req, res, next) {
        try {
            let courses = await Course.find({});
            // Bảo mật của thư viện mongoose -> đổi obj constructor thành obj thường
            res.render('home', { courses: multipleMongooseToObject(courses) });
        } catch (error) {
            next(res);
        }
    }

    // promise
    /*
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', { courses: multipleMongooseToObject(courses) });
            })
            .catch(next); // handle error
    }
    */

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
