import React from 'react'
import TicketCard from './{components}/TicketCard'

const getTickets = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/tickets', {
      method: 'GET',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()
    return data
  } catch (error) {
    console.error("Error fetching tickets:", error);
  }
}


const Dashboard = async () => {

  const { tickets } = await getTickets();

  const uniqueCategories = [...new Set(tickets?.map(ticket => ticket.category))];

  return (
    <div className='p-5'>
      <div>
        {tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => <div key={categoryIndex} className='mb-4'><h2>{uniqueCategory}</h2>
          <div className='grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4'>
            {tickets?.map((ticket, index) => ticket.category === uniqueCategory && <TicketCard id={index} key={index} ticket={ticket} />)}
          </div>
        </div>)}
      </div>
    </div>
  )
}

export default Dashboard