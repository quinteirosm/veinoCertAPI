import { PrismaClient } from "@prisma/client";

const repoClient = new PrismaClient().documents;

// get all documents
export const getAllDocuments = async (req, res) => {
	try {
		const documents = await repoClient.findMany();
		res.status(200).json(documents);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// get a document by userId & chipId
export const getDocumentById = async (req, res) => {
	const userId = req.params.userId;
	const chipId = req.params.chipId;
	const document = await repoClient.findMany({
		where: {
			userId: userId,
			chipPhysicalId: chipId,
		},
	});
	if (!document) {
		return res.status(404).json({ message: "Document not found" });
	}
	return res.status(200).json(document);
};
