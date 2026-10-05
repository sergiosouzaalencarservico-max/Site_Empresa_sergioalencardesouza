// Configurações do Supabase
// Substitua pelos seus dados do projeto no Supabase
const SUPABASE_URL = "https://seu-projeto.supabase.co";
const SUPABASE_ANON_KEY = "SUA_CHAVE_ANONIMA_AQUI";

// Inicializa o cliente Supabase
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);