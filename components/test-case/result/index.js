import ResultItem from '@/components/resultsItem';
import { motion } from 'framer-motion';

export default function Result({ testResults, testCaseId, testLogs }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      key={testCaseId}
    >
      <div className="border border-gray-400 mb-3 lg:mb-6 p-7 pr-2 lg:p-7 lg:pr-3 bg-gray-50 rounded-xl">
        <div className="h-test scroll overflow-y-scroll overflow-x-hidden  box-border pr-4">
          <div className="mt-1 mb-6">
            <h1 className="text-blue-500 font-medium">{testCaseId}</h1>
            <h2 className="font-normal">
              The following pass criteria shall be fulfilled
            </h2>
          </div>

          {!testResults && (
            <p className="max-w-full break-all whitespace-pre-wrap text-b-600 text-sm tracking-wide">
              Response: No Result Found!
            </p>
          )}
          {testResults?.steps.map((r, index) => {
            return (
              <ResultItem
                title={r.name}
                isPass={r.pass}
                description={r.itemessage}
                errorMessage={r.errorMessage}
                req={r.reqId}
                testLogs={testLogs}
                correctValue={r.correctValue}
                responseBody={r?.responseBody}
                key={`result-item-${index}`}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
