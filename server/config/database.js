const mongoose = require('mongoose');
require('dotenv').config();

const connectDatabase = async () => {
    try {
        const conn = await mongoose.connect(process.env.Batman, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error('MongoDB Connection Error:', error);
        process.exit(1);
    }
};

module.exports = connectDatabase;