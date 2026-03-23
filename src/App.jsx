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

const profile = {
  name: "祁至立",
  title: "AI Product x Engineering x Design",
  subtitle: "清华大学土木工程硕士 · 上海交通大学土木工程 / 工业设计",
  email: "qzl24@mails.tsinghua.edu.cn",
  phone: "+86 18850965680",
  location: "北京 · 清华大学",
  intro:
    "我希望把工程逻辑、设计表达与 AI 产品能力结合起来，做真正有温度、也有落地价值的产品。"
};

const experiences = [
  {
    id: "exp-1",
    title: "招聘平台重构",
    subtitle: "北京领职科技 · 产品经理实习生",
    period: "2025.10 - 2026.03",
    tags: ["AI 招聘", "0-1", "B 端", "C 端", "PRD"],
    photo:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    summary:
      "主导招聘平台的信息架构与核心流程重构，从原型、PRD 到跨团队推进，完成产品从 0 到 1 的落地。",
    sections: [
      {
        heading: "项目背景",
        bullets: [
          "面向 AI、科技、量化金融等行业企业，优化职位发布、人才邀约与品牌展示体验。"
        ]
      },
      {
        heading: "我的工作",
        bullets: [
          "重做平台功能结构与关键交互逻辑。",
          "独立输出原型与 PRD，并协同研发测试推进上线。",
          "明确职位发布、邀约、品牌页等模块的体验标准。"
        ]
      },
      {
        heading: "结果",
        bullets: ["新平台顺利上线，招聘效率与人才触达准确度得到提升。"]
      }
    ]
  },
  {
    id: "exp-2",
    title: "AI 教育产品实习",
    subtitle: "北京开心蛙科技 · AI 产品经理实习生",
    period: "2025.05 - 2025.10",
    tags: ["AI", "Prompt", "OpenRouter", "教育"],
    photo:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    summary:
      "围绕海外教育场景设计 AI 功能，负责刷题、作文批改与真题展示站的内容结构和产品落地。",
    sections: [
      {
        heading: "我的工作",
        bullets: [
          "梳理备考场景需求并设计内容框架。",
          "使用多模型 API 快速搭建功能原型。",
          "设计 Prompt 以支持语法纠错、评分和个性化建议。"
        ]
      },
      {
        heading: "结果",
        bullets: [
          "试卷制作周期缩短约 30%。",
          "作文练习频次明显提升，题库页面加载体验进一步优化。"
        ]
      }
    ]
  },
  {
    id: "exp-3",
    title: "机器狗智能巡检",
    subtitle: "清华大学 · 项目执行人",
    period: "2025.12 - 至今",
    tags: ["Robotics", "点云", "导航", "多模态巡检"],
    photo:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80",
    summary:
      "基于机器狗平台研究房屋结构巡检模型，让设备能依据轨迹、位置信息与点云数据完成现场任务。",
    sections: [
      {
        heading: "课题目标",
        bullets: [
          "自动完成巡检路径规划，并结合位置与点云信息采集现场图像数据。"
        ]
      },
      {
        heading: "我的工作",
        bullets: [
          "参与系统目标拆解与任务定义。",
          "关注点云、视觉检测与真实数据记录链路。",
          "从工程和产品视角思考巡检质量量化。"
        ]
      }
    ]
  },
  {
    id: "exp-4",
    title: "吊装监测系统与专利",
    subtitle: "清华大学 · 项目执行人",
    period: "2025.04 - 2026.02",
    tags: ["监测系统", "三维预演", "预警", "发明专利"],
    photo:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    summary:
      "提出面向复杂吊装工况的高精度实时监测系统，并形成相关专利成果。",
    sections: [
      {
        heading: "核心方案",
        bullets: [
          "融合三维预演、模块化传感、智能修正与预警机制。",
          "面向复杂工程环境设计高精度监测链路。"
        ]
      },
      {
        heading: "收获",
        bullets: ["进一步强化了我对复杂工程系统问题拆解与方案搭建的能力。"]
      }
    ]
  },
  {
    id: "exp-5",
    title: "竞赛、奖学金与领导力",
    subtitle: "成长轨迹",
    period: "2021 - 至今",
    tags: ["全国一等奖", "国家奖学金", "班长", "研究生会"],
    photo:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    summary:
      "从结构设计竞赛到奖学金，再到学生组织经历，这些片段共同构成了我的成长路径。",
    sections: [
      {
        heading: "代表经历",
        bullets: [
          "全国大学生结构设计竞赛一等奖。",
          "国家奖学金、优秀毕业生等荣誉。",
          "担任班长与研究生会相关职务。"
        ]
      }
    ]
  },
  {
    id: "exp-6",
    title: "关于我与下一段火种",
    subtitle: "Qi Zhili",
    period: "Now",
    tags: ["清华大学", "AI 产品", "工程", "设计"],
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80",
    summary:
      "我想继续进入 AI 产品相关岗位，把工程、设计与产品思维真正连接起来。",
    sections: [
      {
        heading: "我的优势",
        bullets: [
          "具备从 0 到 1 设计 AI 产品原型与推进落地的能力。",
          "能在 Prompt、原型设计、PRD 与跨团队协作之间形成闭环。",
          "兼具工程理解、设计表达与系统思维。"
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
              <p>雾气散去，旧日碎片会在火光里缓缓显形。</p>
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
              在木屋与山景之间，把照片投入火堆，让项目、研究、奖项与成长轨迹在余烬里被重新点亮。
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
              {isTouch ? "手机端可直接点开卡片查看详情。" : "拖动照片到火堆中央，依次解锁每段经历。"}
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
              <a className="secondary-button" href={`mailto:${profile.email}`}>
                联系我
              </a>
            </div>

            <div className="helper-card">
              <p className="eyebrow">How To Explore</p>
              <p>把照片丢进火堆，或在手机上轻触卡片，你会看到每段经历在火光里被展开。</p>
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
              <p>你已经看完所有被投入火中的记忆碎片。现在，可以带走一份更完整的我。</p>
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
