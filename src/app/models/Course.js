const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const courseSchema = new Schema(
    {
        name: { type: String, required: true }, // String is shorthand for {type: String}
        description: { type: String },
        image: { type: String },
        videoId: { type: String, required: true },
        level: { type: String },
        slug: { type: String, slug: 'name', unique: true },
    },
    // auto create createTime & updateTime
    { timestamps: true },
);

module.exports = mongoose.model('Course', courseSchema);
