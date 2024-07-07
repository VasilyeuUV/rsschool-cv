const loadModule = async (id, url) => {
  const response = await fetch(url);
  const text = await response.text();
  document.getElementById(id).innerHTML += text;
};

loadModule('header-container', '../modules/header.html');
loadModule('main-content', '../modules/showcase.html');