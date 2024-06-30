import { PrismaClient } from "@prisma/client";

const repoClient = new PrismaClient().documents;

// get all chips
export const getAllChips = async (req, res) => {
	try {
		const chips = await repoClient.findMany();
		res.status(200).json(chips);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// get chip by userId
export const getChipByUserId = async (req, res) => {
	const userId = req.params.userId;
	const chip = await repoClient.findFirst({
		where: {
			userId: userId,
		},
	});
	if (!chip) {
		return res.status(404).json({ message: "Chip not found" });
	}
	return res.status(200).json(chip);
};
