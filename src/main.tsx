import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RepairProvider } from "./features/repairs/RepairContext.tsx";

class HelloWorld extends React.Component<{
  greetTarget: string;
  greetTarget2: string;
}> {
  render() {
    return (
      <p>
        Hello, {this.props.greetTarget} and {this.props.greetTarget2}!
      </p>
    );
  }
}

class Buttonify extends React.Component<{
  behavior: "button" | "submit" | "reset";
  children: React.ReactNode;
}> {
  render() {
    return (
      <div>
        <button
          type={this.props.behavior}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#0066cc",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          {this.props.children}
        </button>
      </div>
    );
  }
}

class Letter extends React.Component<{
  children: React.ReactNode;
  bgcolor: string;
}> {
  render() {
    const letterStyle: React.CSSProperties = {
      padding: 10,
      margin: 10,
      backgroundColor: this.props.bgcolor,
      color: "#333",
      display: "inline-block",
      fontFamily: "monospace",
      fontSize: 32,
      textAlign: "center",
    };
    return <div style={letterStyle}>{this.props.children}</div>;
  }
}

class Square extends React.Component<{ bgColor: string }> {
  render() {
    const squareStyle: React.CSSProperties = {
      height: 150,
      backgroundColor: this.props.bgColor,
    };
    return <div style={squareStyle}></div>;
  }
}

class Label extends React.Component<{ bgColor: string }> {
  render() {
    const labelStye: React.CSSProperties = {
      fontFamily: "sans-serif",
      fontWeight: "bold",
      padding: 13,
      margin: 13,
    };

    return <p style={labelStye}> Attacke! {this.props.bgColor}</p>;
  }
}

class Card extends React.Component<{ bgColor: string }> {
  render() {
    const cardStyle: React.CSSProperties = {
      height: 200,
      width: 150,
      padding: 0,
      margin: 50,
      backgroundColor: "#FFF",
      WebkitFilter: "drop-shadow(0px 0px 5px #666)",
      filter: "drop-shadow(0px 0px 5px #666)",
    };

    return (
      <div style={cardStyle}>
        <Square bgColor={this.props.bgColor} />
        <Label bgColor={this.props.bgColor} />
      </div>
    );
  }
}

interface DisplayProps {
  color: string;
  num: string;
  size: string;
}

const props: DisplayProps = {
  color: "steelblue",
  num: "3,14",
  size: "medium",
};
class Display extends React.Component<DisplayProps> {
  render() {
    const shortStyle: React.CSSProperties = {
      width: 150,
      height: 150,
      border: "5px solid",
      borderRadius: "50%",

      // Flexbox properties to center content
      display: "flex",
      flexDirection: "column", // Stack the paragraphs vertically
      justifyContent: "center", // Center vertically
      alignItems: "center", // Center horizontally
      textAlign: "center", // Ensure text inside <p> is centered too
      overflow: "hidden", // Optional: prevents text from spilling out if it's too long
    };

    return (
      <div style={shortStyle}>
        <p>{this.props.color}</p>
        <p>{this.props.num}</p>
        <p>{this.props.size}</p>
        <p> rnd Number {Math.random() * 100}</p>
      </div>
    );
  }
}

//

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RepairProvider>
      {/* <App /> */}
      <HelloWorld greetTarget="Matador" greetTarget2="Mystery" />
      {/* <h1> Sherlock Holmes</h1> */}
      <div>
        <Buttonify behavior="submit">SEND DATA</Buttonify>
      </div>

      <div>
        <Letter bgcolor="#58B3FF">D</Letter>
        <Letter bgcolor="#85ff58">A</Letter>
        <Letter bgcolor="#56768f">T</Letter>
        <Letter bgcolor="#5dc544">I</Letter>
        <Letter bgcolor="#ff58ab">N</Letter>
        <Letter bgcolor="#58ff7c">G</Letter>
      </div>

      <div>
        <Card bgColor="#933230" />
      </div>

      <Display {...props}></Display>
    </RepairProvider>
  </React.StrictMode>,
);
