import { useState } from "react";

function RequestWorkspace() {
  const [fetchUrl, setFetchUrl] = useState("");
  const [method, setMethod] = useState("GET");
  const [response, setResponse] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch(fetchUrl, {
      method: method,
    });

    if (response.ok) {
      console.log("ok");
    }

    console.log(response);
    setResponse(response);
  }

  return (
    <main className="main-content" aria-label="Request workspace" tabIndex={0}>
      <h1>Request Workspace</h1>
      <form className="request-form" onSubmit={handleSubmit}>
        <select value={method} onChange={(e) => setMethod(e.target.value)}>
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="PATCH">PATCH</option>
          <option value="DELETE">DELETE</option>
        </select>
        <input
          placeholder="Type your URL here..."
          value={fetchUrl}
          onChange={(e) => setFetchUrl(e.target.value)}
        ></input>
        <button className="btn">Send</button>
      </form>
      {response ? (<><h2>Response</h2></>) : (<></>) }
    </main>
  );
}

export default RequestWorkspace;
