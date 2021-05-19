import data from '../../data/data'
import { ISociety } from './types'

const getData = () => {
    return data
}

const getResidents = (societyId: string, apartmentNum: number) => {
    const societies: Array<ISociety> = data?.societies
    const society = societies.find(soc => (soc.id === societyId))
    const apartment = society?.apartments?.find(ap => ap.number === apartmentNum)
    return apartment?.residents || []
}

const getApatmentDetails = (apartmentNum: string) => {
    return data
}

export {
    getData, getApatmentDetails, getResidents
}