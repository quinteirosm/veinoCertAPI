import express from "express";
import path from "path";
import userRouter from "./routes/user.router";
import repoRouter from "./routes/repository.router";
import chipRouter from "./routes/chip.router";
import authRouter from "./routes/auth.router";
import setupSwagger from "./utils/swagger";

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use(express.json());
app.use("/users", userRouter);
app.use("/repositories", repoRouter);
app.use("/chips", chipRouter);
app.use("/auth", authRouter);

// Ajoute la configuration Swagger
setupSwagger(app);

app.get("/", (req, res) => {
	res.send("Bienvenue sur l'API VeinoCert");
});

app.get("/ping", (req, res) => {
	const startTime = new Date().getTime();
	res.status(200).json({
		message: "pong",
		latency: new Date().getTime() - startTime,
	});
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
