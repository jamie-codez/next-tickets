"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'

const TicketForm = ({ ticket }) => {
    const router = useRouter();

    const handleChange = e => {
        const value = e.target.value;
        const name = e.target.name;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({ ...formData })
        const response = await fetch("/api/tickets", {
            method: "POST",
            body: JSON.stringify({ formData }),
            headers: {
                "content-type": "application/json"
            }
        });

        if (!response.ok) {
            toast.error(`Failed to create Ticket.\n${response.message}`);
            throw new Error("Failed to create Ticket.")
        }

        toast.success("Ticket created successfully!");
        router.push("/");
        router.refresh()
    }

    const startingTicketData = {
        title: ticket ? ticket?.title : "",
        description: ticket ? ticket?.description : "",
        priority: ticket ? ticket?.priority : 1,
        progress: ticket ? ticket?.progress : 0,
        status: ticket ? ticket?.status : "Not started",
        category: ticket ? ticket?.category : "Hardware Problem",
        active: ticket ? ticket?.active : true
    }

    const [formData, setFormData] = useState(startingTicketData);


    return (
        <div className='flex bg-slate-700 p-10 shadow-lg rounded-lg m-10 w-[50%]'>
            <form className='flex flex-col gap-3 w-[100%]' method='post' onSubmit={handleSubmit}>
                <h3>{ticket ? "Update Ticket" : "Create Your Ticket"}</h3>
                <label>Title</label>
                <input id='title' name='title' type='text' onChange={handleChange} required={true} value={formData.title} className='m-auto w-[100%] h-10 border-b-4 px-2' />
                <label>Description</label>
                <textarea id='description' name='description' onChange={handleChange} required={true} value={formData.description} rows="5" className='m-auto w-[100%] border-b-4 px-2' />
                <label>Priority</label>
                <div className='flex flex-row space-x-2'>
                    <input id='priority-1' name='priority' type='radio' onChange={handleChange} required={true} value={1} checked={formData.priority == 1} className='mt-5 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
                    <label>1</label>
                    <input id='priority-2' name='priority' type='radio' onChange={handleChange} required={true} value={2} checked={formData.priority == 2} className='mt-5 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ' />
                    <label>2</label>
                    <input id='priority-3' name='priority' type='radio' onChange={handleChange} required={true} value={3} checked={formData.priority == 3} className='mt-5 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
                    <label>3</label>
                    <input id='priority-4' name='priority' type='radio' onChange={handleChange} required={true} value={4} checked={formData.priority == 4} className='mt-5 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
                    <label>4</label>
                    <input id='priority-5' name='priority' type='radio' onChange={handleChange} required={true} value={5} checked={formData.priority == 5} className='mt-5 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
                    <label>5</label>
                </div>
                <label>Category</label>
                <select name='category' value={formData.category} onChange={handleChange} className='h-10 border-b-4'>
                    <option value={"Hardware Problem"}>Hardware Problem</option>
                    <option value={"Software Problem"}>Software Problem</option>
                    <option value={"Project"}>Project</option>
                </select>
                <label>Progress</label>
                <div className='flex flex-row space-x-2'>
                    <input type='range' id='progress' name='progress' value={formData.progress} onChange={handleChange} min={"0"} max={"100"} className='bg-blue-600 w-[100%]' />
                    <h4 className='ml-auto'>{formData.progress}%</h4>
                </div>
                <label>Status</label>
                <select name='status' value={formData.status} onChange={handleChange} className='h-10 border-b-4'>
                    <option value={"not started"}>Not started</option>
                    <option value={"Pending"}>Pending</option>
                    <option value={"Done"}>Done</option>
                </select>
                {ticket ? <select name='active' value={formData.active} onChange={handleChange} className='h-10 border-b-4'>
                    <option value={true}>Active</option>
                    <option value={false}>Inactive</option>
                </select> : null}
                <input type='submit' className='btn' value={"Create Ticket"} />
            </form>
        </div>
    )
}

export default TicketForm