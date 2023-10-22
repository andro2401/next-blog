"use client"
import React, {useState} from 'react';
import {useRouter} from "next/navigation";

const CreateForm = () => {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [priority, setPriority] = useState('low');
    const [isLoading, setIsLoading] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const newTicket = {id, title, body , email, priority }
        const response = await fetch('http://localhost:4000/tickets', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newTicket)
        })
        if (response.status === 201) {
            router.refresh(); //refresh se radi da se router refresha odnosno refresha bazu
            router.push('/tickets'); //ova linija nas vodi do popisa clanaka koja je refreshana i autmotaski se fetchao novi ticket i prikazao u ekranu
        }

        setIsLoading(false);
    }

    return (
        <form className="w-1/2" onSubmit={submitHandler}>
            <label>
                <span>ID:</span>
                <input
                    required
                    type="text"
                    onChange={(e) => setId(e.target.value)}
                    value={id}
                />
            </label>
            <label>
                <span>Title:</span>
                <input
                    required
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
            </label>
            <label>
                <span>Body:</span>
                <textarea
                    required
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                />
            </label>
            <label>
                <span>Priority:</span>
                <select
                    onChange={(e) => setPriority(e.target.value)}
                    value={priority}
                >
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                </select>
            </label>
            <label>
                <span>Email:</span>
                <input
                    required
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </label>
            <button
                className="btn-primary"
                disabled={isLoading}
            >
                {isLoading ? 'Adding...':'Add ticket'}
            </button>
        </form>
    );
};

export default CreateForm;