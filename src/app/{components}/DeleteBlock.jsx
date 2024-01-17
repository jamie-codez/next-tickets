import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const DeleteBlock = ({ id, deleteCall }) => {

    const handleClick = (e) => {
        e.preventDefault();
        deleteCall(id)
    }

    return (
        <button className='flex flex-row bg-stone-700 rounded-md px-2 py-2 space-x-2 hover:bg-red-300' onClick={handleClick}>
            <p className='mt-1'>Delete</p>
            <FontAwesomeIcon icon={faTrash} className='icon text-red-400 m-1 hover:cursor-pointer' />
        </button>
    )
}

export default DeleteBlock