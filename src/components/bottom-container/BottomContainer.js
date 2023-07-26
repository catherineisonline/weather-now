import { FooterBlock, DataSection, Image } from "./BottomContainer.styled";
import FeelsLike from "../../assets/images/footer/feels.png";
import Wind from "../../assets/images/footer/wind.png";
import Humidity from "../../assets/images/footer/humidity.png";
import React from "react";

const BottomContainer = ({ todayWeather, loading, noData }) => {
    return (
        <React.Fragment>
            {loading || noData ? <FooterBlock>{null}</FooterBlock> :
                <FooterBlock>
                    <DataSection>
                        <Image src={FeelsLike} alt="" aria-hidden="true" />
                        <h2>Feels like</h2>
                        <p>{todayWeather.feelsLike}&#8451;</p>
                    </DataSection>
                    <DataSection>
                        <Image src={Humidity} alt="" aria-hidden="true" />
                        <h2>Humidity</h2>
                        <p>{todayWeather.humidity}%</p>
                    </DataSection>
                    <DataSection>
                        <Image src={Wind} alt="" aria-hidden="true" />
                        <h2>Wind</h2>
                        <p>{todayWeather.wind} km/h</p>
                    </DataSection>
                </FooterBlock>
            }
        </React.Fragment>
    )
}

export default BottomContainer;