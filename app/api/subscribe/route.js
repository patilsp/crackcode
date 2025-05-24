import { connectToDB } from "@/utils/database";
import Subscriber from "@/models/subscriber";

export const POST = async (Request) => {
  const { email } = await request.json();

  if (!email || !email.includes('@')) {
    return new Response(JSON.stringify({ message: "Invalid email" }), { status: 400 });
  }

  try {
    await connectToDB();

    // Check if already subscribed
    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return new Response(JSON.stringify({ message: "Already subscribed" }), { status: 409 });
    }

    // Save new subscription
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    return new Response(JSON.stringify({ message: "Subscribed successfully" }), { status: 201 });
  } catch (error) {
    console.error("Subscribe API error:", error);
    return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
  }
};
