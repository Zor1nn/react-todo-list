import React from 'react'

/*Por meio da extensão ES7 + React, conseguimos utilizar o atalho rafce para criar componentes funcionais mais facilmente*/

/*Como criamos um componente que depende de dados da main, precisamos passar esses dados para que ele possa montar os elementos das divs. Para fazer isso, criamos as props. Prop é meio que passar uma função inteira de um arquivo pra dentro desse só pelo cabeçalho da função*/

const Todo = ({ todo, removeTodo, completeTodo}) => {
  return (
    <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through": ""}}>
            <div className="content">
              <p>{todo.text}</p>
              <p className="categoy">({todo.category})</p>
            </div>
            <div>
              <button className='complete' onClick={() => completeTodo(todo.id)}>Completar</button>
              <button className='remove' onClick={() => removeTodo(todo.id)}>x</button>
            </div>
    </div>
  )
}

export default Todo
