import { PrismaClient } from "@prisma/client";

const userClient = new PrismaClient().users;

// getAllUsers
export const getAllUsers = async (req, res) => {
	try {
		const users = await userClient.findMany();
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// getUserById
export const getUserById = async (req, res) => {
	const { id } = req.params;
	try {
		const user = await userClient.findUnique({
			where: {
				id: parseInt(id),
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

// createUser
export const createUser = async (req, res) => {
	const userName = req.body.name;
	const userEmail = req.body.email;
	const userPassword = req.body.password;
	const userPseudo = req.body.pseudo;
	try {
		const newUser = await userClient.create({
			data: {
				name: userName,
				email: userEmail,
				password: userPassword,
				pseudo: userPseudo,
			},
		});
		res.status(201).json(newUser);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// updateUser
export const updateUser = async (req, res) => {
	const { id } = req.params;
	const userName = req.body.name;
	const userEmail = req.body.email;
	const userPassword = req.body.password;
	const userPseudo = req.body.pseudo;
	try {
		const updatedUser = await userClient.update({
			where: {
				id: parseInt(id),
			},
			data: {
				name: userName,
				email: userEmail,
				password: userPassword,
				pseudo: userPseudo,
			},
		});
		res.status(200).json(updatedUser);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// deleteUser
export const deleteUser = async (req, res) => {
	const { id } = req.params;
	try {
		const deletedUser = await userClient.delete({
			where: {
				id: parseInt(id),
			},
		});
		res.status(200).json(deletedUser);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
