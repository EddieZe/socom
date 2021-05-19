export interface IResidents {
    id: number
    name: string
    phoneNumber: string
}

export interface IApartment {
    number: number
    subNumber?: string
    residents?: Array<IResidents>
}

export interface ISociety {
    id: string
    name: string
    address: string
    apartments?: Array<IApartment>
}