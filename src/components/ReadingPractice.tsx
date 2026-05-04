import React, { useState, useEffect, useRef } from 'react';
import { Home, Play, CheckCircle, BookOpen, Volume2, Square, Mic, Headphones, ChevronDown } from 'lucide-react';
import { ListeningStep } from './components/ListeningStep';
import { QuizStep } from './components/QuizStep';
import { VocabularyStep } from './components/VocabularyStep';
import { DictationStep } from './components/DictationStep';
import { ReadingStep } from './components/ReadingStep';
import { ReadingPractice } from './components/ReadingPractice';

import { courseData } from './data/episodes';
import type { Episode } from './data/episodes';

const stopSpeech = () => {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
};

const OverlappingInternal = ({ script, rate, onNext }: { script: string, rate: number, onNext: () => void }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlay = () => {
    if (isPlaying) { stopSpeech(); setIsPlaying(false); }
    else { 
      stopSpeech();
      const u = new SpeechSynthesisUtterance(script); u.lang = 'en-US'; 
      u.rate = rate; u.onend = () => setIsPlaying(false); window.speechSynthesis.speak(u); setIsPlaying(true); 
    }
  };
  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-500 font-pop">
      <div className="text-center space-y-2">
        <div className="inline-block p-3 bg-orange-500 rounded-2xl text-white shadow-md"><Mic size={32} /></div>
        <h2 className="text-3xl font-black text-slate-800">Step 7: Overlapping</h2>
      </div>
      <div className="bg-white rounded-[32px] p-8 shadow-xl border-4 border-slate-100 relative">
        <button onClick={handlePlay} className="absolute top-4 right-4 w-14 h-14 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center hover:bg-orange-200">
          {isPlaying ? <Square size={24} /> : <Volume2 size={24} />}
        </button>
        <p className="text-2xl text-slate-800 leading-relaxed pr-20 font-bold text-left">{script}</p>
      </div>
      <button onClick={() => { stopSpeech(); onNext(); }} className="w-full py-5 bg-orange-500 text-white font-bold text-xl rounded-2xl shadow-lg hover:bg-orange-600">Go to Shadowing</button>
    </div>
  );
};

const ShadowingInternal = ({ script, rate, onNext }: { script: string, rate: number, onNext: () => void }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlay = () => {
    if (isPlaying) { stopSpeech(); setIsPlaying(false); }
    else { 
      stopSpeech();
      const u = new SpeechSynthesisUtterance(script); u.lang = 'en-US'; 
      u.rate = rate; u.onend = () => setIsPlaying(false); window.speechSynthesis.speak(u); setIsPlaying(true); 
    }
  };
  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-500 font-pop text-center">
      <div className="space-y-2">
        <div className="inline-block p-3 bg-orange-500 rounded-2xl text-white shadow-md"><Headphones size={32} /></div>
        <h2 className="text-3xl font-black text-slate-800">Step 8: Shadowing</h2>
      </div>
      <div className="bg-white rounded-[32px] p-10 shadow-xl border-4 border-slate-100 flex flex-col items-center gap-6">
        <button onClick={handlePlay} className="w-28 h-28 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 shadow-md transform active:scale-95 transition-all">
          {isPlaying ? <Square size={40} /> : <Volume2 size={40} />}
        </button>
      </div>
      <button onClick={() => { stopSpeech(); onNext(); }} className="w-full py-5 bg-orange-500 text-white font-bold text-xl rounded-2xl shadow-lg hover:bg-orange-600">Go to Reading Practice</button>
    </div>
  );
};

export default function App() {
  const [currentStep, setCurrentStep] = useState<'menu' | 'listening' | 'quiz' | 'vocabulary' | 'dictation' | 'reading' | 'overlapping' | 'shadowing' | 'practice' | 'result'>('menu');
  const [selectedLesson, setSelectedLesson] = useState<number>(1);
  const [selectedEpisode, setSelectedEpisode] = useState<Episode>(courseData.episodes[0]);
  const [speechRate, setSpeechRate] = useState<number>(1.0);
  const [finalScores, setFinalScores] = useState({ acc: 0, wpm: 0 });

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@400;500;900&display=swap';
    link.rel = 'stylesheet'; document.head.appendChild(link);
    const style = document.createElement('style');
    style.textContent = `.font-pop { font-family: 'Kiwi Maru', sans-serif !important; } body { background-color: #f8fafc; }`;
    document.head.appendChild(style);
  }, []);

  const handleStart = (ep: Episode) => {
    stopSpeech();
    setSelectedEpisode(ep);
    setCurrentStep('listening');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-pop">
      <header className="bg-white sticky top-0 z-50 border-b-4 border-slate-100 px-6 py-4 flex justify-between items-center shadow-sm">
        <button onClick={() => { stopSpeech(); setCurrentStep('menu'); }} className="p-2 bg-slate-100 hover:bg-orange-100 rounded-xl text-slate-800"><Home size={22} /></button>
        <div className="flex gap-1">
          {[0.6, 0.8, 1.0, 1.1].map(r => (
            <button key={r} onClick={() => setSpeechRate(r)} className={`px-3 py-1 rounded-lg text-xs font-black ${speechRate === r ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-400'}`}>{r}x</button>
          ))}
        </div>
      </header>

      {currentStep !== 'menu' && currentStep !== 'result' && (
        <nav className="bg-white border-b-2 border-slate-100 flex justify-center overflow-x-auto px-4">
          {(['listening', 'quiz', 'vocabulary', 'dictation', 'reading', 'overlapping', 'shadowing', 'practice'] as const).map((step) => (
            <button key={step} onClick={() => { stopSpeech(); setCurrentStep(step); }} className={`py-3 px-4 text-[9px] font-black uppercase tracking-widest border-b-4 ${currentStep === step ? 'border-orange-500 text-orange-600' : 'border-transparent text-slate-400'}`}>{step}</button>
          ))}
        </nav>
      )}

      <main className="flex-1 p-6 text-center">
        <div className="max-w-5xl mx-auto">
          {currentStep === 'menu' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <div className="col-span-full mb-8">
                <select value={selectedLesson} onChange={(e) => setSelectedLesson(Number(e.target.value))} className="p-4 bg-white border-4 border-orange-100 rounded-3xl font-black text-slate-700 outline-none shadow-lg">
                  <option value={1}>Lesson 1</option>
                  <option value={2}>Lesson 2</option>
                </select>
              </div>
              {courseData.episodes.filter(ep => ep.id >= (selectedLesson-1)*3+1 && ep.id <= (selectedLesson-1)*3+3).map((ep, idx) => (
                <div key={ep.id} onClick={() => handleStart(ep)} className="group bg-white rounded-[32px] p-8 border-4 border-slate-100 hover:border-orange-400 cursor-pointer shadow-sm hover:shadow-2xl transition-all">
                  <div className="w-16 h-16 rounded-2xl bg-orange-500 text-white flex items-center justify-center font-black text-2xl shadow-lg mb-4 mx-auto">P{idx + 1}</div>
                  <h3 className="text-lg font-black text-slate-800">{ep.title}</h3>
                </div>
              ))}
            </div>
          )}

          {currentStep === 'listening' && <ListeningStep script={selectedEpisode.script} rate={speechRate} onNext={() => setCurrentStep('quiz')} />}
          {currentStep === 'quiz' && <QuizStep quizzes={selectedEpisode.quizzes} onNext={() => setCurrentStep('vocabulary')} />}
          {currentStep === 'vocabulary' && <VocabularyStep questions={selectedEpisode.vocab_quizzes} rate={speechRate} onNext={() => setCurrentStep('dictation')} />}
          {currentStep === 'dictation' && <DictationStep script={selectedEpisode.script} items={selectedEpisode.dictation_items} rate={speechRate} onNext={() => setCurrentStep('reading')} />}
          {currentStep === 'reading' && <ReadingStep slashScript={selectedEpisode.slash_script || selectedEpisode.script} japanese={selectedEpisode.japanese_translation || ""} rate={speechRate} onNext={() => setCurrentStep('overlapping')} />}
          {currentStep === 'overlapping' && <OverlappingInternal script={selectedEpisode.script} rate={speechRate} onNext={() => setCurrentStep('shadowing')} />}
          {currentStep === 'shadowing' && <ShadowingInternal script={selectedEpisode.script} rate={speechRate} onNext={() => setCurrentStep('practice')} />}
          
          {currentStep === 'practice' && (
            <ReadingPractice 
              script={selectedEpisode.script} 
              onNext={(acc, wpm) => {
                setFinalScores({ acc, wpm });
                setCurrentStep('result');
              }} 
            />
          )}

          {currentStep === 'result' && (
            <div className="max-w-md mx-auto text-center space-y-6 py-12 animate-in zoom-in duration-500">
              <CheckCircle size={80} className="text-green-500 mx-auto" />
              <h2 className="text-4xl font-black text-slate-800">Perfect!</h2>
              <div className="bg-white p-6 rounded-3xl shadow-xl border-4 border-orange-100 flex justify-around">
                <div><p className="text-xs text-slate-400">Accuracy</p><p className="text-2xl font-black text-cyan-600">{finalScores.acc}%</p></div>
                <div><p className="text-xs text-slate-400">WPM</p><p className="text-2xl font-black text-rose-600">{finalScores.wpm}</p></div>
              </div>
              <button onClick={() => setCurrentStep('menu')} className="w-full py-5 bg-orange-500 text-white font-bold text-xl rounded-2xl shadow-lg hover:bg-orange-700 transition-all">Back to Menu</button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
