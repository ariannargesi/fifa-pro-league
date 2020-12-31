import React, { useMemo } from "react";

import { useTable } from "react-table";

import { Row, Col, Accordion, Card, Button, Form } from 'react-bootstrap'

import SideMenuWrapper from '../../components/SideMenu/SideMenuWrapper'
import SideMenuSubmit from '../../components/SideMenu/SideMenuSubmit'

const AdminPlayers = (props) => {

   const columns = useMemo(
      () => [
        {
          Header: "ID",
          accessor: "col1",
        },
        {
          Header: "Username",
          accessor: "col2",
        },
        {
          Header: "PSN",
          accessor: "col3",
        },
        {
          Header: "Email",
          accessor: "col4",
        },
      ],
      []
    );
  
    const data = useMemo(
      () => [
        {
          col1: "1",
          col2: "vanDevilBeek",
          col3: "vanDevilBeek",
          col4: "admin@fifaproclubs.net",
        },
        {
          col1: "2",
          col2: "joojey",
          col3: "Joolah",
          col4: "admin@fifaproclubs.net",
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
      <h2>Players</h2>
      <Row>
      <Col lg={4}>
         <SideMenuWrapper>
         <ul>
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Player Search
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
              <Form>
                  <Form.Group>
                     <Form.Label>Username</Form.Label>
                     <Form.Control type="text" placeholder="Username" />
                  </Form.Group>
                  <Form.Group>
                     <Form.Label>PSN</Form.Label>
                     <Form.Control type="text" placeholder="PSN" />
                  </Form.Group>
                  <Form.Group>
                     <Form.Label>Email</Form.Label>
                     <Form.Control type="email" placeholder="Email" />
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

export default AdminPlayers
