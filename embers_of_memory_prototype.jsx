import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Volume2, VolumeX, Download, RotateCcw, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const cabinBackground = "/cabin-bg.png";

const resumeUrl = "/resume.pdf";
const contactEmail = "qzl24@mails.tsinghua.edu.cn";
const contactPhone = "+86 18850965680";
const contactLocation = "北京 · 清华大学";

const experiences = [
  {
    id: "exp_01",
    title: "招聘平台架构重构",
    subtitle: "北京领聘科技｜产品经理实习生",
    period: "2025.10 - 2026.03",
    tags: ["AI 招聘", "0-1", "B端", "C端", "PRD"],
    photo: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
    summary: "作为核心负责人主导平台架构重构，独立负责 C 端小程序与 B 端网页端从 0 到 1 的产品设计与落地。",
    content: `### 项目背景
北京领聘科技聚焦高学历人才招聘赛道，服务 AI、科技、量化金融、半导体、医疗等领域企业。

### 我的职责
- 全面推翻原有架构，重构平台信息结构与功能逻辑
- 独立完成产品原型设计与 PRD 文档撰写
- 定义职位发布、人才邀约、雇主品牌服务等核心模块交互标准
- 协同技术、运营推进开发、测试与验收

### 项目结果
重构后的平台完成上线，优化了岗位发布、定向邀约与品牌宣传能力，提升企业招聘效率与人才触达精准度。`
  },
  {
    id: "exp_02",
    title: "AI 教育产品实习",
    subtitle: "北京开心蛙科技｜AI 产品经理实习生",
    period: "2025.05 - 2025.10",
    tags: ["AI", "Prompt", "OpenRouter", "Cursor", "教育"],
    photo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    summary: "围绕海外教育与 AI 场景，负责刷题模块、作文批改与真题展示网站的内容设计与功能落地。",
    content: `### 项目背景
公司聚焦“海外教育 + AI”赛道，为语言学习者提供高效备考解决方案。

### 我的职责
- 主导考研英语与托业场景的内容设计与落地
- 使用 Cursor、OpenRouter、多模型 API 构建功能原型
- 设计定制化 Prompt，实现作文语法纠错、逻辑评分与个性化建议
- 配合前端优化真题展示网站交互与加载体验

### 项目结果
单套试卷制作周期缩短 30%，作文网站上线后用户写作练习频次提升 45%，真题页面加载速度提升 20%。`
  },
  {
    id: "exp_03",
    title: "机器狗智能巡检课题",
    subtitle: "清华大学｜项目执行人",
    period: "2025.12 - 至今",
    tags: ["Robotics", "点云", "导航", "多模态巡检"],
    photo: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200&auto=format&fit=crop",
    summary: "基于机器狗平台研究房屋结构多模态智能巡检模型，让设备能够依据轨迹、位置信息与点云数据自动完成现场巡检任务。",
    content: `### 课题目标
基于机器狗预测巡检轨迹，自动完成现场巡检任务，并依据位置信息与房屋点云信息自动控制视觉检测模组完成图像采集。

### 我的工作
- 参与课题方案拆解与系统目标设定
- 关注点云信息、视觉检测与真实数据记录链路
- 从工程与产品视角思考“巡检质量可量化评价”的实现路径

### 研究价值
该课题体现了我将工程系统理解、技术调研能力与 AI/产品思维结合到真实场景中的能力。`
  },
  {
    id: "exp_04",
    title: "吊装监测系统与专利成果",
    subtitle: "清华大学｜项目执行人",
    period: "2025.04 - 2026.02",
    tags: ["监测系统", "三维预演", "孪生预警", "发明专利"],
    photo: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
    summary: "提出一种面向半封闭仓筒内吊装罐体施工过程的高精度实时监测系统，并形成两项发明专利。",
    content: `### 项目背景
在第四代高温气冷堆堆芯结构吊装试验中，现场存在精度低、预警滞后、环境干扰大及数据割裂等问题。

### 核心方案
- 集成三维预演、模块化传感、智能修正与孪生预警
- 面向复杂工程环境设计高精度监测链路

### 项目成果
形成两项发明专利，进一步强化了我在复杂工程系统中的问题拆解与方案构建能力。`
  },
  {
    id: "exp_05",
    title: "竞赛、奖学金与领导力",
    subtitle: "成长里程碑",
    period: "2021 - 至今",
    tags: ["全国一等奖", "国家奖学金", "班长", "研究生会"],
    photo: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
    summary: "从结构设计竞赛到奖学金，再到班长与研究生会副主席，这些经历构成了我持续积累与向上生长的轨迹。",
    content: `### 竞赛与荣誉
- 第十五届全国大学生结构设计竞赛全国一等奖（排名 4/110）
- 第五届上海市大学生结构设计竞赛一等奖（排名 1/15）
- 国家奖学金（前 0.2%）
- 上海市优秀毕业生
- 全国土木工程优秀本科毕业生

### 校园角色
- 清华大学土木工程暨建设管理系研究生会副主席
- 清华大学与上海交通大学班长经历

### 这部分想表达什么
除了项目结果，我也希望让访客看到：我具备长期自驱、组织协调与高压任务推进能力。`
  },
  {
    id: "exp_06",
    title: "关于我与下一段火种",
    subtitle: "Qi Zhili｜AI Product × Engineering × Design",
    period: "Now",
    tags: ["清华大学", "AI 产品", "土木 + 工业设计", "跨学科"],
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    summary: "我希望把工程逻辑、设计思维与 AI 产品能力结合，做真正有温度、也有落地价值的产品。",
    content: `### 教育背景
- 清华大学土木工程硕士
- 上海交通大学土木工程主修 / 工业设计辅修

### 我的优势
- 具备 AI 产品从 0 到 1 的设计落地能力
- 精通 Cursor、Prompt Engineering、OpenRouter API、PRD 撰写与 Figma 原型设计
- 同时具备工程逻辑、设计表达与跨部门协同能力

### 联系方式
- 邮箱：qzl24@mails.tsinghua.edu.cn
- 电话：+86 18850965680
- 地点：清华大学，北京

### 我想做的事
希望进入 AI 产品相关岗位，继续做那些既有技术厚度，也真正帮助人的产品。`
  }
];

function getTimeTheme() {
  const hour = new Date().getHours();
  if (hour >= 19 || hour < 5) {
    return {
      label: "银河夜空",
      sky: "from-slate-950 via-slate-900 to-amber-950",
      glow: "rgba(255,140,60,0.30)"
    };
  }
  if (hour >= 17) {
    return {
      label: "夕阳山谷",
      sky: "from-orange-950 via-amber-900 to-stone-900",
      glow: "rgba(255,160,90,0.32)"
    };
  }
  return {
    label: "清晨薄雾",
    sky: "from-slate-800 via-sky-900 to-stone-900",
    glow: "rgba(255,180,90,0.24)"
  };
}

function parseMarkdown(md) {
  return md
    .replace(/^### (.*$)/gim, '<h3 class="text-lg font-semibold text-amber-100 mt-5 mb-2">$1</h3>')
    .replace(/^- (.*$)/gim, '<li class="ml-5 list-disc text-stone-200">$1</li>')
    .replace(/\n\n/g, '<br/><br/>');
}

function DraggablePhoto({ item, index, onBurn, disabled, burned }) {
  const [pos, setPos] = useState({
    x: 6 + (index % 3) * 16,
    y: 60 + Math.floor(index / 3) * 26
  });
  const [dragging, setDragging] = useState(false);
  const offsetRef = useRef({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handlePointerDown = (e) => {
    if (disabled || burned) return;
    setDragging(true);
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      offsetRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    }
  };

  useEffect(() => {
    if (!dragging) return;
    const handleMove = (e) => {
      setPos({
        x: (e.clientX / window.innerWidth) * 100 - (offsetRef.current.x / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100 - (offsetRef.current.y / window.innerHeight) * 100
      });
    };
    const handleUp = () => {
      setDragging(false);
      const fireZone = {
        left: 39,
        right: 61,
        top: 52,
        bottom: 86
      };
      const cx = pos.x + 8;
      const cy = pos.y + 11;
      if (cx > fireZone.left && cx < fireZone.right && cy > fireZone.top && cy < fireZone.bottom) {
        onBurn(item.id);
      }
    };
    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
    };
  }, [dragging, pos, onBurn, item.id]);

  if (burned) return null;

  return (
    <motion.div
      ref={cardRef}
      className={`absolute w-28 sm:w-32 select-none cursor-${disabled ? "default" : "grab"}`}
      style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
      animate={{ rotate: dragging ? 0 : index % 2 === 0 ? -8 : 9, scale: dragging ? 1.06 : 1 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      onPointerDown={handlePointerDown}
    >
      <div className="rounded-sm border border-stone-300/40 bg-stone-100 p-2 shadow-2xl">
        <div className="aspect-[4/5] overflow-hidden rounded-[2px] bg-stone-300">
          <img src={item.photo} alt={item.title} className="h-full w-full object-cover pointer-events-none" />
        </div>
        <div className="mt-2 text-[11px] text-stone-700 font-medium truncate">{item.title}</div>
      </div>
    </motion.div>
  );
}

export default function EmbersOfMemoryPrototype() {
  const theme = useMemo(() => getTimeTheme(), []);
  const [loaded, setLoaded] = useState(false);
  const [audioOn, setAudioOn] = useState(true);
  const [burnedIds, setBurnedIds] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [burningId, setBurningId] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2400);
    return () => clearTimeout(timer);
  }, []);

  const activeExperience = experiences.find((x) => x.id === activeId);
  const allBurned = burnedIds.length === experiences.length;

  const handleBurn = (id) => {
    if (burningId || burnedIds.includes(id) || activeId) return;
    setBurningId(id);
    setTimeout(() => {
      setBurnedIds((prev) => [...prev, id]);
      setBurningId(null);
      setActiveId(id);
    }, 1400);
  };

  const resetAll = () => {
    setBurnedIds([]);
    setActiveId(null);
    setBurningId(null);
  };

  return (
    <div className={`min-h-screen w-full overflow-hidden bg-gradient-to-b ${theme.sky} text-white`}>
      <div
        className="fixed inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(18,12,10,0.45), rgba(10,8,7,0.68)), url(${cabinBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "saturate(0.95) brightness(0.92)"
        }}
      />
      <AnimatePresence>
        {!loaded && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-stone-950"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.2 } }}
          >
            <motion.div
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.16),rgba(255,255,255,0.04),transparent_60%)]"
              animate={{ opacity: [0.35, 0.7, 0.25], scale: [1, 1.08, 1.15] }}
              transition={{ duration: 2.2, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-0 backdrop-blur-2xl"
              animate={{ opacity: [0.9, 0.55, 0.2] }}
              transition={{ duration: 2.4, ease: "easeInOut" }}
            />
            <div className="relative z-10 text-center px-6">
              <div className="text-3xl sm:text-5xl font-semibold tracking-wide text-amber-100">Embers of Memory</div>
              <div className="mt-3 text-sm sm:text-base text-stone-300">雾气散去，旧日片段在火光里缓缓显形</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative min-h-screen">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_62%,rgba(255,180,90,0.18),transparent_28%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />
          <div className="absolute left-[50%] bottom-[12%] h-28 w-56 -translate-x-1/2 rounded-[100%] bg-black/35 blur-2xl" />
          <motion.div
            className="absolute left-[50%] bottom-[16%] h-28 w-28 -translate-x-1/2 rounded-full blur-2xl"
            style={{ background: theme.glow }}
            animate={{ scale: [1, 1.15, 0.95, 1.08, 1], opacity: [0.7, 1, 0.78, 0.95, 0.72] }}
            transition={{ duration: 2.4, repeat: Infinity }}
          />
          <motion.div
            className="absolute left-[50%] bottom-[16%] -translate-x-1/2 text-7xl sm:text-8xl drop-shadow-[0_0_20px_rgba(255,140,0,0.35)]"
            animate={{ y: [0, -6, 0], scale: [1, 1.06, 0.98, 1.03, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🔥
          </motion.div>
        </div>

        <div className="relative z-10 flex items-start justify-between px-4 py-4 sm:px-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/35 to-transparent" />
          <div>
            <div className="text-2xl sm:text-3xl font-semibold text-amber-100">Embers of Memory</div>
            <div className="mt-1 text-sm text-stone-300">Qi Zhili · AI Product × Engineering × Design</div>
            <div className="mt-2 max-w-2xl text-sm leading-6 text-stone-300">在木屋与山景之间，把旧照片投入火堆，让我的项目、研究、奖项与成长轨迹在火光中浮现。{theme.label}</div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="secondary"
              className="bg-stone-800/80 text-stone-100 hover:bg-stone-700"
              onClick={() => setAudioOn((v) => !v)}
            >
              {audioOn ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
            </Button>
            <Button
              variant="secondary"
              className="bg-stone-800/80 text-stone-100 hover:bg-stone-700"
              onClick={resetAll}
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-6 px-4 pb-24 pt-2 sm:px-8 lg:grid-cols-[1fr_320px]">
          <div className="relative h-[72vh] w-full overflow-hidden rounded-[28px] border border-white/8 bg-black/10 shadow-2xl backdrop-blur-[2px]">
          {experiences.map((item, index) => (
            <DraggablePhoto
              key={item.id}
              item={item}
              index={index}
              onBurn={handleBurn}
              disabled={Boolean(activeId || burningId)}
              burned={burnedIds.includes(item.id)}
            />
          ))}

          <div className="pointer-events-none absolute left-[39%] top-[52%] h-[34%] w-[22%] rounded-full border border-amber-400/20 bg-amber-500/5" />

          <AnimatePresence>
            {burningId && (
              <motion.div
                className="absolute inset-0 z-20 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="absolute inset-0 bg-black/35"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
                <motion.div
                  className="relative flex flex-col items-center"
                  initial={{ scale: 0.8, opacity: 0.2 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="relative h-40 w-28 overflow-hidden rounded-sm border border-stone-200/30 bg-stone-100"
                    animate={{ rotate: [0, -4, 3, 0], y: [0, -8, -20], opacity: [1, 1, 0] }}
                    transition={{ duration: 1.3, times: [0, 0.35, 0.7, 1] }}
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(255,120,40,0.25)_40%,rgba(0,0,0,0.82)_100%)]" />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-orange-700/60 to-transparent animate-pulse" />
                    <div className="absolute inset-0 mix-blend-screen bg-[radial-gradient(circle_at_50%_90%,rgba(255,180,0,0.45),transparent_35%)]" />
                  </motion.div>
                  <motion.div
                    className="mt-5 flex items-center gap-2 text-amber-100"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <Sparkles className="h-4 w-4" />
                    <span className="text-sm">记忆正在燃烧并显形…</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

          <div className="relative z-10 rounded-[28px] border border-white/10 bg-stone-950/55 p-5 shadow-2xl backdrop-blur-md">
            <div className="text-xs uppercase tracking-[0.24em] text-amber-200/70">About</div>
            <div className="mt-3 text-2xl font-semibold text-amber-100">祁至立</div>
            <div className="mt-1 text-sm text-stone-300">清华大学土木工程硕士 · 上海交通大学土木工程 / 工业设计</div>
            <div className="mt-4 text-sm leading-7 text-stone-200">我希望把工程系统理解、设计表达与 AI 产品能力结合，做真正有温度、也有落地价值的产品。</div>
            <div className="mt-5 space-y-3 text-sm text-stone-300">
              <div>邮箱：<a className="text-amber-200 hover:text-amber-100" href={`mailto:${contactEmail}`}>{contactEmail}</a></div>
              <div>电话：<a className="text-amber-200 hover:text-amber-100" href={`tel:${contactPhone}`}>{contactPhone}</a></div>
              <div>地点：{contactLocation}</div>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <Button className="bg-amber-500 text-stone-950 hover:bg-amber-400" asChild>
                <a href={resumeUrl} download>
                  <Download className="mr-2 h-4 w-4" />
                  下载 PDF 简历
                </a>
              </Button>
              <Button variant="outline" className="border-stone-600 bg-transparent text-stone-100 hover:bg-stone-800" asChild>
                <a href={`mailto:${contactEmail}`}>联系我</a>
              </Button>
            </div>
            <div className="mt-8 border-t border-white/10 pt-5">
              <div className="text-xs uppercase tracking-[0.24em] text-amber-200/70">How to explore</div>
              <div className="mt-3 text-sm leading-7 text-stone-300">拖动旧照片到火堆中央，即可依次解锁我的项目、研究、奖项与下一段火种。</div>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {activeExperience && (
            <motion.div
              className="fixed inset-0 z-30 bg-black/60 px-4 py-8 backdrop-blur-md sm:px-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveId(null)}
            >
              <motion.div
                className="mx-auto mt-8 max-w-4xl"
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 12, opacity: 0 }}
                transition={{ duration: 0.28 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Card className="border-stone-700 bg-stone-950/90 text-white shadow-2xl">
                  <CardContent className="p-0">
                    <div className="grid gap-0 md:grid-cols-[1.05fr_1.2fr]">
                      <div className="relative min-h-[280px] overflow-hidden bg-stone-900">
                        <img src={activeExperience.photo} alt={activeExperience.title} className="h-full w-full object-cover opacity-85" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-6">
                          <div className="text-xs uppercase tracking-[0.22em] text-amber-200/80">{activeExperience.period}</div>
                          <div className="mt-2 text-2xl font-semibold text-amber-100">{activeExperience.title}</div>
                          <div className="mt-1 text-sm text-stone-300">{activeExperience.subtitle}</div>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {activeExperience.tags.map((tag) => (
                              <span key={tag} className="rounded-full border border-amber-200/20 bg-amber-200/10 px-3 py-1 text-xs text-amber-100">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="p-6 sm:p-8">
                        <div className="text-sm leading-7 text-stone-200">{activeExperience.summary}</div>
                        <div
                          className="prose prose-invert prose-headings:text-amber-100 prose-p:text-stone-200 mt-4 max-w-none text-sm leading-7"
                          dangerouslySetInnerHTML={{ __html: parseMarkdown(activeExperience.content) }}
                        />
                        <div className="mt-6 flex flex-wrap gap-3">
                          <Button className="bg-amber-500 text-stone-950 hover:bg-amber-400" onClick={() => setActiveId(null)}>
                            返回火堆
                          </Button>
                          <Button variant="outline" className="border-stone-600 bg-transparent text-stone-100 hover:bg-stone-800" asChild>
                            <a href={resumeUrl} download>下载简历</a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {allBurned && !activeId && !burningId && (
            <motion.div
              className="fixed inset-0 z-20 flex items-center justify-center bg-black/55 backdrop-blur-sm px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="max-w-lg text-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <motion.div
                  className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-amber-300/15 shadow-[0_0_60px_rgba(255,180,80,0.22)]"
                  animate={{ scale: [1, 1.08, 1], opacity: [0.85, 1, 0.9] }}
                  transition={{ duration: 2.2, repeat: Infinity }}
                >
                  <Flame className="h-12 w-12 text-amber-200" />
                </motion.div>
                <div className="text-3xl font-semibold text-amber-100">火种已经浮现</div>
                <div className="mt-3 text-sm leading-7 text-stone-300">
                  你已看完所有被投入火中的记忆碎片。现在，可以带走一份更完整的我。
                </div>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <Button className="bg-amber-500 text-stone-950 hover:bg-amber-400" asChild>
                    <a href={resumeUrl} download>
                      <Download className="mr-2 h-4 w-4" />
                      下载 PDF 简历
                    </a>
                  </Button>
                  <Button variant="outline" className="border-stone-600 bg-transparent text-stone-100 hover:bg-stone-800" onClick={resetAll}>
                    <RotateCcw className="mr-2 h-4 w-4" />
                    重新点燃
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute bottom-4 left-1/2 z-10 hidden -translate-x-1/2 rounded-full border border-stone-700/70 bg-stone-950/65 px-4 py-2 text-xs text-stone-300 backdrop-blur lg:block">
          拖动旧照片到火堆中央，即可解锁我的项目、研究、奖项与下一段火种
        </div>
      </div>
    </div>
  );
}
