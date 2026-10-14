const products = [
  { name: 'TK Classic Logo T-Shirt', price: '25€', image: 'https://i.postimg.cc/ZY6cjxdq/Gemini-Generated-Image-4v7xsn4v7xsn4v7x.jpg', link: 'https://ko-fi.com/s/58ec9b776d' },
  { name: 'Graffiti Sticker Design T-Shirt', price: '25€', image: 'https://i.postimg.cc/zDTjpFgX/Gemini-Generated-Image-r3j89ur3j89ur3j8.jpg' },
  { name: 'TK Sticker Design T-Shirt', price: '25€', image: 'https://i.postimg.cc/ry5JgNtY/Gemini-Generated-Image-sjh0ussjh0ussjh0.jpg' },
]

export default function Store() {
  return (
    <main style={{ paddingTop: 64 }}>
      <section className="section" style={{ paddingBottom: 88 }}>
        <div className="container">
          <div style={{ marginBottom: 48 }}>
            <p className="text-dim uppercase" style={{ fontSize: 11, marginBottom: 12, letterSpacing: '0.16em' }}>— Official Merch</p>
            <h1 style={{ fontSize: 'clamp(72px, 12vw, 148px)' }}>
              STORE<span className="text-acid">.</span>
            </h1>
            <p style={{ color: 'var(--fg-dim)', fontSize: 13, marginTop: 16 }}>
              TechnoKosovo essentials. Find your next favorite.
            </p>
          </div>

          <div className="store-grid">
            {products.map((product, index) => (
              <article key={product.name} className="card store-product">
                {product.link && <a className="store-product-link" href={product.link} target="_blank" rel="noreferrer" aria-label={`Buy ${product.name}`} />}
                <div className="store-product-image">
                  <img src={product.image} alt={`${product.name} product`} />
                </div>
                <div className="store-product-info">
                  <div>
                    <h2 className="store-product-name">{product.name}</h2>
                    <p className="store-product-price">{product.price}</p>
                  </div>
                  <span className="store-product-number">0{index + 1}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .store-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }
        .store-product {
          position: relative;
          overflow: hidden;
          background: var(--bg2);
        }
        .store-product-link {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        .store-product-image {
          width: 100%;
          aspect-ratio: 0.9;
          background-color: #f4f4f2;
        }
        .store-product-image img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .store-product-info {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
          padding: 20px;
        }
        .store-product-name {
          color: #d3a62f;
          font-family: var(--font-b);
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0.14em;
          line-height: 1.5;
          text-transform: uppercase;
        }
        .store-product-price {
          margin-top: 8px;
          color: var(--fg);
          font-size: 14px;
        }
        .store-product-number {
          color: var(--fg-dim);
          font-size: 10px;
          letter-spacing: 0.1em;
        }
        @media (max-width: 900px) {
          .store-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 560px) {
          .store-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  )
}
