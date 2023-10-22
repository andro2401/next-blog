import React from 'react';
import TicketList from "@/app/tickets/TicketList";

const Tickets = () => {
    return (
        <>
            <div>
                <h2>All tickets</h2>
                <p><small>View all active tickets:</small></p>
            </div>
            <TicketList />
        </>
    );
};

export default Tickets;