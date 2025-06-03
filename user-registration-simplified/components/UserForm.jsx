import { useState, useContext } from 'react';
import { Box, Button, Grid, Typography, TextField } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { UserContext } from '../utils/localStorage';

const UserForm = () => {
  const { addUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    email: '',
    phone: '',
    address: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpar erro do campo quando o usuário digitar
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      addUser(formData);
      // Limpar formulário após envio bem-sucedido
      setFormData({
        name: '',
        birthDate: '',
        email: '',
        phone: '',
        address: ''
      });
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <FiberManualRecordIcon sx={{ color: 'primary.main', mr: 1, fontSize: 12 }} />
        <Typography variant="subtitle1" component="h2">
          Cadastro de pessoa
        </Typography>
      </Box>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="caption" component="div" sx={{ mb: 0.5 }}>
            Nome Completo
          </Typography>
          <TextField
            fullWidth
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            variant="outlined"
            size="small"
            sx={{ 
              '& .MuiOutlinedInput-root': { 
                borderRadius: 2,
                bgcolor: '#f9f9f9',
              }
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="caption" component="div" sx={{ mb: 0.5 }}>
            Data de Nascimento
          </Typography>
          <TextField
            fullWidth
            name="birthDate"
            type="date"
            value={formData.birthDate}
            onChange={handleChange}
            variant="outlined"
            size="small"
            sx={{ 
              '& .MuiOutlinedInput-root': { 
                borderRadius: 2,
                bgcolor: '#f9f9f9',
              }
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="caption" component="div" sx={{ mb: 0.5 }}>
            Email
          </Typography>
          <TextField
            fullWidth
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            variant="outlined"
            size="small"
            sx={{ 
              '& .MuiOutlinedInput-root': { 
                borderRadius: 2,
                bgcolor: '#f9f9f9',
              }
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="caption" component="div" sx={{ mb: 0.5 }}>
            Telefone
          </Typography>
          <TextField
            fullWidth
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={!!errors.phone}
            helperText={errors.phone}
            variant="outlined"
            size="small"
            sx={{ 
              '& .MuiOutlinedInput-root': { 
                borderRadius: 2,
                bgcolor: '#f9f9f9',
              }
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="caption" component="div" sx={{ mb: 0.5 }}>
            Endereço
          </Typography>
          <TextField
            fullWidth
            name="address"
            value={formData.address}
            onChange={handleChange}
            variant="outlined"
            size="small"
            sx={{ 
              '& .MuiOutlinedInput-root': { 
                borderRadius: 2,
                bgcolor: '#f9f9f9',
              }
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            fullWidth
            sx={{ mt: 3, py: 1.2, borderRadius: 2 }}
          >
            Inserir Usuário
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserForm;
