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
const url = 'database_url';
const key = 'database_key';
createConnection(url, key)
// app.get("/todos", (req, res) => {
//     res.send("Hello World");
// });
app.use("/todos", router);
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
