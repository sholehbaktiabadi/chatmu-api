import dotenv from 'dotenv'
dotenv.config()

export const LoadEnv =()=> ({
    APP_PORT: process.env.APP_PORT,
    MYSQL_HOST: process.env.MYSQL_HOST,
    MYSQL_PORT: parseInt(process.env.MYSQL_PORT as string),
    MYSQL_USERNAME: process.env.MYSQL_USERNAME,
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
    MYSQL_DATABASE: process.env.MYSQL_DATABASE
})