import React from 'react'
import Typed from 'react-typed'

function Header()
{
    return (
        <div className="bg-blue-800 fixed top-0 w-full z-10 py-4 pr-16">
            <span className="text-white text-xl font-roboto ml-48"><Typed
                    strings={['Official Tweets Analysis', 'Sentiment Analysis Dashboard']}
                    typeSpeed={40}
                    loop
                /></span>
            <span className = "italic text-white text-sm float-right">{getDate()}</span>
        </div>
        
    )
}


function getDate()
{
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = "Date: " + dd + ' - ' + mm + ' - ' + yyyy;
    return today;
}

export default Header