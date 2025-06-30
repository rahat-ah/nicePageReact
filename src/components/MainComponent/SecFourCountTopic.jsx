import CountUp from 'react-countup'

function SecFourCountTopic({endNum,aboutNum,suffix,isNumInView}) {
  return (
    <div className='p-8'>
        <h2 className='text-6xl mb-4 font-bold'>{isNumInView ? <CountUp end={endNum} duration={2.5}/> : <span>{endNum}</span>}{suffix}</h2>
        <p className='text-xl font-semibold'>{aboutNum}</p>
    </div>
  )
}

export default SecFourCountTopic