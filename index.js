import Express from "express";
const app = Express();
import router from "./routes/routes.js";
// const routes=router;
// import
import { createConnection } from "./connection.js";
// import e from "express";
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
// appse(bodyPa).
const url = 'https://qinjibrzhcbeniozyxyo.supabase.co';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpbmppYnJ6aGNiZW5pb3p5eHlvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMTM2OTQyNCwiZXhwIjoyMDI2OTQ1NDI0fQ.RloB2tu8OMZwnE7ai9eehpQZFj3JTBrynTtF8-1U9Mw';
createConnection(url, key)
// app.get("/todos", (req, res) => {
//     res.send("Hello World");
// });
app.use("/todos", router);
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});