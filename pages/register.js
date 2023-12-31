import BtnV2 from '@/components/btnV2';
import { postFetcher } from '@/lib/fetcher';
import { emailIsValid, isPhoneNumberValid, regexDate } from '@/utils/validator';
import cloneDeep from 'lodash/cloneDeep';
import find from 'lodash/find';
import get from 'lodash/get';
import map from 'lodash/map';
import reduce from 'lodash/reduce';
import set from 'lodash/set';
import toUpper from 'lodash/toUpper';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';
import Container from '@/components/container';
import ContainerCol_2 from '@/components/containerCol_2';
import FormItemCheckbox from '@/components/formItemCheckbox';
import FormItemInputHorizontalLabel from '@/components/formItemInputHorizontalLabel';
import FormItemSelectHorizontalLabel from '@/components/formItemSelectHorizontalLabel';
import ModalVerifyEmail from '@/components/modalVerifyEmail';
import TextH1 from '@/components/textH1';
import { countriesData } from '@/utils/countriesData';
import { isEmpty } from 'lodash';
import { animated, useSpring } from '@react-spring/web';
import TCDocument from '@/components/common/tc';

const InputRadio = ({
  label,
  version,
  sort,
  status,
  getValue = () => {},
  onChange = () => {},
}) => {
  const [renderCheck, setRenderCheck] = useState(false);

  useEffect(() => {
    if (renderCheck) {
      setRenderCheck(false);
    }
  }, [renderCheck]);
  return (
    <FormItemCheckbox
      id={`${status}_${version}_${sort}`}
      label={label}
      onClick={e => {
        onChange(status, version, sort);
        setRenderCheck(true);
      }}
      isChequed={getValue(status, version, sort)}
      style={{ marginBottom: '8px' }}
      inputClassName="checkbox-blue-700"
    />
  );
};
const FormLabel = ({ id, label }) => {
  return (
    <label
      htmlFor={id}
      className={
        (label ? 'block' : 'hidden') +
        ' text-base relative text-gr-700 tracking-wide pb-1.5'
      }
    >
      {label}
    </label>
  );
};

const renderStepTwoAcsFields = ({
  fieldSpec,
  getAcsSupportValue,
  updateAcsSupportValue,
}) => (
  <ContainerCol_2 xtra="mt-6 mb-12">
    <div>
      <TextH1
        color="text-b-950"
        font="font-semibold"
        text="ACS Supported Native UI**"
        xtra=""
      />
      <p className="text-btn-action -mt-5 mb-3">
        Select all application options supported.
      </p>
      <ContainerCol_2>
        <div>
          <TextH1 font="font-normal" text="Protocol 2.1.0" />
          <InputRadio
            label="Text UI (01)"
            version="2.1.0"
            sort={0}
            status="native"
            getValue={getAcsSupportValue}
            onChange={updateAcsSupportValue}
          />
          <InputRadio
            label="Single Select (02)"
            version="2.1.0"
            sort={1}
            status="native"
            getValue={getAcsSupportValue}
            onChange={updateAcsSupportValue}
          />
          <InputRadio
            label="Multi Select UI (03)"
            version="2.1.0"
            sort={2}
            status="native"
            getValue={getAcsSupportValue}
            onChange={updateAcsSupportValue}
          />
          <InputRadio
            label="OOB UI (04)"
            version="2.1.0"
            sort={3}
            status="native"
            getValue={getAcsSupportValue}
            onChange={updateAcsSupportValue}
          />
        </div>
        <div>
          <TextH1 font="font-normal" text="Protocol 2.2.0" />
          <InputRadio
            label="Text UI (01)"
            version="2.2.0"
            sort={0}
            status="native"
            getValue={getAcsSupportValue}
            onChange={updateAcsSupportValue}
          />
          <InputRadio
            label="Single Select (02)"
            version="2.2.0"
            sort={1}
            status="native"
            getValue={getAcsSupportValue}
            onChange={updateAcsSupportValue}
          />
          <InputRadio
            label="Multi Select UI (03)"
            version="2.2.0"
            sort={2}
            status="native"
            getValue={getAcsSupportValue}
            onChange={updateAcsSupportValue}
          />
          <InputRadio
            label="OOB UI (04)"
            version="2.2.0"
            sort={3}
            status="native"
            getValue={getAcsSupportValue}
            onChange={updateAcsSupportValue}
          />
        </div>
      </ContainerCol_2>
    </div>
    <div>
      <TextH1
        color="text-b-950"
        font="font-semibold"
        text="ACS Supported HTML UI**"
        xtra=""
      />
      <p className="text-btn-action -mt-5 mb-3">
        Select all application options supported.
      </p>
      <ContainerCol_2>
        <div>
          <TextH1 font="font-normal" text="Protocol 2.1.0" />
          <InputRadio
            label="Text UI (01)"
            version="2.1.0"
            sort={0}
            status="html"
            getValue={getAcsSupportValue}
            onChange={updateAcsSupportValue}
          />
          <InputRadio
            label="Single Select (02)"
            version="2.1.0"
            sort={1}
            status="html"
            getValue={getAcsSupportValue}
            onChange={updateAcsSupportValue}
          />
          <InputRadio
            label="Multi Select UI (03)"
            version="2.1.0"
            sort={2}
            status="html"
            getValue={getAcsSupportValue}
            onChange={updateAcsSupportValue}
          />
          <InputRadio
            label="OOB UI (04)"
            version="2.1.0"
            sort={3}
            status="html"
            getValue={getAcsSupportValue}
            onChange={updateAcsSupportValue}
          />
          <InputRadio
            label="HTML Other UI (05)"
            version="2.1.0"
            sort={4}
            status="html"
            getValue={getAcsSupportValue}
            onChange={updateAcsSupportValue}
          />
        </div>
        <div>
          <TextH1 font="font-normal" text="Protocol 2.2.0" />
          <InputRadio
            label="Text UI (01)"
            version="2.2.0"
            sort={0}
            status="html"
            getValue={getAcsSupportValue}
            onChange={updateAcsSupportValue}
          />
          <InputRadio
            label="Single Select (02)"
            version="2.2.0"
            sort={1}
            status="html"
            getValue={getAcsSupportValue}
            onChange={updateAcsSupportValue}
          />
          <InputRadio
            label="Multi Select UI (03)"
            version="2.2.0"
            sort={2}
            status="html"
            getValue={getAcsSupportValue}
            onChange={updateAcsSupportValue}
          />
          <InputRadio
            label="OOB UI (04)"
            version="2.2.0"
            sort={3}
            status="html"
            getValue={getAcsSupportValue}
            onChange={updateAcsSupportValue}
          />
          <InputRadio
            label="HTML Other UI (05)"
            version="2.2.0"
            sort={4}
            status="html"
            getValue={getAcsSupportValue}
            onChange={updateAcsSupportValue}
          />
        </div>
      </ContainerCol_2>
    </div>
  </ContainerCol_2>
);

const renderStepTwo3dsFields = ({
  getFieldValue,
  getFieldHasError,
  updateFieldValue,
}) => (
  <ContainerCol_2 xtra="lg:gap-x-12 mt-6 mb-12">
    <div>
      <TextH1
        color="text-b-950"
        font="font-semibold"
        text="3DS SDK Information 1"
        xtra=""
      />
      <FormItemInputHorizontalLabel
        label="Product Provider Name 1"
        placeholder="Micro Software Inc"
        id="sdkInformation__1_productProviderName"
        value={getFieldValue('sdkInformation__1_productProviderName')}
        onChange={e => updateFieldValue(e.target.id, e.target.value)}
        error={getFieldHasError('sdkInformation__1_productProviderName')}
        errorMsg={'Complete this field'}
        maxLength={50}
      />
      <FormItemInputHorizontalLabel
        label="SDK Name 1"
        placeholder="SDK Name 1"
        id="sdkInformation__1_name"
        value={getFieldValue('sdkInformation__1_name')}
        onChange={e => updateFieldValue(e.target.id, e.target.value)}
        error={getFieldHasError('sdkInformation__1_name')}
        errorMsg={'Complete this field'}
        maxLength={50}
      />
      <FormItemInputHorizontalLabel
        label="EMVCo SDK Reference Number 1"
        placeholder="SDK Reference Number 1"
        id="sdkInformation__1_referenceNumber"
        value={getFieldValue('sdkInformation__1_referenceNumber')}
        onChange={e => updateFieldValue(e.target.id, e.target.value)}
        error={getFieldHasError('sdkInformation__1_referenceNumber')}
        errorMsg={'Complete this field'}
        maxLength={50}
      />
      <FormItemSelectHorizontalLabel
        label="SDK Protocol Version 1"
        id="sdkInformation__1_version"
        value={getFieldValue('sdkInformation__1_version')}
        onChange={e => updateFieldValue(e.target.id, e.target.value)}
        error={getFieldHasError('sdkInformation__1_version')}
        errorMsg={'Complete this field'}
      >
        <option>Select Version</option>
        <option value={'2.1.0'}>2.1.0</option>
        <option value={'2.2.0'}>2.2.0</option>
      </FormItemSelectHorizontalLabel>
      <FormItemInputHorizontalLabel
        label="Approval Expiration Date 1"
        type="date"
        id="sdkInformation__1_approvalExpirationDate"
        value={getFieldValue('sdkInformation__1_approvalExpirationDate')}
        onChange={e => updateFieldValue(e.target.id, e.target.value)}
        error={getFieldHasError('sdkInformation__1_approvalExpirationDate')}
        errorMsg={'Complete this field'}
      />
    </div>
    <div>
      <TextH1
        color="text-b-950"
        font="font-semibold"
        text="3DS SDK Information 2"
        xtra=""
      />{' '}
      <FormItemInputHorizontalLabel
        label="Product Provider Name 2"
        placeholder="Micro Software Inc"
        id="sdkInformation__2_productProviderName"
        value={getFieldValue('sdkInformation__2_productProviderName')}
        onChange={e => updateFieldValue(e.target.id, e.target.value)}
        error={getFieldHasError('sdkInformation__2_productProviderName')}
        errorMsg={'Complete this field'}
        maxLength={50}
      />
      <FormItemInputHorizontalLabel
        label="SDK Name 2"
        placeholder="SDK Name 2"
        id="sdkInformation__2_name"
        value={getFieldValue('sdkInformation__2_name')}
        onChange={e => updateFieldValue(e.target.id, e.target.value)}
        error={getFieldHasError('sdkInformation__2_name')}
        errorMsg={'Complete this field'}
        maxLength={50}
      />
      <FormItemInputHorizontalLabel
        label="EMVCo SDK Reference Number 2"
        placeholder="SDK Reference Number 2"
        id="sdkInformation__2_referenceNumber"
        value={getFieldValue('sdkInformation__2_referenceNumber')}
        onChange={e => updateFieldValue(e.target.id, e.target.value)}
        error={getFieldHasError('sdkInformation__2_referenceNumber')}
        errorMsg={'Complete this field'}
        maxLength={50}
      />
      <FormItemSelectHorizontalLabel
        label="SDK Protocol Version 2"
        id="sdkInformation__2_version"
        value={getFieldValue('sdkInformation__2_version')}
        onChange={e => updateFieldValue(e.target.id, e.target.value)}
        error={getFieldHasError('sdkInformation__2_version')}
        errorMsg={'Complete this field'}
      >
        <option>Select Version</option>
        <option value={'2.1.0'}>2.1.0</option>
        <option value={'2.2.0'}>2.2.0</option>
      </FormItemSelectHorizontalLabel>
      <FormItemInputHorizontalLabel
        label="Approval Expiration Date 2"
        type="date"
        id="sdkInformation__2_approvalExpirationDate"
        value={getFieldValue('sdkInformation__2_approvalExpirationDate')}
        onChange={e => updateFieldValue(e.target.id, e.target.value)}
        error={getFieldHasError('sdkInformation__2_approvalExpirationDate')}
        errorMsg={'Complete this field'}
      />
    </div>
  </ContainerCol_2>
);

const STEPS = {
  1: ({ getFieldValue, getFieldHasError, updateFieldValue, countriesData }) => {
    return (
      <div>
        <TextH1
          color="text-b-950"
          font="font-semibold"
          text="Operator Information to be shown in LOC*"
          xtra=""
        />
        <p className="text-btn-action -mt-5">*Letter of Compliance</p>
        <br />
        <FormItemInputHorizontalLabel
          label="Company Name*"
          info="*mandatory"
          placeholder="Super Gateway Inc"
          ico="company"
          id="companyName"
          value={getFieldValue('companyName')}
          onChange={e => updateFieldValue(e.target.id, e.target.value)}
          error={getFieldHasError('companyName')}
          errorMsg={'Complete this field'}
          longCol
          maxLength={50}
        />
        <FormItemSelectHorizontalLabel
          label="Country*"
          info="*mandatory"
          id="country"
          value={getFieldValue('country')}
          onChange={e => updateFieldValue(e.target.id, e.target.value)}
          longCol
          className="mb-6"
          error={getFieldHasError('country')}
          errorMsg={'Complete this field'}
        >
          <option value="" selected={isEmpty(getFieldValue('country'))}>
            Select Country
          </option>
          {countriesData.map((ct, i) => {
            return (
              <option
                value={ct.name}
                key={`ct-${i}`}
                selected={ct.name === getFieldValue('country')}
              >
                {ct.name}
              </option>
            );
          })}
        </FormItemSelectHorizontalLabel>
        <FormItemInputHorizontalLabel
          label="Company Address*"
          info="*mandatory"
          placeholder="123 Company St., London, UK"
          ico="location"
          id="companyAddress"
          value={getFieldValue('companyAddress')}
          onChange={e => updateFieldValue(e.target.id, e.target.value)}
          error={getFieldHasError('companyAddress')}
          errorMsg={'Complete this field'}
          longCol
          maxLength={200}
        />
        <FormItemInputHorizontalLabel
          label="Representative*"
          info="*assigned by JCB"
          placeholder="Steve JOBS"
          ico="person"
          id="representative"
          value={getFieldValue('representative')}
          onChange={e => updateFieldValue(e.target.id, e.target.value)}
          error={getFieldHasError('representative')}
          errorMsg={'Complete this field'}
          longCol
          maxLength={50}
        />
        <FormItemInputHorizontalLabel
          label="Company ID*"
          info="*4 alphabets"
          placeholder="JMJP"
          ico="id"
          maxLength={4}
          id="companyId"
          value={getFieldValue('companyId')}
          onChange={e =>
            updateFieldValue(
              e.target.id,
              toUpper(e.target.value).replace(/[^A-Za-z]/gi, '')
            )
          }
          error={getFieldHasError('companyId')}
          errorMsg={`This field require ${initialFormFields?.companyId?.validations?.minLength} characters`}
          longCol
        />
        <TextH1
          color="text-b-950"
          font="font-semibold"
          text="Applicant Information"
          xtra=""
        />
        <ContainerCol_2>
          <p className="pb-4 text-sm">
            Administrator ID will be issued to the address entered in the
            "E-mail" field, which can be used to create accounts for other staff
            members.
          </p>
        </ContainerCol_2>
        <ContainerCol_2 xtra="lg:gap-x-12">
          <FormItemInputHorizontalLabel
            label="Full name*"
            info="*mandatory"
            placeholder="Andrew SMITH"
            ico="person"
            id="fullName"
            value={getFieldValue('fullName')}
            onChange={e => updateFieldValue(e.target.id, e.target.value)}
            error={getFieldHasError('fullName')}
            errorMsg={'Complete this field'}
            longCol
            maxLength={50}
          />
          <FormItemInputHorizontalLabel
            label="E-mail*"
            info="*mandatory"
            placeholder="smith@supergateway.com"
            ico="mailV2"
            id="email"
            value={getFieldValue('email')}
            onChange={e => updateFieldValue(e.target.id, e.target.value)}
            error={getFieldHasError('email')}
            errorMsg={'Invalid email'}
            longCol
            maxLength={100}
          />
          <FormItemInputHorizontalLabel
            label="Phone"
            placeholder="123 456 789"
            ico="phone"
            id="phone"
            value={getFieldValue('phone')}
            onChange={e => updateFieldValue(e.target.id, e.target.value)}
            error={getFieldHasError('phone')}
            errorMsg={'Invalid phone number'}
            longCol
            maxLength={30}
          />
        </ContainerCol_2>
      </div>
    );
  },
  2: ({
    getFieldValue,
    getFieldHasError,
    updateFieldValue,
    getAcsSupportValue,
    updateAcsSupportValue,
    getOperatorIdPreview,
    updatedRegisterForm,
  }) => {
    return (
      <div>
        <TextH1
          color="text-b-950"
          font="font-semibold"
          text="Product Information"
          xtra=""
        />
        <p className="text-btn-action -mt-5 mb-3">
          These fields should be filled according to the EMVCo LoA
        </p>
        <ContainerCol_2 xtra="lg:gap-x-12">
          <FormItemSelectHorizontalLabel
            label="Application type*"
            info="*mandatory"
            id="applicationType"
            value={getFieldValue('applicationType')}
            onChange={e =>
              updateFieldValue(e.target.id, Number(e.target.value))
            }
            error={getFieldHasError('applicationType')}
            errorMsg={'Complete this field'}
          >
            {updatedRegisterForm ? (
              <option
                value={4}
                selected={getFieldValue('applicationType') === 4}
              >
                Information Update (minor change)
              </option>
            ) : (
              <option
                value={0}
                selected={getFieldValue('applicationType') === 0}
              >
                New operator compliance test request
              </option>
            )}
          </FormItemSelectHorizontalLabel>
          <FormItemSelectHorizontalLabel
            label="Component*"
            info="*mandatory"
            id="component"
            value={getFieldValue('component')}
            onChange={e =>
              updateFieldValue(e.target.id, Number(e.target.value))
            }
            error={getFieldHasError('component')}
            errorMsg={'Complete this field'}
          >
            <option value={1} selected={getFieldValue('component') === 1}>
              3DS Server
            </option>
            <option value={2} selected={getFieldValue('component') === 2}>
              ACS
            </option>
          </FormItemSelectHorizontalLabel>
          <FormItemInputHorizontalLabel
            label="Operator ID"
            info="*Assigned by JCB"
            value={getOperatorIdPreview()}
            ico="id"
            isDisabled
          />
          <FormItemInputHorizontalLabel
            label="Product Name*"
            info="*mandatory"
            placeholder="Gateway 2000"
            ico="box"
            id="productName"
            value={getFieldValue('productName')}
            onChange={e => updateFieldValue(e.target.id, e.target.value)}
            error={getFieldHasError('productName')}
            errorMsg={'Complete this field'}
            maxLength={50}
          />
          <FormItemInputHorizontalLabel
            label="Product Provider Name*"
            info="*mandatory"
            placeholder="Micro Software Inc"
            ico="company"
            id="productProviderName"
            value={getFieldValue('productProviderName')}
            onChange={e => updateFieldValue(e.target.id, e.target.value)}
            error={getFieldHasError('productProviderName')}
            errorMsg={'Complete this field'}
            maxLength={50}
          />
          <FormItemSelectHorizontalLabel
            label="EMV 3-D Secure Protocol Version*"
            info="*mandatory"
            id="protocolVersion"
            value={getFieldValue('protocolVersion')}
            onChange={e => updateFieldValue(e.target.id, e.target.value)}
            error={getFieldHasError('protocolVersion')}
            errorMsg={'Complete this field'}
          >
            <option>Select Version</option>
            <option value={'2.1.0'}>2.1.0</option>
            <option value={'2.2.0'}>2.2.0</option>
          </FormItemSelectHorizontalLabel>
          <FormItemInputHorizontalLabel
            label="EMVCo Reference Number*"
            info="*mandatory"
            placeholder="3DS_LOA_SER_ABCD_020100_00346"
            id="productReference"
            value={getFieldValue('productReference')}
            onChange={e => updateFieldValue(e.target.id, e.target.value)}
            error={getFieldHasError('productReference')}
            errorMsg={'Complete this field'}
            maxLength={50}
          />
          <FormItemInputHorizontalLabel
            label="EMVCo Approval Expiration Date*"
            type="date"
            info="*mandatory"
            id="approvalExpirationDate"
            value={getFieldValue('approvalExpirationDate')}
            onChange={e => updateFieldValue(e.target.id, e.target.value)}
            error={getFieldHasError('approvalExpirationDate')}
            errorMsg={'Complete this field'}
          />
        </ContainerCol_2>

        {/* only 3DS */}
        {getFieldValue('component') === 1
          ? renderStepTwo3dsFields({
              getFieldValue,
              getFieldHasError,
              updateFieldValue,
              getOperatorIdPreview,
            })
          : null}

        {/* only ACS */}
        {getFieldValue('component') === 2
          ? renderStepTwoAcsFields({
              getAcsSupportValue,
              updateAcsSupportValue,
            })
          : null}
      </div>
    );
  },
  3: ({
    getFieldValue,
    getFieldHasError,
    updateFieldValue,
    getAcsSupportValue,
    updateAcsSupportValue,
    getOperatorIdPreview,
  }) => {
    return (
      <div>
        <TextH1
          color="text-b-950"
          font="font-semibold"
          text="Implementation Plan with Acquirer/Issuer*"
          xtra=""
        />
        <div className={'w-full grid grid-cols-2 gap-0 '}>
          <div className={'flex items-center  pb-2 '}>
            <FormLabel id="noPlannedSchedule" label="No Planned Schedule" />
          </div>
          <div className="relative w-full">
            <input
              id="noPlannedSchedule"
              className={'no-sel-input w-5 h-5 rounded-md cursor-pointer'}
              type={'checkbox'}
              value={getFieldValue('noPlannedSchedule')}
              disabled={false}
              onChange={e =>
                updateFieldValue(
                  e.target.id,
                  !getFieldValue('noPlannedSchedule')
                )
              }
              checked={getFieldValue('noPlannedSchedule')}
            />
          </div>
        </div>
        <ContainerCol_2>
          <FormItemInputHorizontalLabel
            label="Preferred Test Schedule"
            type="date"
            isDisabled={getFieldValue('noPlannedSchedule')}
            id="testScheduleFrom"
            value={getFieldValue('testScheduleFrom')}
            onChange={e => updateFieldValue(e.target.id, e.target.value)}
            error={getFieldHasError('testScheduleFrom')}
            errorMsg={'Complete this field'}
          />
          <FormItemInputHorizontalLabel
            label="to"
            type="date"
            isDisabled={getFieldValue('noPlannedSchedule')}
            id="testScheduleTo"
            value={getFieldValue('testScheduleTo')}
            onChange={e => updateFieldValue(e.target.id, e.target.value)}
            error={getFieldHasError('testScheduleTo')}
            errorMsg={'Complete this field'}
          />
        </ContainerCol_2>
        <FormItemInputHorizontalLabel
          label="Acquirer/Issuer Name*"
          info="*mandatory"
          placeholder="Big Acquirer Co. Ltd."
          isDisabled={getFieldValue('noPlannedSchedule')}
          id="acquirerName"
          value={getFieldValue('acquirerName')}
          onChange={e => updateFieldValue(e.target.id, e.target.value)}
          error={getFieldHasError('acquirerName')}
          errorMsg={'Complete this field'}
          longCol
          maxLength={50}
        />
        <FormItemInputHorizontalLabel
          label="Launch date*"
          type="date"
          info="*mandatory"
          isDisabled={getFieldValue('noPlannedSchedule')}
          id="launchDate"
          value={getFieldValue('launchDate')}
          onChange={e => updateFieldValue(e.target.id, e.target.value)}
          error={getFieldHasError('launchDate')}
          errorMsg={'Complete this field'}
          longCol
        />
      </div>
    );
  },
  4: ({ agree, setAgree, tcRef, onScroll, isBottom }) => {
    return (
      <div>
        <TextH1
          color="text-b-950"
          font="font-semibold"
          text="General Conditions on J/Secure Operator Compliance"
          xtra=""
        />
        <div
          className="h-modal-test overflow-y-auto mb-6 border bg-gray-50 p-4 rounded-md"
          onScroll={() => onScroll()}
          ref={tcRef}
        >
          <TCDocument />
        </div>
        <FormItemCheckbox
          id="agree"
          label="I agree"
          textSize=""
          font=""
          xtra="m-n -mt-10"
          isChequed={agree}
          onClick={() => setAgree(value => !value)}
          isDisabled={!isBottom}
        />
      </div>
    );
  },
};

const FormProgress = ({ currentStep, lastStepNumber }) => (
  <div className="flex items-center">
    {lastStepNumber >= 1 ? (
      <input
        type="radio"
        className="p-2 mr-2"
        disabled
        checked={1 === currentStep}
      />
    ) : null}
    {lastStepNumber >= 2 ? (
      <input
        type="radio"
        disabled
        className="p-2 mr-2"
        checked={2 === currentStep}
      />
    ) : null}
    {lastStepNumber >= 3 ? (
      <input
        type="radio"
        disabled
        className="p-2 mr-2"
        checked={3 === currentStep}
      />
    ) : null}
    {lastStepNumber >= 4 ? (
      <input
        type="radio"
        disabled
        className="p-2"
        checked={4 === currentStep}
      />
    ) : null}
  </div>
);

const getInitialAcsSupported = () => {
  const supports = [];
  const setSupports = ({ status, version, quantity }) => {
    for (let i = 0; i < quantity; i++) {
      supports.push({
        status,
        version,
        sort: i,
        value: false,
      });
    }
  };
  setSupports({ status: 'native', version: '2.1.0', quantity: 4 });
  setSupports({ status: 'html', version: '2.1.0', quantity: 5 });
  setSupports({ status: 'native', version: '2.2.0', quantity: 4 });
  setSupports({ status: 'html', version: '2.2.0', quantity: 5 });

  return supports;
};

const initialFormFields = {
  // STEP 1
  companyName: {
    validations: { isRequired: true },
    step: 1,
    value: '',
  },
  country: {
    validations: { isRequired: true },
    step: 1,
    value: '',
  },
  companyAddress: {
    validations: { isRequired: true },
    step: 1,
    value: '',
  },
  representative: {
    validations: { isRequired: true },
    step: 1,
    value: '',
  },
  companyId: {
    validations: { isRequired: true, minLength: 4 },
    step: 1,
    value: '',
  },
  fullName: {
    validations: { isRequired: true },
    step: 1,
    value: '',
  },
  email: {
    validations: { isRequired: true, isValidEmail: true },
    step: 1,
    value: '',
  },
  phone: {
    validations: { isRequired: false, isValidPhone: true },
    step: 1,
    value: '',
  },
  // STEP 2
  applicationType: {
    // false because always one will always be selected and "0" can pass through validation checks as false
    validations: { isRequired: false },
    step: 2,
    value: 0, // set "New operator compliance test request" as default
  },
  component: {
    validations: { isRequired: true },
    step: 2,
    value: 1, // set 3DS as default
  },
  productName: {
    validations: { isRequired: true },
    step: 2,
    value: '',
  },
  productProviderName: {
    validations: { isRequired: true },
    step: 2,
    value: '',
  },
  protocolVersion: {
    validations: { isRequired: true },
    step: 2,
    value: '',
  },
  productReference: {
    validations: { isRequired: true },
    step: 2,
    value: '',
  },
  approvalExpirationDate: {
    validations: { isRequired: true },
    step: 2,
    value: '',
  },
  // For 3DS products, SDK 1
  sdkInformation__1_productProviderName: {
    validations: { isRequired: false },
    step: 2,
    value: '',
  },
  sdkInformation__1_name: {
    validations: { isRequired: false },
    step: 2,
    value: '',
  },
  sdkInformation__1_referenceNumber: {
    validations: { isRequired: false },
    step: 2,
    value: '',
  },
  sdkInformation__1_version: {
    validations: { isRequired: false },
    step: 2,
    value: '',
  },
  sdkInformation__1_approvalExpirationDate: {
    validations: { isRequired: false },
    step: 2,
    value: '',
  },
  // For 3DS products, SDK 2
  sdkInformation__2_productProviderName: {
    validations: { isRequired: false },
    step: 2,
    value: '',
  },
  sdkInformation__2_name: {
    validations: { isRequired: false },
    step: 2,
    value: '',
  },
  sdkInformation__2_referenceNumber: {
    validations: { isRequired: false },
    step: 2,
    value: '',
  },
  sdkInformation__2_version: {
    validations: { isRequired: false },
    step: 2,
    value: '',
  },
  sdkInformation__2_approvalExpirationDate: {
    validations: { isRequired: false },
    step: 2,
    value: '',
  },
  // For ACS products
  acsSupported: {
    validations: { isRequired: false },
    step: 2,
    value: getInitialAcsSupported(),
  },
  // STEP 3
  testScheduleFrom: {
    validations: { isRequired: false },
    step: 3,
    value: '',
  },
  testScheduleTo: {
    validations: { isRequired: false },
    step: 3,
    value: '',
  },
  acquirerName: {
    validations: { isRequired: true },
    step: 3,
    value: '',
  },
  launchDate: {
    validations: { isRequired: true },
    step: 3,
    value: '',
  },
  noPlannedSchedule: {
    validations: { isRequired: false },
    name: 'noPlannedSchedule',
    step: 3,
    value: false,
  },
};

export default function RegisterPage({ props }) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [userId, setUserID] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [canUserPassToNextStep, setCanUserPassToNextStep] = useState(true);
  const [fieldSpec, setFieldSpec] = useState(initialFormFields);
  const [agree, setAgree] = useState(false);
  const [isBottom, setIsBottom] = useState(false);
  const [isVerifyEmailModalOpen, setIsVerifyEmailModalOpen] = useState(false);
  const [updatedRegisterForm, setUpdatedRegisterForm] = useState(false);
  const [lastStepNumber, setLastStepNumber] = useState(4);
  const [errorMsg, setErrorMsg] = useState('');
  const [email, setEmail] = useState('');
  const [resetAnimation, setResetAnimation] = useState(false);

  const tcRef = useRef();
  const onScroll = useCallback(() => {
    if (tcRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = tcRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        setIsBottom(true);
      }
    }
  }, [tcRef.current]);

  const getFieldValue = path => {
    return get(fieldSpec, [path, 'value']);
  };

  const updateFieldValue = (path, value) => {
    setFieldSpec(_currentFieldSpec => {
      const currentFieldSpec = cloneDeep(_currentFieldSpec);
      if (typeof value === 'string') {
        set(
          currentFieldSpec,
          [path, 'value'],
          value.replace(/\s+/g, ' ').trimStart()
        );
      } else {
        set(currentFieldSpec, [path, 'value'], value);
      }

      if (path === 'component') {
        // const getProductProviderNamePath = number => [
        //   `sdkInformation__${number}_productProviderName`,
        //   'validations',
        //   'isRequired',
        // ];
        // if (value === 1) {
        //   set(currentFieldSpec, getProductProviderNamePath(1), true);
        //   set(currentFieldSpec, getProductProviderNamePath(2), true);
        // } else {
        //   set(currentFieldSpec, getProductProviderNamePath(1), false);
        //   set(currentFieldSpec, getProductProviderNamePath(2), false);
        // }
      }
      if (path === 'noPlannedSchedule') {
        const getAcquirerNamePath = () => [
          `acquirerName`,
          'validations',
          'isRequired',
        ];
        const getLaunchDatePath = () => [
          `launchDate`,
          'validations',
          'isRequired',
        ];
        if (value) {
          set(currentFieldSpec, getAcquirerNamePath(), false);
          set(currentFieldSpec, getLaunchDatePath(), false);
        } else {
          set(currentFieldSpec, getAcquirerNamePath(), true);
          set(currentFieldSpec, getLaunchDatePath(), true);
        }
      }
      return currentFieldSpec;
    });
  };

  const getFieldHasError = (
    path,
    _fieldObj = null,
    shouldCheck = !canUserPassToNextStep
  ) => {
    if (!shouldCheck) return false;
    const fieldObj = _fieldObj || get(fieldSpec, path, {});

    if (fieldObj.validations.isRequired && !fieldObj.value) {
      return true;
    }
    if (
      fieldObj.validations.isValidEmail &&
      !!fieldObj.value &&
      !emailIsValid(fieldObj.value)
    ) {
      return true;
    }
    if (
      fieldObj.validations.isValidPhone &&
      !!fieldObj.value &&
      !isPhoneNumberValid(fieldObj.value)
    ) {
      return true;
    }
    if (
      !!fieldObj.validations.minLength &&
      !!fieldObj.value &&
      fieldObj.value.length !== fieldObj.validations.minLength
    ) {
      return true;
    }

    return false;
  };

  const getAcsSupportValue = (status, version, sort) => {
    const acsSupport = find(fieldSpec.acsSupported.value, {
      status,
      version,
      sort,
    });
    return get(acsSupport, 'value');
  };

  const updateAcsSupportValue = (status, version, sort, value) => {
    setFieldSpec(currentFieldSpec => {
      const acsSupported = map(currentFieldSpec.acsSupported.value, support => {
        if (
          support.status === status &&
          support.version === version &&
          support.sort === sort
        ) {
          return {
            ...support,
            value: value !== undefined ? value : !support.value,
          };
        }
        return support;
      });
      set(currentFieldSpec, ['acsSupported', 'value'], acsSupported);
      return currentFieldSpec;
    });
  };

  const getOperatorIdPreview = () => {
    const componentCode = getFieldValue('component');
    let componentName = '';
    switch (componentCode) {
      case 1:
        componentName = '3DSS';
        break;
      case 2:
        componentName = 'ACS';
        break;
      default:
        componentName = 'XXXX';
        break;
    }
    const companyId = getFieldValue('companyId');
    const number = 'XXXXXX';

    return `JCB_${componentName}_${companyId}_${number}`;
  };

  const getIsThereAFieldWithAnErrorInStep = (step = currentStep) => {
    const fields = Object.values(fieldSpec);
    const fieldsInStep = fields.filter(field => field.step === step);
    return fieldsInStep.some(field => getFieldHasError(null, field, true));
  };

  const getFormValues = () => {
    const allFieldKeys = Object.keys(fieldSpec);
    const filteredFieldKeys = allFieldKeys.filter(
      key => !key.includes('sdkInformation__')
    );
    let formValues = reduce(
      filteredFieldKeys,
      (formValues, key) => ({
        ...formValues,
        [key]: getFieldValue(key),
      }),
      {}
    );

    const component = getFieldValue('component');

    if (component == '1') {
      const sdkInformation = [];
      const quantityOfSdkFields = 2;
      for (let i = 1; i <= quantityOfSdkFields; i++) {
        const sdkKey = `sdkInformation__${i}`;
        const sdkFieldKeys = Object.keys(fieldSpec).filter(key =>
          key.includes(sdkKey)
        );
        const sdkFieldValues = reduce(
          sdkFieldKeys,
          (sdkFieldValues, path) => {
            const prettyFieldName = path.replace(sdkKey, '').replace('_', '');
            return {
              ...sdkFieldValues,
              [prettyFieldName]: getFieldValue(path),
            };
          },
          {}
        );
        sdkInformation.push(sdkFieldValues);
      }

      formValues = { ...formValues, sdkInformation };
    }

    return formValues;
  };

  const { userId: queryParamUserId } = router.query;

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await postFetcher({ userId: queryParamUserId })(
          '/tester/auth/get-user-register-fields'
        );
        if (response.rtnCode == '1') {
          const dataUser = response.result.dataUser;
          if (response?.result?.isUpdateRequestBeenCompleted) {
            return router.push('/login');
          }
          setLastStepNumber(4);
          setIsBottom(true);
          setAgree(true);
          setUpdatedRegisterForm(true);
          updateFieldValue('companyName', dataUser.companyName);
          updateFieldValue('country', dataUser?.country || '');
          updateFieldValue('companyAddress', dataUser.companyAddress);
          updateFieldValue('representative', dataUser.representative);
          updateFieldValue('companyId', dataUser.companyId);
          updateFieldValue('fullName', dataUser.fullName);
          updateFieldValue('email', dataUser.email);
          updateFieldValue('phone', dataUser.phone);
          updateFieldValue('applicationType', dataUser.applicationType);
          updateFieldValue('operatorId', dataUser.operatorId);
          updateFieldValue('productProviderName', dataUser.productProviderName);
          updateFieldValue('productReference', dataUser.productReference);
          updateFieldValue('component', dataUser.component);
          updateFieldValue('productName', dataUser.productName);
          updateFieldValue('protocolVersion', dataUser.protocolVersion);
          updateFieldValue(
            'approvalExpirationDate',
            dataUser.approvalExpirationDate
          );
          if (dataUser.component == 1) {
            updateFieldValue(
              'sdkInformation__1_productProviderName',
              dataUser.sdkInformation[0].productProviderName
            );
            updateFieldValue(
              'sdkInformation__1_name',
              dataUser.sdkInformation[0].name
            );
            updateFieldValue(
              'sdkInformation__1_referenceNumber',
              dataUser.sdkInformation[0].referenceNumber
            );
            updateFieldValue(
              'sdkInformation__1_version',
              dataUser.sdkInformation[0].version
            );
            updateFieldValue(
              'sdkInformation__1_approvalExpirationDate',
              dataUser.sdkInformation[0].approvalExpirationDate
            );
            updateFieldValue(
              'sdkInformation__2_productProviderName',
              dataUser.sdkInformation[1].productProviderName
            );
            updateFieldValue(
              'sdkInformation__2_name',
              dataUser.sdkInformation[1].name
            );
            updateFieldValue(
              'sdkInformation__2_referenceNumber',
              dataUser.sdkInformation[1].referenceNumber
            );
            updateFieldValue(
              'sdkInformation__2_version',
              dataUser.sdkInformation[1].version
            );
            updateFieldValue(
              'sdkInformation__2_approvalExpirationDate',
              dataUser.sdkInformation[1].approvalExpirationDate
            );
          }
          if (dataUser.component == 2) {
            dataUser.acsSupported.forEach(support => {
              updateAcsSupportValue(
                support.status,
                support.version,
                Number(support.sort),
                support.value
              );
            });
          }
          updateFieldValue('noPlannedSchedule', dataUser.noPlannedSchedule);
          updateFieldValue('testScheduleFrom', dataUser.testScheduleFrom);
          updateFieldValue('testScheduleTo', dataUser.testScheduleTo);
          updateFieldValue('acquirerName', dataUser.acquirerName);
          updateFieldValue(
            'launchDate',
            regexDate.test(dataUser.launchDate) ? dataUser.launchDate : ''
          );
        } else return router.push('/login');
      } catch (error) {
        console.error('error', error);
        if (error?.response?.data?.rtnCode === '9897') {
          router.push('/login');
        }
        setErrorMsg(error?.message || 'Something went wrong');
      }
    };

    if (!!queryParamUserId) {
      loadData();
    }
  }, []);

  useEffect(() => {
    if (!canUserPassToNextStep && !getIsThereAFieldWithAnErrorInStep()) {
      setCanUserPassToNextStep(true);
    }
  }, [fieldSpec]);

  const onCancel = () => {
    if (currentStep === 1) {
      return router.push('/login');
    }
    setCanUserPassToNextStep(true);
    setResetAnimation(true);
    return setCurrentStep(currentStep - 1);
  };

  const onNext = () => {
    if (getIsThereAFieldWithAnErrorInStep()) {
      return setCanUserPassToNextStep(false);
    }

    if (currentStep === lastStepNumber) {
      setResetAnimation(false);
    } else {
      setResetAnimation(true);
    }

    return currentStep === lastStepNumber
      ? submit()
      : setCurrentStep(currentStep + 1);
  };

  const submit = () => {
    return updatedRegisterForm ? updateRegister() : register();
  };

  const register = async () => {
    try {
      if (!!submitted) return;
      setSubmitted(true);

      const values = getFormValues();
      const body = (({
        companyName,
        country,
        companyAddress,
        representative,
        applicationType,
        companyId,
        fullName,
        email,
        phone,
        component,
        productProviderName,
      }) => ({
        companyName,
        country,
        companyAddress,
        representative,
        applicationType,
        companyId,
        fullName,
        email,
        phone,
        component,
        productProviderName,
      }))(values);

      setEmail(body.email);

      const response = await postFetcher(body)('/tester/auth/send-verify-code');

      if (response?.rtnCode == '1') {
        setIsVerifyEmailModalOpen(true);
        setUserID(response?.result?.userId);
      } else {
        setErrorMsg(response?.result?.message || 'Something went wrong');
      }
      setSubmitted(false);

      // if (response?.result?.noSendEmailVerify) {
      //   setIsVerifyEmailModalOpen(false);
      //   setTimeout(() => {
      //     router.push('/login');
      //   }, 5000);
      // } else {
      //   setSubmitted(false);
      //   if (response?.rtnCode == '1') {
      //     setIsVerifyEmailModalOpen(true);
      //   } else {
      //     setErrorMsg(response?.result?.message || 'Something went wrong');
      //   }
      // }
    } catch (error) {
      if (error?.response?.data?.rtnCode === '9897') {
        router.push('/login');
      }
      setSubmitted(false);
      console.error(error);
      setErrorMsg(error?.message || 'Something went wrong');
    }
  };

  const updateRegister = async () => {
    try {
      if (!!submitted) return;
      setSubmitted(true);

      const values = getFormValues();
      const body = updatedRegisterForm
        ? { ...values, applicationType: '4', userId: queryParamUserId }
        : { ...values, userId: queryParamUserId };

      const response = await postFetcher(body)(
        '/tester/auth/update-user-register-form'
      );

      if (response?.rtnCode == '1') {
        setTimeout(() => {
          router.push('/login');
        }, 5000);
      } else {
        setSubmitted(false);
        setErrorMsg(response?.result?.message || 'Something went wrong');
      }
    } catch (error) {
      if (error?.response?.data?.rtnCode === '9897') {
        router.push('/login');
      }
      setSubmitted(false);
      console.error(error);
      setErrorMsg(error?.response?.data?.message || 'Something went wrong');
    }
  };

  const [springStyle] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
      reset: resetAnimation,
    }),
    [currentStep]
  );

  return (
    <main className="flex w-full min-h-screen sm:items-center justify-center flex-col">
      <Container xtra="w-full max-w-screen-modal-md lg:max-w-register h-mt mt-3 border-b-950 border-t-8 rounded-md shadow-2xl">
        <div className="relative">
          <div className="flex flex-col md:flex-row items-start md:items-center px-3 md:px-6 lg:px-16 gap-4">
            <Image
              width="95"
              height="55"
              src="/images/jcb_logo_login.png"
              className=""
              alt="JCB"
            />
            <div className="tracking-wider">
              <p className="font-medium">J/Secure 2.0</p>
              <p className="font-medium">
                Application Form for J/Secure 2.0 Operator Compliance Test
              </p>
            </div>
          </div>
        </div>
        <Container xtra="m-n">
          <div className="flex flex-col justify-between px-1 md:px-4 lg:px-12">
            <animated.div style={springStyle}>
              {STEPS[currentStep]({
                fieldSpec,
                getFieldValue,
                getFieldHasError,
                updateFieldValue,
                getAcsSupportValue,
                updateAcsSupportValue,
                getOperatorIdPreview,
                agree,
                setAgree,
                updatedRegisterForm,
                countriesData,
                tcRef,
                onScroll,
                isBottom,
              })}
            </animated.div>
            <br />
            <div className="flex justify-between">
              <BtnV2
                label={currentStep === 1 ? 'Cancel' : 'Previous'}
                textColor={currentStep === 1 ? 'text-black' : 'text-white'}
                bgColor={currentStep === 1 ? 'bg-gray-100' : 'bg-b-950'}
                borderColor={currentStep === 1 ? 'border-gray-300' : 'bg-b-950'}
                xtra="w-48"
                isDisable={submitted}
                onClick={() => onCancel()}
              />
              <FormProgress
                currentStep={currentStep}
                lastStepNumber={lastStepNumber}
              />
              <BtnV2
                label={currentStep === lastStepNumber ? 'Submit' : 'Next'}
                textColor={
                  !getIsThereAFieldWithAnErrorInStep()
                    ? 'text-white'
                    : 'text-gray-600'
                }
                bgColor={
                  !getIsThereAFieldWithAnErrorInStep()
                    ? 'bg-b-950'
                    : 'bg-gray-300'
                }
                borderColor={
                  currentStep === lastStepNumber
                    ? 'bg-b-950'
                    : 'border-gray-300'
                }
                xtra="w-48"
                ico={submitted ? 'spinner' : null}
                isDisable={
                  submitted ||
                  !canUserPassToNextStep ||
                  (currentStep === lastStepNumber &&
                    !updatedRegisterForm &&
                    !agree)
                }
                onClick={() => onNext()}
              />
            </div>
          </div>
        </Container>
      </Container>
      <ModalVerifyEmail
        isOpen={isVerifyEmailModalOpen}
        closeModal={() => setIsVerifyEmailModalOpen(false)}
        userId={userId}
        getFormValues={getFormValues}
        userEmail={email || ''}
      />
    </main>
  );
}
