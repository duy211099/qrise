import { createClient } from '@supabase/supabase-js'
import { Database } from '../../../database.types'

export type Tables<T extends keyof Database['public']['Tables']> =
    Database['public']['Tables'][T]['Row']
export type Enums<T extends keyof Database['public']['Enums']> =
    Database['public']['Enums'][T]

export const supabase = createClient<Database>(
    import.meta.env.SUPABASE_URL ?? '',
    import.meta.env.SUPABASE_ANON_KEY ?? '',
)
