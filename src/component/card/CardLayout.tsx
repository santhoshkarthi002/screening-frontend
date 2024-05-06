import { AppointmentListProps } from "../table/types";
import { formatDate, stringAvatar } from "../utils";

export const CardLayout = ({
  list,
  isLoading,
}: {
  list: AppointmentListProps;
  isLoading: boolean;
}) => {
  return (
    <div className="flex justify-between flex-row p-2 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer">
      {isLoading ? (
        <div className="h-60">
          <div
            role="status"
            className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2 h-6"
          >
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <div className="flex gap-2 mb-2 items-center">
              <h5 className=" items-center gap-5  text-[15px] font-bold tracking-tight text-[#48484e] dark:text-white">
                {list.patient_name}
                <span className="ml-2 text-[11px] tracking-tight text-gray-400 dark:text-gray-400">
                  (+{list.mobile_number})
                </span>
              </h5>
            </div>
            <div className="flex items-center mb-3  text-gray-700 dark:text-gray-400 ">
              {list?.patient_name === "John Doe" ||
              list?.patient_name === "Jane Smith" ? (
                <img
                  className="w-6 h-6 mr-2  text-gray-50"
                  src="../../public/star2.svg"
                  alt="Jese image"
                />
              ) : (
                <img
                  className="w-6 h-6 mr-2 text-gray-50"
                  src="../../public/star-circle-fill-svgrepo-com.svg"
                  alt="Jese image"
                />
              )}
              <div className="text-gray-500 font-bold text-[14px] whitespace-nowrap   dark:text-gray-400">
                {list.doctor}{" "}
                <span className="text-[11px] tracking-tight text-gray-400 dark:text-gray-400">
                  <span className="h-fit  px-4 py-1 text-sm text-gray-600 bg-[#e4ecf7] w-fit rounded-md font-bold">
                    {list.injury}
                  </span>
                </span>
              </div>
            </div>
            <div className="flex mb-3 items-center text-[12px] font-normal text-gray-50   dark:text-gray-400">
              <img
                className="w-5 h-5 mr-2  opacity-40 text-gray-50"
                src="../../public/date-range-svgrepo-com.svg"
                alt="Jese image"
              />
              <div className=" text-gray-400 font-semibold  whitespace-nowrap">
                {`${formatDate(String(list.appointment_date))} ${
                  list.appointment_time
                }`}
              </div>
            </div>
          </div>
          <div className="hidden xs:flex bg-blue-500 font-bold h-12 text-white w-12 rounded-full items-center justify-center">
            {stringAvatar(list.patient_name)}
          </div>
        </>
      )}
    </div>
  );
};
