import React, { useMemo } from "react";
import { useTable } from "react-table";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../../layouts/Layout";
import Title from "../../components/Title";
const League = (props) => {

  const columns = useMemo(
    () => [
      {
        Header: "P",
        accessor: "col1",
      },
      {
        Header: "Team",
        accessor: "col2",
      },
      {
        Header: "W",
        accessor: "col3",
      },
      {
        Header: "D",
        accessor: "col4",
      },
      {
        Header: "L",
        accessor: "col5",
      },
      {
        Header: "PTS",
        accessor: "col6",
      },
    ],
    []
  );

  const data = useMemo(
    () => [
      {
        col1: "1",
        col2: "Bethlehem",
        col3: "22",
        col4: "4",
        col5: "2",
        col6: "140",
      },
      {
        col1: "2",
        col2: "Chirston Battery",
        col3: "19",
        col4: "3",
        col5: "5",
        col6: "138",
      },
      {
        col1: "3",
        col2: "Charlotte",
        col3: "18",
        col4: "3",
        col5: "2",
        col6: "130",
      },
      {
        col1: "4",
        col2: "FC Cincinnati",
        col3: "17",
        col4: "1",
        col5: "2",
        col6: "126",
      },
      {
        col1: "5",
        col2: "Indy Eleven",
        col3: "16",
        col4: "3",
        col5: "2",
        col6: "110",
      },
      {
        col1: "6",
        col2: "Louisville City FC",
        col3: "15",
        col4: "4",
        col5: "6",
        col6: "108",
      },
      {
        col1: "7",
        col2: "Nashvill SC",
        col3: "14",
        col4: "2",
        col5: "8",
        col6: "106",
      },
      {
        col1: "7",
        col2: "Louisville City FC",
        col3: "15",
        col4: "2",
        col5: "6",
        col6: "108",
      },
      {
        col1: "8",
        col2: "NYK Red Bulls",
        col3: "13",
        col4: "1",
        col5: "9",
        col6: "100",
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <Layout>
      <Container>
        <Title>League</Title>
        <div class="console">
          <div class="console-box active"><a href='/'><div class="console-box-img"><img src={'/ps4.png'}/></div></a></div>
          <div class="console-box"><a href='/'><div class="console-box-img"><img src={'/xbox.png'}/></div></a></div>
        </div>
        <hr></hr>
        <Row>
         <Col md={9}>
        <table className='widgets-league-table' {...getTableProps()} style={{ background: 'red', width: '100%', borderRadius: '10px', borderCollapse: 'collapse', textAlign: 'center'}}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    style={{
                      background: "#e81f3e",
                      color: "white",
                      borderRadius: '10px',
                      padding: '0.5rem',
                      fontWeight: "bold",
                    }}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        style={{

                        }}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        </Col>
        <Col md={2}>
        <table className='widgets-league-table' {...getTableProps()} style={{ background: 'red', width: '100%', borderRadius: '10px', borderCollapse: 'collapse', textAlign: 'center'}}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    style={{
                      background: "#e81f3e",
                      color: "white",
                      borderRadius: '10px',
                      padding: '0.5rem',
                      fontWeight: "bold",
                    }}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        style={{

                        }}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        </Col>
  </Row>
      </Container>
    </Layout>
  );
};

export default League;
