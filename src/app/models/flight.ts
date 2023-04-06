export interface Flight {

    flightName: string | null;
    location: {
        from: string | null;
        to: string | null;
    }
    cost: number | null;
    distance: number | null;
    availability: boolean | null;

}

