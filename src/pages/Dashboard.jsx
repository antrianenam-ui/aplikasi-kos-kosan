import { BarChart3, DoorOpen, Users, CreditCard, TrendingUp } from 'lucide-react'
import StatCard from '../components/StatCard'

function Dashboard() {
  const stats = [
    { title: 'Total Kamar', value: '20', icon: DoorOpen, color: 'blue' },
    { title: 'Kamar Terisi', value: '18', icon: Users, color: 'green' },
    { title: 'Kamar Kosong', value: '2', icon: DoorOpen, color: 'red' },
    { title: 'Total Pendapatan', value: 'Rp 18.000.000', icon: CreditCard, color: 'purple' },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <TrendingUp size={24} className="text-blue-600" />
          Aktivitas Terbaru
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b pb-4">
            <div>
              <p className="font-semibold text-gray-800">Pembayaran Diterima - Kamar 101</p>
              <p className="text-sm text-gray-600">Ahmad Rahman</p>
            </div>
            <span className="text-green-600 font-bold">+Rp 900.000</span>
          </div>
          <div className="flex items-center justify-between border-b pb-4">
            <div>
              <p className="font-semibold text-gray-800">Penghuni Baru - Kamar 202</p>
              <p className="text-sm text-gray-600">Siti Nurhaliza</p>
            </div>
            <span className="text-blue-600 font-bold">Terdaftar</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-gray-800">Pembayaran Tertunggak</p>
              <p className="text-sm text-gray-600">Kamar 305 - Budi Santoso</p>
            </div>
            <span className="text-orange-600 font-bold">Tertagih</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
