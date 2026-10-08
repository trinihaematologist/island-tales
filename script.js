const stories = {
  papa: {
    title: 'Papa Bois', label: 'Forest guardian · Trinidad & Tobago',
    story: `Deep in the green forest lives Papa Bois, the guardian of wild animals. Stories describe him in different ways, often as part man and part forest creature, with hooves and extraordinary speed. Hunters who are greedy or cruel may find themselves following false tracks while the animals slip safely away.`,
    clue: `Papa Bois turns the forest into something that deserves respect. His tale can be read as a reminder that people share the natural world with other living things.`,
    note: `Traditional descriptions vary. NALIS records him as a protector of forest life and notes that storytellers differ on his appearance.`
  },
  mama: {
    title: 'Mama Dlo', label: 'Water guardian · Trinidad & Tobago and neighbouring traditions',
    story: `Near a quiet river, children might hear a splash, a rustle, or the crack of something like a whip. In old stories, that could mean Mama Dlo is nearby. She is often described as a woman joined to a great snake, guarding rivers, lagoons and the animals that depend on them.`,
    clue: `Long before “environmental protection” was a school topic, stories could teach people to treat water and wildlife carefully.`,
    note: `Her name is also written Mama D'leau, Mama Dglo or Maman de l'eau. Details differ between storytellers.`
  },
  anansi: {
    title: 'Anansi', label: 'Trickster & storyteller · West African roots, Caribbean journeys',
    story: `Anansi is small, clever and almost always thinking. In one famous tradition, the spider uses wit to win stories from the Sky God. Enslaved Africans carried Anansi tales across the Atlantic, and generations of Caribbean storytellers reshaped them in their own languages and landscapes.`,
    clue: `Anansi often wins with ideas rather than strength. His stories can celebrate cleverness and survival, but they also ask whether being clever is the same thing as being wise.`,
    note: `UNESCO links Anansi to Akan traditions in West Africa and describes how the stories travelled through oral tradition to the Caribbean.`
  },
  douen: {
    title: 'Douens', label: 'Forest mystery · Trinidad & Tobago',
    story: `On moonlit nights, old stories warn children not to wander off when they hear strange calls from the forest. Douens are mysterious childlike spirits, usually described with backwards-facing feet and faces hidden beneath broad hats. Their footprints can make it hard to know which way they went.`,
    clue: `For children, the old warning is easy to understand: do not wander away alone, especially after dark.`,
    note: `Some traditional versions explain the Douens in religious terms and can be much darker. This site keeps the focus on the cultural warning contained in the tale.`
  },
  soucouyant: {
    title: 'Soucouyant', label: 'Night legend · Trinidad & Tobago and the wider Caribbean',
    story: `When a mysterious light streaks across the night, some Caribbean storytellers might call it a Soucouyant. Traditional tales describe an older woman who changes form at night and travels as a ball of fire. People created all sorts of clever ways to recognise or stop her before sunrise.`,
    clue: `The Soucouyant belongs to a family of Caribbean night stories about hidden danger, transformation and the things people fear after dark.`,
    note: `Names, spellings and details vary across the Caribbean. Traditional versions include frightening material that has been softened here for younger readers.`
  },
  diablesse: {
    title: 'La Diablesse', label: 'Warning tale · Trinidad & Tobago and French-Creole Caribbean traditions',
    story: `A beautifully dressed stranger appears on a lonely road at night. Everything seems perfect, until you notice that one foot is not a human foot at all. La Diablesse stories warn that appearances can fool us and that following a stranger into an unfamiliar place can be dangerous.`,
    clue: `This is a classic warning tale: notice what others miss, do not be carried away by appearances, and be careful where you go.`,
    note: `NALIS describes several versions of La Diablesse. Traditional stories are darker than this child-friendly adaptation.`
  }
};

const modal = document.getElementById('storyModal');
const modalContent = document.getElementById('storyModalContent');
document.querySelectorAll('[data-story]').forEach(card => card.addEventListener('click', () => {
  const s = stories[card.dataset.story];
  modalContent.innerHTML = `<div class="modal-hero"><span class="tag">${s.label}</span><h2>${s.title}</h2></div><div class="modal-body"><p>${s.story}</p><div class="culture-clue"><strong>Culture clue</strong>${s.clue}</div><p class="origin-note">${s.note}</p></div>`;
  modal.showModal();
}));
document.querySelector('.close-modal').addEventListener('click',()=>modal.close());
modal.addEventListener('click',e=>{if(e.target===modal)modal.close()});

const mapText = {
  anansi:['Anansi stories travelled far','Anansi has roots in Akan-speaking West Africa. Through oral tradition, his stories crossed the Atlantic and became part of Caribbean storytelling, changing as communities retold them.'],
  tt:['A rich Trinidad & Tobago tradition','Papa Bois, Mama Dlo, Douens and La Diablesse are among the best-known figures recorded in Trinidad and Tobago heritage collections.'],
  east:['Names change from island to island','Soucouyant-type stories appear in multiple Caribbean traditions. Spellings, powers and details differ, which is exactly what we expect from living oral folklore.'],
  tobago:['Gang Gang Sarah belongs to Tobago','One Tobago tradition tells of an African woman called Gang Gang Sarah who flew to the island, later discovering she could no longer fly home after eating salt.']
};
document.querySelectorAll('[data-map]').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('[data-map]').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
  const [h,p]=mapText[btn.dataset.map];document.getElementById('mapDetail').innerHTML=`<span class="mini-label">Story trail</span><h3>${h}</h3><p>${p}</p>`;
}));

const prompts=[
  'A hummingbird finds a mysterious golden key beside a silk cotton tree. What happens next?',
  'A crab discovers that the moon has fallen into a mangrove pool. Who does it ask for help?',
  'A child hears a drumbeat coming from an empty cocoa field just before sunset. What is making the sound?',
  'Anansi promises he can catch the wind in a calabash. How does he try to do it?',
  'A river guardian gives you one day to make the stream clean again. What is your plan?'
];
let promptIndex=0;document.getElementById('newPrompt').addEventListener('click',()=>{promptIndex=(promptIndex+1)%prompts.length;document.getElementById('storyPrompt').textContent=prompts[promptIndex]});

const quiz=[
 {q:'Where would you most like to explore?',a:[['A deep green forest','papa'],['A sparkling river','mama'],['A moonlit village','anansi'],['A mystery trail','douen']]},
 {q:'Which skill sounds most like you?',a:[['Protecting others','papa'],['Caring for nature','mama'],['Solving puzzles','anansi'],['Spotting hidden clues','douen']]},
 {q:'Pick a story ingredient.',a:[['Animals','papa'],['Water and magic','mama'],['Tricks and jokes','anansi'],['Secrets and footprints','douen']]}
];
const resultText={papa:['Papa Bois','You are protective, observant and happiest when the world around you is treated with care.'],mama:['Mama Dlo','You notice how everything is connected and you are quick to defend the places and creatures you care about.'],anansi:['Anansi','You lead with curiosity and clever ideas. You probably enjoy finding an unexpected way around a problem.'],douen:['The Moonlit Explorer','You are drawn to mysteries, clues and stories that make you wonder what might be hiding just out of sight.']};
let qIndex=0,scores={papa:0,mama:0,anansi:0,douen:0};
const quizApp=document.getElementById('quizApp');
function renderQuiz(){
 if(qIndex>=quiz.length){const best=Object.entries(scores).sort((a,b)=>b[1]-a[1])[0][0];const r=resultText[best];quizApp.innerHTML=`<div class="quiz-result"><span class="mini-label">Your folklore guide</span><h3>${r[0]}</h3><p>${r[1]}</p><button class="button primary" id="restartQuiz">Play again</button></div>`;document.getElementById('restartQuiz').onclick=()=>{qIndex=0;scores={papa:0,mama:0,anansi:0,douen:0};renderQuiz()};return}
 const item=quiz[qIndex];quizApp.innerHTML=`<div class="progress"><span style="width:${((qIndex)/quiz.length)*100}%"></span></div><p class="question">${item.q}</p><div class="answers">${item.a.map(([t,k])=>`<button class="answer" data-key="${k}">${t}</button>`).join('')}</div>`;quizApp.querySelectorAll('.answer').forEach(b=>b.onclick=()=>{scores[b.dataset.key]++;qIndex++;renderQuiz()});
}
renderQuiz();

document.getElementById('year').textContent=new Date().getFullYear();

// Accessible mobile navigation.
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation menu');
  mainNav.classList.remove('is-open');
}
menuToggle.addEventListener('click', () => {
  const opening = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(opening));
  menuToggle.setAttribute('aria-label', opening ? 'Close navigation menu' : 'Open navigation menu');
  mainNav.classList.toggle('is-open', opening);
});
mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });

// Original branching mini-adventure. No accounts, tracking or data collection.
const adventureGame = document.getElementById('adventureGame');
const adventureScenes = {
  entrance: {chapter:'1 of 5 · The forest edge',title:'A whisper in the leaves',text:'At dusk, you hear a frightened agouti rustling beside a forest path. Farther away, a branch snaps. Which way will you go?',choices:[['Help the agouti','agouti'],['Follow the snapping branch','tracks']]},
  agouti:{chapter:'2 of 5 · A small friend',title:'The agouti speaks with its feet',text:'You gently move aside a fallen branch. The agouti scampers towards a stream, then stops as though waiting for you.',choices:[['Follow at a distance','stream'],['Look for signs of danger','tracks']]},
  tracks:{chapter:'2 of 5 · Strange footprints',title:'The trail splits',text:'You find hoofprints beside human footprints. A hunter has left a tangled net between two trees. No animal is caught, but the net could hurt one.',choices:[['Leave the net and find an adult','stream'],['Look for the forest guardian','guardian']]},
  stream:{chapter:'3 of 5 · The hidden stream',title:'Something is wrong with the water',text:'At the stream, you spot litter caught in the roots. A deep voice calls from the trees: “What do you see?”',choices:[['Tell the voice about the litter','guardian'],['Ask who is speaking','guardian']]},
  guardian:{chapter:'4 of 5 · The guardian',title:'Papa Bois appears',text:'From the shade steps Papa Bois, the forest guardian. In many tellings he is part man and part animal, with hooves and great speed. “The forest remembers how you treat it,” he says.',choices:[['Promise to tell your community','ending'],['Ask how to help the animals','ending']]},
  ending:{chapter:'5 of 5 · A promise',title:'The forest has a new friend',text:'Papa Bois nods. “Respect begins with noticing.” You return home ready to tell others about the litter and the abandoned net, so the community can clear them safely. Behind you, the forest grows quiet again.',choices:[]}
};
const adventureArtwork = {
 entrance: ['scene-1.webp','Two children discover mysterious tracks in a moonlit forest'],
 agouti: ['scene-2.webp','Children encounter an agouti in the rainforest'],
 tracks: ['scene-1.webp','Mysterious footprints on a forest path'],
 stream: ['scene-3.webp','A hidden forest stream under moonlight'],
 guardian: ['scene-4.webp','Papa Bois meets two children in the forest'],
 ending: ['scene-5.webp','Papa Bois shares a lesson about protecting the forest']
};
function renderAdventure(sceneKey){
 const scene=adventureScenes[sceneKey];
 const options=scene.choices.map(([label,next])=>'<button type="button" class="adventure-choice" data-next="'+next+'">'+label+' →</button>').join('');
 const [art, description] = adventureArtwork[sceneKey];
 adventureGame.innerHTML='<div class="adventure-visual"><img src="'+art+'" alt="'+description+'" decoding="async"></div><div class="adventure-chapter">'+scene.chapter+'</div><h3 tabindex="-1">'+scene.title+'</h3><p>'+scene.text+'</p><div class="adventure-choices">'+options+'</div>'+(sceneKey==='ending'?'<button type="button" class="button primary" id="replayAdventure">Play again ↻</button>':'')+'<p class="adventure-culture">Folklore note: Papa Bois is a traditional forest guardian. This adventure and its dialogue were created for Island Tales.</p>';
 adventureGame.querySelectorAll('[data-next]').forEach(button=>button.addEventListener('click',()=>renderAdventure(button.dataset.next)));
 const replay=document.getElementById('replayAdventure');if(replay)replay.addEventListener('click',()=>renderAdventure('entrance'));
 adventureGame.querySelector('h3').focus({preventScroll:true});
}
document.getElementById('startAdventure').addEventListener('click',()=>{
 adventureGame.hidden=false;renderAdventure('entrance');adventureGame.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'center'});
});
