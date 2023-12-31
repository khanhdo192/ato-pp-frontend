import BtnAction from '../components/btnAction';
import TextRole from '../components/textRole';

<<<<<<< HEAD
import Link from 'next/link'
import BtnAction from '@/components/btnAction'
import TextRole from '@/components/textRole'

export default function TableRowUserRoles({data}) {

  const commonDiv="flex "
  const commonP="truncate pl-1 pr-0.5 "

  return (
      <div className="relative grid grid-cols-2 lg:grid-cols-user-staff gap-1.5 lg:gap-0  items-center text-sm  lg:text-xs text-gr-700 pt-10 pb-4 lg:py-2.5
          border-t lg:border-t-0 lg:border-b border-b-200">

          <div className={commonDiv}>
            <p className={commonP}>{data[0]}</p>
          </div>

          <div className={commonDiv}>
            <p className={commonP}>{data[1]}</p>
          </div>

          <div className={commonDiv}>
            <p className={commonP}>{data[2]}</p>
          </div>

          <div className={commonDiv}>
            <p className={commonP}>{data[3]}</p>
          </div>

          <div className={commonDiv}>
            <p className={commonP}>{data[4]}</p>
          </div>

          <div className={commonDiv}>
            <p className={commonP}>{data[5]}</p>
          </div>

          <TextRole label={data[6]} />

          <div className="flex lg:justify-end">
            <Link href={'/user-management/edit/' + data[7]}>
              <BtnAction ico="edit" color="bg-p-500" />
            </Link>
          </div>
=======
export default function TableRowUserStaff({ data, onEdit, isLoading }) {
  const commonDiv = 'flex';
  const commonP = 'truncate px-1 ';

  return (
    <div className="relative grid grid-cols-user-staff items-center text-xs text-gr-700 py-3.5 lg:border-t-0 border-b border-b-200">
      <div className={commonDiv}>
        <p className="truncate pr-1">{data[0]}</p>
      </div>
      <div className={commonDiv}>
        <p className={commonP}>{data[4]}</p>
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
      </div>
      {onEdit ? (
        <div className={commonDiv}>
          <TextRole label={data[5]} />
        </div>
      ) : (
        <div className="flex justify-end">
          <TextRole label={data[5]} />
        </div>
      )}
      {onEdit && (
        <div className="flex justify-end">
          <BtnAction
            ico={isLoading ? 'spinner' : 'edit'}
            onClick={onEdit ? onEdit : null}
            color="bg-p-500"
          />
        </div>
      )}
    </div>
  );
}
