import { Schema, model, models } from 'mongoose';

const PostSchema = new Schema(
  {
    creator: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: [true, 'Title is required.'],
    },
    description: {
      type: String,
      default: '',
    },
    tag: {
      type: String,
      required: [true, 'Tag is required.'],
    },
    imagePath: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

const Post = models.Post || model('Post', PostSchema);

export default Post;
