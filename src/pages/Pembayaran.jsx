import { useState } from 'react'
import { Plus, Check, X, DollarSign } from 'lucide-react'
import Button from '../components/Button'

function Pembayaran() {
  const [pembayaran] = useState([
    { id: 1, penghuni: 'Ahmad Rahman', kamar: '101', bulan: 'Oktober 2024', nominal: 900000, status: 'Lunas', tanggal: '2024-10-05' },
    { id: 2, penghuni: 'Siti Nurhaliza', kamar: '201', bulan: 'Oktober 2024', nominal: 1200000, status: 'Tertunggak', tanggal: '-' },
    { id: 3, penghuni: 'Budi Santoso', kamar: '202', bulan: 'Oktober 2024', nominal: 1200000, status: 'Lunas', tanggal: '2024-10-03' },
  ])

  const statusColors = {
    Lunas: 'bg-green-100 text-green-800',
    Tertunggak: 'bg-red-100 text-red-800',
    'Sebagian': 'bg-yellow-100 text-yellow-800',
  }

  const totalPendapatan = pembayaran
    .filter(p => p.status === 'Lunas')
    .reduce((sum, p) => sum + p.nominal, 0)

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Manajemen Pembayaran</h1>
        <Button variant="primary" className="flex items-center gap-2">
          <Plus size={20} /> Catat Pembayaran
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Total Pembayaran Masuk</p>
              <p className="text-2xl font-bold text-green-600 mt-2">Rp {totalPendapatan.toLocaleString('id-ID')}</p>
            </div>
            <DollarSign className="text-green-600" size={32} />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Pembayaran Tertunggak</p>
              <p className="text-2xl font-bold text-red-600 mt-2">Rp 1.200.000</p>
            </div>
            <X className="text-red-600" size={32} />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Tingkat Pembayaran</p>
              <p className="text-2xl font-bold text-blue-600 mt-2">66.67%</p>
            </div>
            <Check className="text-blue-600" size={32} />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Penghuni</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Kamar</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Bulan</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Nominal</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Tanggal</th>
            </tr>
          </thead>
          <tbody>
            {pembayaran.map((p) => (
              <tr key={p.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-3 font-semibold text-gray-800">{p.penghuni}</td>
                <td className="px-6 py-3 text-gray-600">{p.kamar}</td>
                <td className="px-6 py-3 text-gray-600">{p.bulan}</td>
                <td className="px-6 py-3 text-gray-600">Rp {p.nominal.toLocaleString('id-ID')}</td>
                <td className="px-6 py-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[p.status]}`}>
                    {p.status}
                  </span>
                </td>
                <td className="px-6 py-3 text-gray-600">{p.tanggal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Pembayaran
