import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:5001/api/data")
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(err => {
        console.error(err);
        setMsg("Error connecting to backend");
      });
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>📝 Todo App</h1>
        <p>Backend says: {msg}</p>

        <div style={styles.inputBox}>
          <input
            type="text"
            placeholder="Enter a todo..."
            style={styles.input}
          />
          <button style={styles.button}>Add</button>
        </div>

        <ul style={styles.list}>
          <li style={styles.todo}>Learn MERN Stack</li>
          <li style={styles.todo}>Build Todo App</li>
        </ul>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f2f4f8",
  },
  card: {
    background: "#fff",
    padding: "25px",
    borderRadius: "10px",
    width: "350px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  inputBox: {
    display: "flex",
    gap: "10px",
    marginBottom: "15px",
  },
  input: {
    flex: 1,
    padding: "8px",
    fontSize: "16px",
  },
  button: {
    padding: "8px 15px",
    background: "#4f46e5",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  todo: {
    background: "#eef2ff",
    padding: "8px",
    borderRadius: "5px",
    marginBottom: "8px",
  },
};

export default App;
