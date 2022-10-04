import MeetupList from '../components/meetups/MeetupList';


const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://images.unsplash.com/photo-1444084316824-dc26d6657664?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    address: 'Saint Paul, United States',
    description: 'This is a first meetup'
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
    address: 'Manhattan Bridge, New York, United States',
    description: 'This is a second meetup'
  },
];

const HomePage = ({meetups}) => {
  return (
    <>
      <MeetupList meetups={meetups} />
    </>
  );
};

export const getStaticProps = async ()=>{
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 10
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
