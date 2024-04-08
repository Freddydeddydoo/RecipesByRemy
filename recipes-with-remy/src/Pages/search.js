import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './../CSSFiles/Search.css'


const Search = (props) => {
    const { loggedIn, email } = props
    const navigate = useNavigate()

    return (
        <div className='fullPage'>
            <div className='stickyHeader'>
                Eventual Nav Bar
            </div>

            <div className='pageContent'>
                <div className='filterSide'>
                    Filterside
                </div>
                    
                <div className='resultSide'>
                    resultSide
                    <div className='searchSort'>
                        filters here
                    </div>

                    <div className='result'>
                        results here
                    </div>
                </div>
            </div>

        </div>
    )

    
}

export default Search