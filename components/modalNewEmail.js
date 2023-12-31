import Container from '../components/container'
import TextH2 from '../components/textH2'
import TextH2Email from './textH2Email'
import {IcoOpenedMail} from '@/components/icons';

export default function ModalNewEmail({children}) {

  return (
      <Container xtra="w-auto relative flex flex-col items-center max-w-modal-md h-mt lg:-mt-6 mb-5">
          <IcoOpenedMail className={"-mt-8 -mb-4"}/>
          
          <div>
            {children}
          </div>
      </Container>
  )
}