import React, { useMemo } from 'react'
import { useTable } from 'react-table'

const Contracts = props => {

  const data = useMemo(
    () => [
      {
        col1: 'Ronda',
        col2: '1'
      },
      {
        col1: 'Conor',
        col2: '2'
      },
      {
        col1: 'Tony',
        col2: '3'
      }
    ],
    []
  )

  const columns = useMemo(
    () => [
      {
        Header: 'Contracts details',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'edit',
        accessor: 'col2'
      }
    ]
  )
  
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
    <table {...getTableProps()} style={{ width: '100%' }}>
    <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th
              {...column.getHeaderProps()}
            >
              {column.render('Header')}
            </th>
          ))}
        </tr>
      ))}
    </thead>
    <tbody {...getTableBodyProps()}>
      {rows.map(row => {
        prepareRow(row)
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map(cell => {
              return (
                <td
                  {...cell.getCellProps()}
                  style={{
                    padding: '10px',
                    border: 'solid 1px #eee',
                  }}
                >
                  {cell.render('Cell')}
                </td>
              )
            })}
          </tr>
        )
      })}
    </tbody>
  </table>
  )
}

export default Contracts