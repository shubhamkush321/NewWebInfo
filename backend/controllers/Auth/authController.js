// controllers/authController.js
const User = require('../../models/Auth/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Debug log to check received data
        console.log('Received data:', { username, password });

        // Check if the user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            console.log('User already exists');
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Create a new user
        const newUser = new User({
            username,
            password: hashedPassword
        });
        await newUser.save();

        // Generate a JWT
        const token = jwt.sign({ userId: newUser._id }, 'your_jwt_secret', { expiresIn: '1h' });

        console.log('Signup successful, returning token');
        res.status(201).json({ token });
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ message: 'Server error', error });
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Debug log to check received data
        console.log('Received data:', { username, password });

        // Find the user by username
        const user = await User.findOne({ username });
        if (!user) {
            console.log('User not found');
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Check if the password matches
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log('Password mismatch');
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate a JWT
        const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

        console.log('Login successful, returning token');
        res.json({ token });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Server error', error });
    }
};

module.exports = { signup, login };
