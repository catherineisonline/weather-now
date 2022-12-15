import Main from "./Main.styled";
import BottomContainer from "../bottom-container/BottomContainer";
import TopContainer from "../top-container/TopContainer";
import CenterContainer from "../center-container/CenterContainer";

const WeatherContainer = ({ todayWeather, handleSubmit, handleValidation, formValue }) => {
    return (
        <Main>
            <TopContainer handleSubmit={handleSubmit} handleValidation={handleValidation} formValue={formValue} />
            <CenterContainer todayWeather={todayWeather} />
            <BottomContainer todayWeather={todayWeather} />
        </Main>
    )
}

export default WeatherContainer;