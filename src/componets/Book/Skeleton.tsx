import React from "react";
import ContentLoader from "react-content-loader";

export const Skeleton: React.FC = () => (
  <ContentLoader
    className="book-block"
    speed={2}
    width={320}
    height={340}
    viewBox="0 0 320 340"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="1" y="202" rx="10" ry="10" width="290" height="25" />
    <rect x="1" y="238" rx="10" ry="10" width="290" height="61" />
    <rect x="74" y="-3" rx="0" ry="0" width="128" height="184" />
    <rect x="1" y="309" rx="10" ry="10" width="290" height="23" />
  </ContentLoader>
);
