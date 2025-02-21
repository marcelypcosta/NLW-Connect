# NLW CONNECT - Controle de Inscrições

Este é um projeto desenvolvido durante o evento **NLW CONNECT** da Rocketseat, na trilha de React ministrada por **Diego Fernandes**. A aplicação tem como objetivo gerenciar inscrições, permitindo que os usuários compartilhem um link de convite e acompanhem o engajamento por meio de um ranking.

## 📝 Descrição do Projeto

A aplicação permite:

- Gerar um link de convite para inscrição.
- Monitorar quantas pessoas acessaram o link.
- Acompanhar quantas inscrições foram realizadas pelo link.
- Exibir um ranking com os participantes que mais trouxeram novas inscrições, destacando o 1º, 2º e 3º colocados.

## 🛠️ Tecnologias e Ferramentas Utilizadas

O projeto foi desenvolvido com as seguintes tecnologias e ferramentas:

### 📚 Frontend

- [Next.js](https://nextjs.org/) (React + Server Side Rendering)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/) (validação de formulários)
- [Biome](https://biomejs.dev/) (formatação e linting)
- [Lucide](https://lucide.dev/) (icones)

### 🐛 Backend

- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)

## 💡 Como Rodar o Projeto na Sua Máquina

### 📓 Requisitos

Antes de iniciar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)

### ✅ Passo a Passo

1. **Clone o repositório:**

   ```sh
   git clone https://github.com/seu-usuario/nlw-connect.git
   cd nlw-connect
   ```

2. **Entre na pasta do Backend:**

   ```sh
   cd server
   ```

3. **Instale as dependências:**

   ```sh
   npm install
   # ou
   yarn install
   ```

4. **Inicie o Backend com Docker:**

   ```sh
   docker-compose up -d
   ```

5. **Inicie o servidor do Backend:**

   ```sh
   npm run dev
   ```

6. **Volte para a pasta raiz e entre na pasta do Frontend:**

   ```sh
   cd ..
   cd web
   ```

7. **Instale as dependências:**

   ```sh
   npm install
   # ou
   yarn install
   ```

8. **Inicie o servidor do Frontend:**

   ```sh
   npm run dev
   ```

9. **Acesse no navegador:**

   ```
   http://localhost:3000
   ```

## 🎨 Layout

O design da aplicação segue as diretrizes da Rocketseat e pode ser visualizado no Figma:

🔗 [Figma - NLW CONNECT](https://www.figma.com/community/file/1471119935944492720/nlw-connect-devstage)

## 🚀 Deploy

🔗 Em breve
