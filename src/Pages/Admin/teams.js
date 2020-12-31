import React, { useState, useMemo } from "react";

import { useTable } from "react-table";

import { Row, Col, Accordion, Card, Button, Form } from 'react-bootstrap'

import SideMenuWrapper from '../../components/SideMenu/SideMenuWrapper'
import SideMenuSubmit from '../../components/SideMenu/SideMenuSubmit'

const AdminTeams = (props) => {
    const columns = useMemo(
        () => [
          {
            Header: "ID",
            accessor: "col1",
          },
          {
            Header: "Club",
            accessor: "col2",
          },
          {
            Header: "Season",
            accessor: "col3",
          },
          {
            Header: "League",
            accessor: "col4",
          },
        ],
        []
      );
    
      const data = useMemo(
        () => [
          {
            col1: "1",
            col2: "FPC Manchester United",
            col3: "Season 1",
            col4: "Super League",
          },
          {
            col1: "2",
            col2: "FPC Manchester City",
            col3: "Season 1",
            col4: "Super League",
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
        <h2>Teams</h2>
        <Row>
        <Col lg={4}>
           <SideMenuWrapper>
           <ul>
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Team Search
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                <Form>
                    <Form.Group>
                       <Form.Label>Club</Form.Label>
                       <Form.Control type="text" placeholder="Club Name" />
                    </Form.Group>    
                    <Form.Group>
                       <Form.Label>Season</Form.Label>
                       <Form.Control type="text" placeholder="Season Name" />
                    </Form.Group>    
                    <Form.Group>
                       <Form.Label>League</Form.Label>
                       <Form.Control type="text" placeholder="League Name" />
                    </Form.Group>          
                    <Button variant="primary" type="submit">
                       Search
                    </Button>
                 </Form>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Team Create
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                <Form>
                    <Form.Group>
                       <Form.Label>Team Name</Form.Label>
                       <Form.Control type="text" placeholder="Team Name" />
                    </Form.Group>          
                    <Button variant="primary" type="submit">
                       Add Team
                    </Button>
                 </Form>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Team Delete
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                <Form>
                    <Form.Group>
                       <Form.Label>Team Name</Form.Label>
                       <Form.Control type="text" placeholder="Team Name" />
                    </Form.Group>          
                    <Button variant="primary">
                       Delete Team
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

export default AdminTeams
