import React from 'react'
import { LabelProps } from './LabelProps.types'

const Button = ({ label }: LabelProps) => {
    return (
        <button>{label}</button>
    )
}

export default Button