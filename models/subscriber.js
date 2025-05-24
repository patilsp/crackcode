import { Schema, model, models } from 'mongoose';

const SubscriberSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, 'Email is required'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Subscriber = models.Subscriber || model('Subscriber', SubscriberSchema);
export default Subscriber;
