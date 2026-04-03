import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, company, service, budget, message } = body;

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log the submission (in production, replace with actual email sending)
    console.log("=== New Contact Form Submission ===");
    console.log(`Name:     ${name}`);
    console.log(`Email:    ${email}`);
    console.log(`Company:  ${company || "Not provided"}`);
    console.log(`Service:  ${service}`);
    console.log(`Budget:   ${budget || "Not provided"}`);
    console.log(`Message:  ${message}`);
    console.log(`Time:     ${new Date().toISOString()}`);
    console.log("===================================");

    return NextResponse.json(
      { success: true, message: "Submission received" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
