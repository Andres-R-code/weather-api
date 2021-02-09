import React, { useEffect, useState } from 'react'
import { InfoWeather } from './components/infoWeather';
import { promise } from './components/promise';


export const Weather = () => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

const [value, setValue] = useState([])
const weatherTime = () => { navigator.geolocation.getCurrentPosition(( { coords } ) => {
return setTimeout(()=>{
    promise( coords.latitude, coords.longitude )
.then( setValue )
.then( setState({
        data:[],
        loading: false
}) )
.catch( console.error )
},500)
}); 
}

useEffect(()=> {
    weatherTime()
},[]) 

return (
<>
{ state.loading && <div className="spinner"></div> }
{ value.map(element=> {
return <InfoWeather key={ element.id } { ...element } />
}) }
</>
)
}