import React, { useState, useEffect, useRef } from 'react';
import { Mic, CheckCircle, Volume2, ChevronRight } from 'lucide-react';

interface DictationStepProps {
  script: string;
  items: string[]; // ここには5語程度のフレーズが入る
  rate: number;
  onNext: () => void;
}

export const DictationStep: React.FC<DictationStepProps> = ({ script, items, rate, onNext }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [isPhraseComplete, setIsPhraseComplete] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const correctAudio = useRef(new Audio('/correct.mp3'));

  const currentPhrase = items[currentIndex]; // 入力させる5語フレーズ
  const targetWords = currentPhrase ? currentPhrase.split(/\s+/) : [];

  // フレーズが含まれる「一文全体」を取得する関数
  const getFullSentence = () => {
    if (!currentPhrase) return "";
    const sentences = script.split(/(?<=[.!?])\s+/);
    return sentences.find(s => s.toLowerCase().includes(currentPhrase.toLowerCase())) || currentPhrase;
  };

  const fullSentence = getFullSentence();

  useEffect(() => {
    const scriptTag = document.createElement('script');
    scriptTag.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
    scriptTag.async = true;
    document.head.appendChild(scriptTag);
  }, []);

  const speak = (text: string) => {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.rate = rate;
    window.speechSynthesis.speak(u);
  };

  const handleImmediateSuccess = () => {
    correctAudio.current.currentTime = 0;
    correctAudio.current.play().catch(() => {});
    if ((window as any).confetti) {
      (window as any).confetti({ particleCount: 60, spread: 60, origin: { y: 0.8 } });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setUserInput(val);

    const normalize = (str: string) => str.toLowerCase().trim().replace(/[^a-z0-9]/g, '');
    const cleanUser = normalize(val);
    const cleanTarget = normalize(targetWords[wordIndex]);

    if (cleanUser === cleanTarget && cleanUser.length > 0) {
      handleImmediateSuccess();
      if (wordIndex < targetWords.length - 1) {
        setWordIndex(prev => prev + 1);
        setUserInput('');
      } else {
        setIsPhraseComplete(true);
        setUserInput('');
      }
    }
  };

  useEffect(() => {
    if (fullSentence) speak(fullSentence);
  }, [currentIndex]);

  const handleNextPhrase = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setWordIndex(0);
      setIsPhraseComplete(false);
      setUserInput('');
    } else {
      onNext();
    }
  };

  if (!currentPhrase) return null;

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-500 font-pop">
      <div className="text-center space-y-2">
        <div className="inline-block p-3 bg-orange-500 rounded-2xl text-white mb-2 shadow-md"><Mic size={32} /></div>
        <h2 className="text-3xl font-black text-slate-800">Step 4: Dictation</h2>
        <p className="text-slate-500 font-bold">文を聴いて、空欄を埋めよう！</p>
      </div>

      <div className="bg-white rounded-[32px] p-8 shadow-xl border-4 border-slate-100 space-y-8 text-center">
        <button onClick={() => speak(fullSentence)} className="mx-auto flex items-center gap-3 px-8 py-4 bg-orange-100 text-orange-600 rounded-2xl font-black hover:bg-orange-200 transition-all shadow-sm">
          <Volume2 size={24} />
          <span>Listen Full Sentence</span>
        </button>

        <div className="space-y-6">
          <div className="text-xl md:text-2xl font-bold text-slate-700 leading-relaxed text-left px-8 py-16 bg-slate-50 rounded-[40px] border-2 border-slate-100 shadow-inner">
            {/* 文全体を表示し、フレーズ部分だけをInputにする */}
            {fullSentence.split(new RegExp(`(${currentPhrase})`, 'i')).map((part, i) => {
              if (part.toLowerCase() === currentPhrase.toLowerCase()) {
                return (
                  <span key={i} className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 px-3 py-1 bg-white rounded-xl border-2 border-orange-200 shadow-sm mx-1">
                    {targetWords.map((word, wIdx) => {
                      const isDone = wIdx < wordIndex || isPhraseComplete;
                      const isCurrent = wIdx === wordIndex && !isPhraseComplete;
                      if (isDone) return <span key={wIdx} className="text-emerald-600">{word}</span>;
                      if (isCurrent) return (
                        <input
                          key={wIdx}
                          ref={inputRef}
                          type="text"
                          value={userInput}
                          onChange={handleInputChange}
                          style={{ width: `${Math.max(word.length, 2)}ch` }}
                          className="bg-orange-50 border-b-4 border-orange-500 outline-none text-orange-600 text-center animate-pulse"
                          autoFocus
                        />
                      );
                      return <span key={wIdx} className="text-slate-300">{"_".repeat(word.length)}</span>;
                    })}
                  </span>
                );
              }
              return <span key={i} className="text-slate-400">{part}</span>;
            })}
          </div>

          {isPhraseComplete && (
            <div className="space-y-6 animate-in zoom-in duration-300">
              <div className="p-8 bg-emerald-50 rounded-[32px] border-4 border-emerald-100 flex flex-col items-center gap-2">
                <CheckCircle size={50} className="text-emerald-500 mb-2" />
                <span className="text-emerald-700 font-black text-2xl">Excellent!</span>
              </div>
              <button onClick={handleNextPhrase} className="w-full py-5 bg-orange-500 text-white font-bold text-xl rounded-2xl shadow-lg hover:bg-orange-600 active:scale-95 transition-all flex items-center justify-center gap-3">
                <span>{currentIndex < items.length - 1 ? 'Next Phrase' : 'Complete Step'}</span>
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
