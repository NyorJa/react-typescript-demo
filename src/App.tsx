import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {

  const personName = {
    first: 'Nyor',
    last: 'Ja'
  }

  const nameList = [
    personName,
    {
      first: 'Botsot',
      last: 'felix'
    }
  ]

  return (
    <div className='App'>
      {/* <Greet name='rod' messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} /> */}
      <Status status='loading' />
    </div>
  );
}

export default App;
