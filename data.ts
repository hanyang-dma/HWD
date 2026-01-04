import { LevelData } from './types';

export const SYLLABUS_DATA: LevelData[] = [
  {
    id: 1,
    era: "1750-1850",
    title: "工业革命前奏",
    description: "机械化生产的黎明，标准化与装饰过剩的博弈。",
    type: "archive",
    question: "档案室发现了一张1851年伦敦世博会的建筑草图。它采用预制铁件和玻璃建造，被称为'水晶宫'。请归档其设计核心理念：",
    visualKeyword: "Crystal",
    options: [
      { id: "a", label: "复古哥特式风格", isCorrect: false, feedbackText: "错误。这正是帕克斯顿试图超越的旧时代风格。" },
      { id: "b", label: "标准化与预制构件", isCorrect: true, feedbackText: "正确。约瑟夫·帕克斯顿利用温室建造技术，开启了现代建筑工业化的先河。" },
      { id: "c", label: "手工雕刻装饰", isCorrect: false, feedbackText: "错误。水晶宫是工业化生产的胜利，而非手工艺。" }
    ]
  },
  {
    id: 2,
    era: "1850-1900",
    title: "工艺美术运动",
    description: "面对机器的冰冷，威廉·莫里斯呼唤回归自然与手工艺。",
    type: "commission",
    question: "1880年，一位富有商人委托你为他的书房设计壁纸。为了符合'工艺美术运动'的精神，你应该选择哪种图案？",
    visualKeyword: "Nature",
    options: [
      { id: "a", label: "以自然植物为原型的有机纹样", isCorrect: true, feedbackText: "正确。师法自然，反对维多利亚时期矫揉造作的装饰。" },
      { id: "b", label: "纯粹的几何色块", isCorrect: false, feedbackText: "错误。这是后来的现代主义特征，此时为时尚早。" },
      { id: "c", label: "描绘蒸汽机与齿轮的图案", isCorrect: false, feedbackText: "错误。工艺美术运动反对工业机器美学。" }
    ]
  },
  {
    id: 3,
    era: "1890-1910",
    title: "新艺术运动",
    description: "世纪之交的曲线狂热，从巴黎地铁口到高迪的圣家堂。",
    type: "archive",
    question: "请辨认以下设计特征：赫克托·吉玛德设计的巴黎地铁入口，使用了模仿植物茎叶的纠缠曲线。这属于什么风格？",
    visualKeyword: "Curve",
    options: [
      { id: "a", label: "新艺术运动 (Art Nouveau)", isCorrect: true, feedbackText: "正确。充满活力的有机曲线（鞭线）是其标志。" },
      { id: "b", label: "装饰艺术 (Art Deco)", isCorrect: false, feedbackText: "错误。Art Deco更强调放射状和机械几何，那是1920年代的事。" },
      { id: "c", label: "格拉斯哥学派", isCorrect: false, feedbackText: "错误。麦金托什的格拉斯哥学派更偏向直线与方格。" }
    ]
  },
  {
    id: 4,
    era: "1900-1925",
    title: "现代主义萌芽",
    description: "装饰即罪恶。从彼得·贝伦斯到风格派。",
    type: "commission",
    question: "1917年，你加入了荷兰的'风格派' (De Stijl) 杂志社。主编蒙德里安要求你设计封面，你必须使用的元素是：",
    visualKeyword: "Grid",
    options: [
      { id: "a", label: "不对称构图与红黄蓝三原色", isCorrect: true, feedbackText: "正确。垂直水平线条与三原色是新造型主义的核心。" },
      { id: "b", label: "对称布局与黑白灰", isCorrect: false, feedbackText: "错误。风格派打破了传统对称性。" },
      { id: "c", label: "具象的人物插画", isCorrect: false, feedbackText: "错误。风格派追求彻底的抽象。" }
    ]
  },
  {
    id: 5,
    era: "1919-1933",
    title: "包豪斯时刻",
    description: "形式追随功能。魏玛、德绍、柏林。",
    type: "archive",
    question: "这是一把'瓦西里椅' (Wassily Chair)。它使用镀镍钢管和皮革制成，灵感来自自行车把手。它代表了包豪斯的什么理念？",
    visualKeyword: "Bauhaus",
    options: [
      { id: "a", label: "艺术与技术的统一", isCorrect: true, feedbackText: "正确。格罗皮乌斯的宣言：'建筑师、雕刻家、画家，我们都以此为目标'，利用工业材料创造新美学。" },
      { id: "b", label: "为富人定制", isCorrect: false, feedbackText: "错误。包豪斯的初衷是为大众设计（虽然结果往往昂贵）。" },
      { id: "c", label: "历史主义复兴", isCorrect: false, feedbackText: "错误。包豪斯彻底摒弃了历史风格的模仿。" }
    ]
  },
  {
    id: 6,
    era: "1930-1960",
    title: "美国流线型风格",
    description: "大萧条后的商业美学，雷蒙德·罗维与'计划废止制'。",
    type: "commission",
    question: "1935年的美国，经济萧条。作为设计师，为了刺激消费，你决定为一款削铅笔机设计外壳。你会采用什么造型？",
    visualKeyword: "Streamline",
    options: [
      { id: "a", label: "空气动力学的水滴形流线", isCorrect: true, feedbackText: "正确。流线型风格象征速度与未来，能激发购买欲，即使削铅笔机并不需要空气动力学。" },
      { id: "b", label: "裸露内部齿轮结构", isCorrect: false, feedbackText: "错误。当时的消费者渴望的是平滑、现代的外壳。" },
      { id: "c", label: "古典木质雕花", isCorrect: false, feedbackText: "错误。这被认为是过时且沉闷的。" }
    ]
  },
  {
    id: 7,
    era: "1945-1970",
    title: "国际主义与波普",
    description: "瑞士平面的理性秩序 vs 波普艺术的叛逆。",
    type: "archive",
    question: "这张海报使用了Helvetica字体，严格的网格系统，照片客观冷静。这属于什么风格？",
    visualKeyword: "Swiss",
    options: [
      { id: "a", label: "波普设计 (Pop Design)", isCorrect: false, feedbackText: "错误。波普设计是玩世不恭、色彩艳丽且反叛的。" },
      { id: "b", label: "国际主义风格 (Swiss Style)", isCorrect: true, feedbackText: "正确。清晰、客观、数学化的网格秩序是其特征。" },
      { id: "c", label: "后现代主义", isCorrect: false, feedbackText: "错误。后现代主义会试图打破这种冷漠的秩序。" }
    ]
  },
  {
    id: 8,
    era: "1970-1995",
    title: "后现代主义",
    description: "少即是乏味 (Less is Bore)。孟菲斯小组的狂欢。",
    type: "commission",
    question: "1981年，索特萨斯邀请你为'孟菲斯'小组设计一个书架。为了反对现代主义的'好品味'，你应该：",
    visualKeyword: "Memphis",
    options: [
      { id: "a", label: "使用廉价塑料贴面，拼贴鲜艳图案与怪诞造型", isCorrect: true, feedbackText: "正确。像'卡尔顿书架'一样，挑战功能主义，强调隐喻和装饰。" },
      { id: "b", label: "遵循人体工程学极致舒适", isCorrect: false, feedbackText: "错误。孟菲斯设计往往故意让人感到不适或困惑。" },
      { id: "c", label: "使用黑色金属和极简线条", isCorrect: false, feedbackText: "错误。这是现代主义的陈词滥调。" }
    ]
  },
  {
    id: 9,
    era: "Contemporary",
    title: "可持续与未来",
    description: "从摇篮到摇篮。设计伦理与人工智能的挑战。",
    type: "commission",
    question: "在AI生成内容(AIGC)爆发的今天，你作为设计总监，面临一个道德抉择。客户要求使用AI生成大量海报以替代初级设计师，且不进行人工审核。你应当：",
    visualKeyword: "Ethics",
    options: [
      { id: "a", label: "完全接受，效率至上", isCorrect: false, feedbackText: "警告：这可能导致设计同质化与版权伦理问题。设计失去了'人'的温度。" },
      { id: "b", label: "拒绝AI，坚持纯手工", isCorrect: false, feedbackText: "提示：这可能在效率竞争中落败。技术是工具，而非敌人。" },
      { id: "c", label: "人机协作，坚守伦理审查", isCorrect: true, feedbackText: "正确。设计师应作为AI的'策展人'和'伦理把关者'，维持创造力与责任的平衡。" }
    ]
  }
];
