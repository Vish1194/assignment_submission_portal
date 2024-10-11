import { MongoClient } from "mongodb";

const CONN_STRING = process.env.MONGODB_CONN_STRING;
const DB_NAME = process.env.DB_NAME;
const ADMIN_COLL_NAME="admins"
const TASK_COLL_NAME="tasks"

/**
 * Below function is called only once on server start.
 * This function first establish connection with Mongo DB.
 * Creates Database and neccessary collections, if not previously existed.
 */

export async function createDatabaseAndCollection() {
  const client = new MongoClient(CONN_STRING);
  try {
    const db = client.db(DB_NAME);
    const collectionExists = await db.listCollections({ name: ADMIN_COLL_NAME }).hasNext();

    if (!collectionExists) {
      await db.createCollection(ADMIN_COLL_NAME);
      await db.collection(ADMIN_COLL_NAME).insertOne({_id:"admin@email.com",name:"admin"})
      await db.createCollection(TASK_COLL_NAME);
      console.log('Database created and initialized successfully!');
    } else {
      console.log('Database already exists.');
    }
  } catch (error) {
    console.error('Error creating database or collection:', error);
  }finally{
    client.close();
  }
}

