const NumberInput = ({ name, value, setValue }) => {
  return (
    <div className='flex items-center space-x-4'>
      <label htmlFor={name} className='text-base'>
        {name}
      </label>
      <div className='flex items-center bg-light px-2 py-1 rounded-full'>
        <button
          disabled={value <= 0}
          onClick={() => !(value <= 0) && setValue((val) => val - 1)}
          className='bg-gray-300 text-dark rounded-full p-2 disabled:opacity-50'>
          -
        </button>
        <input
          min={0}
          max={20}
          value={value}
          id={name}
          onChange={(e) => setValue(Number(e.target.value))}
          type='number'
          placeholder='Add dates'
          className='w-16 text-center bg-transparent outline-none'
        />
        <button
          onClick={() => !(value >= 20) && setValue((val) => val + 1)}
          className='bg-gray-300 text-dark rounded-full p-2 disabled:opacity-50'>
          +
        </button>
      </div>
    </div>
  );
};

export default NumberInput;
