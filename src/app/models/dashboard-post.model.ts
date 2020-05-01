export interface IDasboardPost {
    "statecode": string,
    "state": string,
    "recovered": number,
    "active": number,
    "confirmed": number,
    "deaths": number,
    "deltaconfirmed": number,
    "deltadeaths" : number,
    "deltarecovered": number,
    "lastupdatedtime": Date,
    "statenotes": string
}