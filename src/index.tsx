/** @jsx jsx */
import { jsx } from "@emotion/core";
import { render } from "react-dom";

import "./styles.css";
import { Article } from "./Article";
import { Layout } from "./Layout";
import { Heading } from "./Heading";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Heading>List of Books</Heading>
      <Layout>
        <Article
          title="Design Systems"
          img="https://res.cloudinary.com/indysigner/image/upload/v1543936235/shop/design-systems-shop-image_2.png"
        />
        <Article
          title="Form Design Patterns"
          img="https://res.cloudinary.com/indysigner/image/upload/v1543936070/shop/form-design-patterns-shop-image.png"
        />
      </Layout>
    </Fragment>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
