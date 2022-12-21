
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Main from "./components/main/Main";
import { useEffect, useState } from "react";
import GlobalStyles from "./core-ui/Globals";
import { ThemeProvider } from "styled-components";
import { defaultWeather, clouds, rain, clear, thunderstorm, snow, drizzle, mist, smoke, fog, haze } from "./core-ui/Themes.styled";


function App() {
  const [todayWeather, setTodayWeather] = useState({ name: "", country: "", temp: "", icon: "03d", weather: "", weatherDesc: "", feelsLike: "", humidity: "", wind: "", highest: "", lowest: "" });
  const [searchedLocation, setSearchedLocation] = useState("Buenos Aires");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [searchDone, setSearchDone] = useState(false);
  const [theme, setTheme] = useState('clear');
  const [formValue, setFormValue] = useState({ searchedLocation: "" });
  const [formError, setFormError] = useState({});
  const [noData, setNoData] = useState(false);
  const [loading, setLoading] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();
    setFormError(validateForm(formValue));
    // setSubmit(true);
    setSearchedLocation(formValue.searchedLocation);
    setFormValue({ searchedLocation: "" });
  }
  const handleValidation = async (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }
  const validateForm = (value) => {
    let errors = {};
    if (!value.searchedLocation) {
      errors.searchedLocation = "Please enter a country name"
    }
    
    
    return errors;
  }

  const setWeather = theme === "rain" ? rain : theme === "clouds" ? clouds : theme === "clear" ? clear : theme === "thunderstorm" ? thunderstorm : theme === "snow" ? snow : theme === "drizzle" ? drizzle : theme === "mist" ? mist : theme === "smoke" ? smoke : theme === "haze" ? haze : theme === "fog" ? fog : defaultWeather;


  useEffect(() => {
    setLoading(true);
    setNoData(false);
    
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchedLocation}&limit=1&appid=${process.env.REACT_APP_VERY_PRIVATE_KEY}`)
      .then(response => response.json())
      .then(data => {
        setLat(data[0]?.lat);
        setLon(data[0]?.lon);
        setSearchDone(true);
        setTodayWeather(prev => { return { ...prev, name: data[0]?.local_names?.en, country: data[0]?.country } })
       
      }).catch((err) => {
        console.log(err.message);
      });

  }, [searchedLocation]);

  useEffect(() => {
    if (searchDone) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_VERY_PRIVATE_KEY}&units=metric`)
        .then(response => response.json())
        .then(data => {
          setTodayWeather({ ...todayWeather,  temp: Math.ceil(data?.main?.temp), icon: data.weather[0].icon, weather: data.weather[0].main.toLowerCase(), weatherDesc: data.weather[0].description, feelsLike: data.main.feels_like, humidity: data.main.humidity, wind: data.wind.speed, highest: data.main.temp_max, lowest: data.main.temp_min });
          setLoading(false);
        }).catch((err) => {
          setLoading(false);
          setNoData(true);
          console.log(err.message, "errrr");
        });
    }
    const toggleTheme = () => {
      if (todayWeather.weather === '') {
        setTheme('default');
      }
      if (todayWeather.weather === 'clouds') {
        setTheme('clouds');
      }
      if (todayWeather.weather === 'rain') {
        setTheme('rain');
      }
      if (todayWeather.weather === 'clear') {
        setTheme('clear');
      }
      if (todayWeather.weather === 'thunderstorm') {
        setTheme('thunderstorm');
      }
      if (todayWeather.weather === 'snow') {
        setTheme('snow');
      }
      if (todayWeather.weather === 'drizzle') {
        setTheme('drizzle');
      }
      else if (todayWeather.weather === 'mist') {
        setTheme('mist');
      }
      if (todayWeather.weather === 'smoke') {
        setTheme('smoke');
      }
      if (todayWeather.weather === 'fog') {
        setTheme('fog');
      }
      if (todayWeather.weather === 'haze') {
        setTheme('haze');
      }
      //, Dust, Sand, Ash, Squall, Tornado
    }

    toggleTheme();
    return () => setSearchDone(false);

  }, [searchDone, lat, lon, todayWeather, searchedLocation]);

  return (
    <ThemeProvider theme={setWeather}>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Main noData={noData} loading={loading} formError={formError} formValue={formValue} todayWeather={todayWeather} handleSubmit={handleSubmit} handleValidation={handleValidation} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
