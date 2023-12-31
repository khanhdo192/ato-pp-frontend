

export default function HomeTableSages({stageId, minimal}) {
    
  return (
      <div className={'font-semibold rounded-xl w-mt max-w-full text-' + stageId[2] + (minimal ? ' bg-transparent px-0 py-0' : ' bg-'+stageId[1] + ' px-3 py-2') }>
        <p className='text-xxs leading-none tracking-wide truncate uppercase'>{stageId[0]}</p>
      </div>
  )
}