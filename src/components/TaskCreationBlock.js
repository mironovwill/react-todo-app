import * as React from 'react';
import { Input, Flex, Button, InputGroup } from '@chakra-ui/react';

export function TaskCreationBlock(props) {
  const { taskName, handleChange, handleAddTask, handleKeyDown } = props;

  return (
    <Flex marginBottom={'15px'}>
      <InputGroup>
        <Input
          variant='filled'
          placeholder='Add you task'
          size='lg'
          value={taskName}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          maxLength={100}
        />
      </InputGroup>
      <Button
        marginLeft={'10px'}
        size='lg'
        onClick={handleAddTask}
        colorScheme='blue'
      >
        Add
      </Button>
    </Flex>
  );
}
