import React, {useState} from 'react'
import './name.css'

export function NameUpdate(){
    let [name,setname]=useState('')
     function handleChange(event){
          setname(event.target.value)
     }
     function sumbission(){
        // name?setname(name.toUpperCase()):setname(name.toLowerCase())
        setname(name?name.toUpperCase():'null')
     }
    return (
        <div class="parent">
        <input type="text" onChange={handleChange}/>
        <button onClick={sumbission}>submit</button>
        <h1>hii my name is:{name}</h1>
    </div>
    )
}