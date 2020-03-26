import React,{createContext, useState} from 'react';

export const ResidenceContext = createContext()

export default function ResidenceContextProvider(props) {

    const [residences, setResidences] = useState([])

    const fetchResidences = async () => {
        let res = await fetch('/api/residences')
        res = await res.json()
        console.log(res)
        setResidences(res)
    }

    const values = {
        residences,
        setResidences
    }

    return(
        <ResidenceContext.Provider value={values}>
            {props.children}
        </ResidenceContext.Provider>
    )
}

