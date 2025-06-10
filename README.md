# 💸 Finance Application

Aplicação backend para controle financeiro, construída com Node.js, TypeScript e Prisma.

## 🧰 Tecnologias e ferramentas

- Node.js
- TypeScript
- Express
- Prisma ORM
- PostgreSQL
- Dotenv
- TS-Node-Dev

## 🚀 Funcionalidades

- Cadastro de usuários
- Cadastro e listagem de transações financeiras
- Validação de dados
- Integração com banco de dados relacional (PostgreSQL)
- Uso de migrations com Prisma

## 🗂️ Estrutura do projeto
src/
├── controllers
├── routes
├── services
├── prisma
├── middlewares
├── utils
└── index.ts

## 🛠️ Como rodar o projeto

1. Clone o repositório  
   `git clone https://github.com/Flareis/finance-application.git`

2. Instale as dependências  
   `npm install`

3. Configure o arquivo `.env` com os dados do seu banco PostgreSQL

4. Rode as migrations  
   `npx prisma migrate dev`

5. Inicie o servidor  
   `npm run dev`

## 📌 Observações

Este projeto foi desenvolvido com foco no backend. A aplicação pode ser facilmente integrada a um frontend via API REST.  
Aberta a melhorias e contribuições!

---

## 👩‍💻 Desenvolvido por

Flávia dos Reis – [linkedin.com/in/flaviadosreis](https://linkedin.com/in/flaviadosreis)
