import React, { useEffect, useState } from "react"
import { connect } from 'react-redux'

import { TextField, Table, TableCell, TableHead, TableBody, TableRow } from "../../common/mui"
import { IResidents } from "../types"
import { getResidents } from './actions'



const Residents = ({ residents, onChangeFilter}) => {
    const [society, setSociety] = useState("1")
    const [apartment, setApartment] = useState(1)

    useEffect(() => {
        onChangeFilter(society, apartment)
    }, [apartment, society])

    return (
        <>
            <TextField label="Society Number" defaultValue={society || ''} onChange={e => setSociety(e.target.value)}></TextField>
            <TextField label="Apartment Number" defaultValue={apartment || ''} onChange={e => setApartment(parseInt(e.target.value))}></TextField>
            { residents &&
                <Table>
                    <TableHead><TableRow><TableCell>Name</TableCell><TableCell>Phone Number</TableCell></TableRow></TableHead>
                    <TableBody>
                        {residents?.map((res: IResidents) => (
                            <TableRow key={res.id}>
                                <TableCell>{res.name}</TableCell>
                                <TableCell>{res.phoneNumber}</TableCell>
                            </TableRow>
                        ))
                        }
                    </TableBody>
                </Table>
            }
        </>
    )
}

const mapStateToProps = state => ({
    residents: state?.residents || []
})

const mapDispatchToProps = dispatch => ({
    onChangeFilter: (society, apartment) => dispatch(getResidents(society, apartment))
})

export default connect(mapStateToProps, mapDispatchToProps)(Residents)