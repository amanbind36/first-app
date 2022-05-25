import React from "react";
import {useState} from "react";
import {useEffect} from "react"


const Timer=()=>{
    const [timer,setTimer]=useState(10);

    useEffect(()=>{
        if(timer >100){
            clearInterval(id);
        }
        else{
            setTimer(timer)
        }
    })
}