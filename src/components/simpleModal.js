import React from 'react';

const SimpleModal = ({ title, message, onClose, variant }) => {

  const getVariantColor = () => {
    switch (variant) {
      case 'info':
        return 'bg-blue-500';
      case 'delete':
        return 'bg-red-500';
      case 'alert':
        return 'bg-yellow-500';
      case 'danger':
        return 'bg-orange-500';
    case 'primary':
        return 'bg-primary';
      default:
        return 'bg-gray-500';
    }
  };

  // Appliquer la classe de couleur en fonction de la variante
  const modalColorClass = getVariantColor();

  return (
    <div className="relative z-10" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className={`relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg ${modalColorClass}`}>
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
              <div className={`mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${modalColorClass} sm:mx-0 sm:h-10 sm:w-10`}>
                  <svg className={`h-6 w-6 ${modalColorClass}`} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path className={"text-white"} stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3 className="text-base font-semibold leading-6 text-black" id="modal-title">{title}</h3>
                  <div className="mt-2">
                    <p className="text-sm text-black">{message}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 bg-white`}>
              <button onClick={()=>{onClose(false);}} type="button" className={`mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-opacity-80 ${modalColorClass}`}>Okay</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default SimpleModal;
