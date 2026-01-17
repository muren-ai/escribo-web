'use client'

import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { QrCode, LogOut, Package, BarChart3, Settings, Download, Loader2, CheckCircle2 } from 'lucide-react'

export default function AdminDashboard() {
    const router = useRouter()
    const supabase = createClient()
    const [userEmail, setUserEmail] = useState<string>('')

    // QR Gen State
    const [genCount, setGenCount] = useState<number | ''>(10)
    const [isGenerating, setIsGenerating] = useState(false)
    const [genSuccess, setGenSuccess] = useState(false)

    useEffect(() => {
        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser()

            if (!user) {
                router.push('/login')
                return
            }

            // Verify user is admin in database
            const { data: profile, error } = await supabase
                .from('user_profiles')
                .select('role')
                .eq('id', user.id)
                .single()

            if (error || profile?.role !== 'admin') {
                router.push('/login')
                return
            }

            setUserEmail(user.email || 'User')
        }
        getUser()
    }, [router, supabase])

    const handleSignOut = async () => {
        await supabase.auth.signOut()
        router.push('/login')
    }

    const handleGenerate = async () => {
        // Validate input
        if (genCount === '' || genCount === null || genCount === undefined) {
            alert("Please enter a quantity to generate (1-1000)")
            return
        }

        const count = typeof genCount === 'string' ? parseInt(genCount, 10) : genCount

        if (isNaN(count) || count <= 0) {
            alert("Please enter a valid quantity greater than 0")
            return
        }

        if (count > 1000) {
            alert("Maximum quantity is 1000 per batch")
            return
        }

        setIsGenerating(true)
        setGenSuccess(false)
        try {
            // Get the session token
            const { data: { session } } = await supabase.auth.getSession()
            if (!session) throw new Error("No session")

            // 1. Generate Records
            // NOTE: In production, use env var for API URL
            const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

            const genRes = await fetch(`${API_URL}/api/v1/admin/qr/generate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${session.access_token}`
                },
                body: JSON.stringify({ count })
            })

            if (!genRes.ok) throw new Error("Generation failed")
            const genData = await genRes.json()

            // 2. Export ZIP
            const exportRes = await fetch(`${API_URL}/api/v1/admin/qr/export-zip`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${session.access_token}`
                },
                body: JSON.stringify({ garments: genData.garments })
            })

            if (!exportRes.ok) throw new Error("Export failed")

            // 3. Trigger Download
            const blob = await exportRes.blob()
            const url = window.URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.href = url
            a.download = `escribo_batch_${new Date().toISOString().slice(0, 10)}.zip`
            document.body.appendChild(a)
            a.click()
            window.URL.revokeObjectURL(url)

            setGenSuccess(true)
            setTimeout(() => setGenSuccess(false), 5000)

        } catch (error: any) {
            console.error(error)
            const errorMsg = error.message || "Unknown error"
            alert(`Failed to generate batch: ${errorMsg}\n\nEnsure you are an admin in the database.`)
        } finally {
            setIsGenerating(false)
        }
    }

    return (
        <div className="min-h-screen bg-transparent p-6 md:p-12 font-sans relative overflow-hidden">
            <div className="max-w-5xl mx-auto relative z-10">

                {/* Header */}
                <header className="flex justify-between items-center mb-12">
                    <div>
                        <h1 className="text-3xl font-bold text-primary tracking-tight">Escribo Admin</h1>
                        <p className="text-gray-500 mt-1">Hello, {userEmail || 'Admin'}</p>
                    </div>
                    <button
                        onClick={handleSignOut}
                        className="text-sm text-gray-500 hover:text-red-500 flex items-center gap-2 transition-colors"
                    >
                        <LogOut size={16} />
                        Sign Out
                    </button>
                </header>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Tile 1: QR Generator (Active) */}
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-white hover:border-primary/20 transition-all group">
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-primary/10 text-primary rounded-2xl">
                                <QrCode size={32} />
                            </div>
                            {genSuccess && (
                                <span className="text-green-600 bg-green-50 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 animate-in fade-in">
                                    <CheckCircle2 size={12} /> Success
                                </span>
                            )}
                        </div>

                        <h3 className="text-xl font-bold mb-2 text-foreground">Generate Batch</h3>
                        <p className="text-gray-400 text-sm mb-6">Create new inventory & download assets.</p>

                        <div className="flex gap-3">
                            <input
                                type="number"
                                min="1"
                                max="1000"
                                value={genCount === '' ? '' : genCount}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    setGenCount(val === '' ? '' : parseInt(val, 10));
                                }}
                                placeholder="10"
                                className="w-24 px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:ring-2 focus:ring-primary/20 outline-none text-center font-semibold"
                            />
                            <button
                                onClick={handleGenerate}
                                disabled={isGenerating}
                                className="flex-1 bg-primary hover:bg-primary-hover text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 active:translate-y-0.5"
                            >
                                {isGenerating ? <Loader2 className="animate-spin" size={20} /> : <><Download size={20} /> Generate ZIP</>}
                            </button>
                        </div>
                    </div>

                    {/* Tile 2: Inventory Stats (Placeholder) */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-transparent hover:shadow-md transition-all opacity-80 hover:opacity-100">
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-orange-50 text-orange-500 rounded-2xl">
                                <Package size={32} />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-400">Inventory</h3>
                        <p className="text-gray-300 text-sm">Manage existing garments and owners.</p>
                        <div className="mt-6 h-12 flex items-center text-gray-300 font-mono text-xs border-t border-dashed border-gray-100 pt-4">
                            COMING SOON
                        </div>
                    </div>

                    {/* Tile 3: Analytics (Placeholder) */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-transparent hover:shadow-md transition-all opacity-80 hover:opacity-100">
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-blue-50 text-blue-500 rounded-2xl">
                                <BarChart3 size={32} />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-400">Analytics</h3>
                        <p className="text-gray-300 text-sm">Scan rates and story engagement.</p>
                        <div className="mt-6 h-12 flex items-center text-gray-300 font-mono text-xs border-t border-dashed border-gray-100 pt-4">
                            COMING SOON
                        </div>
                    </div>

                    {/* Tile 4: Settings (Placeholder) */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-transparent hover:shadow-md transition-all opacity-80 hover:opacity-100">
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-gray-50 text-gray-500 rounded-2xl">
                                <Settings size={32} />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-400">Settings</h3>
                        <p className="text-gray-300 text-sm">Admin access and configuration.</p>
                        <div className="mt-6 h-12 flex items-center text-gray-300 font-mono text-xs border-t border-dashed border-gray-100 pt-4">
                            COMING SOON
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
