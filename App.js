import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const personas = [
  { nombre: 'Juan', apellido: 'Pérez', edad: 15 },
  { nombre: 'Ana', apellido: 'Gómez', edad: 22 },
  { nombre: 'Luis', apellido: 'Martínez', edad: 17 },
  { nombre: 'María', apellido: 'Rodríguez', edad: 30 },
  { nombre: 'Sofía', apellido: 'López', edad: 16 }
];

const App = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Apellido</TableCell>
            <TableCell>Edad</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {personas.map((persona, index) => (
            <TableRow key={index}>
              <TableCell>{persona.nombre}</TableCell>
              <TableCell>{persona.apellido}</TableCell>
              <TableCell>{persona.edad}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default App;
