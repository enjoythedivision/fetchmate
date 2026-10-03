import { useState } from "react";

function RequestWorkspace( {handleSubmit} ) {

  const [fetchUrl, setFetchUrl] = useState("");
  const [method, setMethod] = useState("get");

  return (
    <main className="main-content" aria-label="Request workspace" tabIndex={0}>
      <h1>Request Workspace</h1>
      <form className="request-form" onSubmit={handleSubmit}>
        <select value={method}>
          <option value="get">GET</option>
          <option value="post">POST</option>
          <option value="put">PUT</option>
          <option value="patch">PATCH</option>
          <option value="delete">DELETE</option>
        </select>
        <input placeholder="Type your URL here..." value={fetchUrl}></input>
        <button className="btn">Send</button>
      </form>
    </main>
  );
}

export default RequestWorkspace;
