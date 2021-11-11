import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import UserLand from "./pages/UserLand";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Header from "./components/Navbar/Header";
import Footer from "./components/Footer/Footer";
import BeanForm from "./pages/BeanForm";
import Pricing from "./pages/Pricing";
import Adamheader from "./components/Navbar/Adamheader";

//creates graphql link
const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Adamheader />

          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/beanForm">
            <BeanForm />
          </Route>
          <Route exact path="/Pricing">
            <Pricing />
          </Route>
          <Route exact path="/me">
            <UserLand />
          </Route>
        </div>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
