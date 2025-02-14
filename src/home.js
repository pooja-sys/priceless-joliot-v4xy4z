import react, { useState } from "react";

function Home() {
  const [inputValue, setinputValue] = useState({ email: "", password: "" });
  const [formData, setformData] = useState(" ");
  const handleInput = (e) => {
    const { name, value } = e.target;
    setinputValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setformData(inputValue);
    setinputValue({ email: "", password: "" });
  };
  return (
    <>
      <h1>Welcome Home</h1>
      <div>
        <form
          onSubmit={handleSubmit}
          style={{
            flexDirection: "column",
            padding: "1rem",
            gap: "1rem",
          }}
        >
          <h1>login</h1>
          <label>
            Email:
            <input
              type="email"
              name="email"
              placeholder="enter your email"
              value={inputValue.email}
              onChange={handleInput}
            ></input>
          </label>
          <br />
          <label>
            Password:
            <input
              name="password"
              onChange={handleInput}
              value={inputValue.password}
              type="password"
              placeholder="enter your password"
            ></input>
          </label>
          <br />
          <button
            style={{
              cursor: "pointer",
              backgroundColor: "skyblue",
              borderRadius: "1px solid black",
              alignItems: "center",
            }}
          >
            Submit
          </button>
        </form>
        {formData && (
          <div>
            <h1>formdata submitted</h1>
            <p>Email{formData.email} </p>
            <p> Password {formData.password} </p>
          </div>
        )}
      </div>
    </>
  );
}
export default Home;
