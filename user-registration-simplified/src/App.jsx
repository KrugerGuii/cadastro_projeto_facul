import { useState } from 'react';
import { Box, Button, Container, Typography, CssBaseline, ThemeProvider, createTheme, Paper } from '@mui/material';
import TabPanel from './components/layout/TabPanel';
import UserForm from './components/user/UserForm';
import UserList from './components/user/UserList';
import { UserProvider } from './context/UserContext';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#424242',
    },
    background: {
      default: '#f5f5f5',
    }
  },
  typography: {
    fontFamily: [
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            borderRadius: 8,
          },
        },
      },
    },
  },
});

function App() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (newValue) => {
    setTabValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserProvider>
        <Container 
          maxWidth="md" 
          sx={{ 
            py: 4, 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            minHeight: '100vh'
          }}
        >
          <Paper 
            elevation={3} 
            sx={{ 
              overflow: 'hidden',
              width: '100%',
              maxWidth: '800px',
              borderRadius: 3
            }}
          >
            {/* Barra azul superior */}
            <Box sx={{ height: 8, bgcolor: 'primary.main', borderTopLeftRadius: 12, borderTopRightRadius: 12 }} />
            
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
              <TabPanel value={tabValue} index={0}>
                <UserForm />
              </TabPanel>
              
              <TabPanel value={tabValue} index={1}>
                <UserList />
              </TabPanel>
            </Box>
          </Paper>
        </Container>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
