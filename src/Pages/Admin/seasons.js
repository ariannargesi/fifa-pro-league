import React, { useMemo } from "react";

import { useTable } from "react-table";

import { Row, Col, Accordion, Card, Button, Form } from 'react-bootstrap'

import SideMenuWrapper from '../../components/SideMenu/SideMenuWrapper'
import SideMenuSubmit from '../../components/SideMenu/SideMenuSubmit'

const AdminSeasons  = (props) => {

   const columns = useMemo(
      () => [
        {
          Header: "ID",
          accessor: "col1",
        },
        {
          Header: "Season Name",
          accessor: "col2",
        },
      ],
      []
    );
  
    const data = useMemo(
      () => [
        {
          col1: "1",
          col2: "Season 1",
        },
      ],
      []
    );

   const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({ columns, data });

   return (
      <>
      <h2>Seasons</h2>
      <Row>
      <Col lg={4}>
         <SideMenuWrapper>
         <ul>
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Season Search
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
              <Form>
                  <Form.Group>
                     <Form.Label>Season Name</Form.Label>
                     <Form.Control type="text" placeholder="Season Name" />
                  </Form.Group>               
                  <Button variant="primary" type="submit">
                     Search
                  </Button>
               </Form>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <SideMenuSubmit></SideMenuSubmit>
        </Accordion>
      </ul>
         </SideMenuWrapper>
      </Col>
      <Col lg={8}>
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
      </>
   )
}

export default AdminSeasons 
