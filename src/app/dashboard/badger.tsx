import React from 'react';

interface BadgerProps {
  text: string;
  value: string;
}

const Badger: React.FC<BadgerProps> = ({ text, value }) => {
  const vCol = ((value==="$30 - 40k") ? 'typo-1' : 'typo');
  const tCol = ((value==="$30 - 40k") ? 'typo-f2' : 'typo-f1');

  return (
    <div className='text-center'> 
      <p className={vCol}> {value} </p>
      <p className={tCol}> {text} </p>
    </div>
  )
}

export default Badger;