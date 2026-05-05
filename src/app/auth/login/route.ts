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

  if (!hasSupabaseAuthConfig()) {
    return NextResponse.redirect(
      `${origin}${next}?bookmark_error=supabase-auth-not-configured`,
    );
  }

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${origin}/auth/callback?next=${encodeURIComponent(next)}`,
    },
  });

  if (error || !data.url) {
    return NextResponse.redirect(`${origin}${next}?bookmark_error=login-failed`);
  }

  return NextResponse.redirect(data.url);
}
