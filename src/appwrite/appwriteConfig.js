import { Client, Account, Databases } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite Endpoint
  .setProject('66dad3fa001e0c550d09'); // Your Project ID

export const account = new Account(client);
export const databases = new Databases(client,'66dad64c002dcfa435ea');

