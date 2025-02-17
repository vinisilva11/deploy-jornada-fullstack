// JavaScript assíncrono
//  await async
// Fullfilled
import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://ViniciusSilva:marselha26@cluster1.h00gf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

const client = new MongoClient(URI);
export const db = client.db("spotifyAula");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
