import React from 'react';

export default function ProductForm({ form, formDoldur, kitapEkleVeyaGuncelle, duzenlemeId }) {
  return (
    <div className="flex justify-center mb-60 animate-fadeIn relative">
      <form 
        onSubmit={kitapEkleVeyaGuncelle} 
        className="w-[560px] bg-[#0A66C2] p-20 shadow-2xl rounded-[70px] border-[0.5px] border-[#084d91] flex flex-col items-center"
      >
        <div className="mb-20 text-center flex justify-center items-center gap-3">
          <span className="text-xl text-white opacity-60">✨</span>
          <h3 className="text-lg font-black tracking-[0.2em] text-white uppercase rounded-full px-6 py-2 bg-white/10">
            {duzenlemeId ? "📝 ÜRÜNÜ DÜZENLE" : "✨ ÜRÜN KAYIT KARTI"}
          </h3>
          <span className="text-xl text-white opacity-60">✨</span>
        </div>
        
        <div className="flex flex-col gap-20 w-full items-center">
          <div className="flex flex-col gap-20 w-1/2">
            <label className="text-[12px] uppercase tracking-[0.3em] text-white font-black text-center">Marka *</label>
            <input name="brand" value={form.brand} onChange={formDoldur} className="w-full bg-white text-gray-800 border-none py-4 px-8 text-sm outline-none focus:outline-none focus:ring-0 rounded-full text-center shadow-inner font-bold" placeholder="Örn: Korendy" />
          </div>

          <div className="flex flex-col gap-20 w-1/2">
            <label className="text-[12px] uppercase tracking-[0.3em] text-white font-black text-center">Ürün Türü</label>
            <input name="type" value={form.type} onChange={formDoldur} className="w-full bg-white text-gray-800 border-none py-4 px-8 text-sm outline-none focus:outline-none focus:ring-0 rounded-full text-center shadow-inner font-bold" placeholder="Örn: Serum" />
          </div>

          <div className="flex flex-col gap-20 w-1/2">
            <label className="text-[12px] uppercase tracking-[0.3em] text-white font-black text-center">Ürün Adı *</label>
            <input name="name" value={form.name} onChange={formDoldur} className="w-full bg-white text-gray-800 border-none py-4 px-8 text-sm outline-none focus:outline-none focus:ring-0 rounded-full text-center shadow-inner font-bold" placeholder="Örn: Rice Toner" />
          </div>

          <div className="flex flex-col gap-20 w-1/2">
            <label className="text-[12px] uppercase tracking-[0.3em] text-white font-black text-center">Son Kullanma Tarihi *</label>
            <input type="date" name="expiryDate" value={form.expiryDate} onChange={formDoldur} className="w-full bg-white text-gray-800 border-none py-4 px-8 text-sm outline-none focus:outline-none focus:ring-0 rounded-full text-center shadow-inner font-bold text-gray-400" />
          </div>

          <div className="flex flex-col gap-20 w-1/2">
            <label className="text-[12px] uppercase tracking-[0.3em] text-white font-black text-center">Adet</label>
            <input type="number" name="quantity" value={form.quantity} onChange={formDoldur} className="w-full bg-white text-gray-800 border-none py-4 px-8 text-sm outline-none focus:outline-none focus:ring-0 rounded-full text-center shadow-inner font-bold" />
          </div>
        </div>

        <button type="submit" className="mt-24 w-3/5 bg-[#3D9AF5] text-white py-5 text-[11px] font-black tracking-[0.4em] uppercase hover:bg-white hover:text-[#0A66C2] transition-all shadow-xl active:scale-95 rounded-full">
          {duzenlemeId ? "DEĞİŞİKLİKLERİ KAYDET" : "+ ENVANTERE EKLE"}
        </button>
      </form>
    </div>
  );
}