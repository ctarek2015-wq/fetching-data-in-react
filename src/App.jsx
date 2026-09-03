import "./App.css";
import * as weatherService from "./services/weatherService";

function App() {
  const fetchData = async () => {
    const data = await weatherService.show("tokyo");
    console.log(data);
  };
  return (
    <main>
      <h1>Weather API!</h1>
      <button onClick={fetchData}>Get Weather</button>
    </main>
  );
}

export default App;
