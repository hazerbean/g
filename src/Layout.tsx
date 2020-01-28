/** @jsx jsx */
import styled from "@emotion/styled";
import { jsx } from "@emotion/core";

const LayoutWrapper = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
`;

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}
