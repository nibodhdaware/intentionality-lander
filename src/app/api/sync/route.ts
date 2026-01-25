import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Basic validation
    if (!data || typeof data !== 'object') {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    // Add to a collection named 'anonymous_sync'
    const docRef = await addDoc(collection(db, "anonymous_sync"), {
      ...data,
      receivedAt: serverTimestamp(),
    });

    return NextResponse.json({ success: true, id: docRef.id });
  } catch (error: unknown) {
    console.error("Error syncing data:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
