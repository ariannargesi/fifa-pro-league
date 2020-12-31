import React, { useState, useMemo } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { useTable } from "react-table";
import Layout from "../../layouts/Layout";
import Title from "../../components/Title";
import Input from "../../components/Input";
const Play = (props) => {
  const [query, setQuery] = useState("");

  const data = useMemo(
    () => [
      { col1: "Arian Nargesi", col2: "#f54t", col3: "Gold" },
      { col1: "Arian Nargesi", col2: "#f54t", col3: "Gold" },
      { col1: "Arian Nargesi", col2: "#f54t", col3: "Gold" },
      { col1: "Arian Nargesi", col2: "#f54t", col3: "Gold" },
      { col1: "Arian Nargesi", col2: "#f54t", col3: "Gold" },
      { col1: "Arian Nargesi", col2: "#f54t", col3: "Gold" },
      { col1: "Arian Nargesi", col2: "#f54t", col3: "Gold" },
    ],
    []
  );
  const columns = useMemo(() => [
    { Header: "Player name", accessor: "col1" },
    { Header: "Player Id", accessor: "col2" },
    { Header: "Raking", accessor: "col3" },
  ]);

  const tableInstance = useTable({ columns, data });
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <Layout>
      <Container>
        <div class="fpc-title">Play now</div>
        <div style={{ width: "100%" }}>
          <Form.Label>Search for players</Form.Label>
          <Input placeholder="Player id" style={{ color: "black" }} />
        </div>
        <table {...getTableProps()} style={{width: '100%', padding: '0.5rem'}} >
          <thead style={{background: 'mediumpurple', color: 'white', lineHeight: '40px'}}>
            {
              // Loop over the header rows
              headerGroups.map((headerGroup) => (
                // Apply the header row props
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {
                    // Loop over the headers in each row
                    headerGroup.headers.map((column) => (
                      // Apply the header cell props
                      <th {...column.getHeaderProps()}>
                        {
                          // Render the header
                          column.render("Header")
                        }
                      </th>
                    ))
                  }
                </tr>
              ))
            }
          </thead>
          {/* Apply the table body props */}
          <tbody {...getTableBodyProps()}>
            {
              // Loop over the table rows
              rows.map((row) => {
                // Prepare the row for display
                prepareRow(row);
                return (
                  // Apply the row props
                  <tr {...row.getRowProps()}>
                    {
                      // Loop over the rows cells
                      row.cells.map((cell) => {
                        // Apply the cell props
                        return (
                          <td {...cell.getCellProps()}>
                            {
                              // Render the cell contents
                              cell.render("Cell")
                            }
                          </td>
                        );
                      })
                    }
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </Container>
    </Layout>
  );
};

export default Play;
