import { useContext } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Box, 
  Typography,
  IconButton,
  Paper
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { UserContext } from '../utils/localStorage';

const UserList = () => {
  const { users, removeUser } = useContext(UserContext);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    
    try {
      const options = { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit'
      };
      return new Date(dateString).toLocaleDateString('pt-BR', options);
    } catch (e) {
      return dateString;
    }
  };

  if (users.length === 0) {
    return (
      <Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <FiberManualRecordIcon sx={{ color: 'primary.main', mr: 1, fontSize: 12 }} />
          <Typography variant="subtitle1" component="h2">
            Pessoas Cadastradas
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', py: 4 }}>
          Nenhum usuário cadastrado ainda.
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <FiberManualRecordIcon sx={{ color: 'primary.main', mr: 1, fontSize: 12 }} />
        <Typography variant="subtitle1" component="h2">
          Pessoas Cadastradas
        </Typography>
      </Box>
      
      <TableContainer component={Paper} sx={{ bgcolor: 'white', borderRadius: 2, boxShadow: 'none' }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="tabela de usuários">
          <TableHead>
            <TableRow sx={{ bgcolor: '#f5f5f5' }}>
              <TableCell>Nome</TableCell>
              <TableCell>Data de Nascimento</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Telefone</TableCell>
              <TableCell>Endereço</TableCell>
              <TableCell align="center" width={70}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell>{formatDate(user.birthDate)}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.address}</TableCell>
                <TableCell align="center">
                  <IconButton 
                    aria-label="delete" 
                    size="small"
                    onClick={() => removeUser(user.id)}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserList;
