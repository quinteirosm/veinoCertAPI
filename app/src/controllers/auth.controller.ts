import { PrismaClient } from "@prisma/client";

// This function is used to authenticate a user
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

	// get the document with the given chipId
	const document = await prisma.documents.findFirst({
		where: {
			chipPhysicalId: chipPhyId.phyId,
		},
	});

	if (otk === chipPhyId.otk && timestamp === chipPhyId.timestamp) {
		res.status(401).json({
			message: "Invalid otk",
		});
	} else if (pseudo === user.bio) {
		res.status(200).json({
			documentUrl: document.url,
		});
	} else {
		res.status(401).json({
			message: "Invalid informations",
		});
	}
};
