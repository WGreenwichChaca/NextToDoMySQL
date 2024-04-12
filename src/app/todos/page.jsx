import TodoCard from '@/components/TodoCard';
import axios from 'axios';

async function loadTodos() {
    try {
        const response = await axios.get('http://localhost:3000/api/todos');
        return response.data;
    } catch (error) {
        console.error('Error loading todos:', error);
        return []; // Retorna un array vacío en caso de error para evitar que la función devuelva undefined
    }
}

async function TodosPage() {
    const todos = await loadTodos();
    console.log(todos);
    return (
        <div className="grid grid-cols-4 gap-4">
            {todos.map(todo => (
                <TodoCard todo={todo} key={todo.id} />
            ))}
        </div>
    );
}

export default TodosPage;
