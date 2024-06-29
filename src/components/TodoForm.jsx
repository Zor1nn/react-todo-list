import {useState} from 'react'

/* Para gerenciar um estado no react utilizamos o useState, fazendo eles carregarem os dados dos inputs do usuário. Pra isso, temos que ligar o submit no formulário, sendo necessário criar uma função handleSubmit */

/* A função que troca o estado recebendo o addTodo necessita de estar entre chaves para que ele perceba que é uma struct e monte os dados do forms.*/

const TodoForm = ({addTodo}) => {

  const [value, setValue] = useState("")
  const [category, setCategory] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!value || !category) return;
    // adicionar todo
    addTodo(value, category);
    // limpar os campos
    setValue("");
    setCategory("");

  }
/*Utilizando a propriedade onSubmit, toda vez que o questionário for enviado ele dispara uma função, no caso, a handleSubmit */
  return (
    <div className='todo-form'>
      <h2>Criar Tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder='Digite o título' 
          value={value} 
          onChange={(e) => setValue(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type='submit'>Criar tarefa</button>
      </form>
    </div>
  )

}

export default TodoForm
