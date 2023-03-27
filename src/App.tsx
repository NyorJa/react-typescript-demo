import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

function App() {
  const personName = {
    first: "Nyor",
    last: "Ja",
  };

  const nameList = [
    personName,
    {
      first: "Botsot",
      last: "felix",
    },
  ];

  return (
    <div className="App">
      {/* <Greet name='rod' messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} /> */}
      {/* <Status status='loading' />
      <PersonList names={nameList} />
      <Heading>Placeholder</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo!</Heading>
      </Oscar>
      <Greet name='Nyor' isLoggedIn={false} /> */}
      {/* <Button
        handleClick={(event, id) => {
          console.log("Button clicked!", event, id);
        }}
      />
      <Input value='' handleChange={(event) => console.log(event)} /> */}
    </div>
  );
}

export default App;
