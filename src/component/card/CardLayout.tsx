import { AppointmentListProps } from "../table/types";
import { formatDate, stringAvatar } from "../utils";

export const CardLayout = ({ list }: { list: AppointmentListProps }) => {
  return (
      <div className="flex justify-between flex-row p-2 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer">
        <div className="flex flex-col justify-between p-4 leading-normal">
          <div className="flex gap-3 mb-2 items-center">
            <h5 className=" items-center gap-5  text-[17px] font-bold tracking-tight text-gray-900 dark:text-white">
              {list.patient_name}
            </h5>
            <span className="bg-blue-100 h-fit  px-4 py-1 text-sm text-gray-600 w-fit rounded-md font-bold">
              {list.injury}
            </span>
          </div>
          {/* <div className="mb-2 font-semibold text-[14px] tracking-tight text-gray-600 dark:text-gray-400">
            +{list.mobile_number}
          </div> */}
          <div className="flex items-center mb-3  text-gray-700 dark:text-gray-400 ">
            <img
              className="w-5 h-5 mr-2 text-gray-50"
              src="../../public/star-circle-fill-svgrepo-com.svg"
              alt="Jese image"
            />
            <div className="text-gray-500 font-bold text-[14px] whitespace-nowrap   dark:text-gray-400">
              {list.doctor} <span  className="text-[11px] tracking-tight text-gray-400 dark:text-gray-400"> (+{list.mobile_number})
          </span>
            </div>
          </div>
          <div className="flex mb-3 items-center text-[12px] font-normal text-gray-700   dark:text-gray-400">
            <img
              className="w-5 h-5 mr-2 text-gray-50"
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
        <div className="flex bg-blue-500 font-bold h-12 text-white w-12 rounded-full items-center justify-center">
          {stringAvatar(list.patient_name)}
        </div>
      </div>
  );
};
