'use client'

import { useState } from 'react'
import type { Todo } from './todos.d'

interface Props {
  initialTodos: Todo[]
}

export default function Todos({ initialTodos }: Props) {
  const [todos, setTodos] = useState<Todo[]>(initialTodos)

  const toggleTodo = (index: number) => {
    setTodos((prev) =>
      prev.map((todo, i) =>
        i === index ? { ...todo, checked: !todo.checked } : todo
      )
    )
  }

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={todo.created}>
          <input
            type='checkbox'
            checked={todo.checked}
            onChange={() => toggleTodo(index)}
            // Show visual feedback that it's not interactive yet
            style={{
              opacity: 1,
              cursor: 'pointer',
            }}
          />
          {todo.text}
        </li>
      ))}
    </ul>
  )
}
