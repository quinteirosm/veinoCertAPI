import bcrypt from "bcryptjs";
import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

async function main() {
	// Vérifier le nombre de lignes dans chaque table
	const usersCount = await prisma.users.count();
	const chipsCount = await prisma.chips.count();
	const documentsCount = await prisma.documents.count();

	// Si les tables sont vides, les remplir avec des données de test
	if (usersCount === 0 && chipsCount === 0 && documentsCount === 0) {
		const firstName = "Miguel";
		const lastName = "Quinteiros";
		const user = await prisma.users.create({
			data: {
				name: firstName + " " + lastName,
				email: faker.internet.email({
					firstName: firstName,
					lastName: lastName,
					provider: "global-id.ch",
				}),
				password: bcrypt.hashSync("testpass", 10),
				bio: uuidv4(),
			},
		});
		console.log(user);
		const chip = await prisma.chips.create({
			data: {
				phyId: uuidv4(),
				otk: uuidv4(),
				timestamp: faker.date.recent().toISOString(),
				userId: user.id,
			},
		});
		console.log(chip);
		const document = await prisma.documents.create({
			data: {
				chipPhysicalId: chip.phyId,
				userId: user.id,
				url: faker.internet.url(),
			},
		});
		console.log(document);
	} else {
		console.log(
			"Les tables ne sont pas vides. Elles n'ont pas besoin d'être seed."
		);
	}
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
