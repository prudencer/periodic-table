// Element Info Popup
/*document.querySelectorAll('.element').forEach(el => {
  el.addEventListener('click', () => {
    const symbol = el.textContent;
    alert(`Element clicked: ${symbol}`);
  });
});*/

const elementDetails = {
  H: { name: 'Hydrogen', description: 'Lightest element; essential for water and organic molecules.' },
  He: { name: 'Helium', description: 'Noble gas used in balloons and cooling systems.' },
  Li: { name: 'Lithium', description: 'Soft metal used in batteries.' },
  Be: { name: 'Beryllium', description: 'Rare metal used in aerospace.' },
  B: { name: 'Boron', description: 'Used in detergents and glass.' },
  C: { name: 'Carbon', description: 'Basis of organic life; found in many forms like graphite and diamond.' },
  N: { name: 'Nitrogen', description: 'Makes up most of Earth’s atmosphere.' },
  O: { name: 'Oxygen', description: 'Essential for breathing and combustion.' },
  F: { name: 'Fluorine', description: 'Highly reactive gas; used in toothpaste.' },
  Ne: { name: 'Neon', description: 'Noble gas used in lighting.' },
  Na: { name: 'Sodium', description: 'Soft metal; part of table salt.' },
  Mg: { name: 'Magnesium', description: 'Lightweight metal used in alloys.' },
  Al: { name: 'Aluminum', description: 'Common metal used in packaging and construction.' },
  Si: { name: 'Silicon', description: 'Main element in semiconductors and glass.' },
  P: { name: 'Phosphorus', description: 'Essential for DNA and fertilizers.' },
  S: { name: 'Sulfur', description: 'Used in sulfuric acid and rubber production.' },
  Cl: { name: 'Chlorine', description: 'Disinfectant and component of table salt.' },
  Ar: { name: 'Argon', description: 'Noble gas used in lighting and welding.' },
  K: { name: 'Potassium', description: 'Important for nerve function and fertilizers.' },
  Ca: { name: 'Calcium', description: 'Essential for bones and teeth.' },
  Sc: { name: 'Scandium', description: 'Rare metal used in aerospace alloys.' },
  Ti: { name: 'Titanium', description: 'Strong, light metal for aerospace and medical implants.' },
  V: { name: 'Vanadium', description: 'Used in steel alloys.' },
  Cr: { name: 'Chromium', description: 'Used in stainless steel and chrome plating.' },
  Mn: { name: 'Manganese', description: 'Used in steel and batteries.' },
  Fe: { name: 'Iron', description: 'Main component of steel.' },
  Co: { name: 'Cobalt', description: 'Used in batteries and blue pigments.' },
  Ni: { name: 'Nickel', description: 'Used in stainless steel and coins.' },
  Cu: { name: 'Copper', description: 'Excellent conductor for electrical wiring.' },
  Zn: { name: 'Zinc', description: 'Used for galvanizing metals.' },
  Ga: { name: 'Gallium', description: 'Used in semiconductors and LEDs.' },
  Ge: { name: 'Germanium', description: 'Used in fiber optics and semiconductors.' },
  As: { name: 'Arsenic', description: 'Poisonous metalloid used in pesticides.' },
  Se: { name: 'Selenium', description: 'Used in glass and electronics.' },
  Br: { name: 'Bromine', description: 'Used in flame retardants.' },
  Kr: { name: 'Krypton', description: 'Noble gas used in lighting.' },
  Rb: { name: 'Rubidium', description: 'Soft metal used in research.' },
  Sr: { name: 'Strontium', description: 'Used in fireworks and magnets.' },
  Y: { name: 'Yttrium', description: 'Used in LEDs and phosphors.' },
  Zr: { name: 'Zirconium', description: 'Used in nuclear reactors and ceramics.' },
  Nb: { name: 'Niobium', description: 'Used in superconductors.' },
  Mo: { name: 'Molybdenum', description: 'Used in high-strength alloys.' },
  Tc: { name: 'Technetium', description: 'Radioactive element used in medical imaging.' },
  Ru: { name: 'Ruthenium', description: 'Used in electronics and jewelry.' },
  Rh: { name: 'Rhodium', description: 'Highly reflective metal for jewelry and catalytic converters.' },
  Pd: { name: 'Palladium', description: 'Used in electronics and jewelry.' },
  Ag: { name: 'Silver', description: 'Used in jewelry and electronics.' },
  Cd: { name: 'Cadmium', description: 'Toxic metal used in batteries.' },
  In: { name: 'Indium', description: 'Used in touchscreens and semiconductors.' },
  Sn: { name: 'Tin', description: 'Used in solder and coatings.' },
  Sb: { name: 'Antimony', description: 'Used in flame retardants.' },
  Te: { name: 'Tellurium', description: 'Used in alloys and solar panels.' },
  I: { name: 'Iodine', description: 'Essential nutrient used in medicine.' },
  Xe: { name: 'Xenon', description: 'Noble gas used in lighting and anesthesia.' },
  Cs: { name: 'Cesium', description: 'Used in atomic clocks.' },
  Ba: { name: 'Barium', description: 'Used in medical imaging.' },
  La: { name: 'Lanthanum', description: 'Used in camera lenses and batteries.' },
  Ce: { name: 'Cerium', description: 'Used in polishing glass and catalytic converters.' },
  Pr: { name: 'Praseodymium', description: 'Used in magnets and glass coloring.' },
  Nd: { name: 'Neodymium', description: 'Used in powerful magnets.' },
  Pm: { name: 'Promethium', description: 'Radioactive element used in research.' },
  Sm: { name: 'Samarium', description: 'Used in magnets and nuclear reactors.' },
  Eu: { name: 'Europium', description: 'Used in phosphorescent materials.' },
  Gd: { name: 'Gadolinium', description: 'Used in MRI contrast agents.' },
  Tb: { name: 'Terbium', description: 'Used in green phosphors.' },
  Dy: { name: 'Dysprosium', description: 'Used in magnets and lasers.' },
  Ho: { name: 'Holmium', description: 'Used in lasers.' },
  Er: { name: 'Erbium', description: 'Used in fiber-optic cables.' },
  Tm: { name: 'Thulium', description: 'Rare element used in lasers.' },
  Yb: { name: 'Ytterbium', description: 'Used in lasers and electronics.' },
  Lu: { name: 'Lutetium', description: 'Used in PET scans and research.' },
  Hf: { name: 'Hafnium', description: 'Used in nuclear control rods.' },
  Ta: { name: 'Tantalum', description: 'Used in electronics and surgical equipment.' },
  W: { name: 'Tungsten', description: 'Used in light bulbs and cutting tools.' },
  Re: { name: 'Rhenium', description: 'Used in superalloys.' },
  Os: { name: 'Osmium', description: 'Very dense metal used in pens and instruments.' },
  Ir: { name: 'Iridium', description: 'Used in spark plugs and jewelry.' },
  Pt: { name: 'Platinum', description: 'Used in jewelry and catalytic converters.' },
  Au: { name: 'Gold', description: 'Precious metal used in jewelry and electronics.' },
  Hg: { name: 'Mercury', description: 'Liquid metal used in thermometers.' },
  Tl: { name: 'Thallium', description: 'Toxic metal used in electronics.' },
  Pb: { name: 'Lead', description: 'Toxic metal used in batteries and shielding.' },
  Bi: { name: 'Bismuth', description: 'Used in cosmetics and medicines.' },
  Po: { name: 'Polonium', description: 'Highly radioactive element.' },
  At: { name: 'Astatine', description: 'Rare and radioactive halogen.' },
  Rn: { name: 'Radon', description: 'Radioactive noble gas.' },
  Fr: { name: 'Francium', description: 'Highly radioactive metal.' },
  Ra: { name: 'Radium', description: 'Radioactive element used in early cancer treatments.' },
  Ac: { name: 'Actinium', description: 'Radioactive metal used in research.' },
  Th: { name: 'Thorium', description: 'Radioactive metal used in reactors.' },
  Pa: { name: 'Protactinium', description: 'Radioactive element used in research.' },
  U: { name: 'Uranium', description: 'Fuel for nuclear reactors and weapons.' },
  Np: { name: 'Neptunium', description: 'Radioactive element used in research.' },
  Pu: { name: 'Plutonium', description: 'Used in nuclear weapons and reactors.' },
  Am: { name: 'Americium', description: 'Used in smoke detectors.' },
  Cm: { name: 'Curium', description: 'Radioactive element used in research.' },
  Bk: { name: 'Berkelium', description: 'Radioactive element used in research.' },
  Cf: { name: 'Californium', description: 'Used in neutron sources.' },
  Es: { name: 'Einsteinium', description: 'Radioactive element used in research.' },
  Fm: { name: 'Fermium', description: 'Radioactive element used in research.' },
  Md: { name: 'Mendelevium', description: 'Radioactive element used in research.' },
  No: { name: 'Nobelium', description: 'Radioactive element used in research.' },
  Lr: { name: 'Lawrencium', description: 'Radioactive element used in research.' },
  Rf: { name: 'Rutherfordium', description: 'Synthetic element used in research.' },
  Db: { name: 'Dubnium', description: 'Synthetic element used in research.' },
  Sg: { name: 'Seaborgium', description: 'Synthetic element used in research.' },
  Bh: { name: 'Bohrium', description: 'Synthetic element used in research.' },
  Hs: { name: 'Hassium', description: 'Synthetic element used in research.' },
  Mt: { name: 'Meitnerium', description: 'Synthetic element used in research.' },
  Ds: { name: 'Darmstadtium', description: 'Synthetic element used in research.' },
  Rg: { name: 'Roentgenium', description: 'Synthetic element used in research.' },
  Cn: { name: 'Copernicium', description: 'Synthetic element used in research.' },
  Nh: { name: 'Nihonium', description: 'Synthetic element used in research.' },
  Fl: { name: 'Flerovium', description: 'Synthetic element used in research.' },
  Mc: { name: 'Moscovium', description: 'Synthetic element used in research.' },
  Lv: { name: 'Livermorium', description: 'Synthetic element used in research.' },
  Ts: { name: 'Tennessine', description: 'Synthetic element used in research.' },
  Og: { name: 'Oganesson', description: 'Synthetic element used in research.' },
};

// Show Modal on Click
document.querySelectorAll('.element').forEach(el => {
  el.addEventListener('click', () => {
    const symbol = el.dataset.symbol;
    const details = elementDetails[symbol] || { name: 'Unknown', description: 'No information available.' };
    document.getElementById('elementName').textContent = details.name;
    document.getElementById('elementDescription').textContent = details.description;

    // Show Bootstrap Modal
    const modal = new bootstrap.Modal(document.getElementById('elementModal'));
    modal.show();
  });
});

// Search Functionality
document.getElementById('searchBox').addEventListener('input', e => {
  const query = e.target.value.toUpperCase();
  document.querySelectorAll('.element').forEach(el => {
    if (el.textContent.toUpperCase().includes(query)) {
      el.style.border = '2px solid red';
    } else {
      el.style.border = '';
    }
  });
});

// Filter by Category
function filterCategory(category) {
  document.querySelectorAll('.element').forEach(el => {
    if (category === '' || el.classList.contains(category)) {
      el.style.display = 'block';
    } else {
      el.style.display = 'none';
    }
  });
}

// Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

