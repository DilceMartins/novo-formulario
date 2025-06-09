'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useRouter } from 'next/navigation'
import { getInteracoesUsuario } from '../../utils/usuario'

import './style.css'

export default function MinhasInteracoes() {
    const { token, user } = useAuth()
    const router = useRouter()
    const [interacoes, setInteracoes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getInteracoesUsuario(token, user?.id || user?.co_usuario || 1)
            .then((data) => setInteracoes(data.interacoes || []))
            .catch(() => alert('Erro ao buscar interações'))
            .finally(() => setLoading(false))
    }, [])

    if (loading) return <div className='main'><p>Carregando suas interações...</p></div>
    if (interacoes.length === 0) return <div className='main'><p>Você ainda não enviou nenhuma interação.</p></div>

    return (
        <div className='main'>
            <div className="form-container">
                <form className="formulario">
                    <h1 className='title'>Acompanhamento do Usuário</h1>

                    <label htmlFor="nome">Nome ou Identificador</label>
                    <input type="text" id="nome" name="nome" placeholder='Digite o seu nome' required />
        
                    <label htmlFor="tipo_acao">Tipo de Ação</label>
                    <input type="text" id="tipo_acao" name="tipo_acao" placeholder='Digite o tipo de ação' required />
        
                    <label htmlFor="resposta">Resposta</label>
                    <textarea id="resposta" name="resposta" rows="4" placeholder='Digite sua resposta' required></textarea>
        
                    <label htmlFor="estado_acao">Estado da Ação</label>
                    <input type="text" id="estado_acao" name="estado_acao" placeholder='Digite o estado da ação' required />
        
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )
}
