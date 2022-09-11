import { styled } from '../stitches';
import { Button } from './Button';

const StyledBackdrop = styled('div', {
  position: 'absolute',
  backgroundColor: 'rgba(74, 74, 74, 0.63)',
  zIndex: '4',
  top: '0',
  left: '0',
  width: '100vw',
  height: '100vh',
  overflow: 'none',
});
const StyledModal = styled('div', {
  position: 'fixed',
  top: '20%',
  left: '50%',
  transform: 'translate(-50%, -20%)',
  zIndex: '5',
  display: 'flex',
  padding: '5vh 5vw',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid black',
  backgroundColor: 'White',
});

export type ModalProps = {
  onAnswer: (answer: boolean) => void;
};

const ButtonContainer = styled('div', {
  marginTop: '1em',
  display: 'flex',
  flexDirection: 'row',
});
export const Modal: React.FC<ModalProps> = ({ onAnswer }) => {
  return (
    <StyledBackdrop>
      <StyledModal>
        <span>Are you sure you want to remove this item?</span>
        <ButtonContainer>
          <Button onClick={() => onAnswer(true)}>Yes</Button>
          <Button onClick={() => onAnswer(false)}>No</Button>
        </ButtonContainer>
      </StyledModal>
    </StyledBackdrop>
  );
};
