export const GET_RESIDENTS = 'GET_RESIDENTS'

export const getResidents = (societyId: string, apartmentNum: number) => ({
    type: GET_RESIDENTS,
    payload: { societyId, apartmentNum }
})

