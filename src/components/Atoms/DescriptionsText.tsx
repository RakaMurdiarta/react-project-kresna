import React from 'react'
import { LabelProps } from '../LabelProps.types'

const DescriptionsText = ({ label }: LabelProps) => {
    return (
        <p>
            {label}
        </p>
    )
}

export default DescriptionsText