import { Center, Flex, Heading } from '@chakra-ui/react';
import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TaskCreationBlock } from './components/TaskCreationBlock.js';
import { TodoList } from './components/TodoList.js';

function App() {
  const [taskName, setTask] = React.useState('');
  const [todoList, setTodo] = React.useState([]);
  const handleChange = (event) => setTask(event.target.value);

  const handleAddTask = () => {
    if (taskName.trim()) {
      setTask('');
      setTodo([
        ...todoList,
        ...[{ id: uuidv4(), text: taskName, complete: false }],
      ]);
    }
    setTask('');
  };

  const handleRemoveTask = (id) => {
    const newList = todoList.filter((el) => {
      return el.id !== id;
    });
    setTodo([...newList]);
  };

  const handleCompleteTodo = (todo) => {
    todo.complete = true;
    setTodo([...todoList]);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <Center h='60vh'>
      <Flex
        flexDirection={'column'}
        p={'100px'}
        width={'750px'}
        height={'417px'}
      >
        <Heading
          mb={'30px'}
          bgGradient='linear(to-l, blue, #7fffd4)'
          bgClip='text'
          textAlign={'center'}
        >
          Todo application
        </Heading>
        <TaskCreationBlock
          taskName={taskName}
          handleChange={handleChange}
          handleAddTask={handleAddTask}
          handleKeyDown={handleKeyDown}
        />
        <TodoList
          todoList={todoList}
          handleRemoveTask={handleRemoveTask}
          handleCompleteTodo={handleCompleteTodo}
        />
      </Flex>
    </Center>
  );
}

export default App;
