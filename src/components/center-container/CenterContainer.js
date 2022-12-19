import { CenterContainerBlock, HighLow, WeatherDesc, Temperature } from "./CenterContainer.styled";
import ClipLoader from "react-spinners/ClipLoader";
import React from "react";


const CenterContainer = ({ todayWeather, loading }) => {
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
          /> :
          <CenterContainerBlock>
            <section>
                <h1>{todayWeather.name}</h1>
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