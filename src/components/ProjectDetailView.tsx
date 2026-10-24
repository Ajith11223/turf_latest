"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowLeft, ArrowRight, CheckCircle2, MapPin, MessageSquare, Ruler, ShieldCheck, Trophy, Wrench } from "lucide-react";
import type { ProjectItem } from "@/data/sportsData";
import { MAJOR_PROJECTS } from "@/data/sportsData";

const rise = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } };

export default function ProjectDetailView({ project }: { project: ProjectItem }) {
  const reduceMotion = useReducedMotion();
  const relatedProjects = MAJOR_PROJECTS.filter((item) => item.id !== project.id).slice(0, 3);
  const message = encodeURIComponent(`Hi SPORTICON Infra, I viewed the ${project.title} project and would like to discuss a similar sports facility.`);
  const proofPoints = [
    { value: project.area, label: "Developed area", icon: Ruler },
    { value: project.category, label: "Facility type", icon: Trophy },
    { value: project.year, label: "Project year", icon: CheckCircle2 },
  ];
  const steps = [
    { n: "01", title: "Plan & prepare", copy: "The site and playing requirements guide the layout, levels, drainage and build plan.", icon: MapPin },
    { n: "02", title: "Build the foundation", copy: "Civil works establish a stable base designed for reliable drainage and everyday use.", icon: Wrench },
    { n: "03", title: "Install & hand over", copy: "The playing surface, equipment and finishing details come together for a ready-to-play facility.", icon: ShieldCheck },
  ];

  return (
    <main className="project-case-page">
      <section className="case-hero">
        <motion.div initial={false} animate={{ scale: 1 }} transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }} className="case-hero-image">
          <Image src={project.image} alt={`${project.title} sports facility`} fill priority sizes="100vw" className="object-cover" />
        </motion.div>
        <div className="case-hero-shade" />
        <div className="case-container case-hero-content">
          <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <Link href="/projects" className="case-back"><ArrowLeft size={16} /> All projects</Link>
            <div className="case-tags"><span>SPORTICON PROJECTS</span><span>{project.category}</span></div>
            <h1>{project.title}</h1>
            <p className="case-location"><MapPin size={17} />{project.location}</p>
            <p className="case-hero-intro">A sports facility designed around its site, players and the way the community wants to play.</p>
            <div className="case-actions">
              <a className="case-button case-button-accent" href="#project-overview">Explore this project <ArrowDown size={17} /></a>
              <a className="case-button case-button-glass" href={`https://wa.me/919400088990?text=${message}`} target="_blank" rel="noopener noreferrer"><MessageSquare size={17} /> Discuss a similar project</a>
            </div>
          </motion.div>
          <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.2 }} className="case-proof-row">
            {proofPoints.map(({ value, label, icon: Icon }) => <div className="case-proof" key={label}><span className="case-proof-icon"><Icon size={19} /></span><div><strong>{value}</strong><small>{label}</small></div></div>)}
          </motion.div>
        </div>
        <span className="case-hero-index">PROJECT / {project.id.toUpperCase()}</span>
      </section>

      <section className="case-panel" id="project-overview">
        <div className="case-container case-overview-grid">
          <motion.div variants={rise} initial={false} whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65 }}>
            <p className="case-eyebrow">A closer look</p>
            <h2>Built for the game.<br /><em>Made for the long run.</em></h2>
            <p className="case-body">{project.highlight}</p>
            <div className="case-location-chip"><MapPin size={16} /> {project.location}</div>
          </motion.div>
          <motion.div variants={rise} initial={false} whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65, delay: 0.12 }} className="case-scope-card">
            <div className="case-scope-head"><span>PROJECT DELIVERY</span><span className="case-scope-mark"><CheckCircle2 size={20} /></span></div>
            <h3>What went into this project</h3>
            <ul>{project.deliverables.map((item) => <li key={item}><CheckCircle2 size={18} />{item}</li>)}</ul>
            <a href={`https://wa.me/919400088990?text=${message}`} target="_blank" rel="noopener noreferrer" className="case-inline-link">Plan a facility like this <ArrowRight size={17} /></a>
          </motion.div>
        </div>
      </section>

      <section className="case-video-section" aria-label="Project video preview">
        <div className="case-container">
          <motion.div variants={rise} initial={false} whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55 }} className="case-video-heading">
            <div><p className="case-eyebrow">Video preview</p><h2>See sports spaces <em>in motion.</em></h2></div>
            <p>Watch a short sample reel of the turf and court environments SPORTICON builds.</p>
          </motion.div>
          <motion.div variants={rise} initial={false} whileInView="visible" viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7, delay: 0.08 }} className="case-video-frame">
            <video className="case-video-player" controls playsInline preload="metadata" poster={project.image} aria-label={`${project.title} video preview`}>
              <source src={project.videoUrl ?? "/videos/sports-facility-sample.mp4"} type="video/mp4" />
              Your browser does not support the video element.
            </video>
            {!project.videoUrl && <span className="case-video-badge">SAMPLE REEL</span>}
          </motion.div>
        </div>
      </section>

      <section className="case-process-section">
        <div className="case-container">
          <motion.div variants={rise} initial={false} whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.55 }} className="case-section-heading">
            <div><p className="case-eyebrow">From ground to game</p><h2>How we bring a project <em>to life.</em></h2></div>
            <p>One coordinated team takes care of the details that turn a site into a dependable sports facility.</p>
          </motion.div>
          <div className="case-process-grid">{steps.map(({ n, title, copy, icon: Icon }, i) => <motion.article
            key={n}
            initial={false}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={reduceMotion ? undefined : { y: -8, rotateX: 4, rotateY: -3, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 120, damping: 18, delay: i * 0.08 }}
            style={{ transformOrigin: "center bottom" }}
            className="case-step-card group"
          >
            <div className="case-step-content">
              <div className="case-step-top">
                <span className="case-step-icon"><Icon size={21} /></span>
                <span className="case-step-number">{n}</span>
              </div>
              <div className="case-step-label">DELIVERY PHASE</div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
            <div className="case-step-foot"><CheckCircle2 size={16} /><span>{n === "01" ? "Site plan & layout" : n === "02" ? "Stable, draining base" : "Ready-to-play handover"}</span></div>
          </motion.article>)}</div>
        </div>
      </section>

      {relatedProjects.length > 0 && <section id="more-projects" className="case-panel case-work-section">
        <div className="case-container">
          <motion.div variants={rise} initial={false} whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.55 }} className="case-section-heading"><div><p className="case-eyebrow">More SPORTICON work</p><h2>Made for play. <em>Built with care.</em></h2></div><Link className="case-inline-link" href="/projects">View all projects <ArrowRight size={17} /></Link></motion.div>
          <div className="case-related-grid">{relatedProjects.map((item, i) => <motion.div key={item.id} variants={rise} initial={false} whileInView="visible" viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, delay: i * 0.08 }}><Link href={`/projects/${item.id}`} className="case-project-card"><div className="case-project-image"><Image src={item.image} alt={`${item.title} in ${item.location}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" /><span>{item.category}</span></div><div className="case-project-caption"><div><small><MapPin size={13} />{item.location}</small><h3>{item.title}</h3></div><span className="case-round-arrow"><ArrowRight size={18} /></span></div></Link></motion.div>)}</div>
        </div>
      </section>}


    </main>
  );
}
