import React from 'react'

interface link{
    value:string,
    url:string
}

export const Link = ({ url,value }: link) => {
    return (
        <div>
            <a href={url}>{value}</a>
        </div>
    )
}
