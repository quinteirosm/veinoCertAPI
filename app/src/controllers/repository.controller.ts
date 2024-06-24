import { PrismaClient } from "@prisma/client";

const repoClient = new PrismaClient().documents;

/**
 * @swagger
 * /documents:
 *   get:
 *     summary: Get all documents
 *     tags: [devDocuments]
 *     responses:
 *       200:
 *         description: Documents details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Document'
 */
export const getAllDocuments = async (req, res) => {
	try {
		const documents = await repoClient.findMany();
		res.status(200).json(documents);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

/**
 * @swagger
 * /documents/{userId}/{chipId}:
 *   get:
 *     summary: Get a document by userId & chipId
 *     tags: [devDocuments]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
 *       - in: path
 *         name: chipId
 *         schema:
 *           type: string
 *         required: true
 *         description: Chip ID
 *     responses:
 *       200:
 *         description: Document details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Document'
 *       404:
 *         description: Document not found
 */

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

/**
 * @swagger
 * /documents:
 *   post:
 *     summary: Get a document by chipId, otk, timestamp and pseudo
 *     tags: [documents]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               chipId:
 *                 type: string
 *               otk:
 *                 type: string
 *               timestamp:
 *                 type: string
 *               pseudo:
 *                 type: string
 *     responses:
 *       200:
 *         description: Document details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Document'
 *       401:
 *         description: Invalid otk
 */
export const getDocument = async (req: any, res: any) => {
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

	if (chipPhyId.otk === otk && chipPhyId.timestamp === timestamp) {
		res.status(401).json({
			message: "Invalid otk",
		});
	} else {
		res.status(200).json({
			documentUrl: document.url,
		});
	}
};
