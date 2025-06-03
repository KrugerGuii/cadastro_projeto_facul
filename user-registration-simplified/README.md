# Aplicação de Cadastro de Usuários

Este projeto é uma aplicação web simples de cadastro de usuários desenvolvida com React.js, Material-UI e Vite.js.

## Funcionalidades

- Cadastro de novos usuários com validação de formulário
- Listagem de usuários cadastrados
- Persistência de dados no Local Storage
- Interface moderna com navegação por abas

## Tecnologias Utilizadas

- React.js - Biblioteca JavaScript para construção de interfaces
- Material-UI - Framework de componentes React para um design moderno
- Vite.js - Ferramenta de build otimizada para desenvolvimento
- Local Storage - API do navegador para persistência de dados

## Estrutura do Projeto

```
user-registration-app/
├── public/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   └── TabPanel.jsx
│   │   └── user/
│   │       ├── UserForm.jsx
│   │       └── UserList.jsx
│   ├── context/
│   │   └── UserContext.jsx
│   ├── hooks/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── COMMIT_CONVENTION.md
├── index.html
├── package.json
└── README.md
```

## Arquitetura

O projeto segue uma arquitetura baseada em componentes reutilizáveis, com separação clara de responsabilidades:

- **Context API**: Gerenciamento de estado global e persistência no Local Storage
- **Componentes**: Divididos por funcionalidade e responsabilidade
- **Layout**: Componentes estruturais da interface
- **User**: Componentes específicos para manipulação de dados de usuários

## Instalação e Execução

```bash
# Clonar o repositório
git clone [url-do-repositorio]

# Entrar no diretório do projeto
cd user-registration-app

# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Gerar build de produção
npm run build
```

## Boas Práticas

Este projeto segue as seguintes boas práticas de desenvolvimento:

- Componentes reutilizáveis e modulares
- Separação de responsabilidades
- Validação de formulários
- Persistência de dados
- Design responsivo
- Padrões de commits convencionais (ver COMMIT_CONVENTION.md)

## Implantação

A aplicação está disponível publicamente em:
[URL da aplicação implantada]

## Licença

MIT
