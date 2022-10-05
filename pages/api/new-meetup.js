import { MongoClient } from "mongodb"

const handler = async (req, res)=>{
 if (req.method === 'POST'){
  const data = req.body
  const client = await MongoClient.connect(process.env.NEXT_PUBLIC_CONNECTION_STRING)
  const db = client.db()
  const meetupsCollection = db.collection('meetups')
  const result = await meetupsCollection.insertOne(data)
  console.log(result)
  client.close()
  res.status(201).json({message:'meetup inserted'})
 }
}

export default handler