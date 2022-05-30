import { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { motion } from "framer-motion";

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }
  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else if (this.state.hasError) {
      return (
        <motion.h2
          layout
          style={{
            borderRadius: "1rem",
            boxShadow: "0px 20px 60px rgba(0,0,0,1)",
            backgroundColor: "rgba(0,0,0,0.6)",
            color: "rgba(237, 233, 228, 0.8)",
            content: "center",
            fontFamily: "Roboto",
            padding: "0.8rem",
            margin: "5rem",
          }}
        >
          There was an error with this listing. <Link to="/">Click here</Link>{" "}
          to go back to the home page or wait five seconds.
        </motion.h2>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
