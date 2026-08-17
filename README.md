# 👨‍💻 连子超 · 个人作品集(Portfolio)

**Java 开发工程师 / Agent 开发工程师**求职作品集,简约现代(浅色)风格。
纯 HTML/CSS/JS 实现,**零依赖、无需构建**,改完内容后可直接部署。

## 📁 文件结构

```
portfolio/
├── index.html        # 页面结构(关于我 / 技能 / 联系信息都在这改)
├── css/style.css     # 全部样式(主题色在顶部 :root 变量里改)
├── js/projects.js    # ⭐ 项目数据(增删项目只改这里)
├── js/main.js        # 交互逻辑(一般不用动)
├── resume.pdf        # 简历文件(从你的原简历复制而来,更新简历时替换此文件)
└── README.md
```

## ✅ 已根据你的简历填入的内容

- 姓名、职位(Java 开发工程师 / Agent 开发工程师)、年龄
- 教育经历:太原工业学院 · 软件工程(本科)+ 2 项省级竞赛获奖
- 技能清单:Java 后端 / 数据库与缓存 / AI 应用开发 / 工具与部署 四大类
- 五个项目(含量化亮点数据):
  - 🪞 浮窗衣镜 AI 虚拟试衣平台(参赛项目,省级一等奖,前后端均已开源)
  - 🏢 智慧园区物业服务小程序(实习项目,Java 后端)
  - 🤖 AI 热点监控工具(AI 应用开发,GitHub 已关联)
  - 🎓 校帮达校园互助服务小程序(个人全栈项目,GitHub 已关联)
  - ⚡ NEON FLUX 3D 粒子手势交互页(创意编码,GitHub 已关联)
- 联系方式:邮箱 lzc.code@gmail.com、电话 185-3683-6432
- GitHub 主页链接:https://github.com/LZCL123
- 简历下载按钮已接好(`resume.pdf`)
- **作品集 PDF**:`连子超-作品集.pdf`(2 页 A4,用于官网投递上传)

## 📝 简历与 GitHub 对齐(已完成)

`连子超的简历.docx` 中的 AI 热点监控工具项目描述已与 GitHub 仓库实际内容对齐:

- 数据源:`8+ 搜索引擎(Axios+Cheerio)` → `Bing/HackerNews 多源采集(jsoup+Hutool,策略模式可扩展)`
- 推送技术:`Socket.io` → `Spring WebSocket/STOMP`
- 缓存:`本地缓存` → `Redis 缓存`
- Agent Skills:`10+ 工具集成` → `Cursor/codex 等主流 AI 工具复用`

⚠️ **重要**:修改的是 `.docx`,请用 WPS/Word 打开 `连子超的简历.docx` **重新导出 PDF** 覆盖 `连子超的简历.pdf`(原文件备份为 `连子超的简历_备份.docx`)。

## ✏️ 可选优化项

| 位置 | 说明 |
|---|---|
| `index.html` 关于我 | 如需更详细可补充实习时间(如 2025.06 - 2025.09) |
| `index.html` 联系区 | 有微信二维码图片的话可替换提示文字 |
| `js/projects.js` | 某项目有在线演示链接时,加 `demo: "https://..."` 字段即可显示「在线演示 →」 |

## 📝 常用修改

### 1. 更新简历
把新的简历 PDF 复制到本目录并命名为 `resume.pdf`,覆盖旧文件即可(导航栏与联系区的「下载简历」按钮自动指向它)。

### 2. 增删项目
编辑 `js/projects.js`,每个项目是一个对象(文件内有字段说明)。
**求职建议**:亮点尽量带量化数据,例如「响应时间 300ms → 120ms」「准确率 90%+」「覆盖率提升 5 倍」。

### 3. 调整技能
编辑 `index.html` 中 `#skills` 区块,每行改名称和 `width` 百分比即可:

```html
<li><span class="skill-name">Spring Boot</span><span class="skill-bar"><i style="width:90%"></i></span></li>
```

### 4. 换主题色
修改 `css/style.css` 顶部变量即可全局换色:

```css
--accent: #2563eb;   /* 品牌蓝 → 可换成 #10b981 墨绿、#f59e0b 橙等 */
```

## 🚀 本地预览

```bash
python -m http.server 8080    # 或 npx http-server -p 8080
```

浏览器打开 http://localhost:8080

## 🌐 免费部署(任选其一)

**GitHub Pages(推荐):**
1. 新建 GitHub 仓库,把本目录所有文件上传(`index.html` 必须在根目录)
2. 仓库 Settings → Pages → Source 选 `main` 分支
3. 访问 `https://你的用户名.github.io/仓库名/`

**Vercel / Netlify(国内访问更快):**
1. 注册后 Import Project → 关联 GitHub 仓库
2. 构建命令留空,发布目录选根目录
3. 自动获得免费域名
