import React, { useState } from 'react';
import { SYLLABUS_DATA } from './data';
import { GameState } from './types';
import BauhausBackground from './components/BauhausBackground';
import ChaosOverlay from './components/ChaosOverlay';
import { ArrowRight, Box, CheckCircle, XCircle, RotateCcw, PenTool, Archive } from 'lucide-react';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('intro');
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [chaosLevel, setChaosLevel] = useState(0); // 0 = Clean, 1+ = Chaotic
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; text: string } | null>(null);

  const currentLevelData = SYLLABUS_DATA[currentLevelIndex];
  const progress = ((currentLevelIndex) / SYLLABUS_DATA.length) * 100;

  const handleStart = () => {
    setGameState('playing');
    setChaosLevel(0);
    setScore(0);
    setCurrentLevelIndex(0);
  };

  const handleAnswer = (optionId: string) => {
    const selected = currentLevelData.options.find(o => o.id === optionId);
    if (!selected) return;

    setSelectedOption(optionId);
    
    if (selected.isCorrect) {
      setScore(prev => prev + 100);
      setChaosLevel(0); // Restore order
      setFeedback({ isCorrect: true, text: selected.feedbackText });
    } else {
      setChaosLevel(prev => prev + 1); // Add entropy
      setFeedback({ isCorrect: false, text: selected.feedbackText });
    }
    
    setGameState('feedback');
  };

  const handleNext = () => {
    if (currentLevelIndex < SYLLABUS_DATA.length - 1) {
      setCurrentLevelIndex(prev => prev + 1);
      setGameState('playing');
      setSelectedOption(null);
      setFeedback(null);
      // Keep chaos level if incorrect? Let's reduce it slightly to be merciful
      setChaosLevel(prev => Math.max(0, prev - 1));
    } else {
      setGameState('finished');
    }
  };

  // --- Screens ---

  const IntroScreen = () => (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-8 z-10 relative">
      <div className="border-4 border-bauhaus-black p-12 bg-bauhaus-white max-w-2xl shadow-[8px_8px_0px_0px_rgba(26,26,26,1)]">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-bauhaus-red rounded-full mr-4"></div>
          <div className="w-16 h-16 bg-bauhaus-blue mr-4"></div>
          <div className="w-16 h-16 bg-bauhaus-yellow rotate-45 transform"></div>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tighter uppercase">
          The Construct
        </h1>
        <h2 className="text-2xl font-bold text-bauhaus-blue mb-8 border-b-4 border-bauhaus-blue inline-block pb-1">
          构建：设计年表
        </h2>
        <p className="text-lg mb-8 font-sans leading-relaxed text-left">
          欢迎来到魏玛包豪斯档案馆。<br/><br/>
          设计历史的时间轴已经断裂。作为档案管理员，你需要穿越9个关键时代，通过<b>归档文物</b>或<b>模拟设计决策</b>，将理性的秩序带回世界。<br/><br/>
          警告：错误的决策将导致世界被毫无意义的装饰和混乱吞噬。
        </p>
        <button 
          onClick={handleStart}
          className="bg-bauhaus-black text-white text-xl font-bold py-4 px-12 hover:bg-bauhaus-red transition-colors border-2 border-transparent hover:border-black"
        >
          START ARCHIVING // 开始归档
        </button>
      </div>
    </div>
  );

  const PlayingScreen = () => (
    <div className="flex flex-col items-center min-h-screen p-4 md:p-8 z-10 relative max-w-5xl mx-auto w-full">
      {/* HUD */}
      <div className="w-full flex justify-between items-end border-b-4 border-bauhaus-black pb-4 mb-8 bg-bauhaus-white/80 backdrop-blur-sm p-4">
        <div>
          <span className="text-xs font-bold tracking-widest text-bauhaus-blue block mb-1">CURRENT ERA // 当前纪元</span>
          <h2 className="text-4xl font-bold">{currentLevelData.era}</h2>
        </div>
        <div className="text-right">
           <span className="text-xs font-bold tracking-widest text-bauhaus-red block mb-1">RATIONALITY // 理性指数</span>
           <span className="text-3xl font-mono">{score}</span>
        </div>
      </div>

      {/* Challenge Card */}
      <div className={`w-full bg-bauhaus-white border-4 border-bauhaus-black p-6 md:p-12 shadow-[12px_12px_0px_0px_rgba(20,70,160,1)] transition-transform duration-200 ${chaosLevel > 0 ? 'rotate-1' : 'rotate-0'}`}>
        
        {/* Header Badge */}
        <div className="flex items-center gap-2 mb-6">
          {currentLevelData.type === 'archive' ? (
            <span className="bg-bauhaus-yellow text-bauhaus-black px-3 py-1 text-sm font-bold uppercase flex items-center gap-2 border border-black">
              <Archive size={16} /> The Archive // 文物归位
            </span>
          ) : (
            <span className="bg-bauhaus-blue text-white px-3 py-1 text-sm font-bold uppercase flex items-center gap-2 border border-black">
              <PenTool size={16} /> Commission // 甲方模拟
            </span>
          )}
          <span className="text-sm font-bold text-gray-500">LEVEL 0{currentLevelIndex + 1} / 09</span>
        </div>

        <h3 className="text-3xl font-bold mb-4">{currentLevelData.title}</h3>
        <p className="text-lg italic text-gray-600 mb-8 border-l-4 border-bauhaus-red pl-4">
          {currentLevelData.description}
        </p>

        <div className="mb-8 text-xl font-medium leading-relaxed">
          {currentLevelData.question}
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {currentLevelData.options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => handleAnswer(opt.id)}
              className="h-full min-h-[120px] p-6 text-left border-2 border-bauhaus-black hover:bg-bauhaus-black hover:text-white transition-all group flex flex-col justify-between"
            >
              <span className="text-2xl font-bold mb-2 block group-hover:text-bauhaus-yellow">{opt.id.toUpperCase()}</span>
              <span className="font-medium text-sm md:text-base">{opt.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Progress Line */}
      <div className="w-full mt-12 h-4 border-2 border-bauhaus-black bg-white relative">
        <div 
          className="h-full bg-bauhaus-red transition-all duration-500" 
          style={{ width: `${progress}%` }}
        ></div>
        {/* Markers */}
        {[...Array(9)].map((_, i) => (
             <div key={i} className="absolute top-0 h-full w-0.5 bg-black/20" style={{ left: `${(i/8)*100}%` }}></div>
        ))}
      </div>
    </div>
  );

  const FeedbackScreen = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-bauhaus-black/90 p-4">
      <div className={`bg-bauhaus-white max-w-xl w-full border-4 ${feedback?.isCorrect ? 'border-bauhaus-blue' : 'border-bauhaus-red'} p-8 shadow-2xl animate-[fadeIn_0.3s_ease-out]`}>
        <div className="flex justify-center mb-6">
            {feedback?.isCorrect ? (
                <CheckCircle size={80} className="text-bauhaus-blue" />
            ) : (
                <XCircle size={80} className="text-bauhaus-red" />
            )}
        </div>
        
        <h2 className={`text-4xl font-bold text-center mb-4 ${feedback?.isCorrect ? 'text-bauhaus-blue' : 'text-bauhaus-red'}`}>
          {feedback?.isCorrect ? 'CONSTRUCTED' : 'DISORDER'}
        </h2>
        
        <div className="bg-gray-100 p-6 border-l-4 border-bauhaus-black mb-8">
            <p className="text-xl font-medium">{feedback?.text}</p>
        </div>

        <button 
          onClick={handleNext}
          className="w-full bg-bauhaus-black text-white text-xl font-bold py-4 hover:bg-bauhaus-yellow hover:text-black transition-colors flex items-center justify-center gap-2"
        >
          {currentLevelIndex < 8 ? 'NEXT ERA' : 'FINISH'} <ArrowRight />
        </button>
      </div>
    </div>
  );

  const FinishedScreen = () => (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-8 z-10 relative">
       <div className="border-4 border-bauhaus-black p-12 bg-bauhaus-white max-w-2xl">
          <h1 className="text-5xl font-bold mb-2">DESIGN CHRONOLOGY</h1>
          <h2 className="text-4xl font-bold text-bauhaus-red mb-8">COMPLETE</h2>

          <div className="flex justify-center items-baseline gap-2 mb-8">
            <span className="text-6xl font-mono font-bold">{score}</span>
            <span className="text-xl text-gray-600">PTS</span>
          </div>

          <p className="text-lg mb-8 text-left border-l-4 border-bauhaus-blue pl-4">
            你已经完成了从工业革命到人工智能时代的设计旅程。
            <br/><br/>
            设计不仅仅是关于美学，更是关于解决问题、社会责任以及在混乱中建立秩序。正如包豪斯所教导的，形式必须追随功能，而未来的功能包括了伦理与可持续性。
          </p>
          
          <button 
            onClick={handleStart}
            className="bg-bauhaus-black text-white font-bold py-3 px-8 flex items-center gap-2 mx-auto hover:bg-bauhaus-blue transition-colors"
          >
            <RotateCcw size={20} /> RESTART CHRONOLOGY
          </button>
       </div>
    </div>
  );

  return (
    <div className="min-h-screen font-sans bg-bauhaus-white text-bauhaus-black overflow-hidden relative selection:bg-bauhaus-yellow">
      <BauhausBackground />
      <ChaosOverlay level={chaosLevel} />

      {gameState === 'intro' && <IntroScreen />}
      {gameState === 'playing' && <PlayingScreen />}
      {gameState === 'feedback' && <FeedbackScreen />}
      {gameState === 'finished' && <FinishedScreen />}
    </div>
  );
};

export default App;
