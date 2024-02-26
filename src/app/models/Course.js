const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const courseSchema = new Schema(
    {
        _id: Number,
        name: { type: String, required: true }, // String is shorthand for {type: String}
        description: { type: String },
        image: { type: String },
        videoId: { type: String, required: true },
        level: { type: String },
        slug: { type: String, slug: 'name', unique: true },
    },
    // auto create createTime & updateTime
    { _id: false, timestamps: true },
);

// Add plugins
mongoose.plugin(slug);

// Mongoose sequence
courseSchema.plugin(AutoIncrement);

courseSchema.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('Course', courseSchema);
