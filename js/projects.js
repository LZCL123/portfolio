/**
 * ============================================================
 * 项目数据 —— 想增删改项目,只改这个文件即可
 * ============================================================
 *
 * 每个项目支持的字段:
 *   title      项目名称
 *   subtitle   副标题(公司 / 角色 / 项目类型)
 *   desc       一句话简介(显示在卡片上)
 *   emoji      卡片顶部的大图标(也可换成项目截图)
 *   category   分类:frontend / backend / fullstack
 *   highlights 项目亮点数组(3~5 条,尽量带量化数据)
 *   tags       技术标签数组
 *   github     代码仓库链接(没有可留空字符串 "")
 *   demo       在线演示链接(没有可留空字符串 "")
 *
 * 提示:把 github / demo 中的 yourname 换成你的 GitHub 用户名,
 * 没有公开仓库或演示的项目留空即可,卡片上不会显示对应链接。
 */

const PROJECTS = [
  {
    title: "企业级 AI 知识问答与 Agent 平台",
    subtitle: "个人独立项目 · Spring AI + RAG + MCP(Agent 方向旗舰项目)",
    desc: "面向企业「知识查不到、多步任务靠人工」的痛点,基于 Spring AI 生态构建「知识助手 + 任务 Agent」双运行时平台,覆盖 RAG 问答、工具编排、长程记忆与多源信息聚合。",
    emoji: "🧠",
    category: "fullstack",
    highlights: [
      "双运行时 Agent 架构:知识助手(RAG 问答,答案强制带 [来源N] 依据)+ 任务 Agent(多步工具执行),复用 Spring AI 工具调用与 MCP 能力,并补齐框架未覆盖的失败重试、规则降级与意图隔离(解决旧任务被误重跑)",
      "上下文工程:设计「最近 16 条原文 + 会话滚动摘要」分层记忆替代裸窗口 —— 水位增量折叠、幂等续跑、失败冷却、问答前同步补齐,解决长会话与重开会话的上下文丢失,上下文 token 成本下降约 30%",
      "RAG 检索优化:结构感知切分(约 400 tokens/块)+ text-embedding-v2(1536 维)写入 Milvus;落地「向量 topK=20 + 阈值 0.3 + 关键词通道 RRF 融合 → topK=5」混合检索与查询改写;自建 30 题评测集做检索消融,hit@5 达 96.7%,并据此定位并修复关键词通道触发条件缺陷",
      "工具与 MCP 生态:工具白名单编排知识库检索、网页抓取、文件读写、资源下载与 PDF 生成(内置中文字体),高危终端能力默认熔断;基于 Spring AI MCP Client 接入外部 MCP Server,并把检索能力封装为可独立部署的 MCP 服务",
      "工程化与成本:采集器策略模式支撑多源聚合与定时采集,结构化输出(JSON Schema)完成真实性校验与评分,Redis 内容哈希缓存使重复条目 AI 调用降为 0;SSE 流式 + WebSocket 实时推送,条件装配支持无 Milvus 降级启动,Docker Compose 一键部署",
    ],
    tags: ["Spring AI", "RAG", "Milvus", "MCP", "ReAct", "SSE/WebSocket", "Spring Boot 3", "Vue 3", "Docker"],
    github: "",
    demo: "",
  },
  {
    title: "浮窗衣镜 — AI 虚拟试衣平台",
    subtitle: "🏆 2025 华北五省计算机应用大赛省级一等奖 · 参赛作品",
    desc: "AI 悬浮虚拟试衣平台:拍照上传 → AI 换装试衣 → 智能推荐。微信小程序 + Spring Boot 后端 + AI 模型,前后端均已开源。",
    emoji: "🪞",
    category: "fullstack",
    highlights: [
      "团队项目(本人负责后端开发、小程序前端、架构设计与统筹答辩),获华北五省计算机应用大赛省级一等奖、计算机设计大赛省级二等奖",
      "Spring Boot 多模块后端(用户认证与数据服务):MyBatis-Plus、JWT 鉴权、MinIO/阿里云 OSS 存储、短信验证码、knife4j 接口文档",
      "uni-app 小程序:AI 对话、相机拍照试衣、悬浮窗原生插件、地图定位、个人中心完整模块",
      "对接 Leffa 虚拟试衣图像模型与衣服推荐模型(团队协作),打通「拍照 → 换装 → 推荐」全流程",
    ],
    tags: ["Spring Boot", "uni-app", "MyBatis-Plus", "JWT", "MinIO", "Leffa 试衣模型", "阿里云"],
    github: "https://github.com/LZCL123/clothes",
    demo: "",
  },
  {
    title: "智慧园区物业服务小程序",
    subtitle: "山西肇新科技有限公司 · Java 开发工程师(2026.02 - 2026.07)",
    desc: "面向园区物业管理场景的微信小程序综合服务平台,支撑多园区数据隔离与千人千面展示。",
    emoji: "🏢",
    category: "backend",
    highlights: [
      "搭建后端分层架构,封装统一响应体、全局异常处理、JWT 鉴权与 AOP 日志切面,重复代码量降低约 40%",
      "联合索引 + 分页查询改造,核心列表接口响应时间从约 300ms 优化至约 120ms",
      "基于 Redis 实现会话管理、房源分享 Token 裂变与多级缓存(Cache-Aside + 逻辑过期 + 互斥锁)",
      "基于 RabbitMQ 异步化账单通知,接口耗时降低约 60%,死信队列保障消息可靠投递",
    ],
    tags: ["Java 8", "Spring Boot", "MyBatis-Plus", "MySQL", "Redis", "RabbitMQ", "Docker", "WxJava"],
    github: "",
    demo: "",
  },
  {
    title: "AI 热点监控工具",
    subtitle: "AI 应用开发项目 · GitHub 开源",
    desc: "基于 Spring Boot + Vue + OpenRouter + WebSocket 的 AI 驱动热点监控工具,能力封装为 Agent Skills 可在多种 AI 编程工具中复用。",
    emoji: "🤖",
    category: "fullstack",
    highlights: [
      "基于 Collector 策略模式实现多数据源采集(HackerNews、Bing),支持低成本扩展更多数据源",
      "接入 OpenRouter 大模型进行真实性验证与重要性分级,未配置 API Key 时自动降级本地规则",
      "大模型查询扩展 + 本地缓存,提升召回率的同时节省 AI 调用成本",
      "Spring WebSocket/STOMP 事件驱动,热点毫秒级实时推送;Agent Skills 支持多 AI 工具复用",
    ],
    tags: ["Spring Boot", "Vue 3", "Redis", "MyBatis-Plus", "WebSocket", "OpenRouter", "Agent Skills"],
    github: "https://github.com/LZCL123/ai-hotspot-monitor",
    demo: "",
  },
  {
    title: "校帮达 — 校园互助服务小程序",
    subtitle: "个人全栈项目 · GitHub 开源",
    desc: "面向校园场景的互助服务小程序:发布任务、接单赚取报酬,支持微信登录与订单全流程管理。",
    emoji: "🎓",
    category: "fullstack",
    highlights: [
      "Spring Boot 多模块架构 + uni-app 微信小程序,前后端全栈开发",
      "基于 RabbitMQ 实现订单异步事件解耦,Redis 缓存热点数据",
      "接入阿里云百炼 DashScope 大模型(兼容 OpenAI 协议),提供 AI 服务能力",
      "基于 WxJava 对接微信小程序授权登录与多角色权限",
    ],
    tags: ["Spring Boot", "uni-app", "MyBatis", "MySQL", "Redis", "RabbitMQ", "WxJava", "百炼大模型"],
    github: "https://github.com/LZCL123/xiaoyuandai",
    demo: "",
  },
  {
    title: "NEON FLUX — 3D 粒子手势交互页",
    subtitle: "创意编码项目 · GitHub 开源",
    desc: "基于 Three.js + MediaPipe 手势识别的 3D 霓虹粒子交互页面:22,000 粒子实时渲染,摄像头手势操控粒子场。",
    emoji: "⚡",
    category: "frontend",
    highlights: [
      "22,000 粒子 GPU 加速实时渲染,含速度、相位、外壳系数等多维粒子状态",
      "接入 MediaPipe Hands 摄像头手势追踪,手部化作粒子吸引场驱动画面",
      "10+ 视觉变体(霓虹流体/粒子球/丝带/流场),桌面与移动端适配",
      "零依赖 CDN 加载,静态服务器即可运行;Playwright 自动化效果截图",
    ],
    tags: ["Three.js", "MediaPipe", "WebGL", "JavaScript", "Node.js"],
    github: "https://github.com/LZCL123/neon-flux",
    demo: "",
  },
];

/**
 * 分类中文名映射(筛选按钮显示用):
 * 按钮会根据上面 PROJECTS 里出现的 category 自动生成,
 * 新项目用了新分类时,在这里补一个映射即可。
 */
const CATEGORY_LABELS = {
  frontend: "前端",
  backend: "后端",
  fullstack: "全栈",
};
