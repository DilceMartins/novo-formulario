'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '../../hooks/useAuth'
import { loginUsuario } from '@/utils/auth'
import './style.css'
export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const { login, user } = useAuth(false)
    const router = useRouter()

    async function handleLogin() {
        try {
            const res = await loginUsuario(email, senha)
            login(res.usuario, res.token)
            if (res.usuario.nu_perfil === 1) {
                router.push('/admin')
            } else {
                router.push('/minhas_interacoes')
            }
        } catch (err) {
            alert('Erro ao fazer login')
        }
    }

    return (
        <>
        <h2>Formulário de Cadastro</h2>
        <form id="userForm">
            <label forhtml="nome">Nome:</label>
            <input type="text" id="nome" name="nome" placeholder="Digite seu nome" required/>
            <label forhtml="endereco">Endereço:</label>
            <input type="text" id="endereco" name="endereco" placeholder="Digite seu endereço" required/>
            <label forhtml="telefone">Telefone:</label>
            <input type="tel" id="telefone" name="telefone" placeholder="Digite seu telefone" required/>
            <button type="button" onclick="submitForm()">Enviar</button>
        </form>
    
        </>
        
    )
}
