import Container from '../components/container';
import TextH1 from '../components/textH1';
import BtnPopClose from '../components/btnPopClose';

export default function ModalPopup({
  title,
  text,
  children,
  btnClose,
  color,
  fontSize,
<<<<<<< HEAD
  info,
=======
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
}) {
  return (
    <Container xtra="relative w-full flex flex-col items-center text-center max-w-modal h-mt -mt-20 lg:-mt-6">
      {btnClose && <BtnPopClose />}

      <TextH1 text={title} color={color} fontSize={fontSize} xtra="mt-3" />

<<<<<<< HEAD
      {info && info}

=======
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
      <p className="mt-3 mb-6">{text}</p>

      {children}
    </Container>
  );
}
