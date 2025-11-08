import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: String,
    completed: { type: Boolean, default: false },
  },
  { timestamps: true } // ✅ automatically adds createdAt & updatedAt
);

export default mongoose.model("Task", taskSchema);
