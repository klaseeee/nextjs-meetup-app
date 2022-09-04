import { NextPage } from "next";
import { MongoClient, ObjectId } from "mongodb";

import MeetupDetail from "../../components/meetups/MeetupDetail";
import { Fragment } from "react";
import Head from "next/head";

const MeetupDetails: NextPage = (props: any) => {
  console.log(props);

  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail {...props.meetupData} />;
    </Fragment>
  );
};

export async function getStaticPaths() {
  const url =
    "mongodb+srv://meetups-db:JlhINng6zRdoFbiz@cluster0.k8zshoh.mongodb.net/meetups?retryWrites=true&w=majority";
  const client = await MongoClient.connect(url);
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups: object[] = await meetupsCollection
    .find({}, { projection: { _id: 1 } })
    .toArray();
  console.log(meetups);

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup: any) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context: any) {
  const meetupId = context.params.meetupId;

  const url =
    "mongodb+srv://meetups-db:JlhINng6zRdoFbiz@cluster0.k8zshoh.mongodb.net/meetups?retryWrites=true&w=majority";
  const client = await MongoClient.connect(url);
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const selectedMeetup: any = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;
