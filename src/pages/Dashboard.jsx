import React from 'react';

export default function Dashboard({ products, sil, duzenle, today }) {
  const grouped = products.reduce((acc, p) => {
    const brandKey = p.brand || "DİĞER";
    if (!acc[brandKey]) acc[brandKey] = [];
    acc[brandKey].push(p);
    return acc;
  }, {});

  const sortedBrands = Object.keys(grouped).sort();

  return (
    <div className="w-full flex flex-col items-center gap-16 mt-[218px] pt-32 border-t border-gray-200/50">
      {sortedBrands.map(brand => {
        const brandItems = grouped[brand];
        const expiredInBrand = brandItems.some(p => p.expiryDate < today);

        return (
          <section key={brand} className="w-full max-w-lg bg-white p-12 rounded-[50px] shadow-sm border border-gray-50 text-center flex flex-col items-center relative overflow-hidden">
            {expiredInBrand && <div className="absolute top-0 left-0 w-full h-2 bg-red-500 animate-pulse"></div>}
            
            <div className="w-full flex flex-col items-center border-b border-gray-50 pb-6 mb-8">
              <h3 className="text-3xl font-black uppercase tracking-tight text-[#0A66C2]">{brand}</h3>
              <span className="text-[10px] font-black text-gray-300 uppercase italic bg-gray-50 px-3 py-1 rounded-full mt-3">{brandItems.length} ÜRÜN</span>
            </div>

            <div className="w-full space-y-12">
              {brandItems.map(p => {
                const isExpired = p.expiryDate < today;
                return (
                  <div key={p.id} className="flex flex-col items-center group relative pb-6 border-b border-gray-50/50 last:border-none">
                    <span className={`text-lg font-bold uppercase ${isExpired ? 'text-red-500' : 'text-gray-900'}`}>{p.name}</span>
                    <span className="text-xs font-medium text-gray-400 mt-1 italic">{p.type}</span>
                    <div className="flex gap-3 mt-4 justify-center">
                      <span className={`text-[9px] font-black px-3 py-1.5 rounded-xl uppercase tracking-widest ${isExpired ? 'bg-red-500 text-white animate-pulse' : 'bg-gray-50 text-gray-400'}`}>SKT: {p.expiryDate}</span>
                      <span className="text-[9px] font-black px-3 py-1.5 rounded-xl bg-gray-50 text-gray-400 uppercase tracking-widest">{p.quantity} ADET</span>
                    </div>
                    <div className="absolute -right-4 top-0 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => duzenle(p)} className="text-[9px] font-black text-orange-400 hover:underline uppercase">DÜZENLE</button>
                      <button onClick={() => sil(p.id)} className="text-[9px] font-black text-red-300 hover:text-red-500 uppercase">SİL</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}