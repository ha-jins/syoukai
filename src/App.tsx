/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from 'motion/react';
import { Terminal, Github, Linkedin, ExternalLink, ChevronRight, Monitor, Cpu, Layers, GitBranch, Box, Code2 } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-neon-cyan/30 selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-neon-cyan z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-black/80 backdrop-blur-xl border-neon-cyan/20 py-4' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Terminal className="text-neon-cyan w-6 h-6" />
            <span className="text-xl font-black text-white tracking-[0.2em] uppercase">未来 / STUDIO</span>
          </div>
          <div className="hidden md:flex items-center gap-10">
            {['ホーム', '自己紹介', '制作実績', '技術スキル'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-xs font-bold text-white/60 hover:text-neon-cyan tracking-widest uppercase transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="text-xs font-bold text-neon-cyan border border-neon-cyan/40 px-4 py-2 hover:bg-neon-cyan hover:text-black transition-all uppercase tracking-widest"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="ホーム" className="min-h-screen flex items-center justify-center pt-24 px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,255,0.05),transparent_70%)]" />
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:col-span-7 flex flex-col gap-8"
            >
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-neon-cyan" />
                <span className="text-[10px] font-black text-neon-cyan uppercase tracking-[0.3em]">ゲーム開発者ポートフォリオ</span>
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none text-white tracking-tighter">
                秋月 元 / <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-secondary">AKIZUKI HAJIME</span>
              </h1>
              <p className="text-lg text-[#bac9cc] max-w-xl leading-relaxed">
                テクノロジーとエンターテインメントの境界線を越える。次世代のゲーム体験を創造する、若きデベロッパーの挑戦の軌跡。
              </p>
              <div className="flex gap-4 pt-4">
                <button className="bg-neon-cyan text-black px-8 py-4 font-bold uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all flex items-center gap-2">
                  プロジェクトを見る <ChevronRight className="w-4 h-4" />
                </button>
                <button className="border border-white/20 text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-white/5 active:scale-95 transition-all">
                  自己紹介
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="md:col-span-5 hidden md:block"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-neon-cyan/20 blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="glass-card p-4 relative border border-neon-cyan/30 overflow-hidden">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full transition-all duration-700 object-cover"
                  >
                    <source src="https://ha-jins.github.io/images/syoukai.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="自己紹介" className="py-24 px-8 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-5 flex flex-col gap-4">
                <h2 className="text-4xl md:text-5xl font-black text-white border-l-4 border-neon-cyan pl-6 uppercase tracking-tight">自己紹介</h2>
                <span className="text-xs font-bold text-neon-cyan uppercase tracking-[0.35em] ml-7">CREATIVE PASSION</span>
              </div>
              <div className="md:col-span-7 space-y-8 pt-4">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-xl text-[#e0e3e5] leading-relaxed font-light"
                >
                  秋月 元（あきづきはじめ）です。幼少期からゲームの仕組みに魅了され、独学でプログラミングを開始しました。単に「遊ぶ」側から「創る」側へ。プレイヤーに驚きと感動を与える体験を設計することに情熱を注いでいます。
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-[#e0e3e5] leading-relaxed font-light"
                >
                  大学での学修を通じ、コンピュータグラフィックスやアルゴリズムの深淵を探求し、より没入感のあるバーチャルワールドの構築を目指しています。
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="制作実績" className="py-24 px-8 bg-black/40">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-5xl font-black text-white uppercase tracking-tight">制作実績</h2>
              <div className="h-1 w-24 bg-neon-cyan mt-4" />
              <p className="text-xs font-bold text-neon-cyan tracking-[0.4em] mt-4 uppercase">Development Logs</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'NEON TETRIS',
                  tag: 'パズルエンジン',
                  desc: 'JavaScriptによる古典パズルゲームの再構築。洗練された視覚効果と、滑らかな操作性を追求しました。',
                  img: 'https://ha-jins.github.io/images/tetris.png',
                  url: 'https://tetris-pink-tau.vercel.app/'
                },
                {
                  title: 'VOID CRAFT',
                  tag: 'ボクセルワールド',
                  desc: 'UnityとC#を使用したボクセルベースのサンドボックスゲーム。無限生成マップとチャンク管理を実装。',
                  img: 'https://ha-jins.github.io/images/minecraft.png',
                  url: 'https://ha-jins.github.io/minecraft/'
                },
                {
                  title: 'CHRONO LEAP',
                  tag: '2Dアクション',
                  desc: '精密な物理演算と加速度制御を重視した2Dプラットフォーマー。ゲームバランスの調整に重点を置きました。',
                  img: 'https://ha-jins.github.io/images/mario.png',
                  url: 'https://ha-jins.github.io/marioo/'
                },
                {
                  title: 'BOMBER HERO',
                  tag: 'アクション / JS',
                  desc: 'JavaScriptとHTML5 Canvasを使用したクラシックなゲーム。爆発の連鎖反応アルゴリズムを独自に実装。',
                  img: 'https://ha-jins.github.io/images/bomber.png',
                  url: 'https://ha-jins.github.io/bomberman/'
                }
              ].map((project, idx) => (
                <motion.a
                  key={project.title}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card glow-hover group flex flex-col transition-all cursor-pointer h-full no-underline"
                >
                  <div className="aspect-video overflow-hidden border-b border-neon-cyan/10">
                    <img
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      src={project.img}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-1 h-1 bg-neon-cyan" />
                      <span className="text-[10px] font-bold text-neon-cyan tracking-widest uppercase">{project.tag}</span>
                    </div>
                    <h3 className="text-xl font-black text-white mb-3 tracking-wide">{project.title}</h3>
                    <p className="text-sm text-[#bac9cc] leading-relaxed flex-grow">{project.desc}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="技術スキル" className="py-24 px-8 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-4 lg:col-span-5 flex flex-col gap-6">
                <h2 className="text-5xl font-black text-white uppercase tracking-tight border-l-4 border-neon-cyan pl-6">技術スキル</h2>
                <p className="text-[#bac9cc] leading-relaxed max-w-sm ml-7">
                  プロジェクトの要求に応じ、適切な言語とツールを選択。柔軟な開発能力を磨いています。
                </p>
              </div>
              <div className="md:col-span-8 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: 'JavaScript / TypeScript', sub: 'Web Interaction & Engines', icon: <Code2 className="w-5 h-5 text-neon-cyan" /> },
                  { name: 'Python', sub: 'Logic & Tooling', icon: <Cpu className="w-5 h-5 text-neon-cyan" /> },
                  { name: 'C# / Unity', sub: 'Game Development', icon: <Monitor className="w-5 h-5 text-neon-cyan" /> },
                  { name: 'GLSL / HLSL', sub: 'Shader Programming', icon: <Layers className="w-5 h-5 text-neon-cyan" /> },
                  { name: 'Blender', sub: '3D Modeling', icon: <Box className="w-5 h-5 text-neon-cyan" /> },
                  { name: 'Git / GitHub', sub: 'Version Control', icon: <GitBranch className="w-5 h-5 text-neon-cyan" /> },
                ].map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass-card p-6 border-l-[3px] border-l-neon-cyan flex items-start gap-4 hover:bg-white/5 transition-colors group"
                  >
                    <div className="mt-1 group-hover:scale-110 transition-transform">{skill.icon}</div>
                    <div>
                      <h4 className="text-white font-bold text-lg">{skill.name}</h4>
                      <p className="text-[10px] text-neon-cyan/60 font-black tracking-widest uppercase mt-1">{skill.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 px-8 bg-black/40">
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[1px] bg-gradient-to-b from-transparent via-neon-cyan to-transparent opacity-30" />
            <div className="space-y-16">
              {[
                { year: '2022年', text: '探求の始まり', active: false },
                { year: '2023年', text: '専門性の追求', active: false },
                { year: '2024年', text: '未来スタジオ 設立', active: true },
              ].map((item, idx) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="relative flex justify-center"
                >
                  <div className={`
                    px-8 py-3 z-10 transition-all duration-500
                    ${item.active 
                      ? 'bg-black border-2 border-neon-cyan shadow-[0_0_20px_rgba(0,229,255,0.2)]' 
                      : 'bg-black border border-neon-cyan/20 opacity-60'
                    }
                  `}>
                    <span className={`text-xs font-black tracking-[0.2em] uppercase ${item.active ? 'text-white' : 'text-neon-cyan'}`}>
                      {item.year}: {item.text}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-16 border-t border-neon-cyan/10 bg-black">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col gap-3 text-center md:text-left">
            <span className="text-2xl font-black text-white uppercase tracking-[0.3em]">秋月 元</span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-white/40">
              © 2024 TECH-NOIR ポートフォリオ. ALL RIGHTS RESERVED.
            </span>
          </div>
          <div className="flex gap-12">
            {[
              { label: 'ギットハブ', icon: <Github className="w-4 h-4" /> },
              { label: 'リンクトイン', icon: <Linkedin className="w-4 h-4" /> },
              { label: 'ITCH.IO', icon: <ExternalLink className="w-4 h-4" /> }
            ].map((link) => (
              <a
                key={link.label}
                href="#"
                className="group flex flex-col items-center gap-2"
              >
                <div className="p-3 border border-white/5 rounded-full group-hover:border-neon-cyan group-hover:text-neon-cyan hover:bg-neon-cyan/5 transition-all text-white/40">
                  {link.icon}
                </div>
                <span className="text-[9px] font-black tracking-widest uppercase text-white/20 group-hover:text-neon-cyan transition-colors">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
