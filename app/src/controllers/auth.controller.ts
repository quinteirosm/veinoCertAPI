import { PrismaClient } from "@prisma/client";

// route that takes in a chipId, a otk, a timestamp and a pseudo and verifies it inside the database
export const authUser = async (req: any, res: any) => {
	const prisma = new PrismaClient();
	const { chipId, otk, timestamp, pseudo } = req.body;

	// Find a chip with the given chipId, otk and timestamp
	const chipPhyId = await prisma.chips.findFirst({
		where: {
			phyId: chipId,
		},
	});

	const user = await prisma.users.findFirst({
		where: {
			bio: pseudo,
		},
	});

	if (chipPhyId.otk === otk && chipPhyId.timestamp === timestamp) {
		res.status(401).json({
			message: "Invalid otk",
		});
	} else {
		res.status(200).json({
			user: user,
		});
	}
};
