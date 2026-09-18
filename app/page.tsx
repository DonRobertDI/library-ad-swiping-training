"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Expand,
  Images,
  Library,
  Menu,
  Search,
  X,
} from "lucide-react";
import { checklist, steps, type Figure } from "./data";

type OpenFigure = Figure & { stepTitle: string };

const sourcePriority = [
  ["01", "Product names", "Exact and alternative names found with Google Lens"],
  ["02", "Swipe domains", "Root landing-page domains found in Facebook Ads Library"],
  ["03", "Facebook Pages", "Numeric Facebook Page IDs found in Facebook Ads Library"],
  ["04", "Keywords", "Broadest source — use only as a last resort"],
];

const decisions = [
  ["Approve to Product", "Strong on-product ad that belongs to the winning product", "product"],
  ["Approve", "Useful on-niche ad that should stay in the Library without a product attachment", "approve"],
  ["Reject", "Irrelevant or unsuitable individual ad", "reject"],
  ["Group", "Only the same actual product, even when labels differ", "group"],
];

function pad(number: number) {
  return String(number).padStart(2, "0");
}

function FigureCard({ figure, stepTitle, onOpen }: { figure: Figure; stepTitle: string; onOpen: (figure: OpenFigure) => void }) {
  return (
    <figure className="figure-card">
      <button
        className="figure-button"
        onClick={() => onOpen({ ...figure, stepTitle })}
        aria-label={`Enlarge Figure ${figure.number}: ${figure.caption}`}
      >
        <img
          src={`/screenshots/figure-${pad(figure.number)}.webp`}
          alt={`Figure ${figure.number}: ${figure.caption}`}
          loading="lazy"
        />
        <span className="expand-badge"><Expand size={15} /> Enlarge</span>
      </button>
      <figcaption><span>Figure {figure.number}</span>{figure.caption}</figcaption>
    </figure>
  );
}

export default function Home() {
  const [activeStep, setActiveStep] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFigure, setOpenFigure] = useState<OpenFigure | null>(null);
  const [checked, setChecked] = useState<boolean[]>(() => checklist.map(() => false));

  const allFigures = useMemo(
    () => steps.flatMap((step) => step.figures.map((figure) => ({ ...figure, stepTitle: step.title }))),
    [],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveStep(Number(visible.target.id.replace("step-", "")));
      },
      { rootMargin: "-20% 0px -60%", threshold: [0.05, 0.25, 0.5] },
    );
    steps.forEach((step) => {
      const element = document.getElementById(`step-${step.number}`);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!openFigure) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenFigure(null);
      const current = allFigures.findIndex((item) => item.number === openFigure.number);
      if (event.key === "ArrowLeft" && current > 0) setOpenFigure(allFigures[current - 1]);
      if (event.key === "ArrowRight" && current < allFigures.length - 1) setOpenFigure(allFigures[current + 1]);
    };
    document.body.classList.add("modal-open");
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [openFigure, allFigures]);

  const jumpTo = (number: number) => {
    document.getElementById(`step-${number}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  const navigateFigure = (direction: -1 | 1) => {
    if (!openFigure) return;
    const index = allFigures.findIndex((item) => item.number === openFigure.number);
    const next = allFigures[index + direction];
    if (next) setOpenFigure(next);
  };

  const completeCount = checked.filter(Boolean).length;

  return (
    <div className="site-shell">
      <header className="mobile-header">
        <a className="brand-mini" href="#top"><Library size={18} /> Library Ops</a>
        <button className="icon-button" onClick={() => setMenuOpen(true)} aria-label="Open step navigation"><Menu size={21} /></button>
      </header>

      <aside className={`sidebar ${menuOpen ? "is-open" : ""}`}>
        <div className="sidebar-top">
          <a className="brand" href="#top" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark"><Library size={19} /></span>
            <span>Library<span>Operations</span></span>
          </a>
          <button className="sidebar-close" onClick={() => setMenuOpen(false)} aria-label="Close navigation"><X size={20} /></button>
        </div>
        <div className="toc-label">Training guide</div>
        <nav className="toc" aria-label="Training steps">
          {steps.map((step) => (
            <button key={step.number} className={activeStep === step.number ? "active" : ""} onClick={() => jumpTo(step.number)}>
              <span>{pad(step.number)}</span>
              <strong>{step.title}</strong>
            </button>
          ))}
        </nav>
        <a className="checklist-link" href="#checklist" onClick={() => setMenuOpen(false)}>
          <ClipboardCheck size={17} /> Completion checklist <ChevronRight size={16} />
        </a>
      </aside>
      {menuOpen && <button className="scrim" aria-label="Close navigation" onClick={() => setMenuOpen(false)} />}

      <main id="top">
        <section className="intro">
          <div className="eyebrow"><span /> Library Operations training</div>
          <div className="intro-grid">
            <div>
              <h1>Ad Swiping and<br /><em>Discovery Workflow</em></h1>
              <p className="lede">A step by step operating guide for finding, reviewing, localizing, and organizing product ads.</p>
              <div className="meta-row">
                <span><b>13</b> steps</span><i />
                <span><b>38</b> screenshots</span><i />
                <span>Updated Sep 18, 2026</span>
              </div>
            </div>
            <div className="workflow-card">
              <div className="workflow-icon"><Search size={21} /></div>
              <h2>Purpose and workflow</h2>
              <p>This guide covers the complete workflow for finding ads that belong to a winning product, importing the strongest sources into Discovery, reviewing the scraped ads, localizing approved creatives, and organizing the resulting funnels.</p>
              <div className="workflow-line">
                {[
                  ["Research", "Identify names and market"],
                  ["Discover", "Add product names, domains, and Pages"],
                  ["Review", "Approve or reject relevant ads"],
                  ["Localize and organize", "Localize, track, batch, retag, and group"],
                ].map(([title, description], index) => (
                  <div key={title} className="workflow-item">
                    <span>{index + 1}</span><div><strong>{title}</strong><small>{description}</small></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="primer" aria-label="Core workflow guidance">
          <div className="section-heading">
            <span>Before you begin</span>
            <h2>Start with the strongest signal</h2>
            <p>Product names, domains, and Pages usually return exact or strongly relevant ads. Keywords are broader and should be scraped only when the stronger sources do not produce enough results.</p>
          </div>
          <div className="priority-list">
            {sourcePriority.map(([number, title, description], index) => (
              <div className="priority-row" key={title}>
                <span className="priority-number">{number}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
                <span className={`priority-tag p${index + 1}`}>{index === 0 ? "First" : index === 3 ? "Last resort" : index === 1 ? "Second" : "Third"}</span>
              </div>
            ))}
          </div>

          <div className="decision-section">
            <div className="section-heading compact">
              <span>Core review rule</span>
              <h2>Choose the right review decision</h2>
            </div>
            <div className="decision-grid">
              {decisions.map(([title, description, tone]) => (
                <article className={`decision-card ${tone}`} key={title}>
                  <span className="decision-dot" />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="steps-wrap">
          <div className="chapter-label"><span>13 step workflow</span><div /></div>
          {steps.map((step) => (
            <section className="step" id={`step-${step.number}`} key={step.number}>
              <header className="step-header">
                <span className="step-number">{pad(step.number)}</span>
                <div><span className="step-kicker">Step {step.number} of 13</span><h2>{step.title}</h2></div>
              </header>

              <ol className="instructions">
                {step.instructions.map((instruction, index) => (
                  <li key={instruction}><span>{index + 1}</span><p>{instruction}</p></li>
                ))}
              </ol>

              <div className={`figure-grid ${step.figures.length === 1 ? "single" : ""}`}>
                {step.figures.map((figure) => (
                  <FigureCard key={figure.number} figure={figure} stepTitle={step.title} onOpen={setOpenFigure} />
                ))}
              </div>

              {step.note && <div className="source-note"><span>Document note</span>{step.note}</div>}

              <nav className="step-controls" aria-label={`Step ${step.number} navigation`}>
                {step.number > 1 ? (
                  <button onClick={() => jumpTo(step.number - 1)}><ArrowLeft size={17} /><span><small>Previous</small>{steps[step.number - 2].title}</span></button>
                ) : <span />}
                {step.number < steps.length ? (
                  <button className="next" onClick={() => jumpTo(step.number + 1)}><span><small>Next</small>{steps[step.number].title}</span><ArrowRight size={17} /></button>
                ) : (
                  <a className="next" href="#checklist"><span><small>Finish</small>Completion checklist</span><ArrowRight size={17} /></a>
                )}
              </nav>
            </section>
          ))}
        </div>

        <section className="checklist" id="checklist">
          <div className="checklist-head">
            <div>
              <span className="checklist-kicker"><CheckCircle2 size={17} /> Final review</span>
              <h2>Completion checklist</h2>
              <p>Confirm every item before closing the workflow.</p>
            </div>
            <div className="progress-ring" style={{ "--progress": `${(completeCount / checklist.length) * 360}deg` } as React.CSSProperties}>
              <span>{completeCount}<small>/ {checklist.length}</small></span>
            </div>
          </div>
          <div className="checklist-items">
            {checklist.map((item, index) => (
              <label key={item} className={checked[index] ? "checked" : ""}>
                <input
                  type="checkbox"
                  checked={checked[index]}
                  onChange={() => setChecked((current) => current.map((value, i) => i === index ? !value : value))}
                />
                <span className="custom-check"><Check size={15} /></span>
                <span>{item}</span>
              </label>
            ))}
          </div>
          {completeCount === checklist.length && <div className="complete-message"><CheckCircle2 size={19} /> Workflow complete</div>}
        </section>

        <footer><span>Library Operations</span><span>Ad Swiping and Discovery Workflow</span></footer>
      </main>

      {openFigure && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`Figure ${openFigure.number}`} onMouseDown={(event) => event.target === event.currentTarget && setOpenFigure(null)}>
          <div className="lightbox-panel">
            <div className="lightbox-top">
              <div><span>Figure {openFigure.number} · Step {steps.find((step) => step.title === openFigure.stepTitle)?.number}</span><strong>{openFigure.caption}</strong></div>
              <button onClick={() => setOpenFigure(null)} aria-label="Close image"><X size={22} /></button>
            </div>
            <div className="lightbox-image-wrap">
              <img src={`/screenshots/figure-${pad(openFigure.number)}.png`} alt={`Figure ${openFigure.number}: ${openFigure.caption}`} />
            </div>
            <div className="lightbox-controls">
              <button onClick={() => navigateFigure(-1)} disabled={openFigure.number === 1}><ArrowLeft size={17} /> Previous figure</button>
              <span>{openFigure.number} / {allFigures.length}</span>
              <button onClick={() => navigateFigure(1)} disabled={openFigure.number === allFigures.length}>Next figure <ArrowRight size={17} /></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
