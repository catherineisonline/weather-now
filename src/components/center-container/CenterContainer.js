import { CenterContainerBlock, HighLow, WeatherDesc, Temperature } from "./CenterContainer.styled";
import ClipLoader from "react-spinners/ClipLoader";
import React from "react";
import NotFound from "../../assets/images/not-found.png";

const CenterContainer = ({ todayWeather, loading, noData }) => {
    return (
        <React.Fragment>
            {loading ?
                <ClipLoader
                    className="loader"
                    color="black"
                    loading={loading}
                    size={190}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                /> : noData ?
                    <CenterContainerBlock>
                        <img src={NotFound} alt="" aria-hidden="true" />
                        <p>No such place found! Please try again </p>
                    </CenterContainerBlock> :
                    <CenterContainerBlock>
                        <section>
                            <h1>{todayWeather.name}, {todayWeather.country}</h1>
                            <Temperature>{todayWeather.temp}&deg;</Temperature>
                            <WeatherDesc>{todayWeather.weatherDesc}</WeatherDesc>
                        </section>
                        <HighLow>
                            <p>H: {todayWeather.highest}&deg;</p>
                            <p>L: {todayWeather.lowest}&deg;</p>
                        </HighLow>
                    </CenterContainerBlock>}
        </React.Fragment>
    )
}

export default CenterContainer;