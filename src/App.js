
import { Route, Routes, BrowserRouter } from "react-router-dom";
import WeatherContainer from "./components/weather/WeatherContainer";
import { useEffect, useState } from "react";
import GlobalStyles from "./core-ui/Globals";
import { ThemeProvider } from "styled-components";
import { clouds, rain, clear } from "./core-ui/Themes.styled";


const APIkey = "f2b7ec03f3daeb5cfeb9300a408b2cb8";
function App() {
  const [todayWeather, setTodayWeather] = useState({ name: "", temp: "", icon: "03d", weather: "", feelsLike: "", humidity: "", wind: "", highest: "", lowest: "" });
  const [targetLocation, setTargetLocation] = useState({});
  const [searchedLocation, setSearchedLocation] = useState("Jakarta");
  const [lang, setLang] = useState("en");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [searchDone, setSearchDone] = useState(false);
  const [theme, setTheme] = useState('light');


  const setWeather = theme === "rain" ? rain : theme === "clouds" ? clouds : clear;
  useEffect(() => {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchedLocation}&limit=1&appid=${APIkey}`)
      .then(response => response.json())
      .then(data => {
        setLat(data[0].lat); setLon(data[0].lon); setSearchDone(true); setTodayWeather(prev => { return { ...prev, name: data[0].name } })
      });

  }, [searchedLocation]);

  useEffect(() => {
    if (searchDone) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=${lang}&appid=${APIkey}&units=metric&`)
        .then(response => response.json())
        .then(data => {
          setTargetLocation(data);
          console.log(data);
          setTodayWeather({ ...todayWeather, temp: Math.ceil(data.main.temp), icon: data.weather[0].icon, weather: data.weather[0].main.toLowerCase(), feelsLike: data.main.feels_like, humidity: data.main.humidity, wind: data.wind.speed, highest: data.main.temp_max, lowest: data.main.temp_min });
        });
    }
    const toggleTheme = () => {
      if (todayWeather.weather === 'rain') {
        setTheme('rain');
      }
      else if (todayWeather.weather === 'clear') {
        setTheme('clear');
      }
      else if (todayWeather.weather === 'thunderstorm') {
        setTheme('thunderstorm');
      }
      else if (todayWeather.weather === 'snow') {
        setTheme('snow');
      }
      else if (todayWeather.weather === 'drizzle') {
        setTheme('drizzle');
      }
      else if (todayWeather.weather === 'mist') {
        setTheme('mist');
      }
      else if (todayWeather.weather === 'smoke') {
        setTheme('smoke');
      }
      else if (todayWeather.weather === 'fog') {
        setTheme('fog');
      }
      else if (todayWeather.weather === 'haze') {
        setTheme('haze');
      }
      else if (todayWeather.weather === 'clouds') {
        setTheme('clouds');
      }
      //, Dust, Sand, Ash, Squall, Tornado
    }
    toggleTheme();
    return () => setSearchDone(false);

  }, [searchDone, lat, lon, lang, todayWeather]);

  return (
    <ThemeProvider theme={setWeather}>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<WeatherContainer todayWeather={todayWeather} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
