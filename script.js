const projects = [
  { slug: 'vessel-detection', image: 'images/vessel_detection.png', title: 'Vessel Detection', type: 'Research project', tags: ['SAR', 'Object Detection'], description: 'Detecting vessels in Sentinel-1 SAR imagery with oriented bounding boxes and an interactive map.', domain: 'Maritime · Defence', platform: 'Custom WebGIS', status: 'Complete', hue: 'linear-gradient(135deg,#1c2932,#090e13 55%,#234038)', label: '#5145a6' },
  { slug: 'oil-spill', image: 'images/oil_spill.png', title: 'Oil Spill Segmentation', type: 'Research project', tags: ['SAR', 'Segmentation', 'Oil Spill'], description: 'Oil spill detection and mapping from SAR imagery using deep-learning segmentation.', domain: 'Marine environment', platform: 'Analysis workflow', status: 'Complete', hue: 'linear-gradient(135deg,#082c43,#17607a 48%,#91c4d5)', label: '#5145a6' },
  { slug: 'urban-heat', image: 'images/urban_heat.png', title: 'Urban Heat Island Analytics', type: 'Research project', tags: ['Google Earth Engine', 'LST', 'Urban Heat Island'], description: 'Land-surface temperature analysis and urban heat island mapping over time.', domain: 'Climate · Cities', platform: 'Google Earth Engine', status: 'Complete', hue: 'linear-gradient(135deg,#7f0707,#ef4c12 48%,#d9d93f)', label: '#5145a6' },
  { slug: 'crop-classification', image: 'images/crop_condition.png', title: 'Crop Classification', type: 'Research project', tags: ['SAR', 'Sentinel-1', 'NISAR', 'Classification'], description: 'Seasonal Sentinel-1 and NISAR SAR classification of wheat, mustard and gram fields, with field-survey ground reference.', domain: 'Agriculture', platform: 'Custom WebGIS', status: 'Live', hue: 'linear-gradient(135deg,#0f2a12,#3f7d2e 48%,#c9e6a0)', label: '#5145a6' }
];

const grid = document.querySelector('#projectGrid');
grid.innerHTML = projects.map((p, i) => `<article class="project-card" data-project="${i}" tabindex="0" role="link" aria-label="View ${p.title} project"><div class="project-thumb" style="--thumb-bg:${p.hue};--label:${p.label}">${p.image ? `<img src="${p.image}" alt="${p.title} thumbnail">` : ''}</div><h3>${p.title}</h3><div class="tags">${p.tags.slice(0,3).join(' · ')}</div><p>${p.description}</p><button type="button">View Project <b>→</b></button></article>`).join('');
function viewProject(card) {
  location.href = `projects/${projects[card.dataset.project].slug}/index.html`;
}
grid.addEventListener('click', e => {
  const card = e.target.closest('.project-card[data-project]');
  if (card) viewProject(card);
});
grid.addEventListener('keydown', e => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('.project-card[data-project]')) {
    e.preventDefault();
    viewProject(e.target);
  }
});
const menu = document.querySelector('.menu-toggle'); const nav = document.querySelector('.nav-links');
menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', open); });
nav.addEventListener('click', () => nav.classList.remove('open'));
document.querySelectorAll('.skill-columns span').forEach(skill => {
  skill.textContent = skill.textContent.replace(/^[◎◉⌁◆◈◇◌▣]\s*/, '');
});
