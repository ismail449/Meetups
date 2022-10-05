import { MongoClient, ObjectId } from 'mongodb';
import { connectionString } from '../mongoConnect';
import MeetupsDetails from '../components/meetups/MeetupsDetails';

const Details = ({ meetupData }) => {
  return (
    <>
      <MeetupsDetails
        address={meetupData.address}
        desc={meetupData.desc}
        image={meetupData.image}
        title={meetupData.title}
      />
    </>
  );
};
export const getStaticPaths = async () => {
  const client = await MongoClient.connect(connectionString)
  const db = client.db()
  const meetupsCollection = db.collection('meetups')
  const meetups = await meetupsCollection.find({}, {_id:1}).toArray()
  client.close()
  return {
    fallback: false,
    paths: meetups.map(meetup=> ({
      params: {
        meetupId: meetup._id.toString(),
      },
    }))
  };
};

export const getStaticProps = async (context) => {

  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(connectionString)
  const db = client.db()
  const meetupsCollection = db.collection('meetups')
  const meetup = await meetupsCollection.findOne({_id:ObjectId(meetupId)})
  client.close()
  console.log(meetup);
  return {
    props: {
      meetupData: {
        address: meetup.address,
        desc: meetup.description,
        image: meetup.image,
        title: meetup.title,
        id: meetup._id.toString(),
      },
    },
  };
};

export default Details;
