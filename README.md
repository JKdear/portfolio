# Embers of Memory

一个基于 Vite + React 的交互式作品集页面，适合直接部署到 Vercel。

## 本地运行

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

## 部署到 Vercel

1. 把项目推到 GitHub 仓库。
2. 在 Vercel 中导入该仓库。
3. 确认配置：
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. 点击部署。

## 项目结构

```text
public/
  cabin-bg.png
  resume.pdf
src/
  App.jsx
  main.jsx
  styles.css
index.html
package.json
vite.config.js
```
