const loadModule = async (id, url) => {
  const response = await fetch(url);
  const text = await response.text();
  document.getElementById(id).innerHTML += text;
};

loadModule('header-container', '../modules/header.html');
loadModule('main-content', '../modules/showcase.html');
loadModule('main-content', '../modules/code-examples.html');
loadModule('main-content', '../modules/projects.html');
loadModule('main-content', '../modules/experience.html');
loadModule('main-content', '../modules/education.html');
loadModule('main-content', '../modules/english-level.html');
loadModule('footer-container', '../modules/footer.html');