"use client"
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useRouter, useParams } from "next/navigation";

function TaskForm() {

    const [task, setTask] = useState({
        name: "",
        description: "",
    });
    const form = useRef(null);
    const router = useRouter();
    const params = useParams();

    const handleChange = e => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    };

    useEffect(() => {
        if (params.id) {
            axios.get('/api/todos/' + params.id)
                .then(res => {
                    setTask({
                        name: res.data.name ?? "",
                        description: res.data.description ?? "",
                    })
                })
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res;
            if (!params.id) {
                res = await axios.post('/api/todos', task);
            } else {
                res = await axios.put('/api/todos/' + params.id, task);
            }
            console.log(res);
            form.current.reset();
            router.push('/todos');
        } catch (error) {
            console.error('Error:', error);
            // Manejo de errores - Puedes mostrar un mensaje de error al usuario, por ejemplo.
        }
        router.refresh()
    }

    return (
        <div>
            <form className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4"
                onSubmit={handleSubmit}
                ref={form}
            >

                <label
                    htmlFor="name"
                    className="block text-gray-700 text-sm font-bold mb-2"
                >Task Name</label>
                <input
                    name="name"
                    className="shadow appearance-none border border-gray-400 py-2 px-3 w-full text-black"
                    type="text"
                    placeholder="Write your task name"
                    onChange={handleChange}
                    value={task.name}
                    autoFocus
                />

                <label
                    htmlFor="description"
                    className="block text-gray-700 text-sm font-bold mb-2"
                >Task Description</label>
                <textarea
                    name="description"
                    className="shadow appearance-none border border-gray-400 py-2 px-3 w-full text-black"
                    rows={3}
                    placeholder="Write your task description"
                    onChange={handleChange}
                    value={task.description}
                ></textarea>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    {params.id ? "Update Task" : "Create Task"}
                </button>
            </form>
        </div>
    )
}

export default TaskForm