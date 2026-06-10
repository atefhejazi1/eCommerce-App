import { Row, Col } from "react-bootstrap";
import { Heading } from "@components/common";
import styles from "./AboutUs.module.css";

const values = [
  { icon: "🌟", title: "Quality First", desc: "Every product is vetted to meet our high-quality standards before it reaches you." },
  { icon: "🤝", title: "Customer Focus", desc: "We put customers at the heart of everything we do, from browsing to delivery." },
  { icon: "💡", title: "Innovation", desc: "Constantly improving our platform so shopping stays fast, easy, and enjoyable." },
  { icon: "🌍", title: "Sustainability", desc: "Committed to responsible sourcing and reducing our environmental footprint." },
];

const stats = [
  { number: "10K+", label: "Happy Customers" },
  { number: "500+", label: "Products" },
  { number: "50+", label: "Categories" },
  { number: "99%", label: "Satisfaction Rate" },
];

function AboutUs() {
  return (
    <div>
      <Heading title="About Us" />

      {/* Story */}
      <Row className="align-items-center mb-5 g-4">
        <Col md={6}>
          <h3 className={styles.subTitle}>Our Story</h3>
          <p className={styles.body}>
            Our eCom was founded with one simple idea: make online shopping
            straightforward, trustworthy, and enjoyable for everyone. We started
            small — a handful of categories and a passion for customer service —
            and have grown into a destination for thousands of shoppers.
          </p>
          <p className={styles.body}>
            We believe that great products should be easy to find, easy to buy,
            and delivered with confidence. Whether you're shopping for the
            latest electronics, everyday essentials, or a gift for someone
            special, we've got you covered.
          </p>
        </Col>
        <Col md={6}>
          <div className={styles.storyVisual}>
            <span>🛍️</span>
            <p>Since 2020</p>
          </div>
        </Col>
      </Row>

      {/* Stats */}
      <div className={styles.statsSection}>
        <Row className="g-4 text-center">
          {stats.map((s) => (
            <Col xs={6} md={3} key={s.label}>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>{s.number}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      {/* Values */}
      <div className="mt-5">
        <h3 className={`${styles.subTitle} text-center mb-4`}>Our Values</h3>
        <Row className="g-4">
          {values.map((v) => (
            <Col md={3} sm={6} key={v.title}>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>{v.icon}</div>
                <h6 className={styles.valueTitle}>{v.title}</h6>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default AboutUs;
