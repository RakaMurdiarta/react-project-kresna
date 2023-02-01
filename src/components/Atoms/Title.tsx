import React from 'react'
import { LabelProps } from '../LabelProps.types'


const Label = ({ label }: LabelProps) => {
  return (
    <div>{label}</div>
  )
}

export default Label