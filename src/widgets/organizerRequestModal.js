import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Loading from "../components/loading";
import AlertMessage from "./alert";
import { CreateOrganizerRequest } from "../services/organizerRequestService";

const ORModal = ({showORModal, setShowORModal}) => {

    const [frontImage, setFrontImage] = useState(null);
    const [backImage, setBackImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [alertTitle, SetAlertTitle] = useState("Error");
    const [alertMessage, SetAlertMessage] = useState("");


    const verifyImageSize = (imageFile) =>{
        if (imageFile.size > 5000000){
            SetAlertTitle("Warning");
            SetAlertMessage("File is too big! Please select a file smaller than 5MB.");
            setIsError(true);
            return true;
    }
        return false;
    }

    const handleFileFrontImage = (event) => {
        if (verifyImageSize(event.target.files[0]))
            return;
        setFrontImage(event.target.files[0]);
      };
      
      const handleFileBackImage = (event) => {
        if (verifyImageSize(event.target.files[0]))
            return;
        setBackImage(event.target.files[0]);
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
      
        const formData = new FormData();
        formData.append('cni_face', frontImage);
        formData.append('cni_back', backImage);
        setLoading(true);
        const res = await CreateOrganizerRequest(formData);
        console.log(res);
        if (!res.isError) {
            window.location.replace("/");
        }
        setResult(res);
        setIsError(res.isError);
        SetAlertTitle("Error");
        SetAlertMessage(res.message);
        setLoading(false);
    }

    if (loading) {
        return <Loading />;
    } else{
    return(
        <div className="fixed z-50 w-screen h-screen top-0 overflow-hidden  text-white">
            <div className="relative w-full h-full flex justify-center items-center overflow-y-auto">
            <div
                className="absolute w-full h-full bg-black bg-opacity-60"
                onClick={() => setShowORModal(false)}
                ></div>
            <div className="relative flex flex-col text-center bg-white rounded-md shadow-md z-50 p-6 gap-2 w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12">
            {/* Become an Organizer */}
            <button
                    className="absolute right-4 top-4"
                    onClick={() => setShowORModal(false)}
                >
                    <IoMdClose className="text-2xl text-black" />
            </button>
            <h1 className="font-extrabold text-xl text-primary">
                MyTicket
            </h1>
            <label className="text-base text-secondary font-semibold">
                Become an Organizer
            </label>
            <form className="flex flex-col mt-2 gap-4" onSubmit={handleSubmit}>
                    <label className="text-base text-black font-semibold">Add your CNI</label>
                    <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                Face avant
                                <svg
                                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 16"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                    />
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">
                                        Click to upload
                                    </span>{" "}
                                    or drag and drop
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    PNG, JPG or JPEG (MAX 5Mb)
                                </p>
                            </div>
                            <input
                                id="dropzone-file"
                                type="file"
                                className="hidden"
                                onChange={handleFileFrontImage}
                                accept=".png, .jpg, .jpeg"
                                required
                            />
                        </label>
                    </div>

                    <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                Face arriere
                                <svg
                                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 16"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                    />
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">
                                        Click to upload
                                    </span>{" "}
                                    or drag and drop
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    PNG, JPG or JPEG (MAX 5Mb)
                                </p>
                            </div>
                            <input
                                id="dropzone-file"
                                type="file"
                                className="hidden"
                                onChange={handleFileBackImage}
                                accept=".png, .jpg, .jpeg"
                                required
                            />
                        </label>

                        
                    </div>
                    <button
                        type="submit"
                        className="w-auto px-4 py-3 bg-primary rounded-lg hover:bg-opacity-90"
                    >
                        Make a request
                    </button>
            </form>






            <AlertMessage
                isActive={isError}
                title={alertTitle}
                message={alertMessage}
                setIsActive={setIsError}
            />
        </div>
            </div>
        </div>

    );
    }
};

export default ORModal;