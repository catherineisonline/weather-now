import CenterContainerBlock from "./CenterContainer.styled"
import Temperature from "./Temperature.styled";

const CenterContainer = ({ todayWeather }) => {
    return (
        <CenterContainerBlock>
            <section>
                <h1>{todayWeather.name}</h1>
                <Temperature>{todayWeather.temp}&#8451;</Temperature>
                {/* <img src={`http://openweathermap.org/img/wn/${todayWeather.icon}@2x.png`} alt="" /> */}
                <p>{todayWeather.weather}</p>
            </section>
            <section>

            </section>
        </CenterContainerBlock>
    )
}

export default CenterContainer;