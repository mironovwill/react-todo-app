import * as React from 'react';
import { Stack, Text } from '@chakra-ui/react';
import { TaskCard } from './TaskCard';

export function TodoList(props) {
  const { todoList, handleRemoveTask, handleCompleteTodo } = props;

  return (
    <Stack>
      {todoList.length === 0 ? (
        <Text
          bgGradient='linear(to-l, blue, #7fffd4)'
          bgClip='text'
          textAlign={'center'}
        >
          Nothing here
        </Text>
      ) : (
        <TaskCard
          handleRemoveTask={handleRemoveTask}
          handleCompleteTodo={handleCompleteTodo}
          todoList={todoList}
        />
      )}
    </Stack>
  );
}
