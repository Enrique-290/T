
import React, { useEffect, useMemo, useState } from "react";
import logo from "./assets/logo.png";
import { LEVELS, COURSE } from "./data";
import { speak, startSTT, scoreUtterance } from "./speech";

const STORAGE_KEY = "dynamic_english_progress_v3";

function useProgress() {
  const [progress, setProgress] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  });
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);
  return { progress, setProgress };
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 ring-1 ring-inset ring-neutral-200">
      {children}
    </span>
  );
}

function ProgressBar({ value }) {
  return (
    <div className="w-full h-3 bg-neutral-200 rounded-full overflow-hidden">
      <div className="h-full bg-neutral-900" style={{ width: `${value}%` }} />
    </div>
  );
}

function Topbar({ route, setRoute }) {
  return (
    <div className="sticky top-0 z-20 backdrop-blur bg-white/85 border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Dynamic English" className="w-8 h-8 rounded-lg object-cover" />
          <div className="font-semibold">Dynamic English</div>
          <Badge>Prototipo</Badge>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <button className={`px-3 py-1 rounded-lg hover:bg-neutral-100 ${route === "home" ? "font-semibold" : ""}`} onClick={() => setRoute("home")}>
            Inicio
          </button>
          <button className={`px-3 py-1 rounded-lg hover:bg-neutral-100 ${route === "levels" ? "font-semibold" : ""}`} onClick={() => setRoute("levels")}>
            Niveles
          </button>
          <button className={`px-3 py-1 rounded-lg hover:bg-neutral-100 ${route === "flash" ? "font-semibold" : ""}`} onClick={() => setRoute("flash")}>
            Flashcards
          </button>
          <button className={`px-3 py-1 rounded-lg hover:bg-neutral-100 ${route === "chat" ? "font-semibold" : ""}`} onClick={() => setRoute("chat")}>
            Dudas
          </button>
        </div>
      </div>
    </div>
  );
}

function Home({ setRoute, progress }) {
  const pctTotal = useMemo(() => {
    const total = Object.values(COURSE).reduce((acc, arr) => acc + arr.length, 0);
    const done = Object.values(progress).reduce((acc, lvl) => acc + Object.values(lvl).filter(Boolean).length, 0);
    return Math.max(0, Math.min(100, Math.round((done / Math.max(1,total)) * 100)));
  }, [progress]);
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-2">Bienvenido 👋</h1>
      <p className="text-neutral-600 mb-6">Curso general por niveles con micro-lecciones, práctica y chat de dudas. Empieza por tu nivel.</p>
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-neutral-700">Progreso total</span>
          <span className="text-sm font-medium">{pctTotal}%</span>
        </div>
        <ProgressBar value={pctTotal} />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {LEVELS.map((lvl) => (
          <div key={lvl.id} className="rounded-2xl border border-neutral-200 p-4 hover:shadow-sm transition">
            <div className={`h-10 w-10 rounded-xl ${lvl.color} mb-3`} />
            <h3 className="font-semibold mb-2">{lvl.title}</h3>
            <p className="text-sm text-neutral-600 mb-4">{(COURSE[lvl.id]||[]).length} lecciones</p>
            <button className="px-3 py-2 rounded-xl bg-neutral-900 text-white text-sm" onClick={() => setRoute({ name: "level", id: lvl.id })}>
              Entrar
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8 grid md:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-neutral-200 p-4">
          <h4 className="font-semibold mb-1">Repetición espaciada</h4>
          <p className="text-sm text-neutral-600">Tarjetas inteligentes para memorizar vocabulario clave.</p>
          <button className="mt-3 px-3 py-2 rounded-xl ring-1 ring-neutral-300 text-sm" onClick={() => setRoute("flash")}>
            Abrir flashcards
          </button>
        </div>
        <div className="rounded-2xl border border-neutral-200 p-4">
          <h4 className="font-semibold mb-1">Dudas inmediatas</h4>
          <p className="text-sm text-neutral-600">Haz preguntas y recibe explicación al momento.</p>
          <button className="mt-3 px-3 py-2 rounded-xl ring-1 ring-neutral-300 text-sm" onClick={() => setRoute("chat")}>
            Ir al chat
          </button>
        </div>
      </div>
    </div>
  );
}

function LevelView({ levelId, setRoute, progress, setProgress }) {
  const lessons = COURSE[levelId] || [];
  const levelProgress = progress[levelId] || {};
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <button className="text-sm mb-4 underline" onClick={() => setRoute("levels")}>&larr; Volver</button>
      <h2 className="text-xl font-bold mb-4">{LEVELS.find(l=>l.id===levelId)?.title}</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {lessons.map((lsn) => {
          const done = !!levelProgress[lsn.id];
          return (
            <div key={lsn.id} className="rounded-2xl border border-neutral-200 p-4 hover:shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">{lsn.title}</h3>
                <Badge>{done ? "Completada" : "Nueva"}</Badge>
              </div>
              <p className="text-sm text-neutral-600 mb-3">{lsn.grammar}</p>
              <button className="px-3 py-2 rounded-xl bg-neutral-900 text-white text-sm" onClick={() => setRoute({ name: "lesson", levelId, lessonId: lsn.id })}>
                Abrir lección
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SpeakButton({ text }) {
  return (
    <button className="px-2 py-1 text-xs rounded-lg ring-1 ring-neutral-300 hover:bg-neutral-100" onClick={()=>speak(text, 'en-US')}>
      🔊 Escuchar
    </button>
  );
}

function LessonView({ levelId, lessonId, setRoute, progress, setProgress }) {
  const lesson = (COURSE[levelId] || []).find((l) => l.id === lessonId);
  const [answers, setAnswers] = useState({});
  const [said, setSaid] = useState("");
  const [score, setScore] = useState(null);
  if (!lesson) return null;

  const markDone = () => {
    setProgress((p) => ({
      ...p,
      [levelId]: { ...(p[levelId] || {}), [lessonId]: true },
    }));
  };

  const correct = (lesson.practice || []).filter((q, i) => answers[i] === q.a).length;
  const total = (lesson.practice || []).length || 1;
  const scorePct = Math.round((correct / total) * 100);

  const handleSTT = (target) => {
    startSTT({
      lang: 'en-US',
      onResult: (transcript) => {
        const { pct, perWord } = scoreUtterance(target, transcript);
        setSaid(transcript);
        setScore({ pct, perWord, target });
      }
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <button className="text-sm mb-4 underline" onClick={() => setRoute({ name: "level", id: levelId })}>&larr; Volver</button>
      <h2 className="text-xl font-bold mb-1">{lesson.title}</h2>
      <p className="text-sm text-neutral-600 mb-4">Gramática: {lesson.grammar}</p>

      {(lesson.dialog && lesson.dialog.length) ? (
        <section className="mb-6 rounded-2xl border border-neutral-200 p-4">
          <h3 className="font-semibold mb-2">Diálogo</h3>
          <div className="space-y-3">
            {lesson.dialog.map((d, idx) => (
              <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 gap-2 items-start">
                <div className="p-3 rounded-xl bg-neutral-100 text-sm flex items-center justify-between gap-2">
                  <span>{d.en}</span>
                  <SpeakButton text={d.en} />
                </div>
                <div className="p-3 rounded-xl bg-neutral-50 text-sm text-neutral-700">{d.es}</div>
                <div className="col-span-1 sm:col-span-2 flex gap-2 text-xs">
                  <button className="px-2 py-1 rounded-lg ring-1 ring-neutral-300" onClick={()=>handleSTT(d.en)}>🎤 Repetir y evaluar</button>
                </div>
              </div>
            ))}
          </div>
          {score && (
            <div className="mt-3 text-sm">
              <div className="mb-1"><span className="font-medium">Tu transcripción:</span> <span className="text-neutral-700">"{said}"</span></div>
              <div className="mb-1 font-medium">Puntaje pronunciación: {score.pct}%</div>
              <div className="text-xs text-neutral-600">Objetivo: "{score.target}"</div>
            </div>
          )}
          <div className="mt-3 text-xs text-neutral-500">Tip: toca 🔊 para oír y luego 🎤 para practicar.</div>
        </section>
      ) : null}

      <section className="mb-6 rounded-2xl border border-neutral-200 p-4">
        <h3 className="font-semibold mb-2">Práctica rápida</h3>
        {(lesson.practice && lesson.practice.length) ? (
          <div className="space-y-3">
            {lesson.practice.map((q, idx) => (
              <div key={idx}>
                <div className="text-sm mb-2">{q.q}</div>
                <div className="flex gap-2">
                  {q.options.map((op, j) => (
                    <button
                      key={j}
                      className={`px-3 py-2 rounded-xl ring-1 ring-neutral-300 text-sm ${answers[idx]===j?"bg-neutral-900 text-white":""}`}
                      onClick={() => setAnswers((a) => ({ ...a, [idx]: j }))}
                    >
                      {op}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-neutral-500">Próximamente…</div>
        )}
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2 text-sm">
            <span>Puntaje</span>
            <span className="font-medium">{scorePct}%</span>
          </div>
          <ProgressBar value={scorePct} />
        </div>
      </section>

      {(lesson.vocab && lesson.vocab.length) ? (
        <section className="mb-6 rounded-2xl border border-neutral-200 p-4">
          <h3 className="font-semibold mb-2">Vocabulario</h3>
          <div className="grid sm:grid-cols-2 gap-2">
            {lesson.vocab.map((v, i) => (
              <div key={i} className="p-3 rounded-xl bg-neutral-50 text-sm flex items-center justify-between gap-2">
                <span className="font-medium">{v.en}</span>
                <div className="flex items-center gap-2">
                  <span className="text-neutral-600">{v.es}</span>
                  <SpeakButton text={v.en} />
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <div className="flex items-center gap-2">
        <button className="px-4 py-2 rounded-xl bg-neutral-900 text-white text-sm" onClick={() => { markDone(); setRoute({ name: "level", id: levelId }); }}>
          Marcar como completada
        </button>
        <button className="px-4 py-2 rounded-xl ring-1 ring-neutral-300 text-sm" onClick={() => setRoute("flash")}>
          Repasar con flashcards
        </button>
      </div>
    </div>
  );
}

function Flashcards() {
  const cards = useMemo(() => {
    const list = [];
    Object.values(COURSE).forEach((arr) => arr.forEach((l) => (l.vocab||[]).forEach((v) => list.push(v))));
    return list.length ? list : [ { en: "hello", es: "hola" } ];
  }, []);
  const [idx, setIdx] = useState(0);
  const [show, setShow] = useState(false);

  const next = () => { setShow(false); setIdx((i) => (i + 1) % cards.length); };

  return (
    <div className="max-w-md mx-auto px-4 py-8">
      <h2 className="text-xl font-bold mb-4">Flashcards</h2>
      <div className="aspect-[4/3] rounded-3xl border border-neutral-200 grid place-items-center text-2xl font-semibold select-none cursor-pointer" onClick={() => setShow((s) => !s)}>
        {!show ? cards[idx].en : cards[idx].es}
      </div>
      <div className="mt-4 flex items-center justify-between text-sm text-neutral-600">
        <span>{idx + 1} / {cards.length}</span>
        <button className="px-3 py-2 rounded-xl bg-neutral-900 text-white" onClick={next}>Siguiente</button>
      </div>
      <p className="mt-4 text-xs text-neutral-500">Tip: repite en voz alta. La memoria mejora con repetición y pronunciación.</p>
    </div>
  );
}

function ChatDudas() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "system", text: "Pregunta cualquier duda de inglés. Ej: '¿Cuándo uso am/is/are?'" },
  ]);

  const onSend = () => {
    if (!input.trim()) return;
    const userMsg = { role: "user", text: input.trim() };
    const lower = input.trim().toLowerCase();
    let answer = "Buena pregunta. Te explico con ejemplos y una regla simple.";
    if (lower.includes("am") || lower.includes("are") || lower.includes("is")) {
      answer = "Usa 'am' con I, 'is' con he/she/it y 'are' con you/we/they. Ej.: I am ready. You are strong. She is at the gym.";
    } else if (lower.includes("past") || lower.includes("pasado") || lower.includes("did")) {
      answer = "Pasado simple: sujeto + verbo en pasado (o did + verbo base en preguntas). Ej.: I worked / Did you work?";
    } else if (lower.includes("much") || lower.includes("many")) {
      answer = "'Much' para incontables (much water), 'many' para contables (many apples).";
    }
    const botMsg = { role: "assistant", text: answer };
    setMessages((m) => [...m, userMsg, botMsg]);
    setInput("");
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-xl font-bold mb-4">Dudas en tiempo real</h2>
      <div className="rounded-2xl border border-neutral-200 p-4 h-96 overflow-auto bg-neutral-50">
        {messages.map((m, i) => (
          <div key={i} className={`mb-3 ${m.role === "user" ? "text-right" : "text-left"}`}>
            <div className={`inline-block px-3 py-2 rounded-2xl text-sm ${m.role === "user" ? "bg-neutral-900 text-white" : "bg-white border border-neutral-200"}`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex gap-2">
        <input className="flex-1 px-3 py-2 rounded-xl ring-1 ring-neutral-300 text-sm" placeholder="Escribe tu duda…" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e)=>{ if(e.key==='Enter') onSend(); }} />
        <button className="px-4 py-2 rounded-xl bg-neutral-900 text-white text-sm" onClick={onSend}>Enviar</button>
      </div>
      <p className="mt-2 text-xs text-neutral-500">Nota: Próximamente conexión a ChatGPT mediante backend seguro.</p>
    </div>
  );
}

export default function App() {
  const { progress, setProgress } = useProgress();
  const [route, setRoute] = useState("home");

  return (
    <div className="min-h-dvh bg-white text-neutral-900">
      <Topbar route={typeof route === 'string' ? route : route.name} setRoute={setRoute} />
      {typeof route === "string" && route === "home" && <Home setRoute={setRoute} progress={progress} />}
      {typeof route === "string" && route === "levels" && <Home setRoute={setRoute} progress={progress} />}
      {typeof route === "string" && route === "flash" && <Flashcards />}
      {typeof route === "string" && route === "chat" && <ChatDudas />}
      {typeof route === "object" && route.name === "level" && (
        <LevelView levelId={route.id} setRoute={setRoute} progress={progress} setProgress={setProgress} />
      )}
      {typeof route === "object" && route.name === "lesson" && (
        <LessonView levelId={route.levelId} lessonId={route.lessonId} setRoute={setRoute} progress={progress} setProgress={setProgress} />
      )}

      <footer className="mt-10 border-t border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 py-6 text-xs text-neutral-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Dynamic English</span>
          <span>Hecho por Dinamita Apps</span>
        </div>
      </footer>
    </div>
  );
}
