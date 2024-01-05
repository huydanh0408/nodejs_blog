const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../utils/mongoose');

class MeController {
    // [GET] /courses/:slug
    // async await
    async storedCourses(req, res, next) {
        try {
            let courses = await Course.find({});
            // Bảo mật của thư viện mongoose -> đổi obj constructor thành obj thường
            res.render('me/stored-courses', {
                courses: multipleMongooseToObject(courses),
            });
        } catch (error) {
            next(res);
        }
    }
}

module.exports = new MeController();
