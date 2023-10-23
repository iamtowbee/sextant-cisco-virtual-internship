import './App.css';

function App() {
  const name = "Tobi"
  const interests = ["Gaming", "Writing", "Reading", "Music"]
  return (
    <div>
      <h1>Hello, my name is {name}</h1>
      My interests are: 
      <ul>
        {
          interests.map((interest) => {
            return <li>{interest}</li>
          })
        }
        </ul>
    </div>
  );
}

export default App;
