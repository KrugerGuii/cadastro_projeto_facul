import { useState } from 'react';
import { Box, Button, Container, Typography, CssBaseline, ThemeProvider, createTheme, Paper } from '@mui/material';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';
import { UserProvider } from '../utils/localStorage';

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

const Layout = ({ children }) => {
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
            
            {children}
          </Paper>
        </Container>
      </UserProvider>
    </ThemeProvider>
  );
};

export default Layout;
