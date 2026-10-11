import { useState } from 'react'
import { Plus, Edit2, Trash2, Search } from 'lucide-react'
import Button from '../components/Button'

function Kamar() {
  const [kamarList] = useState([
    { id: 1, nomor: '101', tipe: 'Standar', harga: 900000, status: 'Terisi', penghuni: 'Ahmad Rahman' },
    { id: 2, nomor: '102', tipe: 'Standar', harga: 900000, status: 'Kosong', penghuni: '-' },
    { id: 3, nomor: '201', tipe: 'Premium', harga: 1200000, status: 'Terisi', penghuni: 'Siti Nurhaliza' },
    { id: 4, nomor: '202', tipe: 'Premium', harga: 1200000, status: 'Terisi', penghuni: 'Budi Santoso' },
  ])
  const [searchTerm, setSearchTerm] = useState('')

  const statusColors = {
    Terisi: 'bg-green-100 text-green-800',
    Kosong: 'bg-yellow-100 text-yellow-800',
  }

  const filteredKamar = kamarList.filter(kamar =>
    kamar.nomor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    kamar.penghuni.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Daftar Kamar</h1>
        <Button variant="primary" className="flex items-center gap-2">
          <Plus size={20} /> Tambah Kamar
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex items-center gap-2 text-gray-600">
          <Search size={20} />
          <input
            type="text"
            placeholder="Cari nomor kamar atau penghuni..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 outline-none"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">No. Kamar</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Tipe</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Harga</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Penghuni</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredKamar.map((kamar) => (
              <tr key={kamar.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-3 font-semibold text-gray-800">{kamar.nomor}</td>
                <td className="px-6 py-3 text-gray-600">{kamar.tipe}</td>
                <td className="px-6 py-3 text-gray-600">Rp {kamar.harga.toLocaleString('id-ID')}</td>
                <td className="px-6 py-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[kamar.status]}`}>
                    {kamar.status}
                  </span>
                </td>
                <td className="px-6 py-3 text-gray-600">{kamar.penghuni}</td>
                <td className="px-6 py-3 flex gap-2">
                  <button className="p-2 hover:bg-blue-100 text-blue-600 rounded">
                    <Edit2 size={18} />
                  </button>
                  <button className="p-2 hover:bg-red-100 text-red-600 rounded">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Kamar
