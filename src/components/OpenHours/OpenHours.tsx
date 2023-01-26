import { FC } from 'react';

const OpenHours: FC = () => {
  return (
    <div className=' right-0 max-w-[250px] w-full p-[16px] bg-white ml-auto rounded-[10px] mb-[10px]'>
      <h6 className='text-h6 leading-h6 mb-[10px] font-thin'>Opening Hours</h6>
      <p className='flex justify-between items-center text-p leading-p mb-[5px] '>
        Mon <span className='text-sp'>closed</span>
      </p>
      <p className='flex justify-between items-center text-p leading-p mb-[5px] '>
        Tue-Fri <span className='text-sp'>4pm - 8pm</span>
      </p>
      <p className='flex justify-between items-center text-p leading-p mb-[5px] '>
        Sat-Sun <span className='text-sp'>5pm - 11pm</span>
      </p>
    </div>
  );
};

export default OpenHours;
