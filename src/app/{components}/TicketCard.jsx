"use client"
import React from 'react'
import DeleteBlock from './DeleteBlock'
import PriorityDisplay from './PriorityDisplay'
import EditBlock from './EditBlock'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import ProgressDisplay from './ProgressDisplay'
import StatusDispay from './StatusDispay'
import { toast } from 'react-hot-toast'
import Link from 'next/link'

const TicketCard = ({ ticket }) => {

    const router = useRouter()


    const handleDelete = async (id) => {
        try {
            const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
                method: 'DELETE',
            })
            const data = await res.json()
            if (!res.ok) throw new Error(data.message)
            router.refresh()
            toast.success("Ticket deleted successfully!");
        } catch (error) {
            console.error(error.message)
            toast.error(`Failed to delete Ticket.\n${error.message}`);
            throw new Error(error.message)
        }

    }

    const handleEdit = async (id) => {
        router.push(`/tickets/${id}`)
    }

    return (
        <div className='flex flex-col bg-card hover:bg-card-hover rounded-md p-4 m-2 shadow-lg pr-3 w-[98%]'>
            <Link href={`/tickets/${ticket._id}`} style={{ display: "contents" }}>
                <div className='flex flex-row justify-between'>
                    <h5 className='text-default-text font-bold mt-4'>{ticket.title}</h5>
                    <div className='flex flex-row space-x-3'>
                        <div className='flex space-x-2 rounded-full bg-slate-300 justify-end ml-auto items-end'>
                            <FontAwesomeIcon icon={faUserCircle} size='3x' className='text-red-400' />
                        </div>
                    </div>
                </div>
                <hr className='border-gray-400 my-2' />
                <p className='text-default-text whitespace-pre-wrap'>{ticket.description}</p>
                <div className='flex-grow'></div>
                <div className='flex flex-row flex-nowrap space-x-3 justify-between'>
                    <p className='text-default-text mt-1'>Created On: {formatMongoDBTimestamp(ticket.createdAt)}</p>
                    <div className='flex flex-row space-x-3 ml-auto'>
                        <StatusDispay status={ticket.status} />
                    </div>
                </div>
                <p className='text-default-text'>Assigned To: Jamie</p>
                <p className='text-default-text'>Assigned By: Jamie</p>
                <hr className='border-gray-400' />
                <div className=''>
                    <ProgressDisplay progress={ticket.progress} />
                </div>
                <hr className='border-gray-400 my-2' />
                <div className='flex flex-row w-full justify-between space-x-3 mt-2'>
                    <div className='flex flex-col justify-start'>
                        <PriorityDisplay priority={ticket.priority} />
                    </div>
                    <div className='flex flex-row space-x-3 ml-auto'>
                        <EditBlock id={ticket._id} edit={handleEdit} />
                        <DeleteBlock id={ticket._id} deleteCall={handleDelete} />
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default TicketCard


export function formatMongoDBTimestamp(timestamp) {
    const date = new Date(timestamp);
    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    const hours = ("0" + date.getHours()).slice(-2);
    const minutes = ("0" + date.getMinutes()).slice(-2);
    const seconds = ("0" + date.getSeconds()).slice(-2);

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}