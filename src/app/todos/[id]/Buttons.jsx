"use client"
import axios from 'axios'
import { useRouter } from 'next/navigation';

function Buttons(props) {
  const router = useRouter()
  const { todoId } = props;
  return (
    <div className='flex gap-x-3 justify-end mt-2'>
      <button className='text-white bg-red-500 hover:bg-red-700 py-2 px-3 rounded'
        onClick={async () => {
          if (confirm('are you sure you want to delete this product?')) {
            const res = await axios.delete('/api/todos/' + todoId)
            if (res.status === 204) {
              router.push('/todos')
              router.refresh()
            }

          }
        }}
      >
        delete
      </button>

      <button className='text-white bg-blue-500 hover:bg-blue-700 py-2 px-3 rounded'
        onClick={async () => {
          router.push(`/todos/edit/${todoId}`)
        }}
      >
        edit
      </button>
    </div>
  )
}

export default Buttons;