import ModalMain from '../modalMain'
import ModalPopupMd from '../modalPopupMd'
import Btn from '../btn'

import FormItemInput from '../formItemInput'
import FormItemTextarea from '../formItemTextarea'

export default function ModalReportIssue() {

  return (
    <ModalMain>
    
      <ModalPopupMd title="Reporting an Known Issue?" text="Please enter the EMVCo assigned Ticket ID and your comments.">

          <FormItemInput placeholder="Enter your EMVCo Ticket ID (mandatory)" />
          <FormItemTextarea rows="4" maxlength="150" placeholder="Enter your comments for this ticket, limited to 150 characters (optional)" info="0/150" />
          
          <div className="grid grid-cols-2 gap-3">
            <Btn label="Cancel" xtra="w-full" secondary />
            <Btn label="Submit" xtra="w-full" />
          </div>

      </ModalPopupMd>
      
    </ModalMain>
  )
}
