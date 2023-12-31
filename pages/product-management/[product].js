import { useState } from 'react'
import Nav from '@/components/nav';
import Header from '@/components/header';
import UserThumb from '@/components/userThumb';

import HomeTableStatus from '@/components/homeTableStatus'
import HomeTableStages from '@/components/homeTableStages'

import TextH1 from '@/components/textH1'
import TextH2 from '@/components/textH2'
import TextH3 from '@/components/textH3'
import TextH4 from '@/components/textH4'
import TextH5 from '@/components/textH5'

import Divider from '@/components/divider'

import BtnTable from '@/components/btnTable'
import BtnAction from '@/components/btnAction'
import BtnStep from '@/components/btnStep'
import BtnPage from '@/components/btnPage'
import BtnUp from '@/components/btnUp'
import Btn from '@/components/btn'

import TableRowSwitchs4 from '@/components/tableRowSwitchs4'
import TableRowSwitchs3 from '@/components/tableRowSwitchs3'

import FormItemInput from '@/components/formItemInput'
import FormItemSelect from '@/components/formItemSelect'
import FormItemUpload from '@/components/formItemUpload'
import FormItemCheckbox from '@/components/formItemCheckbox'
import FormItemRadio from '@/components/formItemRadio'
import FormItemTextarea from '@/components/formItemTextarea'


import BtnTableTitle from '@/components/btnTableTitle'
import TableRowProjectLog from '@/components/tableRowProjectLog'

import InputSelect from '@/components/inputSelect'

import Switch from '@/components/switch'
import SwitchGroup from '@/components/switchGroup'

import Container from '@/components/container'
import ContainerCol_3 from '@/components/containerCol_3'
import ContainerCol_2 from '@/components/containerCol_2'
import ContainerCol_1_2 from '@/components/containerCol_1_2'
import ContainerCol_2_1 from '@/components/containerCol_2_1'

import Spinner from '@/components/spinner'
import FeedbackMsg from '@/components/feedbackMsg'

import Breadcrumb from '@/components/breadcrumb';
import BreadcrumbItem from '@/components/breadcrumbItem';

import Footer from '@/components/footer';

export default function ProductManagement({ user }) {

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const toggleSideBar = () => setIsSideBarOpen(!isSideBarOpen);

  return (
    <main className="relative flex w-full min-h-screen 2xl:min-h-main m-auto max-w-1688 2xl:my-8 2xl:pl-8">
      {/*  Sidebar  */}
      <Nav
        status={isSideBarOpen}
        setStatus={setIsSideBarOpen}
        activeSection={'home'}
      />

      {/*  Content  */}
      <div className="relative z-0 w-full p-2 pt-20 lg:pt-2 lg:ml-menu-lg 2xl:ml-menu 2xl:ml-0 py:0 lg:px-8">
        <Header setStatus={setIsSideBarOpen}>
          {/*  Breadcrumbs  */}

          <Breadcrumb>
            <BreadcrumbItem isFirst label="dashboard" link='/dashboard' />
            <BreadcrumbItem label="product setup" />
          </Breadcrumb>

          {/*  User info  */}

          <div>
            {/* User UI  img="/images/user-fake.jpg"   */}
            <UserThumb alt={!!user ? user.name : ''} />
          </div>
        </Header>

         {/*  Content per PAGE  */}
        <section>

           {/* Title + subtitles */}

          <TextH1 text="Product Validation" highliteText="BPC AG" />

          <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-3">
            <TextH2 text="Session: 01" />
            <TextH2 text="|" style="hidden md:block" />
            <TextH2 text="EMVCo Registration Number: BPBT.V 18 0061" />
            <TextH2 text="|" style="hidden md:block" />
            <TextH2 text="TPP" />
          </div>

          <Divider />

          {/*
            <div className="flex flex-col lg:flex-row justify-between">
              <TextH1 text="Session" highliteText="1000" />
              <TextH1 text="EMVCo Registration Number" highliteText="77" />
            </div>
          */}

            <div className="flex space-x-2 lg:space-x-4 mb-4">

              <BtnStep label="Review Product information" step="1" status="green" isActive />

              <BtnStep label="Confidence Test Review" step="2" status="red" />

              <BtnStep label="Confidence Test Review" step="3" isDisable />
           </div>


          <ContainerCol_1_2>
            <Container hasBorder>

            <TextH4 text="Iterations: 5" />
            <TextH4 text="Status:" />

            {/*  select  */}
            <FormItemSelect id="sel1" name="selEngineer" label="Assign Enginner">
                <option defaultValue="">John Smith</option>
                <option defaultValue="">Robe Keene</option>
            </FormItemSelect>

            {/*  select  */}
            <FormItemSelect id="sel2" name="selStatus" label="Update Status" isDisabled>
                <option defaultValue="">Reviweing Profile</option>
                <option defaultValue="">Self-test</option>
            </FormItemSelect>

            <FormItemInput id="fi0" label="Tracking Number" value="0123456789" />

            <Btn label="Edit" ico="edit" />


            </Container>

           <Container hasBorder>
              <TextH4 text="Operator information" />

              <ContainerCol_2>
                <FormItemInput id="fi1" label="3DS Server Operator ID" value="333333" error errorMsg="Wrong Operator ID" />
                <FormItemInput id="fi2" label="Acquierer Merchant ID" placeholder="0123456789" />
              </ContainerCol_2>

              <ContainerCol_2>
                <FormItemInput id="fi3" label="Merchant Category Code" value="0123456789" isDisabled />
                <FormItemInput id="fi4" label="Merchant Country Code" />
              </ContainerCol_2>

              <div className="flex justify-between mt-6 lg:mt-0">
                <TextH4 text="Project Log" />

                {/*  Sort BY  */}
                <div className="lg:hidden -mt-1">
                  <InputSelect id="sel2" name="selSort">
                      <option defaultValue="">Sort By</option>
                      <option defaultValue="">Product Name</option>
                      <option defaultValue="">Company</option>
                      <option defaultValue="">Product</option>
                      <option defaultValue="">Tracking#</option>
                      <option defaultValue="">Status</option>
                      <option defaultValue="">SLA</option>
                      <option defaultValue="">Time</option>
                      <option defaultValue="">Owner</option>
                      <option defaultValue="">Action</option>
                  </InputSelect>
                </div>
              </div>


              {/*  Grid Table 7 cols  */}
              <div className="mb-6">
                {/* table titles row */ }
                <div className="hidden lg:grid grid-cols-log-table pb-2.5 border-b border-gr-400">
                    <BtnTableTitle label="Role" active />
                    <BtnTableTitle label="Name"  />
                    <BtnTableTitle label="Date"  />
                    <BtnTableTitle label="Time"  />
                    <BtnTableTitle label="Staff" />
                    <BtnTableTitle label="Status" />
                    <BtnTableTitle label="Tracking#" />
                    <BtnTableTitle label="Uploaded" justify="center"/>
                </div>
                 {/* table rows */ }
                 <TableRowProjectLog data={["User Role","User Name", "2020/12/20", "16:43:22", "John Smith", "0123456789"]} statusId={1} />
                 <TableRowProjectLog data={["User Role","User Name", "2020/12/20", "16:43:22", "John Smith", "0123456789"]} statusId={0} uploaded />
                 <TableRowProjectLog data={["User Role","User Name", "2020/12/20", "16:43:22", "John Smith", "0123456789"]} statusId={2} />
              </div>
            </Container>

          </ContainerCol_1_2>

        </section>

        <BtnUp />

        <Footer />

      </div>

    </main>
  )
}
