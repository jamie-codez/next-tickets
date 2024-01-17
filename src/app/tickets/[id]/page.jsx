import TicketForm from '@/app/{components}/TicketForm'
import React from 'react'

const getTicket = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
            method: 'GET',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        return data.ticket
    } catch (error) {
        console.error("Error fetching ticket:", error);
    }
}

const TicketPage = async ({ params }) => {
    const { id } = params;
    const editMode = id === "new" ? false : true;
    const ticket = editMode ? await getTicket(id) : null;

    return (
        <div className='flex justify-center mx-auto'>
            <TicketForm ticket={ticket} />
        </div>
    )
}

export default TicketPage