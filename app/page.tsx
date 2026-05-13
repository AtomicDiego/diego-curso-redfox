export default function Home() {
  return (
    <main className="min-h-screen bg-amber-50 font-sans">
      {/* Header */}
      <header className="bg-rose-200 py-10 text-center">
        <h1 className="text-5xl font-bold text-rose-700">La Paloma</h1>
        <p className="mt-2 text-rose-500 text-lg">Cocina mexicana tradicional</p>
      </header>

      {/* Nav */}
      <nav className="flex justify-center gap-8 bg-orange-100 py-4 text-orange-600 font-medium">
        <a href="#entradas">Entradas</a>
        <a href="#platos">Platos fuertes</a>
        <a href="#postres">Postres</a>
        <a href="#bebidas">Bebidas</a>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        {/* Entradas */}
        <section id="entradas">
          <h2 className="text-3xl font-bold text-rose-600 mb-6">Entradas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { name: "Guacamole", desc: "Aguacate fresco, cilantro, jitomate y limón", price: "Q45" },
              { name: "Esquites", desc: "Elote en vaso con crema, queso y chile", price: "Q35" },
              { name: "Quesadillas", desc: "Tortilla de maíz con queso Oaxaca y epazote", price: "Q50" },
              { name: "Tostadas de tinga", desc: "Pollo desmenuzado en salsa de chipotle", price: "Q55" },
            ].map((item) => (
              <div key={item.name} className="bg-pink-100 rounded-2xl p-5">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-lg font-semibold text-rose-700">{item.name}</h3>
                  <span className="text-orange-500 font-bold">{item.price}</span>
                </div>
                <p className="text-rose-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Platos fuertes */}
        <section id="platos">
          <h2 className="text-3xl font-bold text-rose-600 mb-6">Platos fuertes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { name: "Tacos al pastor", desc: "Cerdo marinado en achiote con piña y cilantro", price: "Q75" },
              { name: "Enchiladas verdes", desc: "Pollo bañado en salsa verde con crema y queso", price: "Q80" },
              { name: "Chile en nogada", desc: "Poblano relleno con picadillo y salsa de nuez", price: "Q95" },
              { name: "Mole negro", desc: "Pollo en mole tradicional con arroz y frijoles", price: "Q90" },
            ].map((item) => (
              <div key={item.name} className="bg-orange-100 rounded-2xl p-5">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-lg font-semibold text-orange-700">{item.name}</h3>
                  <span className="text-rose-500 font-bold">{item.price}</span>
                </div>
                <p className="text-orange-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Postres */}
        <section id="postres">
          <h2 className="text-3xl font-bold text-rose-600 mb-6">Postres</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { name: "Churros", desc: "Con chocolate caliente para dippear", price: "Q40" },
              { name: "Tres leches", desc: "Bizcocho empapado en tres tipos de leche", price: "Q45" },
            ].map((item) => (
              <div key={item.name} className="bg-yellow-100 rounded-2xl p-5">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-lg font-semibold text-yellow-700">{item.name}</h3>
                  <span className="text-orange-500 font-bold">{item.price}</span>
                </div>
                <p className="text-yellow-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bebidas */}
        <section id="bebidas">
          <h2 className="text-3xl font-bold text-rose-600 mb-6">Bebidas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { name: "Agua de jamaica", desc: "Flor de Jamaica con azúcar y hielo", price: "Q25" },
              { name: "Horchata", desc: "Arroz con canela y leche", price: "Q25" },
              { name: "Tamarindo", desc: "Agua fresca de tamarindo natural", price: "Q25" },
            ].map((item) => (
              <div key={item.name} className="bg-purple-100 rounded-2xl p-5">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-lg font-semibold text-purple-700">{item.name}</h3>
                  <span className="text-orange-500 font-bold">{item.price}</span>
                </div>
                <p className="text-purple-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <footer className="bg-rose-200 text-center py-6 text-rose-500 text-sm">
        © 2026 La Paloma · Todos los derechos reservados
      </footer>
    </main>
  );
}
