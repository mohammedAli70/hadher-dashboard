// plugins/supabase.client.js
// import { createClient } from '@supabase/supabase-js';

// export default defineNuxtPlugin((nuxtApp) => {
//   const config = useRuntimeConfig();
//   const supabase = createClient(
//     config.public.SUPABASE_URL,
//     config.public.SUPABASE_KEY
//   );

//   // Provide Supabase client only once
//   if (!nuxtApp.$supabase) {
//     nuxtApp.provide('supabase', supabase);
//   }
// });

import { createClient } from '@supabase/supabase-js';

export const supabaseClient = createClient(
  config.public.SUPABASE_URL,
  config.public.SUPABASE_KEY
);
