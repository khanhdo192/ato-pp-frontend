<<<<<<< HEAD
export default function testResultTableTr({
  test,
  background,
  borderStyle,
  editing,
  editTesterComments,
}) {
  return (
    <tr className={`text-sm ${background} `}>
      <td className={`px-4 py-2 ${borderStyle}`}>{test.testCaseId}</td>
      <td className={`large px-4 py-2 ${borderStyle} `}>{test.protocol}</td>
      <td className={`px-4 py-2 ${borderStyle} large `}>{test.runTime}</td>
      <td className={`large px-4 py-2 ${borderStyle} `}>{test.channel}</td>
      <td className={`large px-4 py-2 ${borderStyle} `}>{test.category}</td>
      <td className={`large px-4 py-2 ${borderStyle} `}>
        {test.result == 2
          ? 'WAIVER'
          : test.result == 0
          ? 'FAIL'
          : test.result == 1
          ? 'PASS'
          : ''}
      </td>
      {!!editing &&
      test.waiverTesterComment != 'Null Data' &&
      test.result !== 1 ? (
        <td className={`${borderStyle}`} style={{ minWidth: '220px' }}>
          <textarea
            className={`pl-4 py-1 w-full border-none focus:outline-none ${background} h-min resize-none`}
            placeholder="You can leave a comment"
            onChange={e =>
              editTesterComments(test.testReportDetailId, e.target.value)
            }
            value={
              !!test.waiverTesterComment && test.waiverTesterComment.length > 0
                ? test.waiverTesterComment
                : ''
            }
          />
        </td>
      ) : (
        <td className={`${borderStyle}`} style={{ minWidth: '220px' }}>
          <textarea
            className={`pl-4 py-1 w-full border-none focus:outline-none ${background} h-min resize-none`}
            readOnly
            value={
              !!test.waiverTesterComment
                ? test.waiverTesterComment == 'Null Data'
                  ? ''
                  : test.waiverTesterComment
                : ''
            }
          />
        </td>
      )}
      <td className={`${borderStyle}`} style={{ minWidth: '220px' }}>
        <textarea
          className={`pl-4 py-1 w-full border-none focus:outline-none ${background} h-min resize-none`}
          readOnly
          value={test.waiverJcbComment ? test.waiverJcbComment : ''}
        />
      </td>
=======
import { useRouter } from 'next/router';
import React from 'react';

export default function testResultTableTr({
  test,
  backgroundEditing,
  background,
  borderStyle,
  edit,
  editing,
}) {
  const router = useRouter()
  const goToCurrentTestId = (testId) => () => {
    const {id} = router.query
    if(id){
      router.push(`/test-case/${id}/?tc_id=${testId}`)
    }
    console.log(router)
  }

  return (
    <tr className={`text-sm ${!!editing ? backgroundEditing : background} `}>
      <td className={`px-4 py-2 ${borderStyle}`}>
        <a href='#' className='text-blue-600' onClick={goToCurrentTestId(test.testCaseId)}>
          {test.testCaseId}
        </a>
      </td>
      <td className={`px-4 py-2 ${borderStyle}`}>{test.protocol}</td>
      <td className={`px-4 py-2 ${borderStyle}`}>{test.runTime}</td>
      <td className={`px-4 py-2 ${borderStyle}`}>{test.channel}</td>
      <td className={`px-4 py-2 ${borderStyle}`}>{test.category}</td>
      {!!editing && (test.result == 0 || test.result == 2) ? (
        <td className={`${borderStyle}`}>
          <select
            className={`pl-3 py-2 w-full border-none ${
              !!editing ? backgroundEditing : background
            }`}
            // defaultValue={
            //   test.result == null
            //     ? 'N/A'
            //     : test.result == 0
            //     ? 'FAIL'
            //     : test.result == 1
            //     ? 'PASS'
            //     : null
            // }
            onChange={e => edit(test.testCaseId, 'result', e.target.value)}
          >
            <option value="0" selected={test.result == 0}>
              FAIL
            </option>
            {/* <option value="1" selected={test.result == 1}>
              PASS
            </option> */}
            <option value="2" selected={test.result == 2}>
              WAIVER
            </option>
          </select>
        </td>
      ) : (
        <td className={`px-4 py-2 ${borderStyle}`}>
          {test.result == 2
            ? 'WAIVER'
            : test.result == 0
            ? 'FAIL'
            : test.result == 1
            ? 'PASS'
            : null}
        </td>
      )}
      <td className={`px-4 py-2 ${borderStyle}`}>{test.waiverTesterComment}</td>
      {!!editing && test.result == 2 ? (
        <td>
          <textarea
            className={`pl-4 py-1 w-full border-none ${
              !!editing ? backgroundEditing : background
            }`}
            placeholder="You can leave a comment"
            onChange={e =>
              edit(test.testCaseId, 'waiverJcbComment', e.target.value)
            }
          >
            {test.waiverJcbComment}
          </textarea>
        </td>
      ) : (
        <td className={`px-4 py-2`}>{test.waiverJcbComment}</td>
      )}
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
    </tr>
  );
}
