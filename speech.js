export function speak(text, lang='en-US') {
  if (!('speechSynthesis' in window)) return alert('Tu navegador no soporta TTS.');
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang;
  window.speechSynthesis.speak(u);
}

export function startSTT({lang='en-US', onResult, onError}={}) {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) { alert('Tu navegador no soporta reconocimiento de voz.'); return () => {}; }
  const rec = new SR();
  rec.lang = lang; rec.interimResults = false; rec.maxAlternatives = 1;
  rec.onresult = (e) => onResult && onResult(e.results[0][0].transcript);
  rec.onerror = (e) => onError && onError(e);
  rec.start();
  return () => rec.abort();
}

export function scoreUtterance(target, said) {
  const t = target.toLowerCase().replace(/[^a-z'\s]/g,'').split(/\s+/).filter(Boolean);
  const s = said.toLowerCase().replace(/[^a-z'\s]/g,'').split(/\s+/).filter(Boolean);
  let correct = 0;
  const perWord = t.map((w,i)=>{ const ok = s[i] && s[i] === w; if (ok) correct++; return {word:w, ok}; });
  const pct = Math.round((correct / Math.max(1,t.length)) * 100);
  return { pct, perWord, said };
}
