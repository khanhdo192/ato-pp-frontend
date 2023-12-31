import BtnTableTitle from '@/components/btnTableTitle';
import TableRowHistory from '@/components/tableRowHistory';
import { motion } from 'framer-motion';

export default function History({
  historiesShowed,
  setHistories,
  loadMoreHistories,
  setTestCaseAndSelectTestCaseId,
  activeRowHistory,
  setSortedBy,
  sortedBy,
  setIsSorted,
  handleSort,
  getDate,
  getTime,
  filterHistories,
  filterStr,
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      key={historiesShowed}
    >
      <div className="border border-gray-400 mb-3 lg:mb-6 p-7 pr-2 lg:p-7 lg:pr-3 bg-white rounded-xl">
        <div className="h-test scroll overflow-y-scroll overflow-x-hidden  box-border pr-4">
          <div className="mt-1 mb-8">
            <h1 className="text-blue-500 font-medium text-xl">
              History Results
            </h1>
            <h2 className="font-normal">
              The most recent 30 results are loaded by default. Click Load More
              to load more previous results, or input a specific date
            </h2>
          </div>
          <div className="relative md:flex items-center justify-between -mt-8 md:mt-0 mb-7">
            <button
              className="bg-gray-400 text-white px-5 py-2 rounded-lg"
              onClick={() => loadMoreHistories()}
            >
              Load More
            </button>
          </div>
          <div className="mb-6">
            <div className="hidden md:grid grid-cols-hist-table-md border-b border-gr-400">
              <BtnTableTitle
                label="Date"
                buttonStyles="bg-blue-900 py-1.5 border-r border-white"
                labelStyle="text-white"
                justify="center"
                onClick={() =>
                  handleSort({
                    list: historiesShowed,
                    setlist: setHistories,
                    value: 'date',
                    setSortedBy,
                    sortedBy,
                    setIsSorted,
                  })
                }
                active={!!sortedBy.match('date')}
              />
              <BtnTableTitle
                label="Time"
                buttonStyles="bg-blue-900 py-1.5  border-r border-white"
                labelStyle="text-white"
                justify="center"
                onClick={() =>
                  handleSort({
                    list: historiesShowed,
                    setlist: setHistories,
                    value: 'time',
                    setSortedBy,
                    sortedBy,
                    setIsSorted,
                  })
                }
                active={!!sortedBy.match('time')}
              />
              <BtnTableTitle
                label="Results"
                buttonStyles="bg-blue-900 py-1.5"
                labelStyle="text-white"
                justify="center"
                onClick={() =>
                  handleSort({
                    list: historiesShowed,
                    setlist: setHistories,
                    value: 'allPass',
                    setSortedBy,
                    sortedBy,
                    setIsSorted,
                  })
                }
                active={!!sortedBy.match('allPass')}
              />
            </div>
            {historiesShowed &&
              historiesShowed.length > 0 &&
              historiesShowed.map((h, index) => (
                <TableRowHistory
                  data={[getDate(h.createdTime), getTime(h.createdTime)]}
                  success={h.allPass == 1}
                  isActive={activeRowHistory === index}
                  textCenter="text-center"
                  styles="border-r border-gray-500 py-1.5"
                  resultText={true}
                  onClick={() =>
                    setTestCaseAndSelectTestCaseId({
                      index: index,
                      testCaseId: h.jcbTestCaseId,
                      testCaseResultId: h.id,
                      xmlVersion: h.xmlVersion,
                    })
                  }
                  key={`history-row-${index}`}
                />
              ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
