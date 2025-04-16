let lastGeneratedText = '';
let lastLayout = 'classic';

function capitalizeWords(str) {
  return str.trim().split(' ').map(word => {
    if (word.length === 0) return '';
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
}

function sanitize(str) {
  return str ? str.trim() : '';
}

const layoutSelect = document.getElementById('layoutSelect');
const resultContainer = document.getElementById('result'); // Ensure result container is defined

document.getElementById('aboutForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const get = (id) => sanitize(document.getElementById(id).value);

  const name = capitalizeWords(get('name'));
  const age = get('age');
  const hobby = capitalizeWords(get('hobby'));
  const color = capitalizeWords(get('color'));
  const food = capitalizeWords(get('food'));
  const goal = capitalizeWords(get('goal'));
  const motivation = capitalizeWords(get('motivation'));
  const fear = capitalizeWords(get('fear'));
  const dreamPlace = capitalizeWords(get('dreamPlace'));
  const dreamJob = capitalizeWords(get('dreamJob'));
  const successMeaning = capitalizeWords(get('successMeaning'));
  const favoriteQuote = get('favoriteQuote');
  const accomplishment = capitalizeWords(get('accomplishment'));
  const additionalInfo = get('additionalInfo');

  if (!name || !age || !hobby) {
    alert("Please fill in at least your name, age, and hobby.");
    return;
  }

  const layout = layoutSelect.value;
  lastLayout = layout;

  let intro = '';
  let dream = '';
  let belief = '';
  let closing = '';

  // Variation based on layout
  if (layout === 'classic') {
    intro = `Hi, I’m ${name}! I'm ${age} years old and I absolutely love ${hobby}. It's more than a hobby — it's a part of who I am. I find peace and joy in it no matter how busy life gets. `;
    if (color || food) {
      intro += `My favorite color is ${color || 'blue'}, and I can never resist a good plate of ${food || 'something comforting'}.`;
    }

    dream += `\n\nOne of my biggest goals in life is to ${goal || 'do something meaningful that touches lives'}. `;
    if (motivation) dream += `What keeps me going is ${motivation}. `;
    if (dreamJob) dream += `I've always dreamed of being a ${dreamJob}, where I could truly do what I love. `;
    if (dreamPlace) dream += `If I could go anywhere, I’d choose ${dreamPlace} without hesitation.`;

    belief += `\n\nTo me, success means ${successMeaning || 'finding happiness and staying true to myself'}. `;
    if (fear) belief += `One thing I constantly work on overcoming is ${fear}. `;
    if (favoriteQuote) belief += `A quote I live by is: “${favoriteQuote}.”`;

    closing += `\n\nOne thing I’m especially proud of is ${accomplishment || 'how far I’ve come'}. `;
    if (additionalInfo) closing += `${capitalizeWords(additionalInfo)} `;
    closing += `Thanks for reading a little about me!`;

  } else if (layout === 'boldHeadings') {
    intro = `${name} here — ${age} years old, and someone who’s deeply passionate about ${hobby}. It’s one of the few things that’s stuck with me through every stage of life. `;
    if (color || food) {
      intro += `You’ll usually find me surrounded by things in ${color || 'a calm shade'}, or reaching for a plate of ${food || 'whatever brings comfort'}.`;
    }

    dream += `\n\nAmbition fuels me. I aim to ${goal || 'make a meaningful impact'}, and ${motivation ? motivation : 'an inner drive to grow'} keeps that fire burning. `;
    if (dreamJob) dream += `Becoming a ${dreamJob} isn’t just a career path — it’s a calling. `;
    if (dreamPlace) dream += `And if I could teleport anywhere, it would be ${dreamPlace}, hands down.`;

    belief += `\n\nSuccess, for me, isn’t flashy. It’s about ${successMeaning || 'integrity and authenticity'}. `;
    if (fear) belief += `My greatest fear? Probably ${fear}. It’s something I’m learning to face more openly. `;
    if (favoriteQuote) belief += `One quote that speaks volumes to me: “${favoriteQuote}.”`;

    closing += `\n\nIf I had to name an accomplishment I value most, it’s ${accomplishment || 'my growth through struggle'}. `;
    if (additionalInfo) closing += `${capitalizeWords(additionalInfo)} `;
    closing += `Here’s to whatever comes next.`;

  } else if (layout === 'quoteStyle') {
    intro = `I am ${name}, a ${age}-year-old with a soul drawn to ${hobby}. It’s not just something I do — it’s how I express who I am when words fall short. `;
    if (color || food) {
      intro += `I carry the calm of ${color || 'muted skies'} and savor the comfort of ${food || 'familiar meals'}.`;
    }

    dream += `\n\nI dream of ${goal || 'becoming someone who leaves a meaningful mark on others'}. `;
    if (motivation) dream += `My motivation lies in ${motivation}, a force that never fades. `;
    if (dreamJob) dream += `My heart gravitates toward becoming a ${dreamJob}. `;
    if (dreamPlace) dream += `In quiet moments, I picture myself in ${dreamPlace}, soaking in its beauty.`;

    belief += `\n\nSuccess is ${successMeaning || 'living in alignment with what matters most'}. `;
    if (fear) belief += `Though I fear ${fear}, I face it gently, daily. `;
    if (favoriteQuote) belief += `One line that echoes in me is: “${favoriteQuote}.”`;

    closing += `\n\nI take pride in ${accomplishment || 'my resilience and faith'}. `;
    if (additionalInfo) closing += `${capitalizeWords(additionalInfo)} `;
    closing += `That’s the essence of me, and still — I am becoming.`;
  }

  const finalOutput = `${intro}${dream}${belief}${closing}`;
  lastGeneratedText = finalOutput;
  renderOutput(finalOutput);
});

function renderOutput(text) {
  const paragraphs = text.split('\n').filter(p => p.trim());

  let html = '';

  switch (lastLayout) {
    case 'classic':
      html = paragraphs.map(p => `<p>${p}</p>`).join('');
      break;

    case 'boldHeadings':
      html = `
        <h3>Introduction</h3><p>${paragraphs[0] || ''}</p>
        <h3>Dreams & Ambitions</h3><p>${paragraphs[1] || ''}</p>
        <h3>Beliefs</h3><p>${paragraphs[2] || ''}</p>
        <h3>Closing Thoughts</h3><p>${paragraphs[3] || ''}</p>
      `;
      break;

    case 'quoteStyle':
      html = paragraphs.map(p => `<blockquote>"${p}"</blockquote>`).join('');
      break;

    default:
      html = paragraphs.map(p => `<p>${p}</p>`).join('');
  }

  resultContainer.innerHTML = html;
}

layoutSelect.addEventListener('change', () => {
  if (lastGeneratedText) {
    renderOutput(lastGeneratedText); // Re-render with updated layout
  }
});
