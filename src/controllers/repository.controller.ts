import { PrismaClient } from "@prisma/client";

const repoClient = new PrismaClient().documents;

// get a document by userId & chipId
