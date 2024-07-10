// const axios = require("axios");
import axios from "axios";

/* assign interface/type to the function definition properly */
const getTodo = async (todoId: number) => {
  try {
    const todo = await axios.get('http://jsonplaceholder.typicode.com/todos/' + todoId);
    const userId = todo.data.userId;
    const user = await axios.get('http://jsonplaceholder.typicode.com/users/' + userId);
    return {
      owner: user.data.name,
      title: todo.data.title,
      completed: todo.data.completed,
    }
  }
  catch(err) { 
    return('INVALID TODO ID');
  }
};

//test case
const input1 = 15;
const input2 = 60;
const input3 = 250;

//run
getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));

export default getTodo;

// ศรัณย์ ไม้หอม 660610796