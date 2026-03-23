import { useState, useEffect } from 'react'
import ProductForm from './components/ProductForm'
import Dashboard from './pages/Dashboard'

function App() {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("kitaplar_glowstock");
    return saved ? JSON.parse(saved) : [];
  });

  const [form, setForm] = useState({ brand: "", name: "", type: "", quantity: 1, expiryDate: "" });
  const [duzenlemeId, setDuzenlemeId] = useState(null);

  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    localStorage.setItem("kitaplar_glowstock", JSON.stringify(products));
  }, [products]);

  const formDoldur = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const kitapEkleVeyaGuncelle = (e) => {
    e.preventDefault();
    if (!form.brand || !form.name || !form.expiryDate) return alert("Lütfen gerekli alanları doldurun!");

    if (duzenlemeId) {
      setProducts(products.map(p => p.id === duzenlemeId ? { ...form, id: duzenlemeId } : p));
      setDuzenlemeId(null);
    } else {
      setProducts([...products, { ...form, id: Date.now() }]);
    }
    setForm({ brand: "", name: "", type: "", quantity: 1, expiryDate: "" });
  };

  const sil = (id) => setProducts(products.filter(p => p.id !== id));

  const duzenle = (p) => {
    setForm(p);
    setDuzenlemeId(p.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-32 pb-40 px-10 font-sans selection:bg-indigo-100">
      <main className="max-w-7xl mx-auto flex flex-col items-center">
        
        <header className="mb-32 text-center">
          <h1 className="text-9xl font-black tracking-tighter text-[#0A66C2] uppercase drop-shadow-sm">
            GLOW STOCK
          </h1>
          <div className="w-32 h-1 bg-[#0A66C2] mx-auto mt-6 rounded-full opacity-20"></div>
        </header>

        <ProductForm 
          form={form} 
          formDoldur={formDoldur} 
          kitapEkleVeyaGuncelle={kitapEkleVeyaGuncelle} 
          duzenlemeId={duzenlemeId} 
        />

        <Dashboard 
          products={products} 
          sil={sil} 
          duzenle={duzenle} 
          today={today} 
        />

      </main>
    </div>
  )
}

export default App