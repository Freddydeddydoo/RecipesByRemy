import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './../CSSFiles/Saved.css'


const Saved = (props) => {
    const { loggedIn, email } = props
    const navigate = useNavigate()

    return (
    
    <div className="fullPage">
        <div className="stickyHeader">
            <h1>Eventual NavBar</h1>
        </div>

        <div className="paramBox">
            <div className='topTitle'>
                <h1>Saved Recipes</h1>
            </div>


            <div className='filters'>
                <div className="SearchBar">
                    Enter search Query
                </div>

                <div className='sortButton'>
                    Sort By
                </div>
            </div>

        </div>

        <div className='results'>
            Here are the results

            <div className='resultCell'>
                <h1> Result #1</h1>
                <div className='resultImage'>
                    Image Here
                </div>
                <div className='resultsKeyFax'>
                    KeyFax Here
                </div>
                <div className='resultsButtons'>
                    <div className='resultsB_view'>
                        View
                    </div>
                    <div className='resultsB_edit'>
                        Edit
                    </div>
                    <div className='resultsB_delete'>
                        Delete
                    </div>
                </div>
            </div>
        </div>


    </div>
    )
    }




export default Saved