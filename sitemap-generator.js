// src/sitemap.js
const Sitemap = require("react-router-sitemap").default; // Ensure you import correctly
const fs = require("fs");
const hostname = "https://srivarumotors.com";

// Define your routes
const routes = [
  { path: "/", changefreq: "daily", priority: 1 },
  { path: "/about-us", changefreq: "monthly", priority: 0.8 },
  { path: "/showrooms", changefreq: "monthly", priority: 0.8 },
  { path: "/prana-electric-bike", changefreq: "monthly", priority: 0.8 },
  { path: "/book-a-test-drive", changefreq: "monthly", priority: 0.8 },
  { path: "/contact-us", changefreq: "monthly", priority: 0.8 },
  { path: "/blogs", changefreq: "daily", priority: 0.7 },
  { path: "/payment", changefreq: "monthly", priority: 0.8 },
  { path: "/paychecks", changefreq: "monthly", priority: 0.8 },
  { path: "/careers", changefreq: "monthly", priority: 0.8 },
  { path: "/news", changefreq: "daily", priority: 0.7 },
  { path: "/address-details", changefreq: "monthly", priority: 0.8 },
  { path: "/signup", changefreq: "monthly", priority: 0.8 },
  { path: "/terms-condition", changefreq: "monthly", priority: 0.8 },
  { path: "/cookie-policies", changefreq: "monthly", priority: 0.8 },
  { path: "/policy", changefreq: "monthly", priority: 0.8 },
  { path: "/refund-policy", changefreq: "monthly", priority: 0.8 },
  { path: "/faq", changefreq: "monthly", priority: 0.8 },
  { path: "/total-cost-of-ownership", changefreq: "monthly", priority: 0.8 },
  { path: "/become-dealer", changefreq: "monthly", priority: 0.8 },
  { path: "/myorders", changefreq: "monthly", priority: 0.8 },
];

// Create sitemap instance
const sitemap = new Sitemap(routes);

// Build sitemap
const xml = sitemap.build(hostname).save("./public/sitemap.xml");

console.log("Sitemap generated successfully.");
