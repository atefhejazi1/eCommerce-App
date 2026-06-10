import { Link } from "react-router";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "./Home.module.css";

/* ── static data ────────────────────────────────────────── */
const stats = [
  { value: "10K+", label: "Happy Customers", icon: "👥" },
  { value: "500+", label: "Products",         icon: "📦" },
  { value: "50+",  label: "Categories",       icon: "🏷️" },
  { value: "99%",  label: "Satisfaction",     icon: "⭐" },
];

const categories = [
  { label: "Men",   icon: "👔", href: "/categories/products/men",   color: "#1e3a5f" },
  { label: "Women", icon: "👗", href: "/categories/products/women", color: "#3b1f5f" },
  { label: "Kids",  icon: "🎒", href: "/categories/products/kids",  color: "#1f5f3e" },
  { label: "Baby",  icon: "🍼", href: "/categories/products/baby",  color: "#5f3b1f" },
  { label: "Sport", icon: "🏃", href: "/categories/products/sport", color: "#1f4f5f" },
];

const features = [
  {
    icon: "🛒",
    color: "#0dcaf0",
    title: "Easy Shopping",
    desc: "Browse thousands of products across all categories with a seamless, lightning-fast experience.",
  },
  {
    icon: "❤️",
    color: "#f43f5e",
    title: "Personal Wishlist",
    desc: "Save your favourite items and come back to them whenever you're ready to buy.",
  },
  {
    icon: "📦",
    color: "#f59e0b",
    title: "Order Tracking",
    desc: "Track every order from your personal dashboard — always know where your items are.",
  },
  {
    icon: "🔒",
    color: "#10b981",
    title: "Secure Checkout",
    desc: "Your payment and personal data is always encrypted and 100 % protected.",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Regular Customer",
    text: "The shopping experience is incredibly smooth. Found exactly what I needed in seconds, and delivery was faster than expected!",
    rating: 5,
    avatar: "SM",
    avatarColor: "#0dcaf0",
  },
  {
    name: "Ahmed K.",
    role: "Loyal Shopper",
    text: "Love the wishlist feature — I keep saving items and coming back. The prices are great and the quality never disappoints.",
    rating: 5,
    avatar: "AK",
    avatarColor: "#a855f7",
  },
  {
    name: "Lina R.",
    role: "New Customer",
    text: "Registered in under a minute, placed my first order right after. The whole process felt effortless and trustworthy.",
    rating: 5,
    avatar: "LR",
    avatarColor: "#10b981",
  },
];

/* ── hero mock product cards ────────────────────────────── */
const mockProducts = [
  { name: "Men Jersey Top",         price: "249 EGP", tag: "New",  col: "#1e3a5f", emoji: "👔" },
  { name: "Women Floral Dress",     price: "399 EGP", tag: "Hot",  col: "#3b1f5f", emoji: "👗" },
  { name: "Kids Sport Sneakers",    price: "180 EGP", tag: "Sale", col: "#1f5f3e", emoji: "👟" },
];

function Home() {
  return (
    <div className={styles.page}>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className={styles.hero}>
        {/* animated grid overlay */}
        <div className={styles.heroGrid} aria-hidden="true" />

        {/* glowing orbs */}
        <div className={`${styles.orb} ${styles.orbTopRight}`}  aria-hidden="true" />
        <div className={`${styles.orb} ${styles.orbBottomLeft}`} aria-hidden="true" />

        <Container className={styles.heroInner}>
          <Row className="align-items-center gy-5">

            {/* ── Left copy ── */}
            <Col lg={6}>
              <div className={styles.heroBadge}>
                <span className={styles.heroBadgeDot} />
                New arrivals every week
              </div>

              <h1 className={styles.heroTitle}>
                Discover &amp; Shop<br />
                <span className={styles.heroTitleAccent}>Top Products</span>
                <br />Online
              </h1>

              <p className={styles.heroSub}>
                Curated collections across fashion, sport, kids &amp; more.
                Great prices, fast delivery, and a store that actually cares.
              </p>

              <div className={styles.heroCta}>
                <Button as={Link as any} to="/categories" className={styles.btnPrimary}>
                  Shop Now →
                </Button>
                <Button as={Link as any} to="/register" className={styles.btnGhost}>
                  Join Free
                </Button>
              </div>

              {/* mini stats */}
              <div className={styles.heroStats}>
                {stats.map((s) => (
                  <div key={s.label} className={styles.heroStat}>
                    <span className={styles.heroStatValue}>{s.value}</span>
                    <span className={styles.heroStatLabel}>{s.label}</span>
                  </div>
                ))}
              </div>
            </Col>

            {/* ── Right floating cards ── */}
            <Col lg={6} className="d-none d-lg-flex justify-content-center">
              <div className={styles.heroCards}>
                {mockProducts.map((p, i) => (
                  <div
                    key={p.name}
                    className={styles.heroCard}
                    style={{
                      animationDelay: `${i * 0.6}s`,
                      "--card-color": p.col,
                    } as React.CSSProperties}
                  >
                    <div className={styles.heroCardImg} style={{ background: p.col }}>
                      <span className={styles.heroCardEmoji}>{p.emoji}</span>
                      <span className={styles.heroCardTag}
                        style={{ background: i === 2 ? "#f43f5e" : i === 1 ? "#f59e0b" : "var(--primary)" }}>
                        {p.tag}
                      </span>
                    </div>
                    <div className={styles.heroCardBody}>
                      <p className={styles.heroCardName}>{p.name}</p>
                      <p className={styles.heroCardPrice}>{p.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Col>

          </Row>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          STATS STRIP
      ══════════════════════════════════════ */}
      <section className={styles.statsStrip}>
        <Container>
          <Row className="g-0">
            {stats.map((s, i) => (
              <Col xs={6} md={3} key={s.label}>
                <div className={`${styles.statCell} ${i < 3 ? styles.statCellBorder : ""}`}>
                  <span className={styles.statIcon}>{s.icon}</span>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          CATEGORIES PREVIEW
      ══════════════════════════════════════ */}
      <section className={styles.catSection}>
        <Container>
          <div className={styles.sectionHead}>
            <div>
              <h2 className={styles.sectionTitle}>Shop by Category</h2>
              <p className={styles.sectionSub}>Find exactly what you're looking for</p>
            </div>
            <Link to="/categories" className={styles.viewAll}>View all →</Link>
          </div>

          <div className={styles.catGrid}>
            {categories.map((c) => (
              <Link key={c.label} to={c.href} className={styles.catCard}
                style={{ "--cat-color": c.color } as React.CSSProperties}>
                <div className={styles.catCardInner}>
                  <span className={styles.catEmoji}>{c.icon}</span>
                  <span className={styles.catLabel}>{c.label}</span>
                  <span className={styles.catArrow}>→</span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          FEATURES
      ══════════════════════════════════════ */}
      <section className={styles.featuresSection}>
        <Container>
          <div className={styles.sectionHead}>
            <div>
              <h2 className={styles.sectionTitle}>Why Choose Us?</h2>
              <p className={styles.sectionSub}>Built for a better shopping experience</p>
            </div>
          </div>

          <Row className="g-4">
            {features.map((f) => (
              <Col md={6} lg={3} key={f.title}>
                <div className={styles.featureCard}>
                  <div
                    className={styles.featureIconWrap}
                    style={{ background: f.color + "22", color: f.color }}
                  >
                    <span>{f.icon}</span>
                  </div>
                  <h5 className={styles.featureTitle}>{f.title}</h5>
                  <p className={styles.featureDesc}>{f.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════ */}
      <section className={styles.testiSection}>
        <Container>
          <div className={styles.sectionHead} style={{ justifyContent: "center" }}>
            <div className="text-center">
              <h2 className={styles.sectionTitle}>What Our Customers Say</h2>
              <p className={styles.sectionSub}>Real reviews from real shoppers</p>
            </div>
          </div>

          <Row className="g-4 mt-1">
            {testimonials.map((t) => (
              <Col md={4} key={t.name}>
                <div className={styles.testiCard}>
                  <div className={styles.testiStars}>
                    {"★".repeat(t.rating)}
                  </div>
                  <p className={styles.testiText}>"{t.text}"</p>
                  <div className={styles.testiAuthor}>
                    <div
                      className={styles.testiAvatar}
                      style={{ background: t.avatarColor }}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <div className={styles.testiName}>{t.name}</div>
                      <div className={styles.testiRole}>{t.role}</div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════ */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaOrb1} aria-hidden="true" />
        <div className={styles.ctaOrb2} aria-hidden="true" />
        <Container className="text-center position-relative">
          <div className={styles.ctaEyebrow}>Start Shopping Today</div>
          <h2 className={styles.ctaBannerTitle}>
            Your next favourite find<br />is one click away
          </h2>
          <p className={styles.ctaBannerSub}>
            Join over 10,000 happy customers. Create your free account and
            start exploring thousands of products right now.
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Button as={Link as any} to="/register" className={styles.btnPrimary}>
              Create Free Account
            </Button>
            <Button as={Link as any} to="/categories" className={styles.btnGhost}>
              Browse Categories
            </Button>
          </div>
        </Container>
      </section>

    </div>
  );
}

export default Home;
