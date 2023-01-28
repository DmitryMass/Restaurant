import { FC, useState } from 'react';

interface IModalProps {
  text: string;
  response?: boolean;
}

const BookTableModal: FC<IModalProps> = ({ text, response }) => {
  const [currentResponse, setCurrentReponse] = useState(response);

  return (
    <>
      {currentResponse ? (
        <div
          onClick={() => setCurrentReponse(false)}
          className='fixed z-30 w-full h-full flex justify-center items-center gap-[20px] top-0 left-0 right-0 bottom-0 bg-main opacity-95 text-white px-[10px]'
        >
          <h5 className='max-[420px]:text-p max-[420px]:leading-p text-h5 leading-h5 text-mutted'>
            {text}
          </h5>
        </div>
      ) : null}
    </>
  );
};

export default BookTableModal;
