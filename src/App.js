import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  function handleCheckboxChange(e) {
    const value = e.target.value;
    if (e.target.checked) {
      setInterests((prev) => [...prev, value]);
    } else {
      setInterests((prev) => prev.filter((item) => item !== value));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <h1>Hi, I'm Trish</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>

        <h2>Newsletter Signup</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-label="name"
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="email"
            />
          </label>

          <fieldset>
            <legend>Select your interests:</legend>
            <label>
              <input
                type="checkbox"
                value="React"
                onChange={handleCheckboxChange}
              />
              React
            </label>
            <label>
              <input
                type="checkbox"
                value="JavaScript"
                onChange={handleCheckboxChange}
              />
              JavaScript
            </label>
            <label>
              <input
                type="checkbox"
                value="UI/UX"
                onChange={handleCheckboxChange}
              />
              UI/UX
            </label>
          </fieldset>

          <button type="submit">Submit</button>
        </form>

        {submitted && (
          <p>
            Thank you, {name}! We've added {email} to our mailing list.
            {interests.length > 0 && (
              <span> Your interests: {interests.join(", ")}</span>
            )}
          </p>
        )}
      </div>
    </main>
  );
}

export default App;
