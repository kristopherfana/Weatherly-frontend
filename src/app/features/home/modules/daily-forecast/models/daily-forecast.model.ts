export interface DailyForecast {

    cnt: number;
    cod: string;
    list: List[];
    city: City;
}
export interface City {
    name: string;
    coord: Coord;
    country: string;
}

export interface Coord {
    lon: number;
    lat: number;
}

export interface List {
    dt: number;
    date: string;
    time: string;
    main: null;
    weather: Weather[];
    pop: number;
    temp: Temp;
}

export interface Temp {
    day: number;
    min: number;
    max: number;
}

export interface Weather {
    id: number;
    main: string;
    description: string;
}

