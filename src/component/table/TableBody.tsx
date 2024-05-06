import { Fragment } from "react/jsx-runtime";
import { AppointmentListProps, ColumnProps } from "./types";

export const TableData = ({
  list,
  tableColumn,
}: {
  list: AppointmentListProps;
  tableColumn: ColumnProps[];
}) => {
  return (
    <>
      {tableColumn.map((coloum: ColumnProps,index) => {
        return (
          <Fragment key={index}>
            {coloum.renderCell ? (
              <td className={`${coloum.dataStyle}`} key={list[coloum.name as keyof AppointmentListProps]}>
                {coloum.renderCell(list)}
              </td>
            ) : (
              <td
                key={list[coloum.name as keyof AppointmentListProps]}
                className={`${coloum.dataStyle}`}
              >
                {list[coloum.name as keyof AppointmentListProps]}
              </td>
            )}
          </Fragment>
        );
      })}
    </>
  );
};

export const TableBody = ({ tableColumn,listData,isLoading }: { tableColumn: ColumnProps[],listData: AppointmentListProps[],isLoading:boolean }) => {
  const tableData = listData as AppointmentListProps[];
  return (
    <tbody>
      {isLoading ? <>...Loading</> :
      tableData.map((list, index) => {
        return (
          <tr key={index} className="border-b bg-white  ">
            <TableData list={list} tableColumn={tableColumn} />
          </tr>
        );
      })}
    </tbody>
  );
};
