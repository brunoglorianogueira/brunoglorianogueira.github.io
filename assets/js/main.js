// O texto em português fica no index.html; aqui ficam só as traduções para inglês.
// Cada chave corresponde a um atributo data-i18n do HTML.
const EN = {
  "skip": "Skip to content",
  "menu": "Menu",
  "nav.results": "Results",
  "nav.cases": "Cases",
  "nav.career": "Career",
  "nav.volunteer": "Volunteering",
  "nav.contact": "Contact",
  "nav.book": "Buy my book",

  "hero.eyebrow": "Operations and Commercial Leadership · Former COO",
  "hero.lead": "I build operations that scale: turning informal workflows into <strong>clear routines, with KPIs, training and daily follow-up</strong>.",
  "hero.body": "Nearly <strong>20 years</strong> combining operations and sales in <strong>healthcare, optical retail and distribution</strong>. I was <strong>COO of Alcon's largest distributor in Brazil</strong>, opened and ran two stores in an EssilorLuxottica network, and led operations at a consultancy serving the pharmaceutical industry.",
  "hero.status": "Open to new roles · São Paulo, remote or hybrid",
  "hero.cta1": "Let's talk",
  "hero.cta2": "Download résumé",
  "hero.badge": "years leading operations",
  "brands.title": "Companies and clients I've worked with",

  "results.eyebrow": "By the numbers",
  "results.title": "Results",
  "results.intro": "The headline result from each stage of my career.",
  "r1.tag": "Amju Lentes · 2007 – 2023",
  "r1.title": "Alcon's largest distributor in Brazil",
  "r1.body": "Ranked 1st from 2012 to 2016, and among the country's top 4 for 13 straight years (2010 – 2022).",
  "ch1.title": "Amju Lentes revenue in my first 3 years",
  "ch1.v1": "BRL 3.2M",
  "ch1.v2": "BRL 5.5M",
  "ch4.title": "Óticas Carol, in a network of more than 1,500 stores",
  "ch4.r1": "Among the <strong>top 10 franchisees</strong> in sales of <strong>private-label lenses</strong>",
  "ch4.r2": "Among the <strong>top 5 franchisees</strong> in glasses made for the <strong>Pequenos Olhares project</strong>",
  "ch2.title": "Synapse operating expenses after the restructuring (2024 = 100)",
  "results.more": "See each number in detail in the Cases below ↓",

  "quotes.eyebrow": "Recommendations",
  "quotes.title": "What people say about my work",
  "quotes.intro": "Excerpts from recommendations by people who led me, were led by me or worked side by side with me.",
  "quotes.note": "Recommendations originally written in Portuguese and translated.",
  "q1": "I have witnessed his <strong>professional excellence</strong>, competence and a <strong>charismatic leadership</strong> that inspires and conveys trust to every employee. […] I learned from him that <strong>doing what is right is an unshakable principle</strong>.",
  "q1r": "Logistics Manager at Amju Lentes · reported to me for more than 13 years",
  "q2": "An admirable human being, <strong>fair, objective</strong> and with immense knowledge of the field, as well as a strong <strong>focus on results</strong>. […] Bruno is, without a doubt, <strong>one of the best managers I've had</strong>.",
  "q2r": "Store manager in Itajubá · Óticas Carol",
  "q3": "Bruno was always the voice that <strong>brought the solution, not the problem</strong>. <strong>Impeccable organization</strong>, kindness, a courteous tone and proactivity to the fullest. […] Bruno is someone you <strong>recommend with your eyes closed</strong>.",
  "q3r": "Full Professor at UFMG and co-founder of emPRO · project partner at Synapse",
  "q4": "Bruno can <strong>summarize clients' needs clearly and objectively</strong>, improving communication and putting ideas into practice. As a coordinator, he <strong>fostered a cooperative environment</strong>.",
  "q4r": "Pediatrician and professor (PUC Minas) · reported to me at Synapse",
  "q5": "He has <strong>natural leadership and an entrepreneurial spirit</strong>, and stood out in the trainee team we put together at the time. […] I strongly recommend Bruno for his talent, <strong>easy communication</strong>, entrepreneurship and <strong>teamwork</strong>!",
  "q5r": "HCM Practice Leader, Oracle Consulting · my manager at Arte Informática",
  "q6": "Bruno is <strong>frank and sincere</strong>, and <strong>knows a lot about business and people</strong>. […] After all that time of conversations and professional growth, in which Bruno was key, <strong>I got the promotion I'd been hoping for</strong> at my company.",
  "q6r": "DevOps and Cloud · my mentee at Escola da Nuvem",
  "q7": "His work is grounded in <strong>encouraging, developing and creating learning opportunities</strong> for his team. He always keeps an eye on the <strong>human side</strong> of his company. […] He has a unique charisma and <strong>enthusiasm for teamwork</strong>.",
  "q7r": "Sales Manager at Amju Lentes · reported to me for 15 years",
  "q8": "Bruno has always shown a great ability to <strong>combine technical and interpersonal skills</strong>, which is essential to <strong>translate business needs into technology solutions</strong>. […] He spared no effort to <strong>deliver the results</strong> he committed to.",
  "q8r": "Senior Director of Sales, Marketing and Business Development · my peer at Arte Informática",
  "q9": "An excellent professional, dedicated, always willing to help and to <strong>find alternatives and solutions</strong> for the B2B business, focused on <strong>customer satisfaction</strong>. Years of great <strong>synergy, respect and teamwork</strong>.",
  "q9r": "Customer Service at Alcon · served Amju Lentes",
  "quotes.more": "See all recommendations on LinkedIn →",

  "cases.eyebrow": "In practice",
  "cases.title": "Cases",
  "cases.intro": "The context, what I did and what changed.",
  "lbl.context": "Context",
  "lbl.did": "What I did",
  "lbl.impact": "Impact",

  "c1.tag": "Distribution · Amju Lentes",
  "c1.title": "From family business to Alcon's largest distributor in Brazil",
  "c1.context": "A family-owned contact lens distributor serving ophthalmologists, clinics and optical stores in Minas Gerais, with <strong>informal processes and decisions made without data</strong>.",
  "c1.did": "I took over day-to-day management as COO and organized sales, customer service and logistics <strong>through three managers</strong>. I structured the sales force with <strong>targets, coverage and route planning</strong>; set pricing policy and <strong>negotiated directly with Alcon</strong>. I built the in-house ERP, whose sales and HR KPIs came to guide leadership decisions.",
  "c1.impact": "<strong>+72% revenue</strong> in three years; <strong>Alcon's largest distributor in Brazil</strong> from 2012 to 2016 and national Top 4 from 2010 to 2022.",

  "c2.tag": "Supply chain · Amju Lentes",
  "c2.kpi": "6 → 3 days",
  "c2.title": "Automated replenishment and delivery in half the time",
  "c2.context": "<strong>More than 8,600 lens SKUs</strong> with wide prescription ranges, and customers paying anywhere from cash to 120 days, while terms with the manufacturer were fixed.",
  "c2.did": "I <strong>automated replenishment</strong> based on 12-month sell-out and built the <strong>annual purchasing forecast with Alcon</strong>, reviewed every quarter. To report fill rate to the manufacturer, I <strong>created the SIT (Stock In Trade) spreadsheet</strong> that Alcon adopted in place of the previous model. With the accountants, I balanced working capital and payment terms.",
  "c2.impact": "Delivery lead time cut <strong>from 6 to 3 days</strong>, with fewer stockouts and more predictable cash flow.",

  "c3.tag": "Operations · Synapse",
  "c3.title": "A KPI-driven consultancy",
  "c3.context": "A training and scientific-education consultancy for the pharmaceutical industry, growing on informal workflows with <strong>little visibility into margins and deadlines</strong>.",
  "c3.did": "As COO, I implemented <strong>KPI-based management in Power BI</strong>, redesigned the sales process using data, organized the funnel in HubSpot and took over <strong>pricing of proposals and large contracts</strong>. I managed key accounts such as J&amp;J, AstraZeneca, Sanofi, AbbVie, Roche and Chiesi.",
  "c3.impact": "<strong>−27% in expenses</strong>, proposals in <strong>36h instead of 96h</strong> and <strong>NPS above 85</strong> across more than 250 scientific meetings.",

  "c4.tag": "Retail and social impact · Óticas Carol",
  "c4.kpi": "~1 year → 2 months",
  "c4.title": "Pequenos Olhares: glasses for children who were waiting",
  "c4.context": "In one of the cities where I had a store, children <strong>waited almost a year</strong> for an eye exam in the public health system.",
  "c4.did": "In my stores, I set up the project offering <strong>affordable glasses for children</strong>: found sponsors to fund them, organized <strong>screenings in schools</strong> and partnered with city hall and the municipal health department.",
  "c4.impact": "The wait for an eye exam dropped <strong>from almost a year to just over two months</strong>, and we ranked among the <strong>top 5 franchisees in glasses made</strong> for the project across the whole network.",

  "career.eyebrow": "2006 – today",
  "career.title": "Career",
  "career.intro": "For years I ran more than one operation at the same time.",
  "g.work": "Career",
  "g.arte": "Developer · 1 year",
  "g.amju": "Operations Manager and COO · 16 years",
  "g.carol": "Franchisee · 8 years",
  "g.synapse": "COO · 2 years",
  "g.break": "Planned break",
  "g.breakd": "Studies and projects · 2026",
  "g.vol": "Volunteering",
  "g.v1l": "Maine Coon cats",
  "g.v1": "Breeder, speaker and veterinary assistant · 15 years",
  "g.v2": "Founder and president · 8 years",
  "g.v3": "Director · 3 years",
  "g.v4": "Mentor · 3 years",
  "t0.date": "2026 – present",
  "t0.title": "Planned career break",
  "t0.body": "My first since 2003. <strong>Graduate courses at FEA-USP</strong> (University of São Paulo), researching digital transformation in healthcare; building <strong>solutions with generative AI and agents</strong>; and publishing a <a href=\"#livro\">book</a>.",
  "t1.date": "2024 – 2025",
  "t1.body": "<strong>All operations and the budget</strong>, reporting to the CEO, with a team of up to 9. Pharmaceutical clients and <strong>more than 250 scientific meetings</strong> in over 20 cities.",
  "t2.date": "2017 – 2025",
  "t2.role": "· Franchisee, 2 stores (EssilorLuxottica)",
  "t2.body": "<strong>Opened both stores from scratch</strong> and ran them through store managers. <strong>Top 10 in the network</strong> for private-label lenses, <strong>Top 5</strong> in glasses for the Pequenos Olhares project, and member of the 8-expert committee that <strong>built the network's CRM</strong>.",
  "t3.date": "2007 – 2023",
  "t3.role": "· COO and Operations Manager (Alcon distributor)",
  "t3.body": "<strong>16 years leading sales, customer service and logistics</strong>, with a team of up to 16 and annual revenue of up to BRL 7 million. I also led the <strong>negotiated termination with Alcon</strong>, when the manufacturer began serving Minas Gerais customers directly, focused on <strong>continuity of service</strong>.",
  "t4.date": "2006 – 2007",
  "t4.role": "· Software Developer",
  "t4.body": "<strong>Development and deployment</strong> of a competency management system for <strong>Sebrae in about half of Brazil's states</strong>.",

  "how.eyebrow": "Method",
  "how.title": "How I work",
  "how.intro": "I believe change follows an order.",
  "p1.title": "People",
  "p1.body": "It all starts with <strong>respect for individuality and diversity</strong>, and with understanding the <strong>company culture</strong>, to see how well each person fits in it. I give people responsibility and a sense of <strong>building together</strong>, toward <strong>clear goals</strong>.",
  "p1.body2": "The most important skills here are <strong>listening</strong> and <strong>communicating clearly</strong>, so the strategic plan is understood by everyone, in every area. And customers, suppliers and partners are people too: with them, clarity is just as essential.",
  "p2.title": "Processes",
  "p2.body": "Once I understand the people, processes come in:",
  "p2.list": "<li><strong>Daily analysis of the numbers</strong></li><li>Design and <strong>effectiveness of each area's processes</strong></li><li><strong>Training</strong> people</li><li><strong>Innovation and digital transformation</strong></li><li><strong>Rigor with the rules</strong>: compliance and legal</li>",
  "p3.title": "Technology",
  "p3.body": "Only then, tools that sustain the process: <strong>ERP, Power BI, CRM</strong> and, today, <strong>generative AI and AI agents</strong> for management.",
  "how.note": "I started my career as a developer and hold a degree in Computer Science. From there, I built the rest of my professional and academic path in <strong>business administration</strong>, especially <strong>operations and commercial management</strong>. That combination helps me <strong>translate operational needs into system requirements</strong>, and use data and AI day to day without depending on others.",

  "skills.title": "Competencies",
  "skills.list": "<li class=\"tag-strong\">Operations management</li><li class=\"tag-strong\">Sales force leadership</li><li class=\"tag-strong\">Supply chain and fill rate</li><li>Process improvement</li><li>Pricing and negotiation</li><li>Key account management</li><li>Forecasting, targets and planning</li><li>Product launches with KOLs</li><li>Healthcare compliance (Anvisa)</li><li>Multi-unit management</li><li>Budget, P&amp;L and working capital</li><li>Power BI, SQL and Excel</li><li>Generative AI for management</li>",
  "lang.title": "Languages and citizenship",
  "lang.pt": "Portuguese",
  "lang.en": "English",
  "lang.es": "Spanish",
  "lang.native": "Native",
  "lang.adv": "Advanced",
  "lang.int": "Intermediate",
  "lang.body": "<strong>Brazilian and Spanish</strong> citizenship.",
  "edu.title": "Education",
  "e1": "Professional Master's in Business Administration",
  "e2": "Postgraduate Specialization in Business Management",
  "e3": "Bachelor's in Computer Science",
  "e4": "Graduate courses (non-degree student)",

  "vol.eyebrow": "Beyond work",
  "vol.title": "Volunteering and animal health",
  "vol.intro": "Outside work, I've built projects I'm very proud of, most of them tied to <strong>animal health and welfare</strong>.",
  "cat.tag": "Pedigree cats · 2011 – 2026",
  "cat.title": "15 years dedicated to cats",
  "cat.p1": "In 2011 I began studying the Maine Coon breed. My cattery produced the <strong>first cat of the breed in Minas Gerais to earn the Junior Winner title</strong>.",
  "cat.p2": "I was a <strong>director of Amacoon</strong>, the Brazilian breeders' association for the breed, and <strong>founder and president of Associação Gato Mineiro</strong>, 8 years in each role. Alongside my wife, a veterinarian specialized in cats, I spent <strong>10 years as a veterinary assistant</strong> in my spare time.",
  "cat.link": "Read the full story on LinkedIn",
  "cat.s1": "international cat shows, the <b>only ones ever held in Minas Gerais</b>",
  "cat.s2": "visitors at a single show, in a Belo Horizonte mall",
  "cat.s2v": "15k+",
  "a.nav": "Main",
  "a.home": "Home",
  "a.photo": "Photo of Bruno Glória Nogueira",
  "a.rank": "Ranking among Alcon distributors: Top 4 from 2010 to 2022, 1st place from 2012 to 2016",
  "a.rev": "BRL 3.2 million in 2007 and BRL 5.5 million in 2010",
  "a.exp": "2025 expenses 27% lower than 2024",
  "a.prev": "Previous",
  "a.next": "Next",
  "a.gantt": "Timeline. Career: Arte Informática 2006–2007; Amju Lentes 2007–2023; Óticas Carol 2017–2025; Synapse 2024–2025; planned break 2026. Volunteering: Maine Coon breeding 2011–2026; Associação Gato Mineiro 2013–2021; CDL Itajubá 2019–2022; Escola da Nuvem 2022–2025.",
  "a.book": "See the book on Amazon",
  "a.cover": "Cover of the book Quando os Homens Contavam Histórias",
  "cat.s3v": "BRL 150k",
  "cat.s3": "budget for the largest show. Over the years, sponsorship from <b>Royal Canin, Ourofino and Avert</b>",
  "cat.s4": "shows in Brazil, Argentina, Mexico, Denmark, Austria and the Czech Republic",
  "cat.s5": "talks on the breed, color genetics, care and <b>responsible adoption</b>",
  "cat.s6v": "NGOs",
  "cat.s6": "for animal protection at the shows, with <b>kitten adoptions</b> and <b>donation drives</b>",
  "v1": "Sales and Events Director · CDL Itajubá",
  "v1d": "Managed the city's <strong>Christmas decoration project</strong>, with a budget of up to BRL 400k, and worked with local government during the pandemic, <strong>reversing the revocation of operating licenses</strong> for local businesses.",
  "v3": "Career Mentor · Escola da Nuvem",
  "v3d": "Mentored <strong>seven early-career professionals</strong> in technology.",
  "v4y": "Óticas Carol",
  "v4": "Pequenos Olhares project",
  "v4d": "Affordable glasses for children, with screenings in schools. The wait for an eye exam dropped <strong>from almost a year to two months</strong>.",

  "book.eyebrow": "My book",
  "book.sub": "A journey through the stories, memories and life lessons of Grandpa Geraldo (in Portuguese)",
  "book.body": "A book written <strong>as a family, by many hands</strong>, gathering the stories of my grandfather, <strong>Geraldo Glória</strong>. He helped build roads across Brazil, but left an even deeper mark on the people he met along the way.",
  "book.ai": "I used <strong>generative AI (ChatGPT)</strong> throughout the process: to transcribe the stories sent by the family and organize the texts. <strong>I trained the AI on the way my grandfather told his stories</strong>. From there, we built the stories together, <strong>told in his own voice</strong>.",
  "book.cta": "Buy on Amazon",
  "book.format": "In Portuguese · digital and print editions",

  "proj.eyebrow": "In progress",
  "proj.title": "Projects",
  "proj.intro": "Tools I'm building with data and AI.",

  "contact.eyebrow": "Contact and links",
  "contact.title": "Let's talk",
  "contact.intro": "I'm looking for <strong>Director or Head of Operations, COO, General Manager or commercial leadership</strong> roles, especially in healthcare, animal health, optical, medical devices, pharma, distribution and multi-unit retail.",
  "link.cv": "Résumé",
  "link.cvd": "PDF · English",
  "link.book": "My book",
  "link.bookd": "Available on Amazon",
  "footer": "São Paulo, Brazil",
  "footer.credit": "Built with the help of <strong>Claude Code</strong>, Anthropic's AI, which handled the code, design and translation based on my content and direction."
};

const CV = { pt: "cv/CV_Bruno_Nogueira_PT.pdf", en: "cv/CV_Bruno_Nogueira_EN.pdf" };
const META = {
  pt: { title: document.title, lang: "pt-BR" },
  en: { title: "Bruno Glória Nogueira · Operations and Commercial Leadership", lang: "en" }
};

const nodes = document.querySelectorAll("[data-i18n]");
nodes.forEach(el => { el.dataset.pt = el.innerHTML; });
const ATTRS = [["label", "aria-label"], ["alt", "alt"]];
const attrNodes = document.querySelectorAll("[data-i18n-label], [data-i18n-alt]");
attrNodes.forEach(el => ATTRS.forEach(([k, a]) => { if (el.hasAttribute("data-i18n-" + k)) el.dataset["pt" + k] = el.getAttribute(a); }));

function setLang(lang) {
  nodes.forEach(el => {
    const key = el.dataset.i18n;
    el.innerHTML = lang === "en" && EN[key] ? EN[key] : el.dataset.pt;
  });
  attrNodes.forEach(el => ATTRS.forEach(([k, a]) => {
    const key = el.getAttribute("data-i18n-" + k);
    if (key) el.setAttribute(a, lang === "en" && EN[key] ? EN[key] : el.dataset["pt" + k]);
  }));
  document.documentElement.lang = META[lang].lang;
  document.title = META[lang].title;
  document.querySelectorAll(".js-cv").forEach(a => { a.href = CV[lang]; });
  document.querySelectorAll("[data-lang]").forEach(b => {
    b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
  });
  try { localStorage.setItem("lang", lang); } catch (e) {}
}

document.querySelectorAll("[data-lang]").forEach(b => {
  b.addEventListener("click", () => setLang(b.dataset.lang));
});

let saved = null;
try { saved = localStorage.getItem("lang"); } catch (e) {}
const initial = saved || (navigator.language && !navigator.language.toLowerCase().startsWith("pt") ? "en" : "pt");
if (initial === "en") setLang("en");

// Menu no celular
const toggle = document.querySelector(".nav-toggle");
const links = document.getElementById("nav-links");
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  links.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
}));

// Animação suave ao rolar (e barras dos gráficos crescendo)
if ("IntersectionObserver" in window) {
  const targets = document.querySelectorAll(".chart, .carousel, .case, .gantt, .timeline li, .principles > li, .feature-stats li, .vol-card, .links li");
  targets.forEach(t => t.classList.add("reveal"));
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  targets.forEach(t => io.observe(t));
}

// Carrossel de recomendações
const track = document.querySelector(".quotes");
if (track) {
  const prev = document.querySelector(".car-prev");
  const next = document.querySelector(".car-next");
  const dotsBox = document.querySelector(".car-dots");
  const cards = track.querySelectorAll(".quote");
  const step = () => track.clientWidth + parseFloat(getComputedStyle(track).columnGap || 0);
  const perView = () => parseInt(getComputedStyle(track).getPropertyValue("--per"), 10) || 1;
  let pages = 0;

  function buildDots() {
    pages = Math.ceil(cards.length / perView());
    dotsBox.innerHTML = "";
    for (let i = 0; i < pages; i++) {
      const b = document.createElement("button");
      b.type = "button";
      b.addEventListener("click", () => track.scrollTo({ left: i * step() }));
      dotsBox.appendChild(b);
    }
    update();
  }
  function update() {
    const page = Math.round(track.scrollLeft / step());
    dotsBox.querySelectorAll("button").forEach((b, i) => b.classList.toggle("is-active", i === page));
    prev.disabled = track.scrollLeft < 5;
    next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 5;
  }
  prev.addEventListener("click", () => track.scrollBy({ left: -step() }));
  next.addEventListener("click", () => track.scrollBy({ left: step() }));
  let settle;
  track.addEventListener("scroll", () => { requestAnimationFrame(update); clearTimeout(settle); settle = setTimeout(update, 120); });
  window.addEventListener("resize", buildDots);
  buildDots();
}
