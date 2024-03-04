import connectDB from "@/libs/mongoDB";
import Project from "@/models/project";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectDB();

    const allProjects = await Project.find();
    if (!allProjects)
      return NextResponse.json("No projects found", { status: 400 });

    return NextResponse.json(allProjects, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const { title, description, image, repository, deploy } =
      await request.json();

    const newProject = new Project({title,description,image,repository,deploy});

    if (
      [title, description, image, repository, deploy].some(
        (field) => typeof field !== "string"
      ) ||
      [title, description, image, repository, deploy].some(
        (field) => field.trim() === ""
      )
    )
      return NextResponse.json(
        { message: "Each field is required and must be a string" },
        {
          status: 400,
        }
      );

    await newProject.save();

    return NextResponse.json(newProject, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
