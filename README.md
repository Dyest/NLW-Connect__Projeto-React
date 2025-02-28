
# **NLW-Connect 2025**

Projeto desenvolvido durante o evento NLW-Connect 2025 da Rocketseat, com foco na criação de um sistema de indicação utilizando tecnologias modernas como React e Next.js.


## 🚀 **Tecnologias Utilizadas**

- React com Next.js
- TypeScript
- Vite
- Tailwind CSS
- PostCSS
- React Hook Form + Zod
- Orval para automação de requisições HTTP
- Node.js
- PostgreSQL com Docker
- Redis
- Biome para formatação e linting


## ⚙️ **Funcionalidades Implementadas**

#### 🔧 **Configuração Inicial**
- Geração inicial com Next.js
- Configuração do projeto com Vite + TypeScript
- Integração do Tailwind CSS e Biome
- Organização da estrutura do projeto
- Criação dos primeiros componentes seguindo o Style Guide
- Desenvolvimento da interface da página principal

#### 🎨 **Componentização e Formulários**
- Implementação do sistema de componentização
- Criação da página de convite e seus componentes
- Implementação do formulário de registro com React Hook Form
- Validações utilizando Zod para melhor experiência do usuário

#### 🔗 **Integração com Backend**
- Geração de funções e tipagens do cliente HTTP com Orval
- Criação de rota dinâmica no Next.js para obter o ID do inscrito via URL
- Implementação do parâmetro de busca "referrer" para sistema de indicação
- Uso do cliente HTTP para:  
  ◦ Buscar e registrar dados no banco  
  ◦ Exibir ranking de inscritos  
  ◦ Gerar links de indicação  

## 💻 **Exeçução**

### **Back End**
Para roda a aplicação é necessario o backend desenvolvido em outro curso. Portanto sera necessario algumas configuraçoes extras 

**Repositorio do back-End:**
  - https://github.com/rocketseat-education/nlw-connect-node
    
**Passo a Passo**

- Instale o Docker em seu computador

- Clone este repositório

```javascript
git clone https://github.com/rocketseat-education/nlw-connect-node.git
```
- Instale as dependências
```javascript
npm install
```

- Instale a virtuaçização Windos Linux do Docker
```javascript
wsl --install
```

- Faça a criação das imagens do Docker

```javascript
npm run db:migrate
```

- Suba o Docker

```javascript
docker compose up -d  
```

- Execute a aplicação
```javascript
npm run dev
```

Apos rodar o programa a mensagem **HTTP server running!** deve aparecer em seu terminal se tudo ocorrer corretamente.



### **Front End**
Para esta etapa sera necessario o seguinte: 

- Clone este repositório

```javascript
git clone https://github.com/Dyest/NLW-Connect__Projeto-React.git
```
- Instale as dependências
```javascript
npm install
```

- Execute a aplicação
```javascript
npm run dev
```

Apos rodar o programa a mensagem **GET / 200** deve aparecer em seu terminal se tudo ocorrer corretamente. Apois isto o projeto será iniciado em **http://localhost:3000.**
