import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Download,
  Flame,
  Mail,
  MapPin,
  Phone,
  RotateCcw,
  Sparkles,
  Volume2,
  VolumeX
} from "lucide-react";

const resumeUrl = "/resume.pdf";
const cabinBackground = "/cabin-bg.png";
const portfolioUrl = "https://portfolio-o8efzg22d-jkdears-projects.vercel.app/";

const profile = {
  name: "祁至立",
  title: "AI Product x Engineering x Design",
  subtitle: "清华大学结构工程硕士 · 上海交通大学结构工程 / 工业设计辅修",
  email: "qzl24@mails.tsinghua.edu.cn",
  phone: "+86 18850965680",
  location: "北京 · 清华大学",
  intro:
    "我希望把工程逻辑、设计表达与 AI 产品能力真正连接起来，做既有落地价值、又有用户温度的产品。",
  strengths:
    "具备 AI 产品从 0 到 1 的设计与落地能力，熟悉 Cursor、Prompt Engineering、多模型 API、PRD 与原型设计，能把工程问题拆解、设计表达和跨团队推进串成完整闭环。",
  education: [
    "清华大学 · 结构工程硕士 · 2024.09 - 至今",
    "上海交通大学 · 结构工程本科 / 工业设计辅修 · 2020.09 - 2024.06"
  ],
  honors: [
    "上海交通大学专业第一，上海市优秀毕业生",
    "国家奖学金、全国结构设计竞赛一等奖",
    "清华大学校级二等奖学金、社工优秀奖学金"
  ],
  skills: [
    "AI 与产品：OpenClaw、Claude Code、Cursor、Prompt Engineering、PRD、Figma",
    "设计与工程：工业设计、AutoCAD、SOLIDWORKS、结构分析、有限元分析",
    "语言：英语 CET-6 588，普通话母语"
  ]
};

const experiences = [
  {
    id: "exp-1",
    title: "招聘平台 B/C 端重构",
    subtitle: "北京领聘科技有限公司 · 产品经理实习生",
    period: "2025.11 - 2026.03",
    tags: ["AI 招聘", "B 端", "C 端", "PRD", "小程序"],
    photo:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    summary:
      "主导招聘平台 B/C 端重构，独立负责小程序端 PINNIX 与网页端的需求分析、产品方案设计及上线推进。",
    sections: [
      {
        heading: "我的工作",
        bullets: [
          "围绕职位发布、人才邀约、雇主品牌服务等核心场景，拆解需求并设计产品方案。",
          "借助 AI 辅助工具完成原型设计、PRD 撰写与交互方案输出。",
          "协同技术、运营等跨职能团队推进开发、测试验收与问题闭环。"
        ]
      },
      {
        heading: "项目特征",
        bullets: [
          "同时覆盖 B 端与 C 端体验，兼顾业务流程、信息架构与实际交付节奏。"
        ]
      }
    ]
  },
  {
    id: "exp-2",
    title: "AI 内容生产与作文批改",
    subtitle: "北京智慧基石有限公司 · AI 产品经理实习生",
    period: "2025.05 - 2025.10",
    tags: ["AI Agent", "Cursor", "Prompt", "教育"],
    photo:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    summary:
      "负责题目模块设计与内容生产工作流搭建，结合多模型 API 和 Prompt 优化推进 AI 教育产品落地。",
    sections: [
      {
        heading: "我的工作",
        bullets: [
          "搭建题库生成流程与内容生产 Agent，推动流程标准化。",
          "使用 Cursor 进行 Vibe Coding，并结合多模型 API 提升内容生成质量。",
          "设计英语作文智能批改功能，实现语法纠错、逻辑评分与个性化反馈。"
        ]
      },
      {
        heading: "结果",
        bullets: [
          "试卷制作周期缩短 50%。",
          "作文功能上线后，用户写作练习频次提升 45%。"
        ]
      }
    ]
  },
  {
    id: "exp-3",
    title: "机器狗房屋结构多模态巡检",
    subtitle: "清华大学 · 项目负责人",
    period: "2025.12 - 至今",
    tags: ["Robotics", "点云", "视觉检测", "多模态"],
    photo:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80",
    summary:
      "基于机器狗平台开展房屋结构多模态智能巡检模型研究，让设备根据轨迹、位置信息与点云数据自动完成现场任务。",
    sections: [
      {
        heading: "课题内容",
        bullets: [
          "根据预测巡检轨迹自动完成现场巡检，并控制视觉检测模组完成图像采集。",
          "结合位置信息、房屋点云与数字图像成果对检测质量进行量化评价。",
          "沉淀真实场景下的数据记录链路，为后续模型优化提供依据。"
        ]
      }
    ]
  },
  {
    id: "exp-4",
    title: "吊装罐体实时监测系统",
    subtitle: "清华大学 · 项目负责人",
    period: "2025.04 - 2026.02",
    tags: ["监测系统", "三维预演", "孪生预警", "发明专利"],
    photo:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    summary:
      "面向第四代高温气冷堆堆芯结构吊装场景，提出高精度实时监测系统，并形成两项发明专利。",
    sections: [
      {
        heading: "核心方案",
        bullets: [
          "集成三维预演、模块化传感、智能修正与孪生预警。",
          "解决半封闭仓筒内吊装监测精度低、预警滞后、环境干扰大与数据割裂等问题。",
          "最终形成两项发明专利成果。"
        ]
      }
    ]
  },
  {
    id: "exp-5",
    title: "校园经历与组织管理",
    subtitle: "清华大学土木工程暨建设管理系研究生会 · 副主席",
    period: "2025.06 - 2026.06",
    tags: ["学生工作", "组织管理", "活动策划", "协调"],
    photo:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    summary:
      "在研究生会承担日常事务管理与活动组织工作，持续锻炼统筹协调和团队推进能力。",
    sections: [
      {
        heading: "我的角色",
        bullets: [
          "负责研究生会日常事务管理与活动组织。",
          "在跨人群、跨任务协同中提升执行力、沟通力与统筹能力。"
        ]
      }
    ]
  },
  {
    id: "exp-6",
    title: "教育、技能与个人优势",
    subtitle: "Qi Zhili · 当前画像",
    period: "Now",
    tags: ["教育背景", "技能", "AI 产品", "跨学科"],
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80",
    summary:
      "土木工程与工业设计的跨学科背景，让我在 AI 产品语境里同时具备工程逻辑、设计表达和系统化推进能力。",
    sections: [
      {
        heading: "教育背景",
        bullets: [
          "清华大学结构工程硕士在读。",
          "上海交通大学结构工程本科，辅修工业设计，本科阶段专业第一。"
        ]
      },
      {
        heading: "技能与优势",
        bullets: [
          "熟悉 OpenClaw、Claude Code、Cursor、Prompt Engineering、PRD 与 Figma。",
          "具备工业设计、结构分析、有限元分析等工程与设计能力。",
          "能够把 AI 工具、多模型 API 与真实业务问题结合，做出可量化结果。"
        ]
      }
    ]
  }
];

function getTheme() {
  const hour = new Date().getHours();
  if (hour >= 19 || hour < 5) {
    return {
      label: "银河夜空",
      accent: "#ffb36b",
      glow: "rgba(255, 131, 43, 0.34)"
    };
  }

  if (hour >= 17) {
    return {
      label: "落日余烬",
      accent: "#ffc07b",
      glow: "rgba(255, 157, 87, 0.3)"
    };
  }

  return {
    label: "晨雾微光",
    accent: "#ffe2b3",
    glow: "rgba(255, 191, 116, 0.24)"
  };
}

function PhotoCard({ item, index, disabled, burned, onBurn, onOpen, isTouch }) {
  const [position, setPosition] = useState({
    x: 8 + (index % 3) * 18,
    y: 10 + Math.floor(index / 3) * 25
  });
  const [dragging, setDragging] = useState(false);
  const cardRef = useRef(null);
  const offsetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!dragging) {
      return undefined;
    }

    const handleMove = (event) => {
      setPosition({
        x: (event.clientX / window.innerWidth) * 100 - (offsetRef.current.x / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100 - (offsetRef.current.y / window.innerHeight) * 100
      });
    };

    const handleUp = () => {
      setDragging(false);
      const centerX = position.x + 8;
      const centerY = position.y + 11;
      const isOverFire = centerX > 42 && centerX < 58 && centerY > 44 && centerY < 77;

      if (isOverFire) {
        onBurn(item.id);
      }
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
    };
  }, [dragging, item.id, onBurn, position.x, position.y]);

  if (burned) {
    return null;
  }

  const handlePointerDown = (event) => {
    if (disabled || isTouch) {
      return;
    }

    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) {
      return;
    }

    offsetRef.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
    setDragging(true);
  };

  return (
    <motion.button
      ref={cardRef}
      type="button"
      className={`photo-card ${disabled ? "is-disabled" : ""}`}
      style={{ left: `${position.x}%`, top: `${position.y}%` }}
      animate={{
        rotate: dragging ? 0 : index % 2 === 0 ? -7 : 8,
        scale: dragging ? 1.04 : 1
      }}
      transition={{ type: "spring", stiffness: 230, damping: 18 }}
      onPointerDown={handlePointerDown}
      onClick={() => (isTouch ? onOpen(item.id) : undefined)}
      aria-label={isTouch ? `打开${item.title}` : `拖动${item.title}到火堆`}
    >
      <span className="photo-card__image-wrap">
        <img src={item.photo} alt={item.title} className="photo-card__image" />
      </span>
      <span className="photo-card__title">{item.title}</span>
      {isTouch ? <span className="photo-card__hint">轻触查看</span> : null}
    </motion.button>
  );
}

function App() {
  const theme = useMemo(() => getTheme(), []);
  const [loaded, setLoaded] = useState(false);
  const [audioOn, setAudioOn] = useState(true);
  const [activeId, setActiveId] = useState(null);
  const [burningId, setBurningId] = useState(null);
  const [burnedIds, setBurnedIds] = useState([]);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 1600);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(pointer: coarse)");
    const update = () => setIsTouch(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const activeExperience = experiences.find((item) => item.id === activeId) ?? null;
  const allBurned = burnedIds.length === experiences.length;

  const handleBurn = (id) => {
    if (burningId || activeId || burnedIds.includes(id)) {
      return;
    }

    setBurningId(id);

    window.setTimeout(() => {
      setBurnedIds((current) => [...current, id]);
      setBurningId(null);
      setActiveId(id);
    }, 1250);
  };

  const resetAll = () => {
    setActiveId(null);
    setBurningId(null);
    setBurnedIds([]);
  };

  return (
    <div className="app-shell" style={{ "--ember-glow": theme.glow, "--ember-accent": theme.accent }}>
      <div
        className="backdrop-scene"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 7, 5, 0.42), rgba(8, 7, 6, 0.8)), url(${cabinBackground})`
        }}
      />

      <AnimatePresence>
        {!loaded ? (
          <motion.div
            className="intro-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
          >
            <motion.div
              className="intro-screen__glow"
              animate={{ opacity: [0.35, 0.7, 0.2], scale: [1, 1.08, 1.14] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="intro-screen__content">
              <p className="eyebrow">Interactive Portfolio</p>
              <h1>Embers of Memory</h1>
              <p>雾气散去，新的履历会在火光里慢慢显形。</p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <main className="layout">
        <section className="hero">
          <div>
            <p className="eyebrow">Portfolio · {theme.label}</p>
            <h1 className="hero__title">Embers of Memory</h1>
            <p className="hero__subtitle">{profile.name} · {profile.title}</p>
            <p className="hero__copy">
              在山间木屋和火堆意象之间，把我的实习、项目、校园经历与个人优势重新排布成一场可以被探索的履历体验。
            </p>
          </div>

          <div className="hero__actions">
            <button type="button" className="icon-button" onClick={() => setAudioOn((value) => !value)}>
              {audioOn ? <Volume2 size={18} /> : <VolumeX size={18} />}
            </button>
            <button type="button" className="icon-button" onClick={resetAll}>
              <RotateCcw size={18} />
            </button>
          </div>
        </section>

        <section className="content-grid">
          <div className="memory-stage">
            {experiences.map((item, index) => (
              <PhotoCard
                key={item.id}
                item={item}
                index={index}
                disabled={Boolean(activeId || burningId)}
                burned={burnedIds.includes(item.id)}
                onBurn={handleBurn}
                onOpen={setActiveId}
                isTouch={isTouch}
              />
            ))}

            <div className="fire-zone" aria-hidden="true">
              <motion.div
                className="fire-zone__glow"
                animate={{ scale: [1, 1.14, 0.98, 1.08], opacity: [0.7, 1, 0.75, 0.92] }}
                transition={{ duration: 2.4, repeat: Infinity }}
              />
              <motion.div
                className="fire-zone__emoji"
                animate={{ y: [0, -7, 0], scale: [1, 1.08, 0.98, 1.04] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🔥
              </motion.div>
            </div>

            <p className="stage-note">
              {isTouch ? "手机端可直接点开卡片查看详情。" : "拖动照片到火堆中央，依次解锁每段最新经历。"}
            </p>

            <AnimatePresence>
              {burningId ? (
                <motion.div
                  className="burn-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="burn-card"
                    initial={{ scale: 0.84, opacity: 0.2 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      className="burn-card__sheet"
                      animate={{
                        rotate: [0, -4, 2, 0],
                        y: [0, -8, -18],
                        opacity: [1, 1, 0]
                      }}
                      transition={{ duration: 1.15, times: [0, 0.35, 0.7, 1] }}
                    />
                    <div className="burn-card__text">
                      <Sparkles size={16} />
                      <span>记忆正在燃烧并显影</span>
                    </div>
                  </motion.div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          <aside className="profile-panel">
            <p className="eyebrow">About</p>
            <h2>{profile.name}</h2>
            <p className="profile-panel__subtitle">{profile.subtitle}</p>
            <p className="profile-panel__intro">{profile.intro}</p>

            <div className="contact-list">
              <a href={`mailto:${profile.email}`} className="contact-item">
                <Mail size={16} />
                <span>{profile.email}</span>
              </a>
              <a href={`tel:${profile.phone}`} className="contact-item">
                <Phone size={16} />
                <span>{profile.phone}</span>
              </a>
              <div className="contact-item">
                <MapPin size={16} />
                <span>{profile.location}</span>
              </div>
            </div>

            <div className="panel-actions">
              <a className="primary-button" href={resumeUrl} download>
                <Download size={16} />
                <span>下载 PDF 简历</span>
              </a>
              <a className="secondary-button" href={portfolioUrl} target="_blank" rel="noreferrer">
                打开个人网站
              </a>
            </div>

            <div className="helper-card">
              <p className="eyebrow">Education</p>
              <p>{profile.education[0]}</p>
              <p>{profile.education[1]}</p>
            </div>

            <div className="helper-card">
              <p className="eyebrow">Highlights</p>
              <p>{profile.honors[0]}</p>
              <p>{profile.honors[1]}</p>
              <p>{profile.honors[2]}</p>
            </div>

            <div className="helper-card">
              <p className="eyebrow">Skills</p>
              <p>{profile.skills[0]}</p>
              <p>{profile.skills[1]}</p>
              <p>{profile.skills[2]}</p>
            </div>
          </aside>
        </section>
      </main>

      <AnimatePresence>
        {activeExperience ? (
          <motion.div
            className="modal-shell"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveId(null)}
          >
            <motion.article
              className="modal-card"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="modal-card__media">
                <img src={activeExperience.photo} alt={activeExperience.title} />
                <div className="modal-card__overlay" />
                <div className="modal-card__meta">
                  <p className="eyebrow">{activeExperience.period}</p>
                  <h3>{activeExperience.title}</h3>
                  <p>{activeExperience.subtitle}</p>
                  <div className="tag-list">
                    {activeExperience.tags.map((tag) => (
                      <span key={tag} className="tag-chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="modal-card__body">
                <p className="modal-card__summary">{activeExperience.summary}</p>
                {activeExperience.sections.map((section) => (
                  <section key={section.heading} className="detail-section">
                    <h4>{section.heading}</h4>
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </section>
                ))}

                {activeExperience.id === "exp-6" ? (
                  <section className="detail-section">
                    <h4>个人优势</h4>
                    <ul>
                      <li>{profile.strengths}</li>
                    </ul>
                  </section>
                ) : null}

                <div className="modal-card__actions">
                  <button type="button" className="primary-button" onClick={() => setActiveId(null)}>
                    回到火堆
                  </button>
                  <a className="secondary-button" href={resumeUrl} download>
                    下载简历
                  </a>
                </div>
              </div>
            </motion.article>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {allBurned && !activeId && !burningId ? (
          <motion.div
            className="ending-shell"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="ending-card"
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <div className="ending-card__badge">
                <Flame size={34} />
              </div>
              <h3>火种已经浮现</h3>
              <p>你已经看完所有最新履历碎片。现在，可以带走一份更完整的我。</p>
              <div className="ending-card__actions">
                <a className="primary-button" href={resumeUrl} download>
                  <Download size={16} />
                  <span>下载 PDF 简历</span>
                </a>
                <button type="button" className="secondary-button" onClick={resetAll}>
                  重新点燃
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default App;
