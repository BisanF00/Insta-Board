import Navigation from "./Navigation";
import "./styles/Layout.css";

export default function Layout({ children }) {
  return (
    <>
      <div className="layout">
        <div>
              <header className="header">
                <img
                  src="/instaLogo.png"
                  alt="instalogo"
                  className="App-logo"
                />
                <h1>Insta Board</h1>
                <Navigation />
              </header>
            </div>
        
        <main>{children}</main>
        <footer>© 2025 Insta Board</footer>
      </div>
    </>
  );
}
