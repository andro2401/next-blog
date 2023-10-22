import {notFound} from "next/navigation";

export async function generateStaticParams() {
    const response = await fetch('http://localhost:4000/tickets');

    const tickets = await response.json();

    return tickets.map((ticket) => ({
        id: ticket.id
    }))
}

const getTicket = async (id) => {
    const response = await fetch('http://localhost:4000/tickets/' + id, {
        next: {
            revalidate: 60
        }
    })
    if (!response.ok) {
        notFound();
    }
    return response.json();
}

const Ticket = async ({params}) => {
    const ticket = await getTicket(params.id);
    return (
        <>
            <div>
                <h2>This is a single ticket that is dynamic</h2>
            </div>
            {ticket && (
                <div className="card">
                    <h3>{ticket.title}</h3>
                    <small>{ticket.user_email}</small>
                    <p>{ticket.body}</p>
                    <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
                </div>
            )}
        </>
    );
};

export default Ticket;