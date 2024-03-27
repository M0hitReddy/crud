import { createClient } from '@supabase/supabase-js'
// import morgan from 'morgan'
let superbase;
const createConnection = (url, key) => {

    superbase = createClient(url, key);
}
export { superbase, createConnection }
