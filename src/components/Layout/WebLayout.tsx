import React from "react";
import Footer from "../Footer";
import TopBar from "../TopBar";
import { Container } from "../UIWidgets";

const WebLayout = ({
  children,
  redirectToHome,
}: {
  children: React.ReactChild;
  redirectToHome?: boolean;
}) => {
  return (
    <div className="bg-lbg">
      <div className="px-7 bg-lbg">
        <TopBar redirectToHome={redirectToHome} />
        <Container>{children}</Container>
      </div>
      <div className="mt-28">
        <Footer redirectToHome={redirectToHome} />
      </div>
    </div>
  );
};

export default WebLayout;
