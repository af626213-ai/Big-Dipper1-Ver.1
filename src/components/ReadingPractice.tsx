import React, { useState, useEffect, useRef } from 'react';
import { Mic, Square, Play, RefreshCw, ChevronRight } from 'lucide-react';

interface ReadingPracticeProps {
  script: string;
  onNext: (accuracy: number, wpm: number) => void;
}

// 外部コンポーネントを介さず、このファイル内で完結する構成にしています
export const ReadingPractice: React.FC<ReadingPracticeProps> = ({ script, onNext }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [accuracy, setAccuracy] = useState<number | null>(null);
  const [wpm, setWpm] = useState<number | null>(null);
  const [startTime, setStartTime] = useState<number | null>(null);
  
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        let currentTranscript = '';
        for (let i = 0; i < event.results.length; i++) {
          currentTranscript += event.results[i][0].transcript;
        }
        setTranscript(currentTranscript);
      };

      recognitionRef.current.onend = () => {
        setIsRecording(false);
      };
    }
  }, []);

  const calculateScore = () => {
    const originalWords = script.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "").split(/\s+/);
    const spokenWords = transcript.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "").split(/\s+/);
    
    let matches = 0;
    const spokenSet = new Set(spokenWords);
    originalWords.forEach(word => {
      if (spokenSet.has(word)) matches++;
    });

    const accScore = Math.round((matches / originalWords.length) * 100);
    setAccuracy(accScore);

    if (startTime) {
      const durationMin = (Date.now() - startTime) / 60000;
      const wpmScore = Math.round(spokenWords.length / durationMin);
      setWpm(wpmScore);
    }
  };

  const toggleRecording = () => {
    if (isRecording) {
      recognitionRef.current?.stop();
      calculateScore();
    } else {
      setTranscript('');
      setAccuracy(null);
      setWpm(null);
      setStartTime(Date.now());
      setIsRecording(true);
      recognitionRef.current?.start();
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-500 font-pop">
      <div className="text-center space-y-2">
        <div className="inline-block p-3 bg-orange-500 rounded-2xl text-white shadow-md">
          <Mic size={32} />
        </div>
        <h2 className="text-3xl font-black text-slate-800">Final Step: Reading Practice</h2>
        <p className="text-slate-500 font-bold">自分のペースで音読して、精度と速度を測定しよう！</p>
      </div>

      <div className="bg-white rounded-[32px] p-8 shadow-xl border-4 border-slate-100 space-y-6">
        <div className="bg-slate-50 rounded-2xl p-6 text-xl text-slate-700 leading-relaxed font-medium text-left">
          {script}
        </div>
        
        {transcript && (
          <div className="border-t-2 border-slate-100 pt-6">
            <p className="text-xs font-black text-orange-400 uppercase tracking-widest mb-2">Your Speech</p>
            <p className="text-lg text-orange-600 font-bold text-left italic">"{transcript}"</p>
          </div>
        )}
      </div>

      <div className="flex flex-col items-center gap-4">
        <button
          onClick={toggleRecording}
          className={`w-24 h-24 rounded-full flex items-center justify-center shadow-lg transition-all transform active:scale-95 ${
            isRecording ? 'bg-rose-500 animate-pulse' : 'bg-orange-500 hover:bg-orange-600'
          }`}
        >
          {isRecording ? <Square size={40} className="text-white" /> : <Mic size={40} className="text-white" />}
        </button>
        <p className="text-slate-400 font-black text-sm uppercase tracking-tighter">
          {isRecording ? 'Recording... Tap to Stop' : 'Tap to Start Reading'}
        </p>
      </div>

      {accuracy !== null && (
        <div className="bg-white rounded-3xl p-6 shadow-xl border-4 border-orange-100 flex justify-around animate-in zoom-in">
          <div className="text-center">
            <p className="text-xs text-slate-400 font-bold uppercase">Accuracy</p>
            <p className="text-3xl font-black text-orange-600">{accuracy}%</p>
          </div>
          <div className="text-center border-l-2 border-slate-100 pl-12">
            <p className="text-xs text-slate-400 font-bold uppercase">WPM</p>
            <p className="text-3xl font-black text-orange-600">{wpm}</p>
          </div>
          <button
            onClick={() => onNext(accuracy, wpm || 0)}
            className="ml-6 bg-orange-500 text-white p-4 rounded-2xl hover:bg-orange-600 transition-colors"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </div>
  );
};
