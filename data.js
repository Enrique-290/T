
export const LEVELS = [
  { id: "A1", title: "Básico A1", color: "bg-rose-600" },
  { id: "A2", title: "Básico A2", color: "bg-rose-700" },
  { id: "B1", title: "Intermedio B1", color: "bg-sky-600" },
  { id: "B2", title: "Intermedio B2", color: "bg-sky-700" },
  { id: "C1", title: "Avanzado C1", color: "bg-neutral-900" },
];

export const COURSE = {
  A1: [
    { id:"a1l1",  title:"Greetings & Introductions", grammar:"to be (am/is/are)", dialog:[
      { en:"Hello! I am Ana.", es:"¡Hola! Yo soy Ana." },
      { en:"Nice to meet you!", es:"¡Mucho gusto!" }
    ], practice:[
      { q:"I ___ Ana.", options:["am","are"], a:0 },
      { q:"You ___ my friend.", options:["am","are"], a:1 }
    ], vocab:[{en:"hello",es:"hola"},{en:"nice to meet you",es:"mucho gusto"},{en:"I am",es:"yo soy/estoy"}] },
    { id:"a1l2",  title:"Numbers & Prices", grammar:"singular/plural", dialog:[
      { en:"How much is it?", es:"¿Cuánto cuesta?" },
      { en:"It is fifty pesos.", es:"Cuesta cincuenta pesos." }
    ], practice:[
      { q:"It ___ 20 pesos.", options:["is","are"], a:0 },
      { q:"Two ___ (apple) →", options:["apples","applees"], a:0 }
    ], vocab:[{en:"price",es:"precio"},{en:"how much?",es:"¿cuánto?"}] },
    { id:"a1l3",  title:"Daily Routine", grammar:"present simple", dialog:[
      { en:"I wake up at seven.", es:"Me despierto a las siete." },
      { en:"He works from nine to five.", es:"Él trabaja de 9 a 5." }
    ], practice:[
      { q:"She ___ (work) on Monday.", options:["works","work"], a:0 },
      { q:"I ___ (go) to school.", options:["go","goes"], a:0 }
    ], vocab:[{en:"work",es:"trabajar"},{en:"schedule",es:"horario"}] },
    { id:"a1l4", title:"Articles a/an/the", grammar:"a/an/the", dialog:[
      { en:"I have a pen.", es:"Tengo una pluma." },
      { en:"The pen is blue.", es:"La pluma es azul." }
    ], practice:[
      { q:"I need ___ umbrella.", options:["an","a"], a:0 },
      { q:"___ sun is bright.", options:["The","A"], a:0 }
    ], vocab:[{en:"a",es:"un/una"},{en:"an",es:"un/una (vocal)"},{en:"the",es:"el/la"}] },
    { id:"a1l5", title:"There is / There are", grammar:"existence", dialog:[
      { en:"There is a park near here.", es:"Hay un parque cerca." },
      { en:"There are two banks on this street.", es:"Hay dos bancos en esta calle." }
    ], practice:[
      { q:"___ a problem.", options:["There is","There are"], a:0 },
      { q:"___ many options.", options:["There is","There are"], a:1 }
    ], vocab:[{en:"near",es:"cerca"},{en:"street",es:"calle"}] },
    { id:"a1l6", title:"This/That/These/Those", grammar:"demonstratives", dialog:[
      { en:"This book is new.", es:"Este libro es nuevo." },
      { en:"Those shoes are expensive.", es:"Esos zapatos son caros." }
    ], practice:[
      { q:"___ is my friend (near).", options:["This","That"], a:0 },
      { q:"I want ___ shoes (far).", options:["these","those"], a:1 }
    ], vocab:[{en:"these",es:"estos"},{en:"those",es:"esos"}] },
    { id:"a1l7", title:"Basic Prepositions", grammar:"in/on/at", dialog:[
      { en:"The class is at 6 pm.", es:"La clase es a las 6 pm." },
      { en:"My phone is on the table.", es:"Mi teléfono está sobre la mesa." }
    ], practice:[
      { q:"We meet ___ Monday.", options:["on","in"], a:0 },
      { q:"I live ___ Mexico.", options:["in","at"], a:0 }
    ], vocab:[{en:"on",es:"en (superficie)"},{en:"at",es:"a/en (hora/lugar)"}] },
    { id:"a1l8", title:"Like/Want/Need", grammar:"common verbs", dialog:[
      { en:"I like coffee.", es:"Me gusta el café." },
      { en:"I need a new phone.", es:"Necesito un teléfono nuevo." }
    ], practice:[
      { q:"I ___ (want) water.", options:["want","wants"], a:0 },
      { q:"She ___ (like) tea.", options:["likes","like"], a:0 }
    ], vocab:[{en:"want",es:"querer"},{en:"need",es:"necesitar"}] },
    { id:"a1l9", title:"Can / Can't", grammar:"ability", dialog:[
      { en:"I can help you.", es:"Puedo ayudarte." },
      { en:"She can't come today.", es:"Ella no puede venir hoy." }
    ], practice:[
      { q:"___ you speak English?", options:["Can","Do"], a:0 },
      { q:"I ___ swim.", options:["can","can't"], a:0 }
    ], vocab:[{en:"can",es:"poder"},{en:"help",es:"ayudar"}] },
    { id:"a1l10", title:"Weather & Clothes", grammar:"vocabulary", dialog:[
      { en:"It is hot today.", es:"Hace calor hoy." },
      { en:"I wear a jacket.", es:"Llevo una chamarra." }
    ], practice:[
      { q:"It ___ cold.", options:["is","are"], a:0 },
      { q:"He wears ___ T-shirt.", options:["a","an"], a:0 }
    ], vocab:[{en:"jacket",es:"chamarra"},{en:"rainy",es:"lluvioso"}] },
    { id:"a1l11", title:"Food & Ordering", grammar:"polite requests", dialog:[
      { en:"I'd like a coffee, please.", es:"Quisiera un café, por favor." },
      { en:"To go, please.", es:"Para llevar, por favor." }
    ], practice:[
      { q:"I would ___ a tea.", options:["like","likes"], a:0 },
      { q:"___, please.", options:["To go","To going"], a:0 }
    ], vocab:[{en:"to go",es:"para llevar"},{en:"bill/check",es:"cuenta"}] },
    { id:"a1l12", title:"Directions", grammar:"imperatives", dialog:[
      { en:"Turn left and go straight.", es:"Gira a la izquierda y sigue derecho." },
      { en:"It's next to the station.", es:"Está junto a la estación." }
    ], practice:[
      { q:"___ right at the corner.", options:["Turn","Turns"], a:0 },
      { q:"Go ___.", options:["straight","strait"], a:0 }
    ], vocab:[{en:"turn",es:"girar"},{en:"straight",es:"derecho"}] },
  ],
  A2: [
    { id:"a2l1", title:"Past Simple I", grammar:"did / -ed", dialog:[
      { en:"I visited my grandparents last weekend.", es:"Visité a mis abuelos el fin de semana pasado." },
      { en:"Did you travel to the beach?", es:"¿Viajaste a la playa?" }
    ], practice:[
      { q:"She ___ (watch) a movie yesterday.", options:["watched","watch"], a:0 },
      { q:"___ you go to school?", options:["Did","Do"], a:0 }
    ], vocab:[{en:"yesterday",es:"ayer"},{en:"last weekend",es:"fin de semana pasado"}] },
    { id:"a2l2", title:"Past Simple II (irreg.)", grammar:"went, saw, had…", dialog:[
      { en:"We went to a concert.", es:"Fuimos a un concierto." },
      { en:"He had dinner at home.", es:"Cenó en casa." }
    ], practice:[
      { q:"They ___ (go) to the park.", options:["went","goed"], a:0 },
      { q:"I ___ (see) my teacher.", options:["saw","seed"], a:0 }
    ], vocab:[{en:"went",es:"fui/fue/fueron"},{en:"saw",es:"vi/vio"}] },
    { id:"a2l3", title:"Comparatives", grammar:"-er / more + adj.", dialog:[
      { en:"This book is cheaper than that one.", es:"Este libro es más barato que ese." },
      { en:"English is more interesting for me.", es:"El inglés es más interesante para mí." }
    ], practice:[
      { q:"Tom is ___ (tall) than Ana.", options:["taller","more tall"], a:0 },
      { q:"This task is ___ (interesting).", options:["more interesting","interestinger"], a:0 }
    ], vocab:[{en:"than",es:"que"},{en:"cheaper",es:"más barato"}] },
    { id:"a2l4", title:"Superlatives", grammar:"-est / most", dialog:[
      { en:"Winter is the coldest season.", es:"El invierno es la estación más fría." },
      { en:"He is the most responsible student.", es:"Él es el estudiante más responsable." }
    ], practice:[
      { q:"This is the ___ (good) option.", options:["best","goodest"], a:0 },
      { q:"She is the ___ (smart).", options:["smartest","most smart"], a:0 }
    ], vocab:[{en:"the best",es:"el/la mejor"},{en:"the most",es:"el/la más"}] },
    { id:"a2l5", title:"Going to (plans)", grammar:"be going to", dialog:[
      { en:"I am going to study tonight.", es:"Voy a estudiar esta noche." },
      { en:"Are you going to visit your parents?", es:"¿Vas a visitar a tus padres?" }
    ], practice:[
      { q:"They ___ (going to) travel tomorrow.", options:["are","is"], a:0 },
      { q:"I ___ (going to) cook pasta.", options:["am","are"], a:0 }
    ], vocab:[{en:"plan",es:"plan"},{en:"tonight",es:"esta noche"}] },
    { id:"a2l6", title:"Will (predictions)", grammar:"will + verb", dialog:[
      { en:"It will rain tomorrow.", es:"Lloverá mañana." },
      { en:"I think you will like this movie.", es:"Creo que te gustará esta película." }
    ], practice:[
      { q:"We ___ (will) start soon.", options:["will","won't"], a:0 },
      { q:"I think it ___ (will) be easy.", options:["will","won't"], a:0 }
    ], vocab:[{en:"will",es:"futuro"},{en:"I think",es:"yo creo"}] },
  ],
  B1: [
    { id:"b1l1", title:"First Conditional", grammar:"If + present, will", dialog:[
      { en:"If I study, I will pass the exam.", es:"Si estudio, aprobaré el examen." },
      { en:"If it rains, we will stay at home.", es:"Si llueve, nos quedaremos en casa." }
    ], practice:[
      { q:"If she trains, she ___ (will) improve.", options:["will","won't"], a:0 },
      { q:"If you don't sleep, you ___ (will) be tired.", options:["will","won't"], a:0 }
    ], vocab:[{en:"if",es:"si"},{en:"pass",es:"aprobar"}] },
    { id:"b1l2", title:"Second Conditional (intro)", grammar:"If + past, would", dialog:[
      { en:"If I had more time, I would travel.", es:"Si tuviera más tiempo, viajaría." },
      { en:"Would you help me if I asked?", es:"¿Me ayudarías si te lo pidiera?" }
    ], practice:[
      { q:"If he studied, he ___ (would) get better grades.", options:["would","will"], a:0 },
      { q:"She ___ (would) buy a car if she had money.", options:["would","will"], a:0 }
    ], vocab:[{en:"would",es:"-ría"},{en:"had",es:"tuviera"}] },
    { id:"b1l3", title:"Reported Speech I", grammar:"said/told + backshift", dialog:[
      { en:"He said he was tired.", es:"Él dijo que estaba cansado." },
      { en:"She told me she would call.", es:"Ella me dijo que llamaría." }
    ], practice:[
      { q:"They said they ___ (be) ready.", options:["were","are"], a:0 },
      { q:"She told me she ___ (call).", options:["would call","will call"], a:0 }
    ], vocab:[{en:"said",es:"dijo"},{en:"told",es:"dijo a"}] },
    { id:"b1l4", title:"Phrasal Verbs I", grammar:"take off / look after / put on", dialog:[
      { en:"Please take off your shoes.", es:"Por favor quítate los zapatos." },
      { en:"I will look after the baby.", es:"Cuidaré al bebé." }
    ], practice:[
      { q:"She ___ (put on) her jacket.", options:["put on","puts in"], a:0 },
      { q:"He will ___ (look after) his dog.", options:["look after","look for"], a:0 }
    ], vocab:[{en:"take off",es:"quitarse"},{en:"look after",es:"cuidar"}] },
    { id:"b1l5", title:"Relative Clauses", grammar:"who / which / that", dialog:[
      { en:"The person who called is my boss.", es:"La persona que llamó es mi jefe." },
      { en:"This is the book that I like.", es:"Este es el libro que me gusta." }
    ], practice:[
      { q:"The car ___ is red is mine.", options:["that","who"], a:0 },
      { q:"The woman ___ works here is kind.", options:["who","which"], a:0 }
    ], vocab:[{en:"who",es:"que (persona)"},{en:"which",es:"que (cosa)"}] },
    { id:"b1l6", title:"Modal Verbs (advice)", grammar:"should / shouldn't", dialog:[
      { en:"You should drink more water.", es:"Deberías beber más agua." },
      { en:"You shouldn't skip breakfast.", es:"No deberías saltarte el desayuno." }
    ], practice:[
      { q:"You ___ (should) study every day.", options:["should","shouldn't"], a:0 },
      { q:"You ___ (shouldn't) be late.", options:["shouldn't","should"], a:0 }
    ], vocab:[{en:"should",es:"deberías"},{en:"advice",es:"consejo"}] },
  ],
  B2: [
    { id:"b2l1", title:"Passive Voice", grammar:"be + past participle", dialog:[], practice:[], vocab:[] },
    { id:"b2l2", title:"Linking Words", grammar:"however, therefore", dialog:[], practice:[], vocab:[] },
    { id:"b2l3", title:"Modal Nuance", grammar:"may, might, must", dialog:[], practice:[], vocab:[] },
  ],
  C1: [
    { id:"c1l1", title:"Tone & Register", grammar:"formal vs informal", dialog:[], practice:[], vocab:[] },
    { id:"c1l2", title:"Collocations", grammar:"natural phrases", dialog:[], practice:[], vocab:[] },
    { id:"c1l3", title:"Negotiation", grammar:"hedging", dialog:[], practice:[], vocab:[] },
  ]
};
