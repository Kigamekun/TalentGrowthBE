// controllers/userController.js
const User = require('../models/users');

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const users = await User.findAll();
            const usersWithImageUrl = users.map(user => {
                return {
                    ...user.toJSON(),
                    thumbUrl: `/uploads/${user.thumb}`, // Membuat URL untuk thumbnail
                    coverUrl: `/uploads/${user.cover}` // Membuat URL untuk cover
                };
            });
            res.json(usersWithImageUrl);
        } catch (error) {
            console.error('Error fetching users:', error);
            res.status(500).json({ error: 'Failed to fetch users' });
        }
    },

    getUserById: async (req, res) => {
        const id = req.params.id;
        try {
            const user = await User.findByPk(id);
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        } catch (error) {
            console.error('Error fetching user by ID:', error);
            res.status(500).json({ error: 'Failed to fetch user' });
        }
    },

    createUser: async (req, res) => {
        const { name, email, phone, about, birth } = req.body;
        const thumb = req.files['thumb'][0].filename; 
        const cover = req.files['cover'][0].filename; 
        try {
            const newUser = await User.create({ name, email, phone, about, birth, thumb, cover });
            res.status(201).json({ message: 'User created successfully', user: newUser });
        } catch (error) {
            console.error('Error creating user:', error);
            res.status(500).json({ error: 'Failed to create user' });
        }
    },

    updateUser: async (req, res) => {
        const id = req.params.id;
        const { name, email } = req.body;
        try {
            const user = await User.findByPk(id);
            if (user) {
                await user.update({ name, email });
                res.json({ message: 'User updated successfully' });
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        } catch (error) {
            console.error('Error updating user:', error);
            res.status(500).json({ error: 'Failed to update user' });
        }
    },

    deleteUser: async (req, res) => {
        const id = req.params.id;
        try {
            const user = await User.findByPk(id);
            if (user) {
                await user.destroy();
                res.json({ message: 'User deleted successfully' });
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        } catch (error) {
            console.error('Error deleting user:', error);
            res.status(500).json({ error: 'Failed to delete user' });
        }
    }
};
