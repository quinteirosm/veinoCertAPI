import { PrismaClient } from "@prisma/client";

const userClient = new PrismaClient().users;

// getUserById
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

// login and return user data
export const login = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await userClient.findFirst({
			where: {
				email: email,
				password: password,
			},
		});
		if (user) {
			res.status(200).json(user);
		} else {
			res.status(404).json({ message: "User not found" });
		}
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
