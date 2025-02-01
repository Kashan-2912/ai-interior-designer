import { Client, Storage, Databases, ID } from "appwrite";

const client = new Client();

client
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT) // Appwrite API Endpoint
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID); // Appwrite Project ID

const storage = new Storage(client);
const database = new Databases(client);

export { client, storage, database, ID };
