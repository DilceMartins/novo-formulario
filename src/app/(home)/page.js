import Image from "next/image"

import './style.css'

export default function Home() {
  return (
    <div className="main">
      <h1 className="title">Bem-vindo ao Sistema de Interações!</h1>
      <p className="text">Este é um sistema para gerenciar interações entre membros e igrejas.</p>

      <Image 
        src="/loganIASD.png" 
        alt="Igreja"
        width={300}
        height={250}
        className="logo"
      />

      <div className="buttons">
        <button type="button">
          <a href="/login" className="">Login</a>
        </button>
        
        <button type="button">
          <a href="/formulario" className="">Enviar Interação</a>
        </button>

        <button type="button">
          <a href="/minhas-interacoes" className="">Minhas Interações</a>
        </button>

        <button type="button">
          <a href="/admin" className="">Painel Administrativo</a>
        </button>
      </div>
    </div>
  );
}
