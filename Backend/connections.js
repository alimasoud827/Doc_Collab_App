import mongoose from 'mongoose';
import Doc from './utils.js';

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/connectLive", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed', error);
        process.exit(1);
    }
}

export const connectIo = (io) => {
  io.on("connection", (socket) => {
      console.log("⚡ User connected:", socket.id);

      socket.on("loadDoc", async (docId) => {
          let doc = await Doc.findOne({ docId });
          if (!doc) doc = await Doc.create({ docId, content: "" });
          socket.emit("load", doc.content);
      });

      // Broadcast edits
      socket.on("edit", async ({ docId, content }) => {
          await Doc.findOneAndUpdate(
              { docId },
              { content, lastUpdated: Date.now() }
          );
          io.emit("edit", { docId, content }); // Broadcast changes
      });

      socket.on("disconnect", () => {
          console.log("⚡ User disconnected:", socket.id);
      });
  });
};

export default connectDB;