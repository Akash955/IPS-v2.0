import dotenv from 'dotenv'

dotenv.config()

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost'
const SERVER_PORT = process.env.SERVER_PORT || 8080

const server = {
    hostname : SERVER_HOSTNAME,
    port: SERVER_PORT
}

const config = {
    server
}

export default config
