import { useState } from "react";
import { motion } from "framer-motion";
import "./Products.css";
import { products, CATEGORY_LABELS } from "../data/products";

const imageModules = import.meta.glob("../assets/*.{png,jpg,jpeg}", {
  eager: true,
});

const images = Object.fromEntries(
  Object.entries(imageModules).map(([path, mod]) => [path, mod.default])
);

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [search, setSearch] = useState("");

  const categories = ["all",
    "lipid-lowering",
    "anti-hypertensive",
    "anti-diabetic",
    "cad-therapy",
    "vitamin-antacids",
    "nsaids-others",
  ];

  const filtered = products.filter((p) => {
    const matchCat =
      selectedCategory === "all" || p.category === selectedCategory;

    const term = search.toLowerCase();
    const matchSearch =
      p.brand.toLowerCase().includes(term) ||
      p.molecule.toLowerCase().includes(term);

    return matchCat && matchSearch;
  });

  return (
    <motion.div
      className="products-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="products-title">Our Product Portfolio</h1>

      <div className="products-layout">
        {/* SIDEBAR */}
        <aside className="product-sidebar">
          <h3>Therapy Area</h3>
          <ul>
            {categories.map((cat) => (
              <li
                key={cat}
                className={cat === selectedCategory ? "active" : ""}
                onClick={() => setSelectedCategory(cat)}
              >
                {CATEGORY_LABELS[cat]}
              </li>
            ))}
          </ul>

          <input
            type="text"
            className="product-search"
            placeholder="Search by brand or molecule..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </aside>

        {/* GRID */}
        <section className="product-grid">
          {filtered.map((p) => {
            const pngKey = `../assets/${p.slug}.png`;
            const jpgKey = `../assets/${p.slug}.jpg`;
            const imgSrc = images[pngKey] || images[jpgKey];

            return (
              <motion.div
                key={p.id}
                className="product-card"
                whileHover={{ translateY: -6, boxShadow: "0 14px 32px rgba(0,0,0,0.16)" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="product-img-wrap">
                  {imgSrc ? (
                    <img src={imgSrc} alt={p.brand} />
                  ) : (
                    <div className="product-img-placeholder">
                      {p.brand}
                    </div>
                  )}
                </div>
                <h4>{p.brand}</h4>
                <p>{p.molecule}</p>
              </motion.div>
            );
          })}

          {filtered.length === 0 && (
            <p className="no-products">No products found.</p>
          )}
        </section>
      </div>
    </motion.div>
  );
}
