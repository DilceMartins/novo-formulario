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
    })

    if (loading) return <p>Carregando suas interações...</p>
    if (interacoes.length === 0) return <p>Você ainda não enviou nenhuma interação.</p>

    return (
        <>
        <div>
            <h1>Minhas Interações</h1>

            {/* Aqui os alunos devem exibir cada interação */}
            {/* Com data, status, igreja, formulário e ações */}
            {/* Exemplo: interacoes.map(...) com layout customizado */}
        </div>
         <div className="form-container">
         <h1>Acompanhamento do Usuário</h1>
         <form>
             <label forhtml="nome">Nome ou Identificador:</label>
             <input type="text" id="nome" name="nome" required/>
 
             <label forhtml="tipo_acao">Tipo de Ação:</label>
             <input type="text" id="tipo_acao" name="tipo_acao" required/>
 
             <label forhtml="resposta">Resposta:</label>
             <textarea id="resposta" name="resposta" rows="4" required></textarea>
 
             <label forhtml="estado_acao">Estado da Ação:</label>
             <input type="text" id="estado_acao" name="estado_acao" required/>
 
             <button type="submit">Enviar</button>
         </form>
     </div>
        </>
    )
}
