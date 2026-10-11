import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Home, DoorOpen, Users, CreditCard, BarChart3 } from 'lucide-react'

function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const location = useLocation()

  const menuItems = [
    { name: 'Dashboard', path: '/', icon: Home },
    { name: 'Kamar', path: '/kamar', icon: DoorOpen },
    { name: 'Penghuni', path: '/penghuni', icon: Users },
    { name: 'Pembayaran', path: '/pembayaran', icon: CreditCard },
    { name: 'Laporan', path: '/laporan', icon: BarChart3 },
  ]

  return (
    <div className="flex h-screen bg-gray-100">
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-blue-900 text-white transition-all duration-300 flex flex-col`}>
        <div className="p-4 flex items-center justify-between border-b border-blue-800">
          {sidebarOpen && <h1 className="text-xl font-bold">KOS APP</h1>}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-blue-800 rounded-lg"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-4 px-4 py-3 rounded-lg transition ${
                  isActive
                    ? 'bg-blue-700 text-white'
                    : 'text-blue-100 hover:bg-blue-800'
                }`}
              >
                <Icon size={20} />
                {sidebarOpen && <span>{item.name}</span>}
              </Link>
            )
          })}
        </nav>
      </div>

      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow px-8 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Manajemen Kos-Kosan</h2>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Admin</span>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-8">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout
