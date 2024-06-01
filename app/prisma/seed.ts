import bcrypt from "bcryptjs";
import {
	randBetweenDate,
	randNumber,
	randProduct,
	randRecentDate,
} from "@ngneat/falso";
import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

async function main() {
	await prisma.users.deleteMany();
	await prisma.chips.deleteMany();
	await prisma.documents.deleteMany();
	// create 10 users using faker, 10 chips linked to each user and 10 documents linked to each chip
	for (let i = 0; i < 10; i++) {
		const firstName = faker.person.firstName();
		const lastName = faker.person.lastName();
		const user = await prisma.users.create({
			data: {
				name: firstName + " " + lastName,
				email: faker.internet.email({
					firstName: firstName,
					lastName: lastName,
					provider: "global-id.ch",
				}),
				password: bcrypt.hashSync("password", 10),
				pseudo: uuidv4(),
			},
		});
		console.log(user);
		const chip = await prisma.chips.create({
			data: {
				physicalId: uuidv4(),
				userId: user.id,
			},
		});
		console.log(chip);
		const document = await prisma.documents.create({
			data: {
				chipPhysicalId: chip.physicalId,
				userId: user.id,
				url: faker.internet.url(),
			},
		});
		console.log(document);
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
