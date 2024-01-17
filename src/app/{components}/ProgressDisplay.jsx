import React from 'react'

const ProgressDisplay = ({ progress }) => {
    return (
        <div className='flex flex-row space-x-5 items-center mt-3'>
            <p className='text-default-text'>Progress:</p>
            <div className='w-full bg-gray-200 rounded-full h-2.5'>
                <div className='bg-blue-600 h-2.5 rounded-full' style={{ width: `${progress}%` }}></div>
            </div>
            <span className='text-green-500 text-xs font-bold'>{progress}%</span>
        </div>
    )
}

export default ProgressDisplay