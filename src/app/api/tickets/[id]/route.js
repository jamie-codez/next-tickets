import Ticket from "@/app/{models}/Ticket";
import { NextResponse } from 'next/server';


export async function GET(req, { params }) {
    try {
        const { id } = params;
        if (!id) return NextResponse.json({ message: "Ticket ID is required" }, { status: 400, statusText: "Bad request" });
        const ticket = await Ticket.findById({ _id: id });
        if (!ticket) return NextResponse.json({ message: "Ticket not found" }, { status: 404, statusText: "Not found" });
        return NextResponse.json({ ticket }, { status: 200, statusText: "OK" });
    } catch (error) {
        return NextResponse.json({ message: `Error: ${error.message}`, error }, { status: 500, statusText: "Internal server error." });
    }
}

export async function PUT(req, { params }) {
    try {
        const { id } = params;
        const body = await req.json();
        const ticketData = body.formData;
        if (!ticketData) return NextResponse.json({ message: "Ticket data is required" }, { status: 400, statusText: "Bad request" });
        if (!id) return NextResponse.json({ message: "Ticket ID is required" }, { status: 400, statusText: "Bad request" });
        const ticket = await Ticket.findByIdAndUpdate(params.id, ticketData, { new: true });
        return NextResponse.json({ message: "Ticket updated successfully", ticket }, { status: 200, statusText: "OK" });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500, statusText: "Internal server error." });
    }
}

export async function DELETE(req, { params }) {
    try {
        const { id } = params;
        if (!id) return NextResponse.json({ message: "Ticket ID is required" }, { status: 400, statusText: "Bad request" });
        const ticket = await Ticket.findByIdAndUpdate(params.id, { active: false }, { new: true });
        return NextResponse.json({ message: "Ticket deleted successfully", ticket }, { status: 200, statusText: "OK" });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500, statusText: "Internal server error." });
    }
}