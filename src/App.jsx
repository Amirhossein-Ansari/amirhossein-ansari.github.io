import React from "react";
import {
  Mail,
  GraduationCap,
  FileText,
  ExternalLink,
  MapPin,
  Cpu,
  BookOpen,
  Award,
  Briefcase,
  Newspaper,
  Code2,
  Users,
  ShieldCheck,
  Sparkles,
  Layers3,
} from "lucide-react";

const profile = {
  name: "Amir Hossein Ansari",
  title:
    "M.Sc. in Computer Engineering | Embedded Systems and Cyber-Physical Systems Researcher",
  affiliation:
    "Researcher in power-aware and fault-tolerant techniques for multicore embedded systems, cyber-physical systems, real-time systems, and embedded machine learning.",
  email: "amirhosein.ansari79@gmail.com",
  location: "Tehran, Iran",
  linkedin: "https://www.linkedin.com/in/amir-hossein-ansari-b4bba5241",
  scholar: "https://scholar.google.com/citations?hl=en&user=TyUGU_AAAAAJ",
  github: "#",
  cv: "/Academic_CV_AmirHossein_Ansari.pdf",
  photo: "/main-personal.jpg",
};

const news = [
  {
    date: "April 2026",
    text: "Paper (GLEAM) accepted at DATE 2026.",
  },
  {
    date: "March 2026",
    text: "Paper (HAMLET) accepted at IEEE Internet of Things Journal.",
  },
  {
    date: "February 2026",
    text: "Paper (Pilot) accepted at IEEE Transactions on Parallel and Distributed Systems.",
  },
  {
    date: "Jan 2025",
    text: "Paper accepted at IEEE Embedded Systems Letters.",
  },
  {
    date: "Dec 2024",
    text: "Graduated with M.Sc. in Computer Engineering from Sharif University of Technology.",
  },
  {
    date: "May 2024",
    text: "Paper (TAFT) accepted at IEEE Embedded Systems Letters.",
  },
];


const researchInterests = [
  "Embedded Machine Learning",
  "Cyber-Physical Systems",
  "Real-Time Systems",
  "Fault-Tolerant System Design",
  "Low-Power System Design",
  "Internet of Things",
];



const education = [
  {
    degree: "Master of Science in Computer Engineering",
    school: "Sharif University of Technology (SUT)",
    location: "Tehran, Iran",
    period: "Sep. 2022 – Dec. 2024",
    gpa: "CGPA: 18.80 / 20.00",
    // thesis:
    //   "Develop a hybrid fault tolerance technique for improving the reliability of embedded systems while simultaneously reducing peak power consumption and satisfying timing constraints.",
    // keywords:
    //   "Power consumption, hybrid fault-tolerant technique, scheduling, multicore embedded systems.",
    supervisor: "Dr. Alireza Ejlali",
  },
  {
    degree: "Bachelor of Science in Electrical Engineering",
    school: "Shahed University",
    location: "Tehran, Iran",
    period: "Sep. 2018 – Sep. 2022",
    gpa: "CGPA: 17.51 / 20.00",
    // thesis:
    //   "Implementation of ARM Cortex-M1 Processor on FPGA with Embedded System Applications.",
    // keywords:
    //   "FPGA, ARM Cortex-M1, Verilog/VHDL, Xilinx Vivado, embedded systems, digital design.",
    supervisor: "Dr. Mohsen Jalali",
  },
];

const skills = {
  "Programming Languages": ["C", "C++", "Python", "MATLAB", "LaTeX"],
  "Hardware Description Languages": ["Verilog", "VHDL"],
  "Hardware & Electronics": [
    "STM32 Microcontrollers",
    "AVR Microcontrollers",
    "Arduino",
    "PCB Design",
    "Raspberry Pi",
    "Proteus Design Suite",
    "PSpice",
    "Keil µVision",
  ],
  "Design & Simulation Tools": [
    "Xilinx ISE",
    "gem5",
    "McPAT",
    "HotSpot",
    "ModelSim",
    "Synopsys Design Compiler",
    "SoC Encounter",
  ],
  "Operating Systems": ["Windows", "Linux"],
};

const researchExperience = [
  {
    role: "Graduate Research Assistant",
    org: "Sharif University of Technology",
    lab: "Embedded Systems Research Laboratory (2022 – Present)",
    bullets: [
      "Conducted extensive full-system architectural simulations using gem5, McPAT, and HotSpot to evaluate system-level overheads and thermal constraints.",
      "Developed and analyzed adaptive scheduling and task mapping frameworks for multi-core architectures to optimize energy efficiency and reliability.",
      "Proposed power-aware, thermal-aware, and hybrid fault-tolerant techniques to improve multicore embedded systems.",
      "Integrated machine learning techniques such as LSTM networks and reinforcement learning for real-time system optimization."
    ]
  },
  {
    role: "Graduate Research Assistant",
    org: "Sharif University of Technology",
    lab: "Cyber-Physical Systems Laboratory (2024 – Present)",
    bullets: [
      "Working on dependable, real-time task offloading, and scheduling policies in vehicular fog computing and distributed environments.",
      "Analyzing Directed Acyclic Graphs (DAGs) for complex task dependencies and task mapping in heterogeneous systems.",
      "Utilizing deep reinforcement learning algorithms to optimize edge computing."
    ]
  },
  {
    role: "Graduate Teaching Assistant",
    org: "Sharif University of Technology",
    lab: "Department of Computer Engineering (2022 – 2026)",
    bullets: [
      "Low Power System Design (Graduate Course)",
      "Fault-Tolerant System Design (Graduate Course)",
      "Cyber-Physical Systems (Graduate Course)",
      "System-on-Chip Design (Graduate Course)",
      "Digital Systems Design & Embedded Systems",
      "Real-Time Systems (Dr. Sepideh Safari)",
      "Digital Systems Design Lab & Logic Circuits Lab (Instructor)"
    ]
  },
  {
    role: "Undergraduate Research Assistant",
    org: "Shahed University",
    lab: "Digital Systems and Embedded Systems Laboratory (2021 – 2022)",
    bullets: [
      "Implemented and evaluated an ARM Cortex-M1 Processor on FPGA for customized embedded system applications.",
      "Developed pipeline optimization and low-latency interrupt handling configurations using Xilinx Vivado and Verilog/VHDL.",
      "Designed and simulated RF amplifier circuits with PSpice."
    ]
  }
];

const publications = [
    {
    title:
      "GLEAM: A Graph-Learning Enhanced Adaptive Metaheuristic for Power-Aware Scheduling on Heterogeneous Cyber-Physical Systems",
    authors: "A. H. Ansari, M. Ansari, S. Safari, A. Ejlali, and J. Henkel",
    venue: "Design, Automation & Test in Europe Conference (DATE), 2026",
  },
    {
    title:
      "HAMLET: Heterogeneous Adaptive Mapping and Low-Energy Task Scheduling for Multi-core Embedded Systems",
    authors: "A. H. Ansari, M. Ansari, A. Ejlali, and J. Henkel",
    venue: "IEEE Internet of Things Journal, 2026",
  },
  {
    title: "Pilot: Power-Aware Hybrid Fault Tolerance in Multi-core Embedded Systems",
    authors:
      "A. H. Ansari, M. Esnaashari, M. Ansari, S. Safari, A. Ejlali, and J. Henkel",
    venue: "IEEE Transactions on Parallel and Distributed Systems (TPDS), 2026",
  },
    {
    title:
      "A Two-State Energy-Efficient Reliability-Aware Strategy in Fault-Tolerant Embedded Systems",
    authors:
      "A. M. Rasouli, A. H. Ansari, M. Esnaashari, S. Safari, and M. Ansari",
    venue: "IEEE Embedded Systems Letters, 2025",
  },
  {
    title:
      "TAFT: Thermal-Aware Hybrid Fault Tolerant Technique for Multicore Embedded Systems",
    authors: "A. H. Ansari, M. Ansari, and A. Ejlali",
    venue: "IEEE Embedded Systems Letters, 2024",
  },
];

// You can enable this section later if you want to show submitted papers separately.
// const submissions = [
//   {
//     title:
//       "Energy-Aware Graph Neural and Complex Network Approach in Fault-Tolerant Cyber-Physical Systems",
//     authors:
//       "M. Hajilou, A. H. Ansari, A. Najar, M. H. Keshavarzi, M. Ansari, and J. Henkel",
//     venue:
//       "Submitted to IEEE Transactions on Parallel and Distributed Systems (TPDS)",
//   },
// ];

// const professionalServices = [
//   {
//     title: "Reviewer — Journals",
//     items: ["IEEE Internet of Things Journal", "IEEE Open Journal of The Computer Society"],
//   },
//   {
//     title: "Sub-Reviewer — Journals",
//     items: [
//       "IEEE Transactions on Parallel and Distributed Systems",
//       "IEEE Transactions on Computers",
//       "IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems",
//       "IEEE Transactions on Sustainable Computing",
//       "IEEE Embedded Systems Letters",
//       "ACM Transactions on Design Automation of Electronic Systems",
//       "ACM Transactions on Embedded Computing Systems",
//       "ACM Transactions on Sensor Networks",
//     ],
//   },
//   {
//     title: "Sub-Reviewer — Conferences",
//     items: [
//       "Euromicro Digital System Design Conference (DSD 2024)",
//       "Asia and South Pacific Design Automation Conference (ASP-DAC 2024, ASP-DAC 2025)",
//       "5th CPSSI International Symposium on Cyber-Physical Systems (CPSAT 2024)",
//       "IEEE 14th International Symposium on Industrial Embedded Systems (SIES 2024)",
//     ],
//   },
// ];

const projects = [
  {
    title:
      "Dynamic Task Scheduling and Optimization in Heterogeneous Systems Using GNN and NSGA-III",
    period: "Jul. 2025 – Aug. 2025",
    tools: "Python, TensorFlow, PyTorch",
    description:
      "Designed a dynamic scheduling framework optimizing energy efficiency, execution time, and task migration.",
  },
  {
    title:
      "Peak-Power-Aware Hybrid Fault-Tolerant Technique in Multicore Embedded Systems",
    period: "Sep. 2022 – Dec. 2024",
    tools: "gem5, McPAT, HotSpot, MiBench, PARSEC Benchmark Suite, Python",
    description:
      "Proposed TAFT, Pilot, and HAMLET methods, reducing energy and peak power consumption while improving schedulability and reliability.",
  },
  {
    title: "ASIC Implementation of Array-Based Complex Matrix Multiplier",
    period: "Spring 2023",
    tools: "Synopsys Design Compiler, ModelSim, SoC Encounter, VHDL, HSPICE",
    description:
      "Designed a low-power array multiplier with configurable precision and optimized PDP in a 45nm process.",
  },
  {
    title: "ISCAS Combinational Circuit Simulator with Automated Test Vector Generation",
    period: "Spring 2023",
    tools: "Python, Verilog, PODEM Algorithm, Fault Simulation",
    description:
      "Developed a simulator for ISCAS circuits with automatic test vector generation and fault injection analysis.",
  },
  {
    title: "FPGA-Based Implementation of ARM Cortex-M1 Processor",
    period: "Spring 2022 – Summer 2022",
    tools: "Xilinx Vivado, Verilog/VHDL, Xilinx SDK, ARM Keil",
    description:
      "Implemented an FPGA-based ARM Cortex-M1 processor with optimized pipeline and low-latency interrupt handling.",
  },
  {
    title: "Analysis and Implementation of RF Amplifier Circuits with PSpice Simulation",
    period: "Fall 2021",
    tools: "PSpice, MATLAB",
    description:
      "Designed and simulated an RF amplifier circuit, optimizing gain, bandwidth, and harmonic distortion reduction.",
  },
];

// const teaching = [
//   {
//     title: "Teaching Assistant — Graduate Courses",
//     org: "Sharif University of Technology",
//     items: [
//       "Low Power System Design, Dr. Alireza Ejlali — Spring 2024, Spring 2026",
//       "Fault-Tolerant System Design, Dr. Alireza Ejlali — Fall 2023, Fall 2024",
//       "Cyber-Physical Systems, Dr. Mohsen Ansari — Fall 2023, Fall 2024, Fall 2025",
//       "System-on-Chip Design, Dr. Mohsen Ansari — Spring 2024",
//     ],
//   },
//   {
//     title: "Teaching Assistant — Undergraduate Courses",
//     org: "Sharif University of Technology",
//     items: [
//       "Digital Systems Design, Dr. Alireza Ejlali — Spring 2023, Spring 2024",
//       "Embedded Systems, Dr. Mohsen Ansari — Years 2022–2026",
//       "Real-Time Systems, Dr. Sepideh Safari — Years 2023–2026",
//       "Digital Systems Design, Dr. Amin Foshati — Spring 2024",
//     ],
//   },
//   {
//     title: "Lab Instructor",
//     org: "Sharif University of Technology",
//     items: [
//       "Digital Systems Design Lab, Dr. Alireza Ejlali — Spring 2024, Summer 2024",
//       "Logic Circuits Lab, Dr. Mohsen Ansari — Spring, Summer, and Fall 2023–2024",
//       "Logic Circuits Lab, Dr. Shaahin Hessabi — Summer 2024",
//     ],
//   },
// ];

const teachingAssistant = [
  {
    org: "Sharif University of Technology",
    items: [
      "Low Power System Design (Dr. Alireza Ejlali)",
      "Fault-Tolerant System Design (Dr. Alireza Ejlali)",
      "Cyber-Physical Systems (Dr. Mohsen Ansari)",
      "System-on-Chip Design (Dr. Mohsen Ansari)",
      "Digital Systems Design (Dr. Alireza Ejlali)",
      "Embedded Systems (Dr. Mohsen Ansari)",
      "Real-Time Systems (Dr. Sepideh Safari)",
      "Digital Systems Design (Dr. Amin Foshati)",
    ],
  },
];

const labInstructor = [
  {
    org: "Sharif University of Technology",
    items: [
      "Digital Systems Design Lab (Dr. Alireza Ejlali)",
      "Logic Circuits Lab (Dr. Mohsen Ansari)",
      "Logic Circuits Lab (Dr. Shaahin Hessabi)",
    ],
  },
];

const honors = [
  "Ranked 3rd among all B.E. students in the Electrical Engineering Department at Shahed University.",
  "Ranked 21st among approximately 15,000 students in the Master’s National Entrance Exam in Iran.",
];

// References are intentionally kept as comments. Enable this section later if you want references to appear on the public website.
// const references = [
//   {
//     name: "Dr. Alireza Ejlali",
//     department:
//       "Department of Computer Engineering, Sharif University of Technology, Tehran, Iran",
//     email: "ejlali@sharif.edu",
//     phone: "+98 21 6616 6621",
//     relationship: "Master’s Supervisor",
//   },
//   {
//     name: "Dr. Shaahin Hessabi",
//     department:
//       "Department of Computer Engineering, Sharif University of Technology, Tehran, Iran",
//     email: "hessabi@sharif.edu",
//     phone: "+98 21 6616 6638",
//     relationship: "Instructor for Advanced VLSI and Testability Courses",
//   },
// ];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Publications", href: "#publications" },
  { label: "Projects", href: "#projects" },
  { label: "Teaching", href: "#teaching" },
  { label: "Awards", href: "#awards" },
];

function Section({ id, icon: Icon, title, eyebrow, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-12 border-t border-slate-800/70">
      <div className="flex items-center gap-4 mb-7">
        <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 shadow-lg shadow-violet-950/30">
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div>
          {eyebrow && <p className="text-xs uppercase tracking-[0.25em] text-violet-300 mb-1">{eyebrow}</p>}
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">{title}</h2>
        </div>
      </div>
      {children}
    </section>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-100 shadow-sm">
      {children}
    </span>
  );
}

function Card({ children, className = "" }) {
  return (
    <div className={`rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-xl shadow-black/20 backdrop-blur hover:border-violet-400/40 transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}

function GradientText({ children }) {
  return (
    <span className="bg-gradient-to-r from-blue-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
      {children}
    </span>
  );
}

export default function AcademicHomepage() {
  return (
    <div id="top" className="min-h-screen bg-[#050816] text-slate-200 selection:bg-violet-500/40">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 left-[-10%] h-96 w-96 rounded-full bg-blue-700/30 blur-3xl" />
        <div className="absolute top-40 right-[-8%] h-[28rem] w-[28rem] rounded-full bg-violet-700/25 blur-3xl" />
        <div className="absolute bottom-[-12%] left-[30%] h-96 w-96 rounded-full bg-fuchsia-700/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
        <nav className="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between">
          <a href="#top" className="font-extrabold tracking-tight text-white">
            <GradientText>{profile.name}</GradientText>
          </a>
          <div className="hidden lg:flex items-center gap-4 text-sm font-medium text-slate-300">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-violet-300 transition-colors">
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-5">
        
        <div className="py-12 md:py-20 grid lg:grid-cols-[1fr_400px] gap-8 items-start">
          
          <section className="grid sm:grid-cols-[150px_1fr] gap-6 items-center">
            <div className="flex justify-center sm:block">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 blur-xl opacity-60" />
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="relative w-36 h-36 rounded-full object-cover ring-4 ring-violet-400/40 shadow-2xl border border-white/20"
                />
              </div>
            </div>

            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs text-violet-200 mb-3">
                <Sparkles className="w-3.5 h-3.5" /> Academic Homepage
              </p>
              <h1 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-2 leading-tight">
                {profile.name}
              </h1>
              <p className="text-base text-blue-200 mb-2 font-semibold leading-relaxed">{profile.title}</p>
              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">{profile.affiliation}</p>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-4 text-xs text-slate-400">
                <span className="inline-flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-violet-300" /> {profile.email}</span>
                <span className="inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-blue-300" /> {profile.location}</span>
              </div>

              <div className="flex flex-wrap gap-2 mt-5 text-xs">
                <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-3 py-1.5 text-white shadow-md hover:scale-[1.02] transition-transform">
                  <Mail className="w-3.5 h-3.5" /> Email
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-slate-200 hover:border-violet-300/60 transition-colors">
                  <ExternalLink className="w-3.5 h-3.5" /> LinkedIn
                </a>
                <a href={profile.scholar} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-slate-200 hover:border-violet-300/60 transition-colors">
                  <GraduationCap className="w-3.5 h-3.5" /> Scholar
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-slate-200 hover:border-violet-300/60 transition-colors">
                  <ExternalLink className="w-3.5 h-3.5" /> GitHub
                </a>
                <a href={profile.cv} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-slate-200 hover:border-violet-300/60 transition-colors">
                  <FileText className="w-3.5 h-3.5" /> CV
                </a>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 shadow-2xl backdrop-blur-md lg:h-[320px] flex flex-col">
            <div className="flex items-center gap-2.5 mb-4 shrink-0">
              <div className="p-1.5 rounded-xl bg-blue-500/20">
                <Newspaper className="w-4 h-4 text-blue-200" />
              </div>
              <h2 className="text-lg font-bold text-white">🗞️ Latest News</h2>
            </div>
            <div className="space-y-4 overflow-y-auto pr-1 flex-1 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
              {news.map((item, index) => (
                <div key={index} className="border-b border-white/5 pb-3 last:border-0 last:pb-0">
                  <div className="text-xs font-bold text-violet-400 mb-0.5">{item.date}</div>
                  <div className="text-xs text-slate-300 leading-relaxed">{item.text}</div>
                </div>
              ))}
            </div>
          </section>

        </div>
        {/* ============================================================================== */}
        {/*
        <section className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 md:p-8 shadow-2xl shadow-black/20 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-2xl bg-blue-500/20">
              <Newspaper className="w-5 h-5 text-blue-200" />
            </div>
            <h2 className="text-xl font-bold text-white">News</h2>
          </div>
          
          <div className="space-y-5">
            {news.map((item, index) => (
              <div key={index} className="flex flex-col gap-1 border-b border-white/5 pb-3 last:border-0 last:pb-0">
                <span className="text-sm font-semibold text-violet-400 tracking-wide">
                  {item.date}
                </span>
                <p className="text-slate-300 leading-relaxed text-[15px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>
        */}
        <Section id="about" icon={BookOpen} title="About" eyebrow="Profile">
          <Card>
            <div className="space-y-5 text-slate-300 leading-8 text-base md:text-lg">
              <p>
                I am a computer engineering researcher specializing in embedded systems, cyber-physical systems, real-time systems, low-power design, and fault-tolerant computing. My research focuses on improving the reliability, energy efficiency, peak power behavior, and schedulability of multicore embedded systems under timing and fault constraints.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {researchInterests.map((interest) => <Pill key={interest}>{interest}</Pill>)}
              </div>
            </div>
          </Card>
        </Section>

        <Section id="education" icon={GraduationCap} title="Education" eyebrow="Academic Background">
          <div className="space-y-5">
            {education.map((item, index) => (
              <Card key={index}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-lg text-white">🎓 {item.degree}</h3>
                    <p className="text-slate-300 mt-1">{item.school} — {item.location}</p>
                  </div>
                  <span className="text-sm font-semibold text-violet-300">{item.period}</span>
                </div>
                <p className="text-blue-200 mt-4 font-semibold">{item.gpa}</p>
                {item.thesis && <p className="text-slate-300 mt-3 leading-7"><span className="font-semibold text-white">Thesis:</span> {item.thesis}</p>}
                {item.keywords && <p className="text-slate-300 mt-2 leading-7"><span className="font-semibold text-white">Keywords:</span> {item.keywords}</p>}
                <p className="text-slate-300 mt-2 leading-7"><span className="font-semibold text-white">Supervisor:</span> {item.supervisor}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="skills" icon={Code2} title="Skills" eyebrow="Technical Stack">
          <div className="grid md:grid-cols-2 gap-5">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category}>
                <h3 className="font-bold text-white mb-4">⚙️ {category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => <Pill key={skill}>{skill}</Pill>)}
                </div>
              </Card>
            ))}
          </div>
        </Section>

<Section id="experience" icon={Cpu} title="Experience" eyebrow="Professional & Academic History">
          <Card className="p-8 md:p-10 space-y-10">
            {researchExperience.map((item, index) => (
              <div key={index} className="border-b border-slate-800/60 pb-8 last:border-0 last:pb-0">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {item.role} — <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">{item.org}</span>
                </h3>
                                <p className="text-sm font-semibold text-violet-300 mt-1 mb-4">
                  {item.lab}
                </p>
                
                <ul className="space-y-2.5 list-disc pl-5 text-slate-300 text-[15px] leading-relaxed">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx} className="hover:text-white transition-colors pl-1">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Card>
        </Section>

        <Section id="publications" icon={FileText} title="Publications" eyebrow="Research Output">
          <div className="space-y-4">
            {publications.map((pub, index) => (
              <Card key={index}>
                <h3 className="font-semibold text-white leading-7">📄 [{index + 1}] {pub.title}</h3>
                <p className="text-slate-300 mt-2">{pub.authors}</p>
                <p className="text-violet-300 mt-1">{pub.venue}</p>
              </Card>
            ))}
          </div>
        </Section>

        {/*
        <Section id="services" icon={ShieldCheck} title="Professional Services" eyebrow="Academic Service">
          <div className="grid md:grid-cols-3 gap-5">
            {professionalServices.map((group) => (
              <Card key={group.title}>
                <h3 className="font-bold text-white mb-4">🛡️ {group.title}</h3>
                <ul className="space-y-3 list-disc pl-5 text-slate-300 leading-7">
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </Card>
            ))}
          </div>
        </Section>
        */}
        <Section id="projects" icon={Briefcase} title="Projects" eyebrow="Selected Work">
          <div className="grid md:grid-cols-2 gap-5">
            {projects.map((project, index) => (
              <Card key={index}>
                <div className="flex flex-col gap-2 mb-3">
                  <h3 className="font-bold text-white leading-7">🚀 {project.title}</h3>
                  <span className="text-sm font-semibold text-violet-300">{project.period}</span>
                </div>
                <p className="text-slate-300 leading-7"><span className="font-semibold text-white">Tools:</span> {project.tools}</p>
                <p className="text-slate-300 mt-3 leading-7">{project.description}</p>
              </Card>
            ))}
          </div>
        </Section>


        {/*
        <Section id="teaching" icon={Users} title="Teaching Assistant" eyebrow="Teaching Experience">
          <div className="grid md:grid-cols-3 gap-5">
            {teaching.map((group) => (
              <Card key={group.title}>
                <h3 className="font-bold text-white mb-1">👨‍🏫 {group.title}</h3>
                <p className="text-violet-300 mb-4">{group.org}</p>
                <ul className="space-y-3 list-disc pl-5 text-slate-300 leading-7">
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </Card>
            ))}
          </div>
        </Section>
        */}

        {/* Teaching Experience Section */}
        <Section id="teaching" icon={Users} title="Teaching Experience" eyebrow="Academic Contributions">
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Teaching Assistant Card */}
            <Card>
              <h3 className="font-bold text-white text-lg mb-1">👨‍🏫 Teaching Assistant</h3>
              <p className="text-violet-300 text-sm mb-4">{teachingAssistant[0].org}</p>
              <ul className="space-y-3 list-disc pl-5 text-slate-300 leading-7">
                {teachingAssistant[0].items.map((item) => (
                  <li key={item} className="hover:text-white transition-colors">{item}</li>
                ))}
              </ul>
            </Card>

            {/* Lab Instructor Card */}
            <Card>
              <h3 className="font-bold text-white text-lg mb-1">🔬 Lab Instructor</h3>
              <p className="text-violet-300 text-sm mb-4">{labInstructor[0].org}</p>
              <ul className="space-y-3 list-disc pl-5 text-slate-300 leading-7">
                {labInstructor[0].items.map((item) => (
                  <li key={item} className="hover:text-white transition-colors">{item}</li>
                ))}
              </ul>
            </Card>

          </div>
        </Section>


        <Section id="awards" icon={Award} title="Honors & Awards" eyebrow="Achievements">
          <Card>
            <ul className="space-y-3 list-disc pl-5 text-slate-300 leading-7">
              {honors.map((honor) => <li key={honor}>🏆 {honor}</li>)}
            </ul>
          </Card>
        </Section>

        

        {/* References section is intentionally disabled for the public version.
        <Section id="references" icon={Users} title="References" eyebrow="Academic References">
          <div className="grid md:grid-cols-2 gap-5">
            {references.map((ref) => (
              <Card key={ref.email}>
                <h3 className="font-bold text-white">{ref.name}</h3>
                <p className="text-slate-300 mt-2 leading-7">{ref.department}</p>
                <p className="text-slate-300 mt-2">Email: <a className="font-semibold hover:text-violet-300" href={`mailto:${ref.email}`}>{ref.email}</a></p>
                <p className="text-slate-300 mt-1">Phone: {ref.phone}</p>
                <p className="text-violet-300 mt-2">Relationship: {ref.relationship}</p>
              </Card>
            ))}
          </div>
        </Section>
        */}

        <footer className="py-10 text-center text-sm text-slate-400 border-t border-slate-800">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Layers3 className="w-4 h-4 text-violet-300" />
            <span>© {new Date().getFullYear()} {profile.name}</span>
          </div>
          <p>Last updated: May 2026.</p>
        </footer>
      </main>
    </div>
  );
}
