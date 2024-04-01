import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect } from 'react';
import { useState } from 'react';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }

// function createData(id, produto, preco, carbs, protein) {
//   return { id, produto, preco, carbs, protein };
// }

// const rows = [
//   createData(1 , 'Furadeira', 150.50),
//   createData(2, 'Ventilador', 50.00),
//   createData(3, 'Geladeira', 2500.00),
//   createData(4, 'Pizza', 39.50),
//   createData(5, 'Toalha de banho', 30.00),
// ];



export default function TableProdutos() {

  const [rows, setRows] = useState([]);

  useEffect(()=> {
    fetch(`http://localhost:3000/products`)
    .then(response => response.json() )
    .then(data => {
      setRows(data);
    } )    
  },[]);

  const deleteProduct = async (id) => {
    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE"
    })
    window.location.reload()
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell width="3%">Id</StyledTableCell>
            <StyledTableCell align="center">Produto</StyledTableCell>
            <StyledTableCell align="center">Preço</StyledTableCell>
            <StyledTableCell align="center" colSpan={2}>Ações</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="center">{row.name}</StyledTableCell>
              <StyledTableCell align="center">{ccyFormat(row.price)}</StyledTableCell>
              <StyledTableCell align="center">
                <Button variant="contained" color="warning" startIcon={<EditIcon />}>Editar</Button>
              </StyledTableCell>
              <StyledTableCell align="center">
              <Button variant="contained" color="error" startIcon={<DeleteIcon />} onClick={() => {deleteProduct(row.id)}}>Excluir</Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
