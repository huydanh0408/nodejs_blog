const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;

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

// Add plugins
mongoose.plugin(slug);

courseSchema.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('Course', courseSchema);
