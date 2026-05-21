import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaRocket, FaShieldAlt, FaSync, FaBolt, FaDatabase,
  FaNetworkWired, FaCogs, FaArrowRight,
  FaLock, FaChevronDown, FaChevronUp,
  FaQuoteLeft, FaStar, FaGoogle, FaLayerGroup, FaGlobe
} from 'react-icons/fa';
import AnimatedRoadmap from '../components/AnimatedRoadmap';
import '../styles/products.css';
import compack1 from '../assets/compack1.png';
import compack2 from '../assets/compack2.png';
import compack3 from '../assets/compack3.png';
import compack4 from '../assets/compack4.png';
import compack5 from '../assets/compack5.png';
import compack6 from '../assets/compack6.png';
import compack7 from '../assets/compack7.png';
import hrm1 from '../assets/hrm1.png';
import hrm2 from '../assets/hrm2.png';
import hrm3 from '../assets/hrm3.png';
import hrm4 from '../assets/hrm4.png';
import hrm5 from '../assets/hrm5.png';
import hrm6 from '../assets/hrm6.png';
import hrm7 from '../assets/hrm7.png';
import hrm8 from '../assets/hrm8.png';
import hrm9 from '../assets/hrm9.png';
import hrm10 from '../assets/hrm10.png';
import ecommerce1 from '../assets/E1.png';
import ecommerce2 from '../assets/E2.png';
import ecommerce3 from '../assets/E3.png';
import ecommerce4 from '../assets/E4.png';

const WA_PROD = '919500181230';
const openWA_Prod = (msg) =>
  window.open(`https://wa.me/${WA_PROD}?text=${encodeURIComponent(msg)}`, '_blank');

const compackProduct = {
  name: 'Inventory System',
  category: 'Inventory Node',
  description: 'Inventory management project developed for efficient product tracking, real-time stock visibility, billing, quotation management, and streamlined warehouse operations, helping businesses manage inventory movement, monitor stock levels, generate invoices, handle quotations, and improve overall operational efficiency through a centralized and user-friendly system with secure data management and advanced reporting features for better business decision-making.',
  tools: ['React.js', 'FastAPI', 'Uvicorn', 'Pydantic', 'Docker', 'REST API'],
  images: [compack1, compack2, compack3, compack4, compack5, compack6, compack7]
};

const hrmProduct = {
  name: 'HRM Software',
  category: 'HRM Node',
  description: 'The HRMS software is a centralized system used to manage employee attendance, payroll, leave requests, tasks, and overall company operations efficiently. It provides separate dashboards and access controls for Administrator, HR, Manager, Team Lead, and Employee roles to improve workflow and productivity. The system also automates salary processing, attendance tracking, leave approvals, project monitoring, and secure payslip generation for better organizational management.',
  tools: ['React.js', 'vite', 'Java', 'Spring Boot ', 'JWT', 'JavaMailSender ', 'MySQL', 'MySQL Workbench'],
  images: [hrm1, hrm2, hrm3, hrm4, hrm5, hrm6, hrm7, hrm8, hrm9, hrm10]
};

const ecommerceProduct = {
  name: 'Smart E-commerce',
  category: 'E-commerce Node',
  description: 'The Smart E-Commerce Billing & Inventory Management System automates billing, inventory, customer management, GST calculation, and invoice generation for retail businesses. It provides secure Admin and Cashier dashboards with real-time stock tracking, sales analytics, and low stock alerts. The system helps improve business efficiency, reduce manual errors, and simplify daily store operations. It also enables fast and secure invoice processing with professional business management features.',
  tools: ['React.js', 'Java', 'Spring Boot', 'MySQL', 'JWT', 'iText PDF ', 'Swagger','Postman','Docker','REST API'],
  images: [ecommerce1, ecommerce2, ecommerce3, ecommerce4]
};

const ProductsPage = () => {
  const { content } = useContent();
  const p = content.products;

  const [products, setProducts]             = useState([]);
  const [loading, setLoading]               = useState(true);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [compackImageIndex, setCompackImageIndex] = useState(0);
  const [hrmImageIndex, setHrmImageIndex] = useState(0);
  const [ecommerceImageIndex, setEcommerceImageIndex] = useState(0);
  const [activeInventoryCard, setActiveInventoryCard] = useState(0);

  useEffect(() => {
    fetch('http://localhost:5000/api/public/products')
      .then(res => res.json())
      .then(data => { setProducts(data); setLoading(false); })
      .catch(() => { setLoading(false); });
  }, []);

  useEffect(() => {
    const compackTimer = setInterval(() => {
      setCompackImageIndex((currentIndex) => (currentIndex + 1) % compackProduct.images.length);
    }, 2500);
    const hrmTimer = setInterval(() => {
      setHrmImageIndex((currentIndex) => (currentIndex + 1) % hrmProduct.images.length);
    }, 2500);
    const ecommerceTimer = setInterval(() => {
      setEcommerceImageIndex((currentIndex) => (currentIndex + 1) % ecommerceProduct.images.length);
    }, 2500);

    return () => {
      clearInterval(compackTimer);
      clearInterval(hrmTimer);
      clearInterval(ecommerceTimer);
    };
  }, []);

  useEffect(() => {
    const inventoryCardTimer = setInterval(() => {
      setActiveInventoryCard((currentIndex) => (currentIndex + 1) % 3);
    }, 10000);

    return () => clearInterval(inventoryCardTimer);
  }, []);

  const inventoryCards = [
    { ...hrmProduct, imageIndex: hrmImageIndex },
    { ...compackProduct, imageIndex: compackImageIndex },
    { ...ecommerceProduct, imageIndex: ecommerceImageIndex }
  ];

  const showPreviousInventoryCard = () => {
    setActiveInventoryCard((currentIndex) =>
      currentIndex === 0 ? inventoryCards.length - 1 : currentIndex - 1
    );
  };

  const showNextInventoryCard = () => {
    setActiveInventoryCard((currentIndex) =>
      currentIndex === inventoryCards.length - 1 ? 0 : currentIndex + 1
    );
  };

  const architecturalDNA = [
    { icon: <FaBolt />, title: "Quantum Sync", desc: "Low-latency data kernels for high-speed enterprise nodes synchronized globally." },
    { icon: <FaShieldAlt />, title: "Zero-Trust Mesh", desc: "Multi-layered identity validation nodes ensure secure cluster environments." },
    { icon: <FaSync />, title: "Immutable Sync", desc: "System logs mirrored on private ledgers for audit accuracy." }
  ];

  const RoadmapSteps = [
    { id: "01", t: "Technical Discovery", d: "Identifying scaling bottlenecks in current tech stacks." },
    { id: "02", t: "Architecture Build", d: "Designing customized clusters for production load." },
    { id: "03", t: "Mesh Integration", d: "Securing nodes and performing vulnerability scans." },
    { id: "04", t: "Global Activation", d: "Zero-downtime deployment across global nodes." }
  ];

  const reviews = [
    { id: 1, name: "Karthik R.", role: "HR Operations Lead", text: "The HRM software made attendance, leave approvals, payroll checks, and employee records much easier to manage from one dashboard.", rating: 5 },
    { id: 2, name: "Meena S.", role: "Warehouse Manager", text: "The inventory system helped our team track stock, billing, quotations, and product movement without depending on manual sheets.", rating: 5 },
    { id: 3, name: "Rahul V.", role: "Retail Business Owner", text: "Smart E-commerce gave us a clean product catalog, faster billing, stock alerts, and simple order handling for daily store operations.", rating: 5 }
  ];

  return (
    <div className="products-page min-h-screen bg-[#020817] text-white font-sans">

      {/* HERO */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block py-1.5 px-4 rounded-full bg-white text-indigo-600 font-semibold tracking-wide text-xs mb-6 border border-indigo-100 shadow-sm">
            Product Hub Node Activated
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6 tracking-tight">
            Future-Proof <br/>
            <span className="text-black">Product Disruptors</span>
          </h1>

          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10 font-medium">
            We build high-performance software nodes designed for enterprise stability. Deploy disruptive kernels globally with zero-latency sync.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => document.getElementById('inventory').scrollIntoView({ behavior: 'smooth' })} 
              className="bg-indigo-600 text-white px-10 py-4 rounded-xl font-semibold text-sm transition-all shadow-xl hover:bg-slate-900 hover:-translate-y-1"
            >
              Explore Inventory
            </button>

            <button 
              className="bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 px-10 py-4 rounded-xl font-semibold text-sm transition-all hover:border-indigo-400"
            >
              Technical Docs
            </button>
          </div>
        </motion.div>
      </div>

      {/* CORE DNA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {architecturalDNA.map((node, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="bg-white/70 backdrop-blur-md p-10 rounded-[2.5rem] border border-white transition-all group hover:shadow-2xl text-center">
              <div className="text-2xl text-indigo-600 mb-6 flex justify-center group-hover:scale-110 transition-transform">
                {node.icon}
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-3 tracking-tight">
                {node.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                {node.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* PROCESS — Animated Roadmap */}
      <div className="mb-32">
        <AnimatedRoadmap
          title="Deployment Lifecycle"
          subtitle="Agile Activation Sync Nodes — from discovery to global deployment."
          accent="bg-indigo-500"
          steps={[
            { icon: <FaSearch />,      label: 'Technical Discovery', desc: 'Identifying scaling bottlenecks in current tech stacks.',           color: 'bg-indigo-600' },
            { icon: <FaLayerGroup />,  label: 'Architecture Build',   desc: 'Designing customized clusters for production load.',               color: 'bg-violet-600' },
            { icon: <FaShieldAlt />,   label: 'Mesh Integration',     desc: 'Securing nodes and performing vulnerability scans.',              color: 'bg-blue-600'   },
            { icon: <FaGlobe />,       label: 'Global Activation',    desc: 'Zero-downtime deployment across global nodes.',                   color: 'bg-cyan-600'   },
          ]}
        />
      </div>

      {/* INVENTORY */}
      <div id="inventory" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="text-center mb-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 tracking-tight">
            Active Inventory
          </h2>
          <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        {loading ? (
          <div className="text-center py-20 text-indigo-600 font-medium animate-pulse text-sm">
            Syncing Ledger...
          </div>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((item) => (
              <motion.div key={item._id} whileHover={{ y: -5 }} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all h-full flex flex-col group">
                <div className="h-56 bg-slate-50 rounded-3xl overflow-hidden mb-8 relative shadow-inner">
                  <img 
                    src={item.image || "https://images.unsplash.com/photo-1460925895917-afdab827c52f"} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    alt="" 
                  />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                  {item.name}
                </h3>

                <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6 border-l-4 border-indigo-100 pl-4">
                  {item.description}
                </p>

                <div className="bg-indigo-50 p-5 rounded-2xl mb-8 flex justify-between items-center border border-indigo-100">
                  <span className="text-xs font-medium text-indigo-400">
                    Monthly sync
                  </span>
                  <span className="text-lg font-bold text-indigo-700">
                    {item.price || "$299"}/mo
                  </span>
                </div>

                <div className="grid gap-3 mt-auto">
                  <button
                    onClick={() => openWA_Prod(`Hello DVein Team, I am interested in launching a trial for: ${item.name}`)}
                    className="w-full py-3 bg-indigo-600 text-white rounded-xl font-semibold text-sm shadow-lg hover:bg-slate-900 transition-all flex items-center justify-center gap-2"
                  >
                    <FaPlayCircle className="text-base" /> Launch Trial
                  </button>
                  <button
                    onClick={() => openWA_Prod(`Hello DVein Team, I want member access for: ${item.name}`)}
                    className="w-full py-3 bg-white text-slate-900 border border-slate-200 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-sm hover:border-indigo-400 transition-all"
                  >
                    <FaLock className="text-indigo-600" /> Member Access
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="max-w-5xl mx-auto">
            <div className="relative overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: `-${activeInventoryCard * 100}%` }}
                transition={{ type: 'spring', stiffness: 120, damping: 24 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -80) showNextInventoryCard();
                  if (info.offset.x > 80) showPreviousInventoryCard();
                }}
              >
                {inventoryCards.map((item) => (
                  <div key={item.name} className="min-w-full px-1">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all overflow-hidden flex flex-col group h-full"
                    >
                      <div className="h-[300px] sm:h-[380px] md:h-[520px] overflow-hidden relative bg-slate-50 p-3 sm:p-4 md:p-5 flex items-center justify-center">
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={item.images[item.imageIndex]}
                            src={item.images[item.imageIndex]}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.45 }}
                            className="max-w-full max-h-full w-auto h-auto object-contain rounded-2xl select-none"
                            alt={item.name}
                            draggable="false"
                          />
                        </AnimatePresence>
                        <div className="absolute top-5 left-5">
                          <span className="bg-white/95 px-4 py-2 rounded-lg text-[10px] font-extrabold text-indigo-600 uppercase shadow-sm border border-indigo-50">
                            {item.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-8 flex-grow flex flex-col">
                        <h3 className="text-xl font-extrabold text-slate-900 mb-4 uppercase tracking-tight">
                          {item.name}
                        </h3>

                        <p className="text-[13px] text-slate-500 font-bold mb-6 leading-relaxed border-l-2 border-indigo-100 pl-4">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                          {item.tools.map((tool) => (
                            <span key={tool} className="bg-slate-50 text-slate-600 px-3 py-1 rounded-md text-[9px] font-extrabold uppercase tracking-tight">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="flex justify-center items-center gap-2 mt-8">
              {inventoryCards.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActiveInventoryCard(index)}
                  aria-label={`Show ${item.name}`}
                  className={`h-2.5 rounded-full transition-all ${
                    activeInventoryCard === index ? 'w-8 bg-indigo-600' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* TESTIMONIALS */}
      <section className="py-32 bg-white/40 border-y border-white backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6 border border-indigo-50">
              <FaGoogle className="text-red-500 text-lg" />
              <span className="font-medium text-slate-700 text-sm">
                Rated 5.0 Google Reviews
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── DNA / CORE ARCHITECTURE ── */}
      <section className="py-24 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-xs font-black text-white/30 uppercase tracking-[0.4em] mb-12">{p.dna.heading}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {p.dna.items.map((item, i) => (
              <motion.div key={i} whileHover={{ y: -8 }}
                className="border border-white/10 rounded-2xl p-8 bg-white/2 hover:bg-white/5 transition-all group">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-white/40 mb-6 group-hover:bg-dveinBlue group-hover:text-white transition-all">
                  {i === 0 ? <FaBolt /> : i === 1 ? <FaLock /> : <FaDatabase />}
                </div>
                <h3 className="font-extrabold text-white mb-3 uppercase tracking-wider text-sm">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DYNAMIC PRODUCTS FROM BACKEND ── */}
      {!loading && products.length > 0 && (
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-xs font-black text-white/30 uppercase tracking-[0.4em] mb-16">Product Inventory</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((prod, i) => (
                <motion.div key={prod._id} whileHover={{ y: -6 }}
                  className="border border-white/10 rounded-2xl overflow-hidden bg-white/2 hover:bg-white/5 transition-all group">
                  {prod.image && (
                    <div className="h-48 overflow-hidden">
                      <img src={prod.image} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60" />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="font-extrabold text-white uppercase tracking-wider text-sm mb-2">{prod.name}</h3>
                    <p className="text-white/40 text-xs leading-relaxed mb-4">{prod.description}</p>
                    <button onClick={() => openWA_Prod(`Hello DVein, I'm interested in: ${prod.name}`)}
                      className="text-xs font-bold text-dveinBlue hover:text-white transition-colors flex items-center gap-1">
                      Learn More <FaArrowRight size={10} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── ROADMAP ── */}
      <AnimatedRoadmap
        title={p.roadmap.title}
        subtitle={p.roadmap.subtitle}
        accent="bg-blue-500"
        steps={p.roadmap.steps.map((step, i) => ({
          icon:  ROADMAP_ICONS[i % ROADMAP_ICONS.length],
          label: step.label,
          desc:  step.desc,
          color: ROADMAP_COLORS[i % ROADMAP_COLORS.length],
        }))}
      />

      {/* ── REVIEWS ── */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 border border-white/10 px-4 py-2 rounded-full text-xs font-bold text-white/40 mb-6">
              <FaGoogle className="text-red-400" /> {p.reviews.googleBadge}
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight">{p.reviews.heading}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {p.reviews.items.map((review, i) => (
              <div key={review.id || i} className="border border-white/10 rounded-2xl p-8 bg-white/2">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <FaStar key={j} size={12} className={j < review.rating ? 'text-yellow-400' : 'text-white/10'} />
                  ))}
                </div>
                <FaQuoteLeft className="text-white/10 text-2xl mb-4" />
                <p className="text-white/50 text-sm leading-relaxed italic mb-6">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-dveinBlue/20 flex items-center justify-center text-dveinBlue font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{review.name}</p>
                    <p className="text-white/30 text-xs">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-extrabold uppercase tracking-tight text-center mb-12">{p.faq.heading}</h2>
          <div className="space-y-3">
            {p.faq.items.map((item, i) => (
              <div key={i} className="border border-white/10 rounded-xl overflow-hidden">
                <button onClick={() => setActiveAccordion(activeAccordion === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left font-bold text-white text-sm">
                  {item.q}
                  {activeAccordion === i ? <FaChevronUp size={12} className="text-white/40 shrink-0" /> : <FaChevronDown size={12} className="text-white/40 shrink-0" />}
                </button>
                <AnimatePresence>
                  {activeAccordion === i && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                      <p className="px-6 pb-5 text-white/40 text-sm leading-relaxed border-t border-white/5 pt-4">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProductsPage;
