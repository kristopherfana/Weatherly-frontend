export interface CurrentWeatherModel {
    currentWeatherData: CurrentWeatherData
    backgroundImg: BackgroundImg
}

export interface CurrentWeatherData {
    coord: Coord
    weather: Weather[]
    main: Main
    dt: number
    sys: Sys
    name: string
    cod: number
    cnt: number
}

export interface Coord {
    lon: number
    lat: number
}

export interface Weather {
    id: number
    main: string
    description: string
}

export interface Main {
    temp: number
}

export interface Sys {
    country: string
}

export interface BackgroundImg {
    blur_hash: string
    alt_description: string
    urls: Urls
    width: number
    height: number
}

export interface Urls {
    raw: string
}
