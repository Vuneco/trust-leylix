"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("leylix_cookie_consent");

    if (!consent) {
      setTimeout(() => setVisible(true), 900);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("leylix_cookie_consent", "accepted");
    setVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("leylix_cookie_consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookieOverlay">
      <div className="cookieBox">
        <div className="cookieGlow"></div>

        <div className="cookieIcon">✦</div>

        <div className="cookieContent">
          <p className="cookieLabel">Datenschutz & Cookies</p>

          <h3>Wir nutzen Cookies für ein besseres Erlebnis.</h3>

          <p>
            Leylix verwendet technisch notwendige Cookies und lokale Speicherung,
            um diese Website zuverlässig darzustellen und deine Auswahl zu merken.
          </p>

          <div className="cookieLinks">
            <a href="/datenschutz">Datenschutz</a>
            <a href="/impressum">Impressum</a>
          </div>
        </div>

        <div className="cookieActions">
          <button className="cookieSecondary" onClick={declineCookies}>
            Ablehnen
          </button>

          <button className="cookiePrimary" onClick={acceptCookies}>
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}