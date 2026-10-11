import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Kamar from './pages/Kamar'
import Penghuni from './pages/Penghuni'
import Pembayaran from './pages/Pembayaran'
import Laporan from './pages/Laporan'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/kamar" element={<Kamar />} />
          <Route path="/penghuni" element={<Penghuni />} />
          <Route path="/pembayaran" element={<Pembayaran />} />
          <Route path="/laporan" element={<Laporan />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
