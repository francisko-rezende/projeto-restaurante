import React from "react";
import { Instagram } from "../Instagram";
import { SocialNetworkLogo } from "../SocialNetworkLogo";
import { WhatsApp } from "../WhatsApp";

export const Footer = () => {
  return (
    <footer>
      <address>
        <ul style={{ display: "grid", justifyContent: "center" }}>
          <li>
            <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              <li>
                <a href="#">
                  <SocialNetworkLogo>
                    <WhatsApp />
                  </SocialNetworkLogo>
                </a>
              </li>
              <li>
                <a href="#">
                  <SocialNetworkLogo>
                    <Instagram />
                  </SocialNetworkLogo>
                </a>
              </li>
            </ul>
          </li>
          <li>Praia de Jurere - Canasvieiras, Florianópolis - SC</li>
        </ul>
      </address>
      <small>© Marilene—Alguns direitos reservados</small>
    </footer>
  );
};
