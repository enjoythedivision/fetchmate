function Sidebar({ onNewRequest }) {
  return (
    <aside className="sidebar" aria-label="Requests">
      <button className="new-request-button" type="button" onClick={onNewRequest}>
        + New Request
      </button>
    </aside>
  )
}

export default Sidebar
