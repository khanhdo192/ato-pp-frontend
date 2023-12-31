export const Stepper = ({ currentStep }) => {
  return (
    <ul className="flex justify-between flex-wrap lg:flex-nowrap gap-4">
      <li className="flex-auto">
        <div className="flex flex-col items-center gap-4 relative">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-2xl ${
              currentStep >= 1 ? 'bg-blue-700 text-white' : 'bg-gray-400'
            }`}
          >
            1
          </div>
          <div
            className={`${
              currentStep >= 1 ? 'text-blue-700' : ''
            } break-words text-center w-44 line-step`}
          >
            Generate Test Report
          </div>
        </div>
      </li>
      <li className="flex-auto">
        <div className="flex flex-col items-center gap-4 relative">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-2xl ${
              currentStep >= 2 ? 'bg-blue-700 text-white' : 'bg-gray-400'
            }`}
          >
            2
          </div>
          <p
            className={`${
              currentStep >= 2 ? 'text-blue-700' : ''
            } break-words text-center w-44 line-step`}
          >
            Enter Waiver comments (optional)
          </p>
        </div>
      </li>
      <li className="flex-auto">
        <div className="flex flex-col items-center gap-4 relative">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-2xl ${
              currentStep >= 3 ? 'bg-blue-700 text-white' : 'bg-gray-400'
            }`}
          >
            3
          </div>
          <p
            className={`${
              currentStep >= 3 ? 'text-blue-700' : ''
            } break-words text-center w-44 line-step`}
          >
            Submit Report
          </p>
        </div>
      </li>
      <li className="flex-auto">
        <div className="flex flex-col items-center gap-4 relative">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-2xl ${
              currentStep >= 4 ? 'bg-blue-700 text-white' : 'bg-gray-400'
            }`}
          >
            4
          </div>
          <p
            className={`${
              currentStep >= 4 ? 'text-blue-700' : ''
            } break-words text-center w-44`}
          >
            JCB Approval
          </p>
        </div>
      </li>
    </ul>
  );
};
