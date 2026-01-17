'use client'

import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Loader2 } from 'lucide-react'

export default function LoginPage() {
    const router = useRouter()
    const supabase = createClient()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        const { data: { user }, error: loginError } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (loginError) {
            setError(loginError.message)
            setLoading(false)
            return
        }

        if (user) {
            // Check if user has admin role
            const { data: profile, error: profileError } = await supabase
                .from('user_profiles')
                .select('role')
                .eq('id', user.id)
                .single()

            if (profileError || profile?.role !== 'admin') {
                await supabase.auth.signOut()
                setError('Unauthorized: Admin privileges required')
                setLoading(false)
                return
            }

            router.push('/admin')
            router.refresh()
        }
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-transparent relative overflow-hidden">
            <div className="relative z-10 w-full max-w-md bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white">
                <div className="flex justify-center mb-8">
                    <img src="/escribo-logo.svg" alt="Escribo" className="h-10" />
                </div>

                <h2 className="text-2xl font-bold text-center mb-8 text-primary">Admin Access</h2>

                {error && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-6 border border-red-100">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                            placeholder="admin@escribo.ai"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-3 rounded-xl transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {loading ? <Loader2 className="animate-spin" /> : 'Enter Dashboard'}
                    </button>
                </form>
            </div>

            <p className="mt-8 text-sm text-gray-400">
                Unauthorized access is prohibited.
            </p>
        </div>
    )
}
