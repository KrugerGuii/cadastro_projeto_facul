import { useState } from 'react';
import { Box, Button } from '@mui/material';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';

const Page = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      {/* Sistema de abas */}
      <Box sx={{ display: 'flex', mb: 2 }}>
        <Button
          variant={tabValue === 0 ? "contained" : "text"}
          color="secondary"
          onClick={() => handleTabChange(0)}
          sx={{ 
            borderRadius: 0,
            py: 1,
            px: 3,
            color: 'white',
            bgcolor: tabValue === 0 ? 'secondary.main' : 'transparent',
            '&:hover': {
              bgcolor: tabValue === 0 ? 'secondary.dark' : 'rgba(66, 66, 66, 0.1)',
            }
          }}
        >
          Cadastrar Usuário
        </Button>
        <Button
          variant={tabValue === 1 ? "contained" : "text"}
          color="secondary"
          onClick={() => handleTabChange(1)}
          sx={{ 
            borderRadius: 0,
            py: 1,
            px: 3,
            color: 'white',
            bgcolor: tabValue === 1 ? 'secondary.main' : 'transparent',
            '&:hover': {
              bgcolor: tabValue === 1 ? 'secondary.dark' : 'rgba(66, 66, 66, 0.1)',
            }
          }}
        >
          Usuários Cadastrados
        </Button>
      </Box>
      
      <Box sx={{ px: 3, pb: 3 }}>
        {tabValue === 0 && <UserForm />}
        {tabValue === 1 && <UserList />}
      </Box>
    </>
  );
};

export default Page;
