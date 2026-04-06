import React, { useState } from 'react';
import './CarrosselAcervo.css'; // Importando o visual

// Simulação dos dados do Banco de Dados do Projeto Ação Recuperação
const mockAcervo = [
  {
    id: 1,
    titulo: "Câmera Polaroid 636 Closeup",
    legenda: "Câmera analógica de filme instantâneo. Ano: 1996.",
    imagemUrl: "/Polaroid.jpg",
    altTexto: "Foto frontal de uma câmera Polaroid 636 preta com flash levantado",
    labelAcessibilidade: "Item do acervo: Câmera Polaroid 636"
  },
  {
    id: 2,
    titulo: "Telefone Siemens Euroset 3005",
    legenda: "Telefone fixo de mesa com discagem tom/pulso. Ano: 2000.",
    imagemUrl: "Siemens.jpg",
    altTexto: "Telefone fixo de mesa na cor branca, modelo Siemens Euroset",
    labelAcessibilidade: "Item do acervo: Telefone Siemens Euroset"
  },
  {
    id: 3,
    titulo: "Rádio Gravador Philips AR 420",
    legenda: "Rádio estéreo e gravador de fita cassete (Boombox). Década de 1980.",
    imagemUrl: "/Philips.webp",
    altTexto: "Rádio portátil antigo da Philips com toca-fitas e sintonizador AM e FM",
    labelAcessibilidade: "Item do acervo: Rádio Gravador Philips"
  }
];

const CarrosselAcervo = () => {
  const [indiceAtual, setIndiceAtual] = useState(0);

  const proximoItem = () => {
    setIndiceAtual((prevIndex) => 
      prevIndex === mockAcervo.length - 1 ? 0 : prevIndex + 1
    );
  };

  const itemAnterior = () => {
    setIndiceAtual((prevIndex) => 
      prevIndex === 0 ? mockAcervo.length - 1 : prevIndex - 1
    );
  };

  const itemExibido = mockAcervo[indiceAtual];

  return (
    <div 
      className="carrossel-container" 
      aria-roledescription="carousel" 
      aria-label="Itens em destaque do Museu Itinerante"
    >
      <button onClick={itemAnterior} aria-label="Ver equipamento anterior do acervo" className="btn-nav">
        &#8592;
      </button>

      <div className="slide-item" role="group" aria-roledescription="slide" aria-label={itemExibido.labelAcessibilidade}>
        <img src={itemExibido.imagemUrl} alt={itemExibido.altTexto} className="imagem-acervo"/>
        <div className="info-acervo">
          <h3>{itemExibido.titulo}</h3>
          <p>{itemExibido.legenda}</p>
        </div>
      </div>

      <button onClick={proximoItem} aria-label="Ver próximo equipamento do acervo" className="btn-nav">
        &#8594;
      </button>
    </div>
  );
};

export default CarrosselAcervo;