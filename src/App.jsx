import "./App.css";
import WeatherSearch from "./components/WeatherSearch/WeatherSearch";
import * as weatherService from "./services/weatherService";
import WeatherDetails from "./components/WeatherDetails/WeatherDetails";

import { useState, useEffect } from "react";

function App() {
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDefault = async (city) => {
      const data = await weatherService.show(city);
      const weatherCondition = {
        location: data.location.name,
        temperature: data.current.temp_c,
        condition: data.current.condition.text,
        icon: data.current.condition.icon,
      };

      setWeather(weatherCondition);
      setIsLoading(false);
    };
    fetchDefault("manama");
  }, []);
  useEffect(() => {
    console.log("weather has updated", weather);
  }, [weather]);

  const fetchData = async (city) => {
    const data = await weatherService.show(city);
    const weatherCondition = {
      location: data.location.name,
      temperature: data.current.temp_c,
      condition: data.current.condition.text,
      icon: data.current.condition.icon,
    };

    setWeather(weatherCondition);
    setIsLoading(false);
  };
  if (isLoading) {
    return <h1>LOADING.....</h1>;
  }
  return (
    <main>
      <h1>Weather API!</h1>
      <WeatherSearch fetchData={fetchData} setIsLoading={setIsLoading} />
      <WeatherDetails weather={weather} />
    </main>
  );
}

export default App;
