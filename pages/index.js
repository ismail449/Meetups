import { MongoClient } from 'mongodb';
import { connectionString } from '../mongoConnect';
import MeetupList from '../components/meetups/MeetupList';



const HomePage = ({meetups}) => {
  return (
    <>
      <MeetupList meetups={meetups} />
    </>
  );
};

export const getStaticProps = async ()=>{
  const client = await MongoClient.connect(connectionString)
  const db = client.db()
  const meetupsCollection = db.collection('meetups')
  const meetups = await meetupsCollection.find().toArray()
  client.close()
  return {
    props: {
      meetups: meetups.map(meetup=> ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        id: meetup._id.toString()
      }))
    },
    revalidate: 1
  }
}

/*export const getServerSideProps =(context)=>{
  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  }
}*/

export default HomePage;
