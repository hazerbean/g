/** @jsx jsx */
import CSS from "csstype";
import { css, jsx } from "@emotion/core";

type ArticleProps = {
  title: string;
  img: string;
};

const divStyle: CSS.Properties = {
  position: "relative",
  padding: "1rem"
};

const h1Styles: CSS.Properties = {
  backgroundColor: "rgba(255, 255, 255, 0.85)",
  position: "absolute",
  right: 0,
  bottom: "2rem",
  padding: "0.5rem",
  fontFamily: "sans-serif",
  fontSize: "1.5rem",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)"
};

const imgStyles: CSS.Properties = {
  width: "100%"
};

const h1Style = css({
  ...h1Styles
});

export function Article({ title, img }: ArticleProps) {
  return (
    <div style={divStyle}>
      <h1 css={h1Style}>{title}</h1>
      <img style={imgStyles} src={img} alt="" />
    </div>
  );
}
