import Link from 'next/link'

function TodoCard({todo}) {
    return (
        <Link className="bg-white rounded-lg border-gray-800 mb-3
            hover:bg-gray-200 hover:cursor-pointer"
            href={`/todos/${todo.id}`}>
            <h1 className='text-xl font-bold text-slate-600'>{todo.name}</h1>
            <p className='text-lg text-slate-400'>{todo.description}</p>
            <p className='text-sm text-gray-500'>{todo.createdAt}</p>
        </Link>
    )
}

export default TodoCard