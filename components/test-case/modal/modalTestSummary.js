import React, { useState } from 'react';
import ModalMain from '@/components/modalMain';
import ModalContainer from '@/components/modalContainer';
import BtnPopClose from '@/components/btnPopClose';
import TestResultTable from '@/components/testResultTable';
import { Stepper } from '../stepper';

const getTheInitialStep = statusId => {
  if (statusId == 2 || statusId == 5) {
    return 1;
  }
  if (statusId >= 3 && statusId <= 5) {
    return 3;
  }
  if (statusId >= 6) {
    return 4;
  }
  return 1;
};

export default function ModalTestSummary({
  isOpen,
  closeModal,
  product,
  statusId,
  setStatusId,
}) {
  const [currentStep, setCurrentStep] = useState(getTheInitialStep(statusId));
  return (
    <ModalMain isOpen={isOpen}>
      <ModalContainer>
        <BtnPopClose onClick={closeModal} />
        <div className="p-2 lg:p-10 h-full">
          <div className="flex flex-col">
            <div className="m-auto text-center">
              <h2 className="font-bold text-xl lg:text-3xl mb-2">
                Test Result Submission
              </h2>
              <p className="font-semibold text-lg lg:text-2xl mb-2">
                Instructions
              </p>
              <p className="lg:text-xl">
                Please generate your Test Report and add any Waiver comments if
                necessary. Click Generate Report button to view the initial
                report then enter your waiver comments for each applicable test
                case.
              </p>
            </div>
            <div className="lg:w-10/12 py-8 mx-auto">
              <Stepper currentStep={currentStep} />
            </div>
            <TestResultTable
              product={product}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              closeModal={closeModal}
              setStatusId={setStatusId}
            />
          </div>
        </div>
      </ModalContainer>
    </ModalMain>
  );
}
