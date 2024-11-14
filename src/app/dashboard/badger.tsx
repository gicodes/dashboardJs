const Badger = ({ text, value }: string | number | any) => {
  let vCol = ((value==="$30 - 40k") ? 'typo-1' : 'typo');
  let tCol = ((value==="$30 - 40k") ? 'typo-f2' : 'typo-f1');

  return (
    <div className='text-center'> 
      <p className={vCol}> {value} </p>
      <p className={tCol}> {text} </p>
    </div>
  )
}

export default Badger