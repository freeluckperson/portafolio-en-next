import connectDB from "@/libs/mongoDB";
import Project from "@/models/project";
import { NextResponse } from "next/server";

// ROUTE http://localhost:3000/api/project
export async function GET(request) {
  try {
    await connectDB();

    const allProjects = await Project.find();
    if (!allProjects || !allProjects.length)
      return NextResponse.json(
        { message: "No projects found" },
        { status: 400 }
      );

    return NextResponse.json(allProjects, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const { title, description, image, url, deploy } = await request.json();

    const newProject = new Project({ title, description, image, url, deploy });

    if (
      [title, description, image, url, deploy].some(
        (field) => typeof field !== "string"
      ) ||
      [title, description, image, url, deploy].some(
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
