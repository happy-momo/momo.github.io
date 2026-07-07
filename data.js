// 个人信息
const personalInfo = {
  name: "Yu Hang",
  title: "工程师 × 音乐家 × 美食家",
  about: `我是一名充满热情的工程师，在工业自动化和人工智能领域有着深厚的兴趣。
  
  但我从不认为自己只是一个"技术人"。我相信，一个完整的人应该是多面的——
  在白天用代码和算法解决复杂问题，在晚上用古典乐和爵士乐来滋养灵魂，
  用烹饪来表达对生活的热爱。
  
  我具有极强的学习能力和包容性，热爱与不同背景的人交流，
  相信技术与人文的融合能够创造更美好的未来。`,
  email: "your-email@example.com"
};

// 经历数据（时间线）
const experiences = [
  {
    year: "2020-2022",
    company: "某科技公司",
    position: "高级工程师",
    description: "领导自动化系统开发，优化生产流程，提升效率30%。",
    details: [
      "设计并实现了分布式控制系统",
      "带领团队完成3个大型项目",
      "获得公司技术创新奖"
    ]
  },
  {
    year: "2018-2020",
    company: "某研究院",
    position: "研发工程师",
    description: "从事机器学习和计算机视觉研究。",
    details: [
      "发表2篇学术论文",
      "开发了图像识别算法",
      "参与国家级研究项目"
    ]
  },
  {
    year: "2016-2018",
    company: "某初创公司",
    position: "初级工程师",
    description: "参与IoT产品开发，学习了敏捷开发方法。",
    details: [
      "开发了5个物联网应用",
      "参与产品从0到1的全过程",
      "积累了丰富的实战经验"
    ]
  }
];

// 作品数据
const projects = [
  {
    title: "智能制造管理系统",
    category: "工业自动化",
    description: "一个完整的工业4.0解决方案，集成了PLC控制、数据采集、可视化分析。",
    tags: ["Python", "React", "IoT", "数据分析"],
    image: "images/projects/project1.jpg",
    link: "https://github.com/yourname/project1",
    details: "该系统帮助制造企业实现了生产流程的全面数字化，提升效率40%。"
  },
  {
    title: "音乐推荐引擎",
    category: "机器学习",
    description: "基于深度学习的个性化音乐推荐系统，支持古典乐、爵士乐等多种风格。",
    tags: ["TensorFlow", "推荐算法", "音乐信息检索"],
    image: "images/projects/project2.jpg",
    link: "https://github.com/yourname/project2",
    details: "融合了我对音乐的热爱与机器学习的专业知识。"
  },
  {
    title: "烹饪食谱管理应用",
    category: "Web应用",
    description: "一个优雅的食谱管理和分享平台，帮助用户记录和发现美食。",
    tags: ["Vue.js", "Node.js", "MongoDB"],
    image: "images/projects/project3.jpg",
    link: "https://github.com/yourname/project3",
    details: "展现了我对生活品质的追求和对用户体验的关注。"
  },
  {
    title: "钢琴学习辅助工具",
    category: "教育科技",
    description: "使用Web Audio API开发的钢琴学习应用，支持音符识别和进度追踪。",
    tags: ["Web Audio", "JavaScript", "教育"],
    image: "images/projects/project4.jpg",
    link: "https://github.com/yourname/project4",
    details: "让技术服务于我的音乐梦想。"
  }
];

// 学习心得
const insights = [
  {
    title: "技术与艺术的对话",
    category: "思考",
    content: "最好的工程师不仅懂代码，更要理解人性。音乐教会我节奏感，烹饪教会我对细节的执着。这些看似无关的爱好，实际上都在塑造我更好的工程师品质。",
    date: "2024-01-15"
  },
  {
    title: "持续学习的力量",
    category: "经验",
    content: "我每个月都会学习一个新技术栈。这种对学习的渴望来自于对未知世界的好奇。不管是新的编程语言还是新的音乐风格，学习本身就是一种享受。",
    date: "2024-01-10"
  },
  {
    title: "包容性思维",
    category: "感悟",
    content: "在多元化的团队中工作教会我尊重不同的观点。就像音乐中的和弦一样，不同的声音组合在一起，才能创造出最美妙的旋律。",
    date: "2024-01-05"
  },
  {
    title: "生活的细节",
    category: "随笔",
    content: "一道好菜、一首好曲、一段优雅的代码——它们都有共同点：对细节的执着。我相信，匠心精神可以应用到生活的每一个角落。",
    date: "2023-12-28"
  }
];

// 社交链接
const socialLinks = [
  {
    name: "GitHub",
    icon: "🔗",
    url: "https://github.com/yourname",
    color: "#333"
  },
  {
    name: "LinkedIn",
    icon: "💼",
    url: "https://linkedin.com/in/yourname",
    color: "#0077B5"
  },
  {
    name: "Twitter",
    icon: "🐦",
    url: "https://twitter.com/yourname",
    color: "#1DA1F2"
  },
  {
    name: "微博",
    icon: "📱",
    url: "https://weibo.com/yourname",
    color: "#E6162D"
  },
  {
    name: "知乎",
    icon: "💡",
    url: "https://zhihu.com/people/yourname",
    color: "#0084FF"
  }
];
