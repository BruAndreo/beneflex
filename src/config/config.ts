import "dotenv/config";

const envVars = process.env;

export default {
    port: envVars.PORT
};