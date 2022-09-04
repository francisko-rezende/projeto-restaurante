import React from "react";

interface SocialNetworkLogoProps {
  children: React.ReactNode;
}

export const SocialNetworkLogo = ({ children }: SocialNetworkLogoProps) => {
  return <div style={{ width: "100px" }}>{children}</div>;
};
