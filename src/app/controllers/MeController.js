const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../utils/mongoose');

class MeController {
    // [GET] /me/stored/courses
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

    // [GET] /me/trash/courses
    // async await
    async trashCourses(req, res, next) {
        try {
            let courses = await Course.findWithDeleted({
                deleted: true,
            });
            // Bảo mật của thư viện mongoose -> đổi obj constructor thành obj thường
            res.render('me/trash-courses', {
                courses: multipleMongooseToObject(courses),
            });
        } catch (error) {
            next(res);
        }
    }
}

module.exports = new MeController();
