import express from "express";
import userRouter from "./routes/user.router";
import repoRouter from "./routes/repository.router";
import chipRouter from "./routes/chip.router";

// initialisation de l'application express
const app = express();
const port = process.env.SERVER_PORT;

// permet de parser le body des requêtes en json
app.use(express.json());
// permet de parser les query string des requêtes
app.use("/users", userRouter);
app.use("/documents", repoRouter);
app.use("chip", chipRouter);

app.get("/", (req, res) => {
	res.send("Bienvenue sur l'API VenoCert");
});

// route permettant de vérifier que le serveur est bien en ligne
app.get("/ping", (req, res) => {
	res.json({ message: "pong" }).status(200);
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
