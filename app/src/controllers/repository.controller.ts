import { PrismaClient } from "@prisma/client";

const repoClient = new PrismaClient().documents;

// get a document by userId & chipId
export const getDocumentById = async (req, res) => {
	const userId = req.params.userId;
	const chipId = req.params.chipId;
	const document = await repoClient.findMany({
		where: {
			userId: parseInt(userId),
			chipPhysicalId: chipId,
		},
	});
	if (!document) {
		return res.status(404).json({ message: "Document not found" });
	}
	return res.status(200).json(document);
};
