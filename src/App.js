import React, {useState} from 'react';
import TodoList from './Components/TodoList';

function App(){
    const [list, setList] = useState([])
    const [additem, setItem] = useState('')
  
    const changeText = (event) =>{
      const input = event.target.value
      setItem(input)
      console.log('e****' , event.target.value)
    }
    
    const addItem = () =>{
      const newList = [...list]
      newList.push(additem)
      setList(newList)
      setItem('')
    }
  
    const deleteItem = (index) =>{
      const newList = [...list]
      newList.splice(index,1)
      setList(newList)
    }
    return(
        <React.Fragment>
            <div className="main_div">
                <div className="center_div">
                    <h1>Todo List</h1>
                    <br />
                    <input 
                        type="text" 
                        placeholder="Add Your Items"
                        onChange={changeText}
                    />
                    <button
                        onClick={addItem}
                    >
                        +
                    </button>
                    <ol>
                    {
                        list.map((item_value,index) =>{
                           return(
                            <TodoList 
                                text={item_value}
                                key={index} 
                                id={index}
                                onSelect={deleteItem}
                            />
                           )
                        })
                    }
                    </ol>
                  
                </div>
            </div>
        </React.Fragment>
    )
}

export default App;