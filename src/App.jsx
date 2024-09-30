import React, { useState, useEffect } from 'react';
import './App.css';
import Card from "./Card";
import CryptoPrices from './CryptoPrices';
import Footer from './Footer';
import ToggleSwitch from './ToggleSwitch';
import ProgressBar from './ProgressBar';
import ImageCarousel from './ImageCarousel';
import HamburgerMenu from './HamburgerMenu';

export default function App() {
  const [nome, setNome] = useState("");
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [content, setContent] = useState("home");
  const [content2, setContent2] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (event) => setNome(event.target.value);
  const handleUsuarioChange = (event) => setUsuario(event.target.value);
  const handleSenhaChange = (event) => setSenha(event.target.value);

  const handleLogin = (event) => {
    event.preventDefault();
    setContent2("");
    if (usuario === "admin" && senha === "admin") {
      setContent("loggedIn");
      incrementProgress();
    } else {
      setContent2("Username or Password Error");
    }
  };

  const handleContentChange = (newContent) => {
    if (newContent === "login") {
      setSenha("");
      setUsuario("");
      setProgress(0);
    }
    setContent(newContent);
  };

  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      document.body.classList.toggle('dark', newMode);
      return newMode;
    });
  };

  const incrementProgress = () => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 100);
  };

  const menuItems = [
    { label: 'Inicio', href: '#home', onClick: () => handleContentChange("home") },
    { label: 'Crypto', href: '#crypto', onClick: () => handleContentChange("crypto") },
    { label: 'Login', href: '#login', onClick: () => handleContentChange("login") },
  ];

  const renderContent = () => {
    if (content === "home") {
      return (
        <>
          <div className={`text-content ${darkMode ? 'dark' : ''}`}>
            <input className='input' type="text" value={nome} onChange={handleChange} />
            <h2>Olá, seja bem vindo {nome}!</h2>
          </div>
          <ImageCarousel />
          <div className={`content ${darkMode ? 'dark' : ''}`}>
            <Card 
              url="https://cdn.prod.website-files.com/632993e1d1acbfa5635afd0b/649b7800f5ffed205f0f770f_Screenshot%202023-06-27%20at%207.59.53%20PM.png"
              title="Começe agora com Avalanche"
              darkMode={darkMode}
            />
            <Card 
              url="https://cdn.prod.website-files.com/632993e1d1acbfa5635afd0b/649b7849b93a4669f28fb6fd_Screenshot%202023-06-27%20at%208.01.06%20PM.png"
              title="Aprenda como o consenso da Avalanche Funciona"
              darkMode={darkMode}
            />
            <Card 
              url="https://cdn.prod.website-files.com/632993e1d1acbfa5635afd0b/649b788700859a4354acc45a_Screenshot%202023-06-27%20at%208.02.10%20PM.png"
              title="Experiencie os eventos da Avalanche"
              darkMode={darkMode}
            />
          </div>
        </>
      );
    } else if (content === "login") {
      return (
        <div className={`text-content login ${darkMode ? 'dark' : ''}`}>
          <h5>Nome</h5>
          <input className='input' type="text" value={usuario} onChange={handleUsuarioChange} />
          <h5>Senha</h5>
          <input className='input' type="password" value={senha} onChange={handleSenhaChange} />
          <p className='p-error'>{content2}</p>
          <button onClick={handleLogin}>Login</button>
        </div>
      );
    } else if (content === "loggedIn") {
      return (
        <div className={`text-content ${darkMode ? 'dark' : ''}`}>
          <h2>Logado</h2>
          <ProgressBar progress={progress} />
        </div>
      );
    } else if (content === "crypto") {
      return (
        <div className={`text-content ${darkMode ? 'dark' : ''}`}>
          <CryptoPrices url="https://rest.coinapi.io/v1/exchangerate/BTC/USD" title="Bitcoin" image="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" />
          <CryptoPrices url="https://rest.coinapi.io/v1/exchangerate/ETH/USD" title="Ethereum" image="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png" />
          <CryptoPrices url="https://rest.coinapi.io/v1/exchangerate/BNB/USD" title="BNB" image="https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png" />
          <CryptoPrices url="https://rest.coinapi.io/v1/exchangerate/NEAR/USD" title="Near" image="https://s2.coinmarketcap.com/static/img/coins/64x64/6535.png" />
          <CryptoPrices url="https://rest.coinapi.io/v1/exchangerate/AVAX/USD" title="Avax" image="https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png" />
        </div>
      );
    }
  };

  return (
    <div className={`container ${darkMode ? 'dark' : ''}`}>
      <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
        <img className="logo" src="https://cdn.prod.website-files.com/632993e1d1acbfa5635afd0b/66e44b097229055c691e7555_AvalancheLogo_Horizontal_4C_White.svg" alt="Avalanche Logo" />
        {isMobile ? (
          <HamburgerMenu items={menuItems} />
        ) : (
          <>
            <a className={`navbar-button ${darkMode ? 'dark' : ''}`} href="#home" onClick={() => handleContentChange("home")}>Inicio</a>
            <a className={`navbar-button  ${darkMode ? 'dark' : ''}`} href="#crypto" onClick={() => handleContentChange("crypto")}>Crypto</a>
            <a className={`navbar-button  ${darkMode ? 'dark' : ''}`} href="#login" onClick={() => handleContentChange("login")}>Login</a>
          </>
        )}
        <ToggleSwitch checked={darkMode} onChange={toggleDarkMode} />
      </nav>
  
      <main className={`main ${darkMode ? 'dark' : ''}`}>
        {renderContent()}
      </main>
  
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}