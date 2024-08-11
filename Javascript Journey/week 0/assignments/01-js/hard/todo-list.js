/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  
  ListOfToDos = []

  add(ToDo){

    this.ListOfToDos.push(ToDo)

  }

  remove(indexOfTodo){

    if (indexOfTodo < 0 || indexOfTodo >= this.ListOfToDos.length) {
        return null;
    }
    else{
      this.ListOfToDos.splice(indexOfTodo, 1);
    }

  }

  getAll(){


    return this.ListOfToDos



  }

  update(indexOfTodo,Todo){


    if(indexOfTodo >= this.ListOfToDos.length || indexOfTodo < 0){
      return null
    }
    else{
      this.ListOfToDos[indexOfTodo] = Todo
    }


  }

  get(index){

    if(index >= this.ListOfToDos.length){
      return null
    }
    else{
      return this.ListOfToDos[index]
    }

  }


  clear(){
    this.ListOfToDos.splice(0,this.ListOfToDos.length+1)
  }


}




module.exports = Todo;