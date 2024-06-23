import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://Pratham:Pratham123@cluster0.c87sf5o.mongodb.net/blog`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;