import React from "react"

export default function Residances(props) {
    const { residances } = props
    return (
        <>{
            residances.map(res => (
                <div key={res.id}>
                    <h2>{res.name} - {res.phoneNumber}</h2>
                </div>
            ))}
        </>
    )
}