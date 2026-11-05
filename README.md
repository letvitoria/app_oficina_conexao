# Oficina Conexão

Aplicação inicial construída com React, Vite e Supabase.

## Tecnologias

- React 19.3.1
- Vite 8.3.5
- @supabase/supabase-js 2.119.0

As versões das dependências diretas estão fixadas no package.json.

## Requisitos

- Node.js 20.19+ ou 22.12+
- npm

## Executar localmente

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abra o endereço indicado pelo Vite no terminal.

## Supabase

Preencha as variáveis no arquivo .env.local:

```env
VITE_SUPABASE_URL=https://SEU-PROJETO.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=sua-chave-publishable
```

Use somente a chave publishable (ou a chave anon legada, se seu projeto ainda utiliza esse formato). Nunca coloque service_role ou secret keys em variáveis VITE_ porque elas são expostas ao navegador.

A aplicação detecta se as duas variáveis existem e prepara o cliente em src/lib/supabase.js. Nenhuma tabela ou política de acesso foi criada nesta etapa.

## Scripts

- npm run dev: servidor de desenvolvimento
- npm run build: build de produção
- npm run preview: pré-visualização do build

## Deploy na Vercel

Importe o repositório letvitoria/app_oficina_conexao na Vercel. O framework deve ser detectado como Vite, com:

- Build command: npm run build
- Output directory: dist

Cadastre na Vercel as mesmas variáveis VITE_SUPABASE_URL e VITE_SUPABASE_PUBLISHABLE_KEY nos ambientes necessários.
