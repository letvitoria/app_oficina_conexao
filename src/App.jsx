import { useState } from 'react'
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
import Footer from './components/Footer.jsx'
import { isSupabaseConfigured } from './lib/supabase.js'

const pageContent = {
  inicio: {
    eyebrow: 'VISÃO GERAL',
    title: 'Bem-vindo à Oficina Conexão',
    description: 'Um espaço simples para começar. Digite seu nome para testar a interação.',
  },
  cadastro: {
    eyebrow: 'CADASTRO',
    title: 'Vamos nos conhecer?',
    description: 'Esta tela é uma demonstração de navegação. O formulário ainda não grava dados.',
  },
  sobre: {
    eyebrow: 'SOBRE O PROJETO',
    title: 'Conexões começam aqui.',
    description: 'Esta aplicação está sendo preparada com React, Vite e Supabase.',
  },
}

function App() {
  const [activePage, setActivePage] = useState('inicio')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const currentPage = pageContent[activePage]

  function handleNavigate(page) {
    setActivePage(page)
    setMessage('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    const cleanName = name.trim()

    if (!cleanName) {
      setMessage('Digite seu nome para continuar.')
      return
    }

    setMessage('Olá, ' + cleanName + '! O formulário de demonstração está funcionando.')
  }

  return (
    <div className="app-shell">
      <Header />
      <div className="app-body">
        <Sidebar activePage={activePage} onNavigate={handleNavigate} />
        <main className="main-content">
          <div className="content-wrap">
            <div className="breadcrumb">
              <span>Oficina Conexão</span>
              <span className="breadcrumb-separator">/</span>
              <strong>{currentPage.eyebrow}</strong>
            </div>

            <section className="welcome-section">
              <div className="section-copy">
                <span className="eyebrow">{currentPage.eyebrow}</span>
                <h1>{currentPage.title}</h1>
                <p>{currentPage.description}</p>
              </div>
              <div className="connection-card">
                <div className="card-topline">
                  <span className={'status-dot ' + (isSupabaseConfigured ? 'connected' : '')} />
                  <span>{isSupabaseConfigured ? 'Supabase configurado' : 'Supabase aguardando configuração'}</span>
                </div>
                <div className="connection-symbol" aria-hidden="true">↗</div>
                <strong>Seu espaço de conexão</strong>
                <small>{isSupabaseConfigured ? 'As variáveis de ambiente foram encontradas.' : 'A conexão será ativada quando as credenciais forem adicionadas.'}</small>
              </div>
            </section>

            <section className="form-card" aria-labelledby="form-title">
              <div className="form-card-heading">
                <div className="form-icon" aria-hidden="true">✳</div>
                <div>
                  <span className="eyebrow">PRIMEIRO PASSO</span>
                  <h2 id="form-title">Como podemos chamar você?</h2>
                  <p>Preencha seu nome no campo abaixo para testar o formulário.</p>
                </div>
              </div>

              <form className="name-form" onSubmit={handleSubmit}>
                <label htmlFor="person-name">Seu nome</label>
                <div className="input-row">
                  <input
                    id="person-name"
                    name="name"
                    type="text"
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    autoComplete="name"
                  />
                  <button type="submit">Continuar <span aria-hidden="true">→</span></button>
                </div>
                <div className={'form-feedback ' + (message ? 'visible' : '')} role="status" aria-live="polite">
                  {message || ' '}
                </div>
              </form>
            </section>

            <div className="bottom-hint">
              <span aria-hidden="true">⌁</span>
              <p>Este é um ambiente inicial. Os dados ainda não são enviados nem armazenados.</p>
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  )
}

export default App
