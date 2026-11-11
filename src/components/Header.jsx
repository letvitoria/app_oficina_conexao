export default function Header() {
  return (
    <header className="topbar">
      <a className="brand" href="#inicio" aria-label="Oficina Conexão - início">
        <span className="brand-mark" aria-hidden="true">oc</span>
        <span className="brand-copy">
          <strong>oficina conexão</strong>
          <small>ESPAÇO DE GESTÃO</small>
        </span>
      </a>
      <div className="topbar-right">
        <span className="workspace-label">Ambiente de demonstração</span>
        <span className="avatar" aria-label="Perfil de demonstração">OC</span>
      </div>
    </header>
  )
}
