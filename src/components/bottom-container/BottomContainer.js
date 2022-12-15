import FooterBlock from "./BottomContainer.styled";

const BottomContainer = ({ todayWeather }) => {
    return (
        <FooterBlock>
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
        </FooterBlock>
    )
}

export default BottomContainer;