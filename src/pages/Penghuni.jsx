import { useState } from 'react'
import { Plus, Edit2, Trash2, Phone, MapPin } from 'lucide-react'
import Button from '../components/Button'

function Penghuni() {
  const [penghuni] = useState([
    { id: 1, nama: 'Ahmad Rahman', kamar: '101', phone: '081234567890', email: 'ahmad@email.com', tanggalMasuk: '2024-01-15' },
    { id: 2, nama: 'Siti Nurhaliza', kamar: '201', phone: '081345678901', email: 'siti@email.com', tanggalMasuk: '2024-02-10' },
    { id: 3, nama: 'Budi Santoso', kamar: '202', phone: '081456789012', email: 'budi@email.com', tanggalMasuk: '2024-02-20' },
  ])

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Daftar Penghuni</h1>
        <Button variant="primary" className="flex items-center gap-2">
          <Plus size={20} /> Tambah Penghuni
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {penghuni.map((p) => (
          <div key={p.id} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-800">{p.nama}</h3>
                <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                  <MapPin size={16} /> Kamar {p.kamar}
                </p>
              </div>
              <span className="text-2xl font-bold text-blue-600">{p.kamar}</span>
            </div>

            <div className="space-y-2 mb-4 text-sm text-gray-600">
              <p className="flex items-center gap-2">
                <Phone size={16} /> {p.phone}
              </p>
              <p>{p.email}</p>
              <p className="text-xs text-gray-500">Masuk: {new Date(p.tanggalMasuk).toLocaleDateString('id-ID')}</p>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 px-3 py-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 text-sm font-medium">
                <Edit2 size={16} className="inline mr-1" /> Edit
              </button>
              <button className="flex-1 px-3 py-2 bg-red-50 text-red-600 rounded hover:bg-red-100 text-sm font-medium">
                <Trash2 size={16} className="inline mr-1" /> Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Penghuni
