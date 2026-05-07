import Student from './Student'; // Don't forget to import it!

function App() {
  return (
    <div className="App">
      <h1>Student Information</h1>
      <Student name="Aryan" grade="A" marks="100" /> 
      <Student name="Fuji Kaze" grade='B' marks={96} />
      <Student name="King Nasir" grade='S' marks={69} />
    </div>
  );
}

export default App;