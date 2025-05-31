export default function CerveceriaLanding() {
    return (
      <div className="bg-[#f6f1e7] text-[#1b3a2f]">
        {/* Header */}
        <header className="flex justify-between items-center p-4 bg-[#2c4c3b] text-[#f6f1e7]">
          <h1 className="text-2xl font-bold">Cervecería Artesanal</h1>
          <nav className="space-x-4">
            <a href="#catalogo" className="hover:underline">Catálogo</a>
            <a href="#historia" className="hover:underline">Nuestra Historia</a>
            <a href="#contacto" className="hover:underline">Contacto</a>
          </nav>
        </header>
  
        {/* Hero Banner */}
        <section className="bg-[url('/hero.jpg')] bg-cover bg-center h-[60vh] flex items-center justify-center text-center">
          <div className="bg-black bg-opacity-50 p-8 rounded-xl">
            <h2 className="text-4xl text-[#f6f1e7] font-bold mb-2">Sabor que inspira</h2>
            <p className="text-[#f6f1e7] text-lg">Cervezas artesanales únicas, hechas con pasión patagónica.</p>
          </div>
        </section>
  
        {/* Catálogo */}
        <section id="catalogo" className="py-12 px-4 max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">Catálogo</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl shadow p-4">
                <img src={`/producto${i}.jpg`} alt="Cerveza" className="rounded-xl mb-4 w-full h-48 object-cover" />
                <h4 className="text-xl font-semibold mb-2">Cerveza Rubia</h4>
                <p className="text-sm mb-2">Refrescante y ligera, perfecta para cualquier ocasión.</p>
                <button className="bg-[#d4af37] text-white px-4 py-2 rounded-xl">Agregar al carrito</button>
              </div>
            ))}
          </div>
        </section>
  
        {/* Historia */}
        <section id="historia" className="py-16 px-4 bg-[#e8dfc1] text-[#1b3a2f]">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Nuestra Historia</h3>
            <p className="text-lg">
              Fundada en la Patagonia, nuestra cervecería nace del amor por la naturaleza, la tradición cervecera
              europea y la innovación artesanal. Cada sorbo cuenta una historia de montaña, agua pura y pasión cervecera.
            </p>
          </div>
        </section>
  
        {/* Footer */}
        <footer id="contacto" className="bg-[#2c4c3b] text-[#f6f1e7] text-center py-6">
          <p>&copy; 2025 Cervecería Artesanal. Todos los derechos reservados.</p>
          <p>Seguinos en Instagram @cerveceria_artesanal</p>
        </footer>
      </div>
    );
  }
  