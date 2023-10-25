export interface HourlyForecast {
    cnt: number
    cod: string
    list: List[]
    city: City
}

export interface List {
    dt: number
    time: string
    date: string
    main: Main
    weather: Weather[]
    pop: number
    temp: any
}

export interface Main {
    temp: number
}

export interface Weather {
    id: number
    main: string
    description: string
}

export interface City {
    name: string
    coord: Coord
    country: string
}

export interface Coord {
    lon: number
    lat: number
}
