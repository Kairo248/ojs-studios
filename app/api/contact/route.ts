import { NextResponse } from "next/server";

// Deprecated: the site now uses WhatsApp for contact form submissions.
export async function POST() {
  return NextResponse.json(
    { error: "This endpoint is deprecated. Please contact us via WhatsApp." },
    { status: 410 }
  );
}

