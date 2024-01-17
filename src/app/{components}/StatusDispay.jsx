import React from 'react'

const StatusDispay = ({ status }) => {

    const getColor = (status) => {
        switch (status.toLowerCase()) {
            case 'not started':
                return 'bg-red-200 text-red-900'
            case 'pending':
                return 'bg-yellow-200 text-yellow-800'
            case 'done':
                return 'bg-red-200 text-red-800'
            default:
                return 'bg-green-200 text-green-800'
        }
    }

    return (
        <div className='flex flex-row justify-start align-baseline space-x-1'>
            <p className='text-default-text mt-0.5'>Status:</p>
            <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-lg ${getColor(status)}`}>{status}</span>
        </div>
    )
}

export default StatusDispay