import React from 'react';

import { IcoDash } from '../components/icons'

import TextH1 from '../components/textH1'
import TextH2 from '../components/textH2'

import TitleIcon from '../components/titleIcon'

import Divider from '../components/divider'

import Btn from '../components/btn'
import BtnUp from '../components/btnUp'

import FormItemInput from '../components/formItemInput'
import FormItemSelect from '../components/formItemSelect'

import Container from '../components/container'
import ContainerCol_2_1 from '../components/containerCol_2_1'
import ContainerCol_3 from '../components/containerCol_3'

import FeedbackMsg from '../components/feedbackMsg'

export default function AssetsUserManageAdd() {

  return (
    <main className="flex w-full min-h-screen 2xl:min-h-main m-auto max-w-screen-2xl 2xl:my-8">
    
      
      {/*  Content  */}
      <div className="w-full p-2 lg:py:0 lg:px-8">

        
        {/*  Content per PAGE  */}
        <section>

          <Container>
            <div className="mb-3 flex items-center">
              <TitleIcon ico="add-user" />
            
              <TextH1 text="Add" highliteText="JCB User" />
          </div>
          
          
            {/* Title + subtitles */}
            <TextH1 text="Enter User Account Details"  />
            <TextH2 text="Click on Submit after filling in details. The user Will be provided with login credentials via their Email. IMPORTANT!: Password must containt at least 8 characters - including Uppercase, Lowercase, Special & Number characters." isInfo/>

            <Divider />


            <ContainerCol_3>
              <FormItemInput id="f0" label="Full Name*" isRequired />
              <FormItemInput id="f1" label="User Name" />
              <FormItemInput id="f2" label="Email*" isRequired type="email" />
              <FormItemInput id="f3" label="Title" />
              <FormItemInput id="f4" label="Department" />
              <FormItemInput id="f5" label="Password*" isRequired type="password" />
            </ContainerCol_3>
            
            <Divider />
            
            <ContainerCol_3 xtra="mt-6">
              <div/>
              <div/>
              <div className="flex flex-col items-end">
                <FormItemSelect id="f6" label="Role*" >
                  <option defaultValue="">Select Role</option>
                </FormItemSelect>
                
                 {/*  ERRORS or SUCCESSS  */}
                
                <div className="w-full">
                  {/*  Feedback OK  
                    <div className="mb-6">
                      <FeedbackMsg text="New user submited successfully" type="success" />
                    </div>
                  */  }
                  
                  {/*  Feedback error   */  }
                    <div className="mb-6">
                     <FeedbackMsg text="Please check inputs errors" type="error" important  />
                    </div>
                </div>
              
                <Btn label="submit" ico="submit" xtra="mb-8 lg:mb-8 w-full md:w-auto" />
              </div>
            </ContainerCol_3>
            
            
          </Container>
            
  
        </section>
        
        <BtnUp />
        
      </div>
    </main>
  )
}
