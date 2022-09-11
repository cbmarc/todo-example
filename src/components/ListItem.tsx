import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { styled } from '../stitches';

export type ListItemProps = {
  text: string;
  checked: boolean | undefined;
  onComplete: () => void;
  onDelete: () => void;
};

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
});

const Text = styled('span', {
  fontSize: '20px',
  cursor: 'pointer',
  overflow: 'visible',
  wordBreak: 'break-word',
  textAlign: 'left',
  width: '100%',
  variants: {
    state: {
      completed: {
        textDecoration: 'line-through',
      },
      pending: {
        textDecoration: 'none',
      },
    },
  },
});

const DeleteButton = styled(AiFillDelete, {
  margin: 'auto 0',
  cursor: 'pointer',
  marginRight: '1ch',
});

export const ListItem: React.FC<ListItemProps> = ({
  text,
  checked,
  onComplete,
  onDelete,
}) => {
  return (
    <Container role='listitem'>
      <DeleteButton role='button' onClick={onDelete} />
      <Text
        role='button'
        onClick={onComplete}
        state={checked ? 'completed' : 'pending'}
      >
        {text}
      </Text>
    </Container>
  );
};
