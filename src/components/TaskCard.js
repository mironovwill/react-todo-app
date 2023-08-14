import React from 'react';
import { Card, CardBody, Flex, Text } from '@chakra-ui/react';
import { CheckCircleIcon, DeleteIcon } from '@chakra-ui/icons';

export function TaskCard(props) {
  const { todoList, handleRemoveTask, handleCompleteTodo } = props;

  return todoList.map((todos) => {
    return (
      <Card key={todos.id}>
        <CardBody>
          <Flex justifyContent={'space-between'}>
            <Text
              style={{
                textDecoration: todos.complete ? 'line-through' : 'none',
              }}
            >
              {todos.text}
            </Text>
            <Flex justifyContent={'space-between'}>
              <CheckCircleIcon
                color='green.500'
                marginRight={'10px'}
                w={5}
                h={5}
                onClick={() => {
                  handleCompleteTodo(todos);
                }}
                style={{
                  display: todos.complete ? 'none' : '',
                }}
              />
              <DeleteIcon
                color='red.500'
                w={5}
                h={5}
                onClick={() => {
                  handleRemoveTask(todos.id);
                }}
              />
            </Flex>
          </Flex>
        </CardBody>
      </Card>
    );
  });
}

export default TaskCard;
