import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

const EditBlock = ({ id, edit }) => {

    const handleClick = (e) => {
        e.preventDefault()
        edit(id)
    }


    return (
        <button className='flex flex-row bg-stone-700 rounded-md px-2 py-2 space-x-2 hover:bg-blue-300 hover:cursor-pointer' onClick={handleClick}>
            <p className='m-1'>Edit</p>
            <FontAwesomeIcon icon={faEdit} size='' className='icon text-blue-400 hover:cursor-pointer m-1' />
        </button>
    )
}

export default EditBlock