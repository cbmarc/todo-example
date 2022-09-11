import { useState } from 'react';

import { styled } from '../stitches';
import { Button } from './Button';

const AddInputContainer = styled('form', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});
const Input = styled('input', {
  padding: '10px',
  border: '1px solid lightblue',
  flex: '1 1 auto',
});

export type AddInputProps = {
  onTodoAdded: (text: string) => void;
};

export const AddInput: React.FC<AddInputProps> = ({ onTodoAdded }) => {
  const [text, setText] = useState<string>('');
  return (
    <AddInputContainer
      onSubmit={(event) => {
        event.preventDefault();
        onTodoAdded(text);
        setText('');
      }}
    >
      <Input
        type='text'
        value={text}
        onChange={(event) => setText(event.target.value)}
      ></Input>
      <Button type='submit' disabled={text.length === 0}>
        Add
      </Button>
    </AddInputContainer>
  );
};
