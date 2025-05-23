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
    category: {
      type: String,
      required: [true, 'Category is required.'],
    },
    imagePath: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true, 
  }
);

const Post = models.Post || model('Post', PostSchema);

export default Post;
