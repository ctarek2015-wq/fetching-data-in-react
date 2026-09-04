// src/components/WeatherSearch/WeatherSearch.jsx

import { useState } from "react";

const WeatherSearch = ({ setIsLoading, fetchData }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    fetchData(city);
    setCity("");
  };

  return (
    <section>
      <h2>Search</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="city">Enter a city:</label>
        <input
          id="city"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default WeatherSearch;
