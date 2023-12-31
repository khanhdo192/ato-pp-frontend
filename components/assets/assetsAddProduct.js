import NavItem from '../components/navItem'

import TextH1 from '../components/textH1'

import Divider from '../components/divider'

import BtnUp from '../components/btnUp'
import Btn from '../components/btn'

import FormItemInput from '../components/formItemInput'
import FormItemSelect from '../components/formItemSelect'

import Switch from '../components/switch'
import SwitchGroup from '../components/switchGroup'

import Container from '../components/container'
import ContainerCol_3 from '../components/containerCol_3'

import FeedbackMsg from '../components/feedbackMsg'


export default function AssetsAddProduct() {

  return (
    <main className="flex w-full min-h-screen 2xl:min-h-main m-auto max-w-screen-2xl 2xl:my-8">
    
      
      {/*  Content  */}
      <div className="w-full p-2 lg:py:0 lg:px-8">
      
         {/*  Content per PAGE  */}
        <section>
        
          <Container>
          
            {/*  PRODUCT INFORMATION  */} 
            
            <TextH1 text="Product Information" />
            <Divider />
            
            <ContainerCol_3 xtra="mb-12">
              <FormItemInput id="pi0" label="Product Name" placeholder="Sample ACS" />
              
              <FormItemSelect id="pi1" name="pi1" label="Product Type">
            	  <option defaultValue="">ACS Server</option>
              </FormItemSelect>
              
              <FormItemSelect id="pi2" name="pi2" label="Product Version">
            	  <option defaultValue="">2.2.0</option>
              </FormItemSelect>
              
              <FormItemInput id="pi3" label="Operating System Name" value="Ubuntu" />
              <FormItemInput id="pi4" label="Operating System Version" value="1.0" />
              <FormItemInput id="pi5" label="Server URL" value="https://test-url.com/acs/authentication" />
            </ContainerCol_3>
            
            {/*  OPERATOR INFORMATION FOR ISSUER  */} 
            
            <TextH1 text="Operator Information Issuer" />
            <Divider />
               
            <ContainerCol_3 xtra="mb-12">
              <FormItemInput id="oi0" label="ACS Operator ID" value="0123456789" />
              <FormItemInput id="oi1" label="Issuer Managed ID" value="Super Issuer Ltd." />
              <FormItemInput id="oi2" label="ACS Reference Number" value="0123456789" />
              <FormItemInput id="oi3" label="3DS Server Reference Number" value="0123456789" />
            </ContainerCol_3>
              
            {/*  IMPLEMENTATION INFORMATION  */} 
            
             <TextH1 text="ACS Implemenation Information" />
             <Divider />
             
             <ContainerCol_3 xtra="mt-10 lg:my-10">
                <Switch id="acs_s0" label="Issuer provide RBA for all card members" isActive />
                
                <Switch id="acs_s1" label="Issuer conduct CAVV verification during Authorization process" />
                
                <Switch id="acs_s2" label="Issuer provide ACS Attempt" />
            </ContainerCol_3>
            
            <ContainerCol_3 xtra="mt-6 lg:my-10">
               { /* Switch Group  */  }
               <SwitchGroup title="Device Channel which issuer support" xtra="mt-4 lg:mt-0">
                  <Switch id="mc_s0" label="01-APP" isActive />
                  <Switch id="mc_s1" label="02-BRW" isActive />
                  <Switch id="mc_s2" label="03-3RI" isActive />
               </SwitchGroup>
               
               <SwitchGroup title="Message Category which issuer support" xtra="mt-4 lg:mt-0">
                  <Switch id="mc_s3" label="01-PA" isActive />
                  <Switch id="mc_s4" label="02-NPA" isActive />
               </SwitchGroup>
               
               <SwitchGroup title="ACS UI Type which issuer support" xtra="mt-4 lg:mt-0">
                  <Switch id="mc_s5" label="01=Text" />
                  <Switch id="mc_s6" label="02=Single Select" />
                  <Switch id="mc_s7" label="03=Multi Select" />
                  <Switch id="mc_s8" label="04=OOB" />
                  <Switch id="mc_s9" label="05=HTML" />
               </SwitchGroup>
            </ContainerCol_3>
            
            <ContainerCol_3 xtra="mt-10 mb-12">
                <Switch id="acs_s3" label="Decouple Authentication support" isActive />
                
                <Switch id="acs_s4" label="Whitelisting support" />
            </ContainerCol_3>
            
            {/*  ISSUER TEST CARD DECLARATION  */} 
             
           <TextH1 text="Issuer Test Card Declaration" />
           <Divider />
           
           <div className="columns-2 p mb-14">
             Please refer to the latest  J/Secure™ 2.0  Confidence  Test  Procedures  (for issuers) document Test Case Card Status table to ensure you have the relevant Card Ranges declared. <br/>
             The Card Ranges and declared here will be used during the confidence tests and their expected card behaviors will affected the test results.
            </div>
            
            <ContainerCol_3 xtra="mb-8">
              <FormItemInput id="c0" label="Card A" value="765430270066942" />
              <FormItemInput id="c1" label="Card B" value="765430270066983" />
              <FormItemInput id="c2" label="Card C" value="765430270068435" />
              
              <FormItemInput id="c3" label="Card D" value="765430270068450" />
              <FormItemInput id="c4" label="Card E" value="765430270068591" />
              <FormItemInput id="c5" label="Card F" value="765430270068617" />
            </ContainerCol_3>
            
 
            <div className="w-full flex flex-col items-end mb-6">
              <div className="w-full xl:w-1/3 lg:mt-1.5 mb-2">
              {/*  ERROR  */}
              <FeedbackMsg type="error" text="Please check highlighted inputs and submit again" />
                
              {/*  SUCCESSS  */}
                {/*<FeedbackMsg type="success" text="The Action was submitted Successfully" />*/}
            </div>
            
              <Btn label="submit" ico="submit" xtra="w-full md:w-auto" />
            </div>
            
          </Container>
          
         
        </section>

        <BtnUp />
        
      </div>
    </main>
  )
}
