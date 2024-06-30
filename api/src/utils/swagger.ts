import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import path from "path";

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "VeinoCert API",
			version: "1.0.0",
			description: "Documentation de l'API VeinoCert",
		},
		servers: [
			{
				url: "http://localhost:3000",
				description: "Serveur de développement",
			},
			{
				url: "http://venocertdev.ch:80",
				description: "Serveur de production",
			},
		],
		components: {
			schemas: {
				User: {
					type: "object",
					required: ["name", "email", "password"],
					properties: {
						id: {
							type: "integer",
							description: "Identifiant unique de l'utilisateur",
						},
						name: {
							type: "string",
							description: "Nom de l'utilisateur",
						},
						email: {
							type: "string",
							description: "Email de l'utilisateur",
						},
						password: {
							type: "string",
							description: "Mot de passe de l'utilisateur",
						},
						pseudo: {
							type: "string",
							description: "Pseudo de l'utilisateur",
						},
					},
				},
				Chip: {
					type: "object",
					required: ["physicalId", "userId"],
					properties: {
						id: {
							type: "integer",
							description: "Identifiant unique de la puce",
						},
						physicalId: {
							type: "string",
							description: "Identifiant physique de la puce",
						},
						userId: {
							type: "integer",
							description: "Identifiant de l'utilisateur associé",
						},
					},
				},
				Document: {
					type: "object",
					required: ["chipPhysicalId", "userId", "url"],
					properties: {
						id: {
							type: "integer",
							description: "Identifiant unique du document",
						},
						chipPhysicalId: {
							type: "string",
							description: "Identifiant physique de la puce associée",
						},
						userId: {
							type: "integer",
							description: "Identifiant de l'utilisateur associé",
						},
						url: {
							type: "string",
							description: "URL du document",
						},
					},
				},
			},
		},
	},
	apis: [
		path.join(__dirname, "../routes/*.router.ts"),
		path.join(__dirname, "../routes/*.router.js"),
	], // Fichiers contenant les annotations Swagger
};

const swaggerSpec = swaggerJSDoc(options);

const setupSwagger = (app) => {
	app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default setupSwagger;
