const Course = require('../models/Course');
const { mongooseToObject } = require('../../utils/mongoose');

class CourseController {
    // [GET] /courses/:slug
    // async await
    async show(req, res, next) {
        try {
            let course = await Course.findOne({ slug: req.params.slug });
            // Bảo mật của thư viện mongoose -> đổi obj constructor thành obj thường
            res.render('courses/show', { course: mongooseToObject(course) });
        } catch (error) {
            next(res);
        }
    }
}

module.exports = new CourseController();
