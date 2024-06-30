import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const userClient = new PrismaClient().users;

// get a user by id
export const getUserById = async (req, res) => {
	const { id } = req.params;
	try {
		const user = await userClient.findUnique({
			where: {
				id: id,
			},
		});
		if (user) {
			res.status(200).json(user);
		} else {
			res.status(404).json({ message: "User not found or non existant" });
		}
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// login a user
export const login = async (req, res) => {
	const { email, password } = req.body;
	const user = await userClient.findFirst({
		where: {
			email: email,
		},
	});
	const validPass = await bcrypt.compare(password, user.password);
	if (validPass) {
		res.status(200).json(user);
	} else {
		res.status(404).json({ message: "User not found" });
	}
};
