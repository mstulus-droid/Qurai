import { NextResponse } from "next/server";
import { createClient, hasSupabaseAuthConfig } from "@/lib/supabase/server";

function sanitizeNext(value: string | null) {
  if (!value || !value.startsWith("/") || value.startsWith("//")) {
    return "/";
  }

  return value;
}

function getRequestOrigin(request: Request) {
  const url = new URL(request.url);
  const forwardedHost = request.headers.get("x-forwarded-host");
  const forwardedProto = request.headers.get("x-forwarded-proto") ?? "https";

  if (forwardedHost) {
    return `${forwardedProto}://${forwardedHost}`;
  }

  return url.origin;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const origin = getRequestOrigin(request);
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
