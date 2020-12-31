import React, { useState, useMemo } from "react";

import { useTable } from "react-table";

import { Row, Col, Accordion, Card, Button, Form } from 'react-bootstrap'

import SideMenuWrapper from '../../components/SideMenu/SideMenuWrapper'
import SideMenuSubmit from '../../components/SideMenu/SideMenuSubmit'

const AdminClubs = (props) => {
    const columns = useMemo(
        () => [
          {
            Header: "ID",
            accessor: "col1",
          },
          {
            Header: "Club Name",
            accessor: "col2",
          }
        ],
        []
      );
    
      const data = useMemo(
        () => [
          {
            col1: "1",
            col2: "FPC Manchester United",
          },
          {
            col1: "2",
            col2: "FPC Manchester City",
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
        <h2>Clubs</h2>
        <Row>
        <Col lg={4}>
           <SideMenuWrapper>
           <ul>
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Club Search
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                <Form>
                    <Form.Group>
                       <Form.Label>Club Name</Form.Label>
                       <Form.Control type="text" placeholder="Club Name" />
                    </Form.Group>          
                    <Button variant="primary">
                       Search
                    </Button>
                 </Form>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Club Create
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                <Form>
                    <Form.Group>
                       <Form.Label>Club Name</Form.Label>
                       <Form.Control type="text" placeholder="Club Name" />
                    </Form.Group>          
                    <Button variant="primary">
                       Add Club
                    </Button>
                 </Form>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Club Delete
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                <Form>
                    <Form.Group>
                       <Form.Label>Club Name</Form.Label>
                       <Form.Control type="text" placeholder="Club Name" />
                    </Form.Group>          
                    <Button variant="primary">
                       Delete Club
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

export default AdminClubs
