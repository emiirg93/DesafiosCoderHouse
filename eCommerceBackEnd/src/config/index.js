import dotenv from 'dotenv';

dotenv.config();

const config = {
    port: process.env.PORT,
    filePath: '../files'
}

export default config;