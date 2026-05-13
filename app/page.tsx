export default function Home() {
  return (
    <main className="min-h-screen bg-amber-50 font-sans">
      {/* Header */}
      <header className="bg-rose-200 py-10 text-center">
        <h1 className="text-5xl font-bold text-rose-700">La Paloma</h1>
        <p className="mt-2 text-rose-500 text-lg">Cocina estadounidense clásica</p>
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
              { name: "Buffalo Wings", desc: "Alitas crujientes bañadas en salsa picante y aderezo ranch", price: "Q55" },
              { name: "Mozzarella Sticks", desc: "Palitos de queso empanizados con salsa marinara", price: "Q45" },
              { name: "Loaded Nachos", desc: "Nachos con queso cheddar, jalapeños, frijoles y crema agria", price: "Q60" },
              { name: "Mac & Cheese Bites", desc: "Bocados de macarrones con queso fritos y crujientes", price: "Q50" },
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
              { name: "Cheeseburger", desc: "Hamburguesa de res con queso cheddar, tocino y papas fritas", price: "Q85" },
              { name: "BBQ Ribs", desc: "Costillas de cerdo glaseadas en salsa barbacoa con coleslaw", price: "Q120" },
              { name: "Southern Fried Chicken", desc: "Pollo frito estilo sureño con waffles y miel de maple", price: "Q95" },
              { name: "Philly Cheesesteak", desc: "Sándwich de res, cebolla caramelizada y queso provolone", price: "Q90" },
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
              { name: "Apple Pie", desc: "Tarta de manzana con canela y bola de helado de vainilla", price: "Q45" },
              { name: "NY Cheesecake", desc: "Pay de queso estilo Nueva York con coulis de frutos rojos", price: "Q55" },
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
              { name: "Root Beer", desc: "Refresco clásico de raíz servido bien frío", price: "Q25" },
              { name: "Lemonade", desc: "Limonada casera con menta fresca y hielo", price: "Q25" },
              { name: "Iced Tea", desc: "Té helado estilo sureño endulzado con limón", price: "Q25" },
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
