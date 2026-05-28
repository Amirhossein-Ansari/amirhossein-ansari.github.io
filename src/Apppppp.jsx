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
  Languages,
  ShieldCheck,
} from "lucide-react";

const profile = {
  name: "Amir Hossein Ansari",
  title: "M.Sc. in Computer Engineering | Embedded Systems and Fault-Tolerant Computing Researcher",
  affiliation:
    "Researcher in power-aware and fault-tolerant techniques for multicore embedded systems, cyber-physical systems, real-time systems, and embedded machine learning.",
  email: "amirhosein.ansari79@gmail.com",
  location: "Tehran, Iran",
  linkedin: "https://www.linkedin.com/in/amir-hossein-ansari-b4bba5241",
  scholar: "https://scholar.google.com/citations?hl=en&user=LjQ5PFYAAAAJ",
  cv: "/Academic_CV_AmirHossein_Ansari.pdf",
  photo: "/main-personal.jpg",
};

const news = [
  {
    date: "2026",
    text: "Pilot: Power-Aware Hybrid Fault Tolerance in Multi-core Embedded Systems accepted/published in IEEE Transactions on Parallel and Distributed Systems.",
  },
  {
    date: "2026",
    text: "HAMLET: Heterogeneous Adaptive Mapping and Low-Energy Task Scheduling for Multi-core Embedded Systems accepted/published in IEEE Internet of Things Journal.",
  },
  {
    date: "2026",
    text: "GLEAM accepted/published in the 2026 Design, Automation & Test in Europe Conference.",
  },
  {
    date: "2024",
    text: "TAFT: Thermal-Aware Hybrid Fault Tolerant Technique for Multicore Embedded Systems published in IEEE Embedded Systems Letters.",
  },
];

const researchInterests = [
  "Embedded Machine Learning",
  "Fault-Tolerant System Design",
  "Low-Power System Design",
  "Cyber-Physical Systems",
  "Real-Time Systems",
  "Internet of Things",
  "Multicore Embedded Systems",
  "Power-Aware Computing",
];

const education = [
  {
    degree: "Master of Science in Computer Engineering",
    school: "Sharif University of Technology (SUT)",
    location: "Tehran, Iran",
    period: "Sep. 2022 – Dec. 2024",
    gpa: "CGPA: 18.80 / 20.00",
    supervisor: "Dr. Alireza Ejlali",
  },
  {
    degree: "Bachelor of Science in Electrical Engineering",
    school: "Shahed University",
    location: "Tehran, Iran",
    period: "Sep. 2018 – Sep. 2022",
    gpa: "CGPA: 17.51 / 20.00",
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
    role: "Research Assistant",
    org: "Embedded Systems Research Laboratory",
    period: "Sep. 2022 – Present",
    supervisor: "Supervisor: Dr. Alireza Ejlali",
  },
  {
    role: "Research Assistant",
    org: "Cyber-Physical Systems Laboratory",
    period: "Dec. 2024 – Present",
    supervisor: "Supervisor: Dr. Mohsen Ansari",
  }
];

const publications = [
  {
    title: "Pilot: Power-Aware Hybrid Fault Tolerance in Multi-core Embedded Systems",
    authors: "A. H. Ansari, M. Esnaashari, M. Ansari, S. Safari, A. Ejlali, and J. Henkel",
    venue: "IEEE Transactions on Parallel and Distributed Systems (TPDS), 2026",
  },
  {
    title: "HAMLET: Heterogeneous Adaptive Mapping and Low-Energy Task Scheduling for Multi-core Embedded Systems",
    authors: "A. H. Ansari, M. Ansari, A. Ejlali, and J. Henkel",
    venue: "IEEE Internet of Things Journal, 2026",
  },
  {
    title: "GLEAM: A Graph-Learning Enhanced Adaptive Metaheuristic for Power-Aware Scheduling on Heterogeneous Cyber-Physical Systems",
    authors: "A. H. Ansari, M. Ansari, S. Safari, A. Ejlali, and J. Henkel",
    venue: "Design, Automation & Test in Europe Conference (DATE), 2026",
  },
  {
    title: "TAFT: Thermal-Aware Hybrid Fault Tolerant Technique for Multicore Embedded Systems",
    authors: "A. H. Ansari, M. Ansari, and A. Ejlali",
    venue: "IEEE Embedded Systems Letters, 2024",
  },
  {
    title: "A Two-State Energy-Efficient Reliability-Aware Strategy in Fault-Tolerant Embedded Systems",
    authors: "A. M. Rasouli, A. H. Ansari, M. Esnaashari, S. Safari, and M. Ansari",
    venue: "IEEE Embedded Systems Letters, 2025",
  },
];

const professionalServices = [
  {
    title: "Reviewer — Journals",
    items: ["IEEE Internet of Things Journal", "IEEE Open Journal of The Computer Society"],
  },
  {
    title: "Sub-Reviewer — Journals",
    items: [
      "IEEE Transactions on Parallel and Distributed Systems",
      "IEEE Transactions on Computers",
      "IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems",
      "IEEE Transactions on Sustainable Computing",
      "IEEE Embedded Systems Letters",
      "ACM Transactions on Design Automation of Electronic Systems",
      "ACM Transactions on Embedded Computing Systems",
      "ACM Transactions on Sensor Networks",
    ],
  },
  {
    title: "Sub-Reviewer — Conferences",
    items: [
      "Euromicro Digital System Design Conference (DSD 2024)",
      "Asia and South Pacific Design Automation Conference (ASP-DAC 2024, ASP-DAC 2025)",
      "5th CPSSI International Symposium on Cyber-Physical Systems (CPSAT 2024)",
      "IEEE 14th International Symposium on Industrial Embedded Systems (SIES 2024)",
    ],
  },
];

const courses = {
  "Master of Science": [
    "Low Power System Design — 20/20",
    "Cyber-Physical Systems — 19.6/20",
    "Seminar — 19.9/20",
    "Advanced VLSI Design — 19.5/20",
    "System-on-Chip Design — 19.2/20",
    "Fault-Tolerant System Design — 19/20",
  ],
  "Bachelor of Science": [
    "Communication Systems — 20/20",
    "Electrical Engineering Co-Op — 20/20",
    "Electrical Engineering Project — 19.75/20",
    "Engineering Probability and Statistics — 19.6/20",
    "Digital Communication — 19/20",
    "Microprocessor — 19/20",
  ],
};

const projects = [
  {
    title: "Dynamic Task Scheduling and Optimization in Heterogeneous Systems Using GNN and NSGA-III",
    period: "Jul. 2025 – Aug. 2025",
    tools: "Python, TensorFlow, PyTorch",
    description: "Designed a dynamic scheduling framework optimizing energy efficiency, execution time, and task migration.",
  },
  {
    title: "Peak-Power-Aware Hybrid Fault-Tolerant Technique in Multicore Embedded Systems",
    period: "Sep. 2022 – Dec. 2024",
    tools: "gem5, McPAT, HotSpot, MiBench, PARSEC Benchmark Suite, Python",
    description: "Proposed TAFT, Pilot, and HAMLET methods, reducing energy and peak power consumption while improving schedulability and reliability.",
  },
  {
    title: "ASIC Implementation of Array-Based Complex Matrix Multiplier",
    period: "Spring 2023",
    tools: "Synopsys Design Compiler, ModelSim, SoC Encounter, VHDL, HSPICE",
    description: "Designed a low-power array multiplier with configurable precision and optimized PDP in a 45nm process.",
  },
  {
    title: "ISCAS Combinational Circuit Simulator with Automated Test Vector Generation",
    period: "Spring 2023",
    tools: "Python, Verilog, PODEM Algorithm, Fault Simulation",
    description: "Developed a simulator for ISCAS circuits with automatic test vector generation and fault injection analysis.",
  },
  {
    title: "FPGA-Based Implementation of ARM Cortex-M1 Processor",
    period: "Spring 2022 – Summer 2022",
    tools: "Xilinx Vivado, Verilog/VHDL, Xilinx SDK, ARM Keil",
    description: "Implemented an FPGA-based ARM Cortex-M1 processor with optimized pipeline and low-latency interrupt handling.",
  },
  {
    title: "Analysis and Implementation of RF Amplifier Circuits with PSpice Simulation",
    period: "Fall 2021",
    tools: "PSpice, MATLAB",
    description: "Designed and simulated an RF amplifier circuit, optimizing gain, bandwidth, and harmonic distortion reduction.",
  },
];

const teaching = [
  {
    title: "Teaching Assistant — Graduate Courses",
    org: "Sharif University of Technology",
    items: [
      "Low Power System Design, Dr. Alireza Ejlali — Spring 2024, Spring 2026",
      "Fault-Tolerant System Design, Dr. Alireza Ejlali — Fall 2023, Fall 2024",
      "Cyber-Physical Systems, Dr. Mohsen Ansari — Fall 2023, Fall 2024, Fall 2025",
      "System-on-Chip Design, Dr. Mohsen Ansari — Spring 2024",
    ],
  },
  {
    title: "Teaching Assistant — Undergraduate Courses",
    org: "Sharif University of Technology",
    items: [
      "Digital Systems Design, Dr. Alireza Ejlali — Spring 2023, Spring 2024",
      "Embedded Systems, Dr. Mohsen Ansari — Years 2022–2026",
      "Real-Time Systems, Dr. Sepideh Safari — Years 2023–2026",
      "Digital Systems Design, Dr. Amin Foshati — Spring 2024",
    ],
  },
  {
    title: "Lab Instructor",
    org: "Sharif University of Technology",
    items: [
      "Digital Systems Design Lab, Dr. Alireza Ejlali — Spring 2024, Summer 2024",
      "Logic Circuits Lab, Dr. Mohsen Ansari — Spring, Summer, and Fall 2023–2024",
      "Logic Circuits Lab, Dr. Shaahin Hessabi — Summer 2024",
    ],
  },
];

// سکشن‌هایی که فعلاً کامنت هستند را از نوبار حذف کردم تا ارور ندهند
const navItems = [
  "About",
  "Education",
  "Research",
  "Projects",
  "Publications",
  "Teaching",
  "Skills",
  "Services",
  "Courses",
  "Languages",
];

function Section({ id, icon: Icon, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-10 border-t border-slate-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-2xl bg-slate-100 shadow-sm">
          <Icon className="w-5 h-5 text-slate-700" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 shadow-sm">
      {children}
    </span>
  );
}

function Card({ children }) {
  return <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">{children}</div>;
}

export default function AcademicHomepage() {
  return (
    <div id="top" className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-slate-200">
        <nav className="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between">
          <a href="#top" className="font-bold text-slate-950 tracking-tight">
            {profile.name}
          </a>
          <div className="hidden lg:flex items-center gap-4 text-sm font-medium text-slate-600">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-slate-950 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-5">
        <section className="py-14 md:py-20 grid md:grid-cols-[220px_1fr] gap-8 items-center">
          <div className="flex md:block justify-center">
            <img
              src={profile.photo}
              alt={profile.name}
              className="w-44 h-44 md:w-52 md:h-52 rounded-full object-cover ring-4 ring-white shadow-xl border border-slate-200"
            />
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-slate-500 mb-3">Academic Homepage</p>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 mb-4">
              {profile.name}
            </h1>
            <p className="text-xl text-slate-700 mb-3">{profile.title}</p>
            <p className="text-base md:text-lg text-slate-600 max-w-3xl leading-8">{profile.affiliation}</p>

            <div className="flex flex-wrap items-center gap-4 mt-5 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2"><Mail className="w-4 h-4" /> {profile.email}</span>
              <span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4" /> {profile.location}</span>
            </div>

            <div className="flex flex-wrap gap-3 mt-7">
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-4 py-2 text-white shadow-sm hover:bg-slate-800 transition-colors">
                <Mail className="w-4 h-4" /> Email Me
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-slate-700 shadow-sm hover:border-slate-300 transition-colors">
                <ExternalLink className="w-4 h-4" /> LinkedIn
              </a>
              <a href={profile.scholar} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-slate-700 shadow-sm hover:border-slate-300 transition-colors">
                <GraduationCap className="w-4 h-4" /> Google Scholar
              </a>
              <a href={profile.cv} download className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-slate-700 shadow-sm hover:border-slate-300 transition-colors">
                <FileText className="w-4 h-4" /> CV
              </a>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm mb-8">
          <div className="flex items-center gap-3 mb-5">
            <Newspaper className="w-5 h-5 text-slate-700" />
            <h2 className="text-xl font-bold text-slate-950">News</h2>
          </div>
          <div className="space-y-4">
            {news.map((item, index) => (
              <div key={index} className="grid md:grid-cols-[110px_1fr] gap-2 md:gap-4">
                <div className="font-semibold text-slate-500">{item.date}</div>
                <div className="text-slate-700 leading-7">{item.text}</div>
              </div>
            ))}
          </div>
        </section>
          
        <Section id="about" icon={BookOpen} title="About">
          <div className="space-y-5 text-slate-700 leading-8 text-base md:text-lg">
            <p>
              I am a computer engineering researcher specializing in embedded systems, cyber-physical systems, real-time systems, low-power design, and fault-tolerant computing. My research focuses on improving the reliability, energy efficiency, peak power behavior, and schedulability of multicore embedded systems under timing and fault constraints.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {researchInterests.map((interest) => <Pill key={interest}>{interest}</Pill>)}
            </div>
          </div>
        </Section>

        <Section id="education" icon={GraduationCap} title="Education">
          <div className="space-y-5">
            {education.map((item, index) => (
              <Card key={index}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-lg text-slate-950">{item.degree}</h3>
                    <p className="text-slate-600 mt-1">{item.school} — {item.location}</p>
                  </div>
                  <span className="text-sm font-semibold text-slate-500">{item.period}</span>
                </div>
                <p className="text-slate-700 mt-4 font-semibold">{item.gpa}</p>
                {item.thesis && <p className="text-slate-700 mt-3 leading-7"><span className="font-semibold">Thesis:</span> {item.thesis}</p>}
                {item.keywords && <p className="text-slate-700 mt-2 leading-7"><span className="font-semibold">Keywords:</span> {item.keywords}</p>}
                <p className="text-slate-700 mt-2 leading-7"><span className="font-semibold">Supervisor:</span> {item.supervisor}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="research" icon={Cpu} title="Research Experience">
          <div className="space-y-5">
            {researchExperience.map((item, index) => (
              <Card key={index}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-bold text-lg text-slate-950">{item.role}</h3>
                    <p className="text-slate-600 mt-1">{item.org}</p>
                  </div>
                  <span className="text-sm font-semibold text-slate-500">{item.period}</span>
                </div>
                <p className="text-slate-700 leading-7 mb-2">{item.supervisor}</p>
                {item.focus && <p className="text-slate-700 leading-7 mb-4">{item.focus}</p>}
                {item.bullets && (
                  <ul className="space-y-3 list-disc pl-5 text-slate-700 leading-7">
                    {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                )}
                {item.skills && <p className="text-slate-700 mt-4 leading-7"><span className="font-semibold">Skills Acquired:</span> {item.skills}</p>}
              </Card>
            ))}
          </div>
        </Section>

        <Section id="projects" icon={Briefcase} title="Projects">
          <div className="grid md:grid-cols-2 gap-5">
            {projects.map((project, index) => (
              <Card key={index}>
                <div className="flex flex-col gap-2 mb-3">
                  <h3 className="font-bold text-slate-950 leading-7">{project.title}</h3>
                  <span className="text-sm font-semibold text-slate-500">{project.period}</span>
                </div>
                <p className="text-slate-700 leading-7"><span className="font-semibold">Tools:</span> {project.tools}</p>
                <p className="text-slate-700 mt-3 leading-7">{project.description}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="publications" icon={FileText} title="Publications">
          <div className="space-y-4">
            {publications.map((pub, index) => (
              <Card key={index}>
                <h3 className="font-semibold text-slate-950 leading-7">[{index + 1}] {pub.title}</h3>
                <p className="text-slate-700 mt-2">{pub.authors}</p>
                <p className="text-slate-500 mt-1">{pub.venue}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="teaching" icon={Users} title="Teaching Experience">
          <div className="grid md:grid-cols-3 gap-5">
            {teaching.map((group) => (
              <Card key={group.title}>
                <h3 className="font-bold text-slate-950 mb-1">{group.title}</h3>
                <p className="text-slate-500 mb-4">{group.org}</p>
                <ul className="space-y-3 list-disc pl-5 text-slate-700 leading-7">
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="skills" icon={Code2} title="Skills">
          <div className="grid md:grid-cols-2 gap-5">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category}>
                <h3 className="font-bold text-slate-950 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => <Pill key={skill}>{skill}</Pill>)}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="services" icon={ShieldCheck} title="Professional Services">
          <div className="grid md:grid-cols-3 gap-5">
            {professionalServices.map((group) => (
              <Card key={group.title}>
                <h3 className="font-bold text-slate-950 mb-4">{group.title}</h3>
                <ul className="space-y-3 list-disc pl-5 text-slate-700 leading-7">
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="courses" icon={BookOpen} title="Related Courses">
          <div className="grid md:grid-cols-2 gap-5">
            {Object.entries(courses).map(([degree, items]) => (
              <Card key={degree}>
                <h3 className="font-bold text-slate-950 mb-4">{degree}</h3>
                <ul className="space-y-3 list-disc pl-5 text-slate-700 leading-7">
                  {items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="languages" icon={Languages} title="Languages">
          <Card>
            <div className="flex flex-wrap gap-2">
              <Pill>Persian — Native</Pill>
              <Pill>English</Pill>
            </div>
          </Card>
        </Section>

        <footer className="py-10 text-center text-sm text-slate-500 border-t border-slate-200">
          © {new Date().getFullYear()} {profile.name}. Last updated: May 2026.
        </footer>
      </main>
    </div>
  );
}