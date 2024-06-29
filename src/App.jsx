import { useState } from 'react'

/*Importa o código do component Todo*/
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import Search from './components/Search'

import "./App.css"
import Filter from './components/Filter'

/*utilizamos o useState pois ele re-renderiza quando atualizado, enquanto se fossemos usar variáveis, elas não renderizariam novamente*/
function App() {

  const [todos,setTodos] = useState([
    {
      id:1,
      text: "criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id:2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  /*O nome desse const set const é state */
  const [search,setSearch] = useState("");

  const [filter,setFilter] = useState("All");
  const [sort,setSort] = useState("Asc");

  const addTodo = (text, category) => {

    const newTodos = [...todos,{
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false, 
    },
    ];

    setTodos(newTodos);
  };

  /*A função ? faz um if else de return. Nesse caso, se o id é diferente, ele retorna o todo, ou seja, o elemento cujo id não é o que estamos procurando para a lista de todos. Agora, quando ele acha, ele retorna o valor do outro lado dos dois ponto, que nesse caso é null, apagando o registro. Nessa função, nós criamos a variável filterdTodos pra percorrer o array de todos e quando achamos o que queremos remover, passamos o nulo. Assim, no fim modificamos o setTodos para que esse array substitua o array vigente, atualizando a lista.*/
  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) => 
      todo.id !== id ? todo : null
  );
  setTodos(filteredTodos);
  };

  /*O map aqui modifica o valor do array original, diferentemente do filter. Nesse caso o map está trocando o valor do  estado se bater o id e, se não bate, ele só retorna o todo sem alterar nada.*/
  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) => todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo);
  setTodos(newTodos);
  };


  /*o map é um atributo que navega por todo o array. Para acessar um dos compos de uma struct, basta acessar aquele valor colocando a variável entre chaves e o campo, ficando {variavel.nomeCampo}. Para colocar código Js no JSX devemos usar chaves */

  /*Após termos importado o componente, para usarmos o component, criamos uma abertura de tag com o nome dele <Todo />. Após isso, precisamos passar as propriedades(props) todo={todo}, que significa que a propriedade todo é igual ao valor todo, que é um objeto */

  /*No react, tu só pode ter um elemento pai por componente, ou seja, uma div com class name por componente */

  /*Nessa função, utilizamos o filter para montar a lógica da busca, fazendo o filtro passar por todos os todo e verifica por meio do includes se o que foi digitado tem na string do todo analisado */
  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo-list">
        {todos
          .filter((todo) => filter === "All" ? true : filter === "Completed" ? todo.isCompleted : !todo.isCompleted)
          .filter((todo) => 
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
        .sort((a, b) => sort === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text) )
        .map((todo) => (
          <Todo 
            key={todo.id} 
            todo={todo} 
            removeTodo={removeTodo} 
            completeTodo={completeTodo} 
          />
        ))}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default App
