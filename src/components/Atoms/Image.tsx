import React from 'react'
import { LabelProps } from '../LabelProps.types'

const Image = ({ label }: LabelProps) => {
    return (
        <img src={label} alt="" />
    )
}

export default Image