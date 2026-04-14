import React, { useState, useEffect, useRef } from 'react';
import { Mic, CheckCircle, Volume2, ChevronRight } from 'lucide-react';

interface DictationStepProps {
  script: string;
  items: string[]; // ここに「文全体」が入ってくる想定
  rate: number;
  onNext: () => void;
}

export const DictationStep: React.FC<DictationStepProps> = ({ items, rate, onNext }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [isPhraseComplete, setIsPhraseComplete] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const correctAudio = useRef(new Audio('/correct.mp3'));

  // 現在のターゲット文
  const currentSentence = items[currentIndex];
  // 文を単語に分解（空欄判定用）
  const allWordsInSentence = currentSentence ? currentSentence.split(/\s+/) : [];

  // 【教育的カスタマイズ】
  // 全単語を入力させるのは大変なので、「3文字以上の単語」をランダムに、
  // もしくは特定のルールで空欄にするロジックにすると生徒の負担が減ります。
  // 今回はご要望通り「提示された文の全単語を順に入力させる」流れを維持します。

  useEffect(() => {
    const scriptTag = document.createElement('script');
    scriptTag.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
    scriptTag.async = true;
    document.head.appendChild(scriptTag);
    correctAudio.current.load();
    correctAudio.current.volume = 0.5;
  }, []);

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-US';
      u.rate = rate; // App.tsx から渡された速度を反映
      window.speechSynthesis.speak(u);
    }
  };

  const handleImmediateSuccess = () => {
    correctAudio.current.currentTime = 0;
    correctAudio.current.play();

    if ((window as any).confetti) {
      (window as any).confetti({
        particleCount: 40,
        spread: 70,
        origin: { y: 0.8 },
        zIndex: 9999
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setUserInput(val);

    const normalize = (str: string) => str.toLowerCase().trim().replace(/[^a-z0-9]/g, '');
    const cleanUser = normalize(val);
    const cleanTarget = normalize(allWordsInSentence[wordIndex]);

    if (cleanUser === cleanTarget && cleanUser.length > 0) {
      handleImmediateSuccess();

      if (wordIndex < allWordsInSentence.length - 1) {
        setWordIndex(prev => prev + 1);
        setUserInput('');
      } else {
        setIsPhraseComplete(true);
        setUserInput('');
      }
    }
  };

  useEffect(() => {
    if (currentSentence) speak(currentSentence);
  }, [currentIndex]);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [wordIndex, isPhraseComplete]);

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

  if (!currentSentence) return null;

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-500 font-pop">
      <div className="text-center space-y-2">
        <div className="inline-block p-3 bg-orange-500 rounded-2xl text-white mb-2 shadow-md">
          <Mic size={32} />
        </div>
        <h2 className="text-3xl font-black text-slate-800">Step 4: Dictation</h2>
        <p className="text-slate-500 font-bold">音声を聞いて、一文を完成させよう！</p>
      </div>

      <div className="bg-white rounded-[32px] p-8 shadow-xl border-4 border-slate-100 space-y-8 text-center">
        <button
          onClick={() => speak(currentSentence)}
          className="mx-auto flex items-center gap-3 px-8 py-4 bg-orange-100 text-orange-600 rounded-2xl font-black hover:bg-orange-200 transition-all active:scale-95 shadow-sm"
        >
          <Volume2 size={24} />
          <span>Listen Sentence</span>
        </button>

        <div className="space-y-6">
          <div className="text-xl md:text-2xl font-bold text-slate-700 leading-relaxed text-left px-8 py-16 bg-slate-50 rounded-[40px] border-2 border-slate-100 shadow-inner flex flex-wrap gap-x-3 gap-y-4 justify-center">
            {allWordsInSentence.map((word, wIdx) => {
              const isDone = wIdx < wordIndex || isPhraseComplete;
              const isCurrent = wIdx === wordIndex && !isPhraseComplete;

              if (isDone) {
                return <span key={wIdx} className="text-emerald-600 border-b-2 border-transparent">{word}</span>;
              }
              if (isCurrent) {
                return (
                  <input
                    key={wIdx}
                    ref={inputRef}
                    type="text"
                    value={userInput}
                    onChange={handleInputChange}
                    style={{ width: `${Math.max(word.length, 3)}ch` }}
                    className="bg-orange-50 border-b-4 border-orange-500 outline-none text-orange-600 text-center animate-pulse rounded-t-lg"
                    autoFocus
                    autoComplete="off"
                    autoCapitalize="off"
                    spellCheck="false"
                  />
                );
              }
              return (
                <span key={wIdx} className="text-slate-300 border-b-2 border-slate-200">
                  {"_".repeat(word.length)}
                </span>
              );
            })}
          </div>

          {isPhraseComplete && (
            <div className="space-y-6 animate-in zoom-in duration-300">
              <div className="p-8 bg-emerald-50 rounded-[32px] border-4 border-emerald-100 flex flex-col items-center gap-2">
                <CheckCircle size={50} className="text-emerald-500 mb-2" />
                <span className="text-emerald-700 font-black text-2xl">Perfect!</span>
              </div>
              <button
                onClick={handleNextPhrase}
                className="w-full py-5 bg-orange-500 text-white font-bold text-xl rounded-2xl shadow-lg hover:bg-orange-600 active:scale-95 transition-all flex items-center justify-center gap-3"
              >
                <span>{currentIndex < items.length - 1 ? 'Next Sentence' : 'Complete Step'}</span>
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
