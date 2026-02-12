# 🚀 Portfolio Pessoal

Portfolio profissional desenvolvido com React, TypeScript e Vite, apresentando projetos, habilidades e experiências de forma moderna e responsiva.

## ✨ Características

- 🎨 Interface moderna e minimalista
- 🌓 Suporte a tema claro/escuro
- 📱 Design totalmente responsivo
- ⚡ Performance otimizada com Vite
- 🎯 Tipagem forte com TypeScript
- 🎨 Estilização com Tailwind CSS v4
- 📊 Dados estruturados em JSON
- 🔄 Navegação com React Router

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React** 19.2.0 - Biblioteca para construção de interfaces
- **TypeScript** 5.9.3 - Superset JavaScript com tipagem estática
- **Vite** 7.2.4 - Build tool de nova geração
- **React Router** 7.12.0 - Gerenciamento de rotas

### Estilização
- **Tailwind CSS** 4.1.18 - Framework CSS utility-first
- **@tailwindcss/vite** - Plugin Vite para Tailwind
- **clsx** - Utilitário para classes condicionais
- **@fontsource-variable/inter** - Fonte Inter em formato variável

### Ícones
- **Lucide React** 0.562.0 - Biblioteca de ícones modernos
- **React Icons** 5.5.0 - Coleção popular de ícones

### Qualidade de Código
- **ESLint** 9.39.1 - Linter para JavaScript/TypeScript
- **eslint-plugin-react-hooks** - Regras ESLint para Hooks
- **eslint-plugin-react-refresh** - Regras ESLint para Fast Refresh

## 📁 Estrutura do Projeto

```
portfolio-main/
├── public/
│   └── db/
│       └── seed/
│           ├── certifications/      # Dados de certificações
│           ├── education/           # Dados de formação
│           ├── experiences/         # Dados de experiências
│           ├── projects/            # Dados de projetos
│           ├── skills/              # Dados de habilidades
│           └── stack/               # Dados de stack tecnológica
├── src/
│   ├── components/
│   │   ├── About/                   # Seção sobre
│   │   ├── CertificationsAndEducation/  # Certificações e educação
│   │   ├── Contact/                 # Seção de contato
│   │   ├── Experiences/             # Experiências profissionais
│   │   ├── Footer/                  # Rodapé
│   │   ├── Header/                  # Cabeçalho
│   │   ├── Hero/                    # Seção hero
│   │   ├── InfoCard/                # Card de informações
│   │   ├── LinkSection/             # Seção de links
│   │   ├── Main/                    # Componente principal
│   │   ├── ProjectFooter/           # Rodapé do projeto
│   │   ├── Projects/                # Seção de projetos
│   │   ├── SectionList/             # Lista de seções
│   │   ├── Skills/                  # Seção de habilidades
│   │   └── Span/                    # Componente span customizado
│   ├── models/                      # Modelos TypeScript
│   │   ├── certifications/
│   │   ├── education/
│   │   ├── experiences/
│   │   ├── projects/
│   │   ├── skills/
│   │   └── stack/
│   ├── pages/
│   │   ├── Portfolio.tsx            # Página principal
│   │   └── NotFound.tsx             # Página 404
│   ├── routers/
│   │   └── MainRouter.tsx           # Configuração de rotas
│   ├── styles/
│   │   └── global.css               # Estilos globais
│   ├── App.tsx                      # Componente raiz
│   └── main.tsx                     # Ponto de entrada
├── index.html                       # HTML principal
├── package.json                     # Dependências do projeto
├── tsconfig.json                    # Configuração TypeScript
├── vite.config.ts                   # Configuração Vite
├── eslint.config.js                 # Configuração ESLint
└── vercel.json                      # Configuração Vercel
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 16+ instalado
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd portfolio-main
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4. Acesse no navegador:
```
http://localhost:5173
```

## 📦 Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Compila o projeto para produção
npm run lint     # Executa o linter
npm run preview  # Visualiza o build de produção
```

## 📊 Estrutura de Dados

O portfolio utiliza arquivos JSON para armazenar informações, facilitando a manutenção e atualização:

- **projects.json**: Lista de projetos com nome, descrição, links e tecnologias
- **skills.json**: Habilidades organizadas por categoria (Frontend, Backend, Database, DevOps)
- **experiences.json**: Experiências profissionais
- **education.json**: Formação acadêmica
- **certifications.json**: Certificações e cursos
- **stack.json**: Stack tecnológica atual

## 🎨 Personalização

### Alterando Dados

Para atualizar as informações do portfolio, edite os arquivos JSON em `public/db/seed/`:

```json
// Exemplo: public/db/seed/projects/projects.json
{
  "projects": [
    {
      "name": "Nome do Projeto",
      "description": "Descrição do projeto",
      "repositoryLink": "https://github.com/usuario/projeto",
      "applicationLink": "https://projeto.com",
      "stack": {
        "tecnologies": ["React", "TypeScript", "Tailwind"]
      },
      "observation": null
    }
  ]
}
```

### Customizando Estilos

O projeto utiliza Tailwind CSS. Para personalizar cores, fontes e outros estilos, edite o arquivo `src/styles/global.css` ou adicione classes utilitárias diretamente nos componentes.

## 🌐 Deploy

O projeto está configurado para deploy na Vercel através do arquivo `vercel.json`.

### Deploy na Vercel

1. Faça push do código para o GitHub
2. Importe o projeto na Vercel
3. A build será executada automaticamente

### Outras Plataformas

O projeto pode ser deployado em qualquer plataforma que suporte aplicações React estáticas:
- Netlify
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📝 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## 👤 Autor

Desenvolvido por [William Santana]

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!
