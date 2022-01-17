import { useState } from "react";

const api = {
  key: process.env.API_KEY,
  base: process.env.API_BASE,
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [wallpaper, setWallpaper] = useState('')

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result)
          if (result.main.temp > 29) {
            setWallpaper('warm')
          } else {
            setWallpaper('')
          }
        });
    }
  };

  return (
    <div className={`app ${wallpaper}`}>
      <main>
        <input
          type="text"
          id="searchbox"
          placeholder="Search City..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
        {weather.main ? (
          <div className="main-container">
            <div className="city-info text">
              {weather.name}, {weather.sys.country}
            </div>
            <div className="temp text">{Math.floor(weather.main.feels_like)}°C</div>
            <div className="weather text">{weather.weather[0].main}</div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
