import { MongoClient } from "mongodb";

// POST api/new-meetup

const newMeetup = async (req: any, res: any) => {
  if (req.method === "POST") {
    const data = req.body;
    // const { title, image, address, description } = data;
    const url =
      "mongodb+srv://meetups-db:JlhINng6zRdoFbiz@cluster0.k8zshoh.mongodb.net/meetups?retryWrites=true&w=majority";

    const client = await MongoClient.connect(url);

    const db = client.db();

    const meetupCollection = db.collection("meetups");
    const result = await meetupCollection.insertOne(data);
    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
};

export default newMeetup;
