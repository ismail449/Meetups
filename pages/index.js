import Head from 'next/head';
import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';



const HomePage = ({meetups}) => {
  return (
    <>
      <Head>
        <title>NextJS Meetups</title>
      </Head>
      <MeetupList meetups={meetups} />
    </>
  );
};

export const getStaticProps = async ()=>{
  const client = await MongoClient.connect(process.env.NEXT_PUBLIC_CONNECTION_STRING)
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
