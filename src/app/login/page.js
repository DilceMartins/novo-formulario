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
        <div className='main'>
            <div className='form-container'>
                <h1 className='title'>Login</h1>

                <form className="formulario">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" name="email" placeholder="Digite seu E-mail" required />

                    <label htmlFor="senha">Senha</label>
                    <input type="password" id="senha" name="senha" placeholder="Digite sua senha" required />

                    <button type="button" onClick={handleLogin}>Enviar</button>
                </form>
            </div>
        </div>
    )
}
