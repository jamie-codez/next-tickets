import Ticket from "@/app/{models}/Ticket";
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const body = await req.json();
        const ticketData = body.formData;
        const ticket = await Ticket.create(ticketData);
        return NextResponse.json({ message: "Ticket created successfully" }, { status: 201, statusText: "Created" });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500, statusText: "Internal server error." });
    }
}


export async function GET() {
    try {
        const tickets = await Ticket.find({ active: true });
        return NextResponse.json({ tickets }, { status: 200, statusText: "OK" });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500, statusText: "Internal server error." });
    }
}