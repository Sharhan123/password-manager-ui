import React, { useState } from 'react';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
const ModalExample = ({open,close,text}) => {
  return (
    
<>
        {open && (
          <div className="fixed bg-black/30 z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div
                className="w-full inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                
                <div className="bg-gray-50 px-4 py-3 flex justify-between items-center "
                >
                <div className='flex items-center justify-between gap-5'>
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ThumbUpAltIcon className='text-green-500' />
                        
                    </div>
                    <p className='web-regular '>{text}</p>
                  </div>
                  <button
                  onClick={()=>close()}
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white  sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Okey
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        )}
     </>

)};

export default ModalExample;
