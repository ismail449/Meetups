import { useRouter } from 'next/router';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
  const router = useRouter()
  const addMeetupHandler = async (meetupData) => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify( meetupData),
      headers: {
        'Content-Type': 'Application/json'
      }
    });
    const data = await response.json()
    console.log(data)
    router.push('/')
  };
  return (
    <div>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
};

export default NewMeetupPage;
