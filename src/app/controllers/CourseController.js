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

    // [GET] /courses/create
    // async await
    create(req, res, next) {
        try {
            res.render('courses/create');
        } catch (error) {
            next(res);
        }
    }

    // [GET] /:id/edit
    // async await
    async edit(req, res, next) {
        try {
            let course = await Course.findById(req.params.id);
            res.render('courses/edit', { course: mongooseToObject(course) });
        } catch (error) {
            next(res);
        }
    }

    // [POST] /courses/store
    // async await
    async store(req, res, next) {
        try {
            // generate fields from req
            const formData = req.body;
            formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hq720.jpg`;

            const course = new Course(formData);
            course.save();

            res.redirect('/');
        } catch (error) {
            next(res);
        }
    }

    // [PUT] courses/:id
    // async await
    async update(req, res, next) {
        try {
            // generate fields from req
            const formData = req.body;
            formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hq720.jpg`;

            await Course.updateOne({ _id: req.params.id }, formData);
            res.redirect('/me/stored/courses');
        } catch (error) {
            next(res);
        }
    }

    // [DELETE] courses/:id
    // async await
    async destroy(req, res, next) {
        try {
            await Course.deleteOne({ _id: req.params.id });
            res.redirect('back');
        } catch (error) {
            next(res);
        }
    }
}

module.exports = new CourseController();
