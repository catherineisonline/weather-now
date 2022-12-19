import Main from "./Main.styled";
import BottomContainer from "../bottom-container/BottomContainer";
import TopContainer from "../top-container/TopContainer";
import CenterContainer from "../center-container/CenterContainer";

const WeatherContainer = ({ todayWeather, handleSubmit, handleValidation, formValue, formError , loading}) => {
    return (
        <Main>
            <TopContainer formError={formError} handleSubmit={handleSubmit} handleValidation={handleValidation} formValue={formValue} />
            <CenterContainer todayWeather={todayWeather} loading={loading}/>
            <BottomContainer todayWeather={todayWeather} loading={loading}/>
        </Main>
    )
}

export default WeatherContainer;