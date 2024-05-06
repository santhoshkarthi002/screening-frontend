import { Fragment } from "react/jsx-runtime";
import { ColumnProps } from "./types";

export const TableHeader = ({
  tableColumn,
}: {
  tableColumn: ColumnProps[];
}) => {
  return (
    <thead className="text-[14px] text-[#a7b1bf] uppercase bg-[#fafafb] h-14 border-b">
      <tr>
        {tableColumn.map((list) => {
          return (
            <Fragment key={list.name}>
              {list.renderHeader ? (
                list.renderHeader(list.id,list.label,list.name)
              ) : (
                <th
                
                  scope="col"
                  className={`${list.headerStyle} px-6 py-3`}
                >
                  {list.label}
                </th>
              )}
            </Fragment>
          );
        })}
      </tr>
    </thead>
  );
};
