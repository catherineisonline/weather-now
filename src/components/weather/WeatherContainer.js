
import StyledWeatherContainer from "./WeatherContainer.styled";


const WeatherContainer = ({ todayWeather }) => {
    return (
        <StyledWeatherContainer>
            <p>Change location</p>
            <section>
                <h1>{todayWeather.name}</h1>
                <img src={`http://openweathermap.org/img/wn/${todayWeather.icon}@2x.png`} alt="" />
                <p>{todayWeather.weather}</p>
            </section>
            <section>
                <p>{todayWeather.temp}&#8451;</p>
            </section>
            <section>
                <section>
                    <h2>Feels like</h2>
                    <p>{todayWeather.feelsLike}&#8451;</p>
                </section>
                <section>
                    <h2>Humidity</h2>
                    <p>{todayWeather.humidity}%</p>
                </section>
                <section>
                    <h2>Wind</h2>
                    <p>{todayWeather.wind} km/h</p>
                </section>
                <section>
                    <h2>Highest</h2>
                    <p>{todayWeather.highest}&#8451;</p>
                </section>
                <section>
                    <h2>Lowest</h2>
                    <p>{todayWeather.lowest}&#8451;</p>
                </section>
            </section>
        </StyledWeatherContainer>
    )
}

export default WeatherContainer;