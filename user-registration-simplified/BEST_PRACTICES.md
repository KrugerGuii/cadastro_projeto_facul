# Boas Práticas e Padrões de Código

## Estrutura Simplificada
A estrutura do projeto foi simplificada conforme solicitado:

```
/app
  - layout.tsx
  - page.tsx
/components
  - UserForm.tsx
  - UserList.tsx
/utils
  - localStorage.ts
package.json
```

## Padrões de Código
- **Componentes**: Cada componente tem uma única responsabilidade
- **Hooks**: Uso de hooks do React (useState, useContext, useEffect) para gerenciamento de estado
- **Context API**: Implementação de contexto para compartilhamento de estado global
- **Tipagem**: Uso de extensão .tsx para suporte a TypeScript
- **Estilização**: Uso consistente do sistema de estilos do Material-UI

## Convenções de Nomenclatura
- **PascalCase**: Para componentes React (UserForm, UserList)
- **camelCase**: Para funções, variáveis e hooks
- **Nomes descritivos**: Todos os identificadores têm nomes que descrevem claramente sua função

## Organização de Código
- **Separação de Responsabilidades**: Interface (app), componentes e utilitários separados
- **Modularidade**: Cada arquivo exporta uma única funcionalidade principal
- **Importações Organizadas**: Bibliotecas externas primeiro, seguidas por componentes e utilitários internos

## Padrões de Commits
Seguindo convenções de commits semânticos:
- **feat**: Para novas funcionalidades
- **fix**: Para correções de bugs
- **refactor**: Para refatorações de código
- **style**: Para mudanças que não afetam o comportamento do código
- **docs**: Para documentação
