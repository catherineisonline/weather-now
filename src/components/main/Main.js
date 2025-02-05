import Main from "./Main.styled";
import React from "react";
import BottomContainer from "../bottom-container/BottomContainer";
import TopContainer from "../top-container/TopContainer";
import CenterContainer from "../center-container/CenterContainer";
//Videos
import defaultWeatherImage from "../../assets/images/weather/defaultWeather.mp4";
import cloudsImage from "../../assets/images/weather/clouds.mp4";
import rainImage from "../../assets/images/weather/rain.mp4";
import clearImage from "../../assets/images/weather/clear.mp4";
import thunderstormImage from "../../assets/images/weather/thunderstorm.mp4";
import drizzleImage from "../../assets/images/weather/drizzle.mp4";
import snowImage from "../../assets/images/weather/snow.mp4";
import mistImage from "../../assets/images/weather/mist.mp4";
import smokeImage from "../../assets/images/weather/smoke.mp4";
import fogImage from "../../assets/images/weather/fog.mp4";
import hazeImage from "../../assets/images/weather/haze.mp4";

const WeatherContainer = ({ theme, todayWeather, handleSubmit, handleValidation, formValue, formError, loading, noData }) => {

    return (
        <Main>
            <video autoPlay loop muted playsInline key={theme}>
                <source src={theme === 'clear' ? clearImage : theme === 'rain' ? rainImage : theme === 'clouds' ? cloudsImage : theme === 'drizzle' ? drizzleImage : theme === 'snow' ? snowImage : theme === 'mist' ? mistImage : theme === 'smoke' ? smokeImage : theme === 'fog' ? fogImage : theme === 'haze' ? hazeImage : theme === 'thunderstorm' ? thunderstormImage : theme === 'defaultWeather' ? defaultWeatherImage : defaultWeatherImage} type="video/mp4" />
            </video>
            <TopContainer formError={formError} handleSubmit={handleSubmit} handleValidation={handleValidation} formValue={formValue} />
            <CenterContainer todayWeather={todayWeather} loading={loading} noData={noData} />
            <BottomContainer todayWeather={todayWeather} loading={loading} noData={noData} />
        </Main>
    )
}

export default WeatherContainer;