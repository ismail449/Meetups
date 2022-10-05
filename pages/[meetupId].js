import { useRouter } from 'next/router';
import MeetupsDetails from '../components/meetups/MeetupsDetails';

const Details = ({ meetupData }) => {
  const router = useRouter();
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
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        address: '10003, new york, united states',
        desc: 'The meetup description',
        image:
          'https://images.unsplash.com/photo-1617121346253-43ef95179ac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
        title: 'The first Meetup',
        id: meetupId,
      },
    },
  };
};

export default Details;
