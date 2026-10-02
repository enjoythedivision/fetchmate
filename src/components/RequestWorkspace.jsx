function RequestWorkspace() {
  return (
    <main
      className="main-content"
      aria-label="Request workspace"
      tabIndex={0}>
        <h1>Request Workspace</h1>
        <form className="request-form">
            <select></select>
            <input></input>
            <button className="btn">Send</button>
        </form>
    </main>
  );
}

export default RequestWorkspace;