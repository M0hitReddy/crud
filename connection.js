import { createClient } from '@supabase/supabase-js'
// import morgan from 'morgan'
let superbase;
const createConnection = (url, key) => {

    superbase = createClient(url, key
        // 'https://qinjibrzhcbeniozyxyo.supabase.co',
        // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpbmppYnJ6aGNiZW5pb3p5eHlvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMTM2OTQyNCwiZXhwIjoyMDI2OTQ1NDI0fQ.RloB2tu8OMZwnE7ai9eehpQZFj3JTBrynTtF8-1U9Mw'
    )
}
export { superbase, createConnection }