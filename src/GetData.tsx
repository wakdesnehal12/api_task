import React, { useEffect } from 'react'

export default function GetData() {
    const getData = async() => {
        await fetch('https://api.jdoodle.com/v1/execute')
        .then(res => res.json())
        .then(result => {
            console.log(result)
        })
        .catch(err => {
            console.log(err)
        }) 
    }

    useEffect(() => {
        getData()
    })
  return (
    <div>GetData</div>
  )
}
