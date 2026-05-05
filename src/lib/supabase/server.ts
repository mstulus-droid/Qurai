import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

function readSupabaseConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/\/rest\/v1\/?$/, "");
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !key) {
    return null;
  }

  return { url, key };
}

export function hasSupabaseAuthConfig() {
  return readSupabaseConfig() !== null;
}

export async function createClient() {
  const config = readSupabaseConfig();

  if (!config) {
    throw new Error(
      "Supabase Auth belum dikonfigurasi. Isi NEXT_PUBLIC_SUPABASE_URL dan NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY.",
    );
  }

  const cookieStore = await cookies();

  return createServerClient(config.url, config.key, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        } catch {
          // Server Components cannot write cookies. Route Handlers and Server Actions can.
        }
      },
    },
  });
}

export async function getCurrentUserId() {
  if (!hasSupabaseAuthConfig()) {
    return null;
  }

  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();

  if (error) {
    return null;
  }

  return data?.claims.sub ?? null;
}
