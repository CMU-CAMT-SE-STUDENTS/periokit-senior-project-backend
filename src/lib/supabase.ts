import {
  createClient,
  type RealtimeClientOptions,
} from "@supabase/supabase-js";
import WebSocket from "ws";
import { env } from "./env";

const realtime: RealtimeClientOptions = {
  transport:
    WebSocket as unknown as NonNullable<RealtimeClientOptions["transport"]>,
};

export const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY, {
  realtime,
});

export const supabaseAdmin = createClient(
  env.SUPABASE_URL,
  env.SUPABASE_SERVICE_ROLE_KEY,
  {
    realtime,
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);

export type SupabaseAdminClient = typeof supabaseAdmin;
