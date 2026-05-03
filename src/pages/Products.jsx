import { useMemo, useState } from "react";
import { FiDownload, FiFilter, FiMail, FiX } from "react-icons/fi";
import "./Products.css";
import { products, CATEGORY_LABELS } from "../data/products";
const imageModules = import.meta.glob("../assets/*.{webp,png,jpg,jpeg}", {
  eager: true,
});

const images = Object.fromEntries(
  Object.entries(imageModules).map(([path, mod]) => [path, mod.default])
);

const SORT_OPTIONS = [
  { value: "brand-asc", label: "Brand: A → Z" },
  { value: "brand-desc", label: "Brand: Z → A" },
  { value: "category", label: "Therapy Area" },
];

export default function ProductsPage() {
  const PAGE_SIZE = 9;

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("brand-asc");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ["all", ...Object.keys(CATEGORY_LABELS).filter((key) => key !== "all")];

  const filtered = useMemo(
    () =>
      products.filter((p) => {
        const matchCat =
          selectedCategory === "all" || p.category === selectedCategory;

        const term = search.toLowerCase();
        const matchSearch =
          p.brand.toLowerCase().includes(term) ||
          p.molecule.toLowerCase().includes(term);

        return matchCat && matchSearch;
      }),
    [selectedCategory, search]
  );

  const sortedProducts = useMemo(() => {
    const next = [...filtered];

    if (sortBy === "brand-asc") {
      next.sort((a, b) => a.brand.localeCompare(b.brand));
    } else if (sortBy === "brand-desc") {
      next.sort((a, b) => b.brand.localeCompare(a.brand));
    } else if (sortBy === "category") {
      next.sort((a, b) => {
        const catCompare = CATEGORY_LABELS[a.category].localeCompare(
          CATEGORY_LABELS[b.category]
        );
        if (catCompare !== 0) return catCompare;
        return a.brand.localeCompare(b.brand);
      });
    }

    return next;
  }, [filtered, sortBy]);

  const visibleProducts = sortedProducts.slice(0, visibleCount);

  const resetList = () => setVisibleCount(PAGE_SIZE);

  return (
    <div className="products-page">
      <header className="products-hero">
        <h1 className="products-title">Our Product Portfolio</h1>
        <p className="products-subtitle">
          Explore our complete cardiac, diabetic, gastro and wellness range.
        </p>

        <div className="products-cta-row">
          <a
            href="/Aylen_Pharmaceutical_Catalog.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Lentrix-Product-List.pdf"
            className="btn-outline"
          >
            <FiDownload /> Download Product List
          </a>
          <a
            href="mailto:lentrixlifesciences@gmail.com?subject=Product%20Enquiry%20-%20Lentrix"
            className="btn-primary"
          >
            <FiMail /> Mail Us for Product Enquiry
          </a>
        </div>
      </header>

      <div className="products-top-controls">
        <button
          type="button"
          className="filter-toggle"
          onClick={() => setIsFilterOpen(true)}
        >
          <FiFilter /> Filters
        </button>

        <label className="sort-control">
          <span>Sort by</span>
          <select
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value);
              resetList();
            }}
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="products-layout">
        {isFilterOpen && (
          <button
            type="button"
            className="products-overlay"
            aria-label="Close filters"
            onClick={() => setIsFilterOpen(false)}
          />
        )}

        <aside className={`product-sidebar ${isFilterOpen ? "open" : ""}`}>
          <div className="product-sidebar-head">
            <h3>Therapy Area</h3>
            <button
              type="button"
              className="sidebar-close"
              onClick={() => setIsFilterOpen(false)}
            >
              <FiX />
            </button>
          </div>

          <ul>
            {categories.map((cat) => (
              <li
                key={cat}
                className={cat === selectedCategory ? "active" : ""}
                onClick={() => {
                  setSelectedCategory(cat);
                  resetList();
                  setIsFilterOpen(false);
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
              resetList();
            }}
          />
        </aside>

        <section className="product-grid-wrap">
          <div className="products-count">
            Showing {visibleProducts.length} of {sortedProducts.length} products
          </div>

          <div className="product-grid">
            {visibleProducts.map((p) => {
              const webpKey = `../assets/${p.slug}.webp`;
              const pngKey = `../assets/${p.slug}.png`;
              const jpgKey = `../assets/${p.slug}.jpg`;
              const imgSrc = images[webpKey] || images[pngKey] || images[jpgKey];
              const mailSubject = encodeURIComponent(
                `Product Enquiry - ${p.brand}`
              );

              return (
                <article key={p.id} className="product-card">
                  <div className="product-img-wrap">
                    {imgSrc ? (
                      <img
                        src={imgSrc}
                        alt={p.brand}
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <div className="product-img-placeholder">{p.brand}</div>
                    )}
                  </div>
                  <div className="product-card-body">
                    <span className="product-category-pill">
                      {CATEGORY_LABELS[p.category]}
                    </span>
                    <h4>{p.brand}</h4>
                    <p>{p.molecule}</p>
                    <a
                      className="product-enquire"
                      href={`mailto:lentrixlifesciences@gmail.com?subject=${mailSubject}`}
                    >
                      <FiMail /> Inquire This Product
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          {visibleCount < sortedProducts.length && (
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

          {sortedProducts.length === 0 && (
            <p className="no-products">No products found.</p>
          )}
        </section>
      </div>
    </div>
  );
}
