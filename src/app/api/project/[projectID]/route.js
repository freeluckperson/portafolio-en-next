import connectDB from "@/libs/mongoDB";
import Project from "@/models/project";
import { NextResponse } from "next/server";

// ROUTE http://localhost:3000/api/project/id
export async function GET(request, { params }) {
  try {
    const { projectID } = params;
    await connectDB();

    const projectByID = await Project.find({ _id: projectID });
    if (!projectByID.length)
      return NextResponse.json(
        { message: "Project does not exist" },
        { status: 400 }
      );

    return NextResponse.json(projectByID, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { projectID } = params;
    await connectDB();

    const deletedProject = await Project.findByIdAndDelete(projectID);

    if (!deletedProject)
      return NextResponse.json(
        { message: "Project does not exist" },
        { status: 400 }
      );

    return NextResponse.json(deletedProject, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}

export async function PUT(request, { params }) {
  try {
    const { projectID } = params;
    await connectDB();

    const { title, description, image, url, deploy } = await request.json();
    if (
      [title, description, image, url, deploy].some(
        (field) => typeof field !== "string"
      ) ||
      [title, description, image, url, deploy].some(
        (field) => field.trim() === ""
      )
    )
      return NextResponse.json(
        { message: "Each fields is required and must be a string" },
        { status: 400 }
      );

    const projectByID = await Project.findByIdAndUpdate(
      projectID,
      {
        title,
        description,
        image,
        url,
        deploy,
      },
      { new: true }
    );
    if (!projectByID)
      return NextResponse.json({ message: "Task not found" }, { status: 400 });
    return NextResponse.json(projectByID, { status: 400 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: error.message }), {
      status: 400,
    });
  }
}
