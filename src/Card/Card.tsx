import {
  SCard,
  SDescription,
  SPhotoContainer,
  SText,
  STitle
} from './SCard.styled';

export function Card() {
  return (
    <SCard>
      <SPhotoContainer>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROilTPHDFFMUm0eETL8ENzSJNdsTpGqGpPug&s'
          alt='Gigi Hadid'
        />
      </SPhotoContainer>
      <STitle>Lauren Robson</STitle>
      <SDescription>HR Director</SDescription>
      <SText>
        “I want to lower PTO liability and keep my employess happy. I want to
        lower PTO liability.”
      </SText>
    </SCard>
  );
}
