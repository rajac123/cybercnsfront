import React from "react";
import DataTable from "react-data-table-component";
import styled from "styled-components";
import { Button } from "reactstrap";
import './table.css'
const TextField = styled.input`
  height: 45px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  color: #111;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;

  &:hover {
    cursor: pointer;
    outline: none;
    border: 1px solid #ddd !important;
  }
  &:active,
  &:focus {
    outline: none;
    border: 1px solid #ddd !important;
  }
`;

const ClearButton = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 45px;
  width: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <TextField
      type="text"
      placeholder="Search..."
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />
    <ClearButton type="button" onClick={onClear}>
      X
    </ClearButton>
  </>
);

const Table = (props) => {
  const {
    columns,
    data,
    count,
    countPerPage,
    customStyles,
    handlePageChange,
  } = props;

  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(
    false
  );
  const filteredItems =
    data &&
    data.filter((item) =>
      Object.keys(item).some(
        (key) =>
        (typeof item[key] === "string" &&
          item['firstName'].toLowerCase().startsWith(filterText.toLowerCase())
        ) ||
        (typeof item[key] === "number" &&
          item[key]
          .toString()
          .toLowerCase()
          .includes(filterText.toLowerCase())
        )
      )
    );

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <div className="data_table">
      <DataTable
        columns={columns}
        data={filteredItems}
        pagination
        customStyles={customStyles}
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        persistTableHead
        paginationComponentOptions={{
          noRowsPerPage: true,
        }}
        noDataComponent={
          <div style={{ color: "#111", marginTop: 20 }}>
            No data available in table
          </div>
        }
      />
    </div>
  );
};

export default Table;
