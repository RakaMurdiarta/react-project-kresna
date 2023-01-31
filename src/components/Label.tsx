import React from 'react'

type LabelProps={
    label:string
}

const Label = ({label}:LabelProps) => {
  return (
    <div>{label}</div>
  )
}

export default Label