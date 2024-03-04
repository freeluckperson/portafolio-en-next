import { model, models, Schema } from "mongoose";

const projectSchema = new Schema(
  {
    title: String,
    description: String,
    image: String,
    url: String,
    deploy: String,
  },
  { timestamps: true }
);

const Project = models.project || model("project", projectSchema);
export default Project;
