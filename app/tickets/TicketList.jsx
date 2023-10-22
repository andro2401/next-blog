import Link from "next/link";

const getTickets = async () => {
    const response = await fetch('http://localhost:4000/tickets', {
        next: {
            revalidate: 0
        }
    })
    return response.json();
}
const TicketList = async () => {
    const tickets = await getTickets();
    return (
        <ul>
            {tickets.map((ticket) => (
                <li key={ticket.id} className="card">
                    <Link href={`/tickets/${ticket.id}`}>
                        <h3>{ticket.title}</h3>
                        <p>{ticket.body.slice(0, 250)}</p>
                        <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default TicketList;