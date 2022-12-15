import defaultWeatherImage from "../assets/images/weather/defaultWeather.jpg";
import cloudsImage from "../assets/images/weather/clouds.jpg";
import rainImage from "../assets/images/weather/rain.jpg";
import clearImage from "../assets/images/weather/clear.jpg"
import thunderstormImage from "../assets/images/weather/thunderstorm.jpg"
import drizzleImage from "../assets/images/weather/drizzle.jpg"
import snowImage from "../assets/images/weather/snow.jpg"
import mistImage from "../assets/images/weather/mist.jpg"
import smokeImage from "../assets/images/weather/smoke.jpg"
import fogImage from "../assets/images/weather/fog.jpg"
import hazeImage from "../assets/images/weather/haze.jpg";

export const defaultWeather = {
    name: "defaultWeather",
    colors: {
        background: `url(${defaultWeatherImage})`,
        color: "white",
    }
}

export const clouds = {
    name: "clouds",
    colors: {
        background: `url(${cloudsImage})`,
    }
}

export const rain = {
    name: "rain",
    colors: {
        background: `url(${rainImage})`,
    }
}
export const clear = {
    name: "clear",
    colors: {
        background: `url(${clearImage})`,
    }
}
export const thunderstorm = {
    name: "thunderstorm",
    colors: {
        background: `url(${thunderstormImage})`,
    }
}
export const drizzle = {
    name: "drizzle",
    colors: {
        background: `url(${drizzleImage})`,
    }
}
export const snow = {
    name: "snow",
    colors: {
        background: `url(${snowImage})`,
    }
}
export const mist = {
    name: "mist",
    colors: {
        background: `url(${mistImage})`,
    }
}
export const smoke = {
    name: "smoke",
    colors: {
        background: `url(${smokeImage})`,
    }
}
export const fog = {
    name: "fog",
    colors: {
        background: `url(${fogImage})`,
    }
}

export const haze = {
    name: "haze",
    colors: {
        background: `url(${hazeImage})`,
    }
}