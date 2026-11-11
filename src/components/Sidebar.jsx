const navigation = [
  { id: 'inicio', label: 'Início', icon: '⌂' },
  { id: 'cadastro', label: 'Cadastro', icon: '+' },
  { id: 'sobre', label: 'Sobre', icon: 'i' },
]

export default function Sidebar({ activePage, onNavigate }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-heading">MENU PRINCIPAL</div>
      <nav aria-label="Navegação principal" className="side-nav">
        {navigation.map((item) => (
          <button
            className={'nav-item ' + (activePage === item.id ? 'active' : '')}
            key={item.id}
            type="button"
            onClick={() => onNavigate(item.id)}
            aria-current={activePage === item.id ? 'page' : undefined}
          >
            <span className="nav-icon" aria-hidden="true">{item.icon}</span>
            <span>{item.label}</span>
            {activePage === item.id ? <span className="nav-indicator" /> : null}
          </button>
        ))}
      </nav>
      <div className="sidebar-note">
        <span className="note-dot" />
        <div>
          <strong>Modo de teste</strong>
          <small>A navegação está simulada.</small>
        </div>
      </div>
    </aside>
  )
}
