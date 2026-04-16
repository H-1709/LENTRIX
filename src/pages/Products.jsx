import { useState } from "react";
import "./Products.css";
import { products, CATEGORY_LABELS } from "../data/products";

const imageModules = import.meta.glob("../assets/*.{png,jpg,jpeg}", {
  eager: true,
});

const images = Object.fromEntries(
  Object.entries(imageModules).map(([path, mod]) => [path, mod.default])
);

export default function ProductsPage() {
  const PAGE_SIZE = 9;
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

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

  const visibleProducts = filtered.slice(0, visibleCount);

  return (
    <div
      className="products-page"
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
                onClick={() => {
                  setSelectedCategory(cat);
                  setVisibleCount(PAGE_SIZE);
                }}
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
            onChange={(e) => {
              setSearch(e.target.value);
              setVisibleCount(PAGE_SIZE);
            }}
          />
        </aside>

        {/* GRID */}
        <section className="product-grid">
          {visibleProducts.map((p) => {
            const pngKey = `../assets/${p.slug}.png`;
            const jpgKey = `../assets/${p.slug}.jpg`;
            const imgSrc = images[pngKey] || images[jpgKey];

            return (
              <div
                key={p.id}
                className="product-card"
              >
                <div className="product-img-wrap">
                  {imgSrc ? (
                    <img src={imgSrc} alt={p.brand} loading="lazy" decoding="async" />
                  ) : (
                    <div className="product-img-placeholder">
                      {p.brand}
                    </div>
                  )}
                </div>
                <h4>{p.brand}</h4>
                <p>{p.molecule}</p>
              </div>
            );
          })}

          {filtered.length === 0 && (
            <p className="no-products">No products found.</p>
          )}
        </section>
      </div>

      {visibleCount < filtered.length && (
        <div className="load-more-wrap">
          <button
            type="button"
            className="load-more-btn"
            onClick={() => setVisibleCount((current) => current + PAGE_SIZE)}
          >
            Load more products
          </button>
        </div>
      )}
    </div>
  );
}
