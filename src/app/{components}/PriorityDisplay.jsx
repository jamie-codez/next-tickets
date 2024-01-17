import { faAt, faBuildingLock, faFire, faMobileButton, faSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const PriorityDisplay = ({ priority }) => {
    return (
        <div className='flex flex-col justify-start align-baseline'>
            <p className='text-default-text mt-0.5'>Priority:</p>
            <div className='flex flex-row justify-start align-baseline space-x-1'>
                <FontAwesomeIcon icon={faSquare} className={`${priority > 0 ? "text-red-400" : "text-slate-400"}`} />
                <FontAwesomeIcon icon={faSquare} className={`${priority > 1 ? "text-red-400" : "text-slate-400"}`} />
                <FontAwesomeIcon icon={faSquare} className={`${priority > 2 ? "text-red-400" : "text-slate-400"}`} />
                <FontAwesomeIcon icon={faSquare} className={`${priority > 3 ? "text-red-400" : "text-slate-400"}`} />
                <FontAwesomeIcon icon={faSquare} className={`${priority === 5 ? "text-red-400" : "text-slate-400"}`} />
            </div>
        </div>
    )
}

export default PriorityDisplay