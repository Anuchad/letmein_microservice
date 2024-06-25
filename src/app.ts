import express from "express";
const app = express();

//import file route
import ProjectRoutes from "./routes/ProjectRoute";

// parse requests of content-type - application/json
app.use(express.urlencoded({ limit: "80mb", extended: true }));
app.use(express.raw());
// parse application/json
app.use(express.json({ limit: "80mb" }));

app.get("/", (req, res) => {
  res.send("server running");
});

app.use("/api/project", ProjectRoutes);

export = app;
