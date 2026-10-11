import { BarChart3, PieChart, TrendingUp, Download } from 'lucide-react'
import Button from '../components/Button'

function Laporan() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Laporan</h1>
        <Button variant="primary" className="flex items-center gap-2">
          <Download size={20} /> Export PDF
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <BarChart3 size={24} className="text-blue-600" />
            Statistik Kamar
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-gray-600">Total Kamar</span>
              <span className="font-bold text-gray-800">20</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-gray-600">Kamar Terisi</span>
              <span className="font-bold text-green-600">18 (90%)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Kamar Kosong</span>
              <span className="font-bold text-red-600">2 (10%)</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <TrendingUp size={24} className="text-green-600" />
            Statistik Pendapatan
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-gray-600">Pendapatan Bulan Ini</span>
              <span className="font-bold text-gray-800">Rp 18.000.000</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-gray-600">Pendapatan Bulan Lalu</span>
              <span className="font-bold text-gray-800">Rp 18.900.000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Tahun Ini</span>
              <span className="font-bold text-gray-800">Rp 99.000.000</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <PieChart size={24} className="text-purple-600" />
          Laporan Bulanan
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-800">Bulan</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-800">Pendapatan</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-800">Penghuni Aktif</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-800">Status</th>
              </tr>
            </thead>
            <tbody>
              {['Oktober', 'September', 'Agustus', 'Juli', 'Juni'].map((bulan, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-800">{bulan} 2024</td>
                  <td className="px-4 py-3 font-bold text-gray-800">Rp {(18000000 - idx * 100000).toLocaleString('id-ID')}</td>
                  <td className="px-4 py-3 text-gray-600">18 orang</td>
                  <td className="px-4 py-3">
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">Normal</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Laporan
