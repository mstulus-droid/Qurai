import { NextResponse } from "next/server";
import { createClient, hasSupabaseAuthConfig } from "@/lib/supabase/server";

function sanitizeNext(value: string | null) {
  if (!value || !value.startsWith("/") || value.startsWith("//")) {
    return "/";
  }

  return value;
}

export async function GET(request: Request) {
  const { origin, searchParams } = new URL(request.url);
  const next = sanitizeNext(searchParams.get("next"));

  if (hasSupabaseAuthConfig()) {
    const supabase = await createClient();
    await supabase.auth.signOut();
  }

  return NextResponse.redirect(`${origin}${next}`);
}
