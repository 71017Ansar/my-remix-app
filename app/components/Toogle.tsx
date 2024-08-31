import React from 'react';

export const Toggle = () => {
  const [isOn, setIsOn] = React.useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className='outer h-screen flex justify-center items-center'>
      <div 
        className={`inner p-4 rounded cursor-pointer ${isOn ? 'bg-green-500' : 'bg-red-500'}`}
        onClick={handleToggle}
      >
        <span className="text-white font-bold">{isOn ? 'On' : 'Off'}</span>
      </div>
    </div>
  );
};
