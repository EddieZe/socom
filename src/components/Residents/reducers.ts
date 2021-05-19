import { getResidents } from "../service"
import { GET_RESIDENTS } from "./actions"

export const residents = (state = [], action) => {
    const { type, payload } = action
    switch (type) {
        case GET_RESIDENTS:
            const { societyId, apartmentNum } = payload
            return getResidents(societyId, apartmentNum)
        default:
            return state
    }
}