const currentPage = window.location.pathname;

let baseLink = 'index.html';
let shablon1 = 'index1.html';
let shablon2 = 'index2.html';
let shablon3 = 'index3.html';

if (currentPage.includes("index.html")) {
  baseLink = 'index.html';
  shablon1 = 'pages/index1.html'
  shablon2 = 'pages/index2.html';
  shablon3 = 'pages/index3.html';
} else if (currentPage.includes("index1.html")) {
  baseLink = '../index.html';
  shablon1 = 'index1.html';
  shablon2 = 'index2.html';
  shablon3 = 'index3.html';
} else if (currentPage.includes("index2.html")) {
  baseLink = '../index.html';
  shablon1 = 'index1.html';
  shablon2 = 'index2.html';
  shablon3 = 'index3.html';
} else if (currentPage.includes("index3.html")) {
  baseLink = '../index.html';
  shablon1 = 'index1.html';
  shablon2 = 'index2.html';
  shablon3 = 'index3.html';
}

const headerHTML = `
<div class="container-fluid header d-none d-md-block">
  <div class="container">
    <h1><a href="${baseLink}">ShablonSite</a></h1>
    <p>ShablonSite</p>
    <ul class="nav nav-pills justify-content-end">
      <li class="nav-item">
        <a class="nav-link" aria-current="page" href="${baseLink}" id="active-home">Главная</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="${shablon1}" id="active-shablon1">Шаблон1</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="${shablon2}" id="active-shablon2">Шаблон2</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="${shablon3}" id="active-shablon3">Шаблон3</a>
      </li>
    </ul>
  </div>
</div>
`;

const navHTML = `
<div class="d-md-none d-sm-block">
  <nav class="navbar navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="${baseLink}">ShablonSite</a>
      <p>ShablonSite</p>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="${baseLink}" id="active-home">Главная</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="${shablon1}" id="active-shablon1">Шаблон1</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="${shablon2}" id="active-shablon2">Шаблон2</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="${shablon3}" id="active-shablon3">Шаблон3</a>
            </li>                
          </ul>
        </div>
      </div>
    </div>
  </nav>
</div>
`;

const formHTML = `
<form class="d-flex mt-3" role="search">
  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
  <button class="btn btn-success" type="submit">Search</button>
</form>
`;

const SidebarHTML = `
<div class="card">
  <div class="card-body">
    This is some text within a card body.
  </div>
</div>
<div class="card">
  <div class="card-body">
    This is some text within a card body.
  </div>
</div>
<div class="card">
  <div class="card-body">
    This is some text within a card body.
  </div>
</div>
<div class="card">
  <div class="card-body">
    This is some text within a card body.
  </div>
</div>
<div class="card">
  <div class="card-body">
    This is some text within a card body.
  </div>  
</div>  
<div class="card">  
  <div class="card-body">
    This is some text within a card body.
  </div>  
</div>  
<div class="card">  
  <div class="card-body">
    This is some text within a card body.
  </div>  
</div>  
<div class="card">  
  <div class="card-body">
    This is some text within a card body.
  </div>  
</div>
`;

const footerHTML = `
<footer class="text-center">
  <h1>ShablonSite</h1>
</footer>
`;

document.getElementById('header-container').innerHTML = headerHTML;
document.getElementById('nav-container').innerHTML = navHTML;
document.getElementById('form-container').innerHTML = formHTML;
document.getElementById('Sidebar-container').innerHTML = SidebarHTML;
document.getElementById('footer-container').innerHTML = footerHTML;

let activeIds = [];

if (currentPage.includes("index.html")) {
	activeIds.push("active-home");
} else if (currentPage.includes("index1.html")) {
	activeIds.push("active-shablon1");
} else if (currentPage.includes("index2.html")) {
	activeIds.push("active-shablon2");
} else if (currentPage.includes("index3.html")) {
	activeIds.push("active-shablon3");
}

activeIds.forEach(id => {
	const element = document.getElementById(id);
	if (element) {
			element.classList.add("active");
	}
});

const currentLocation = window.location.href;
   const navLinks = document.querySelectorAll('.nav-link');

   navLinks.forEach(link => {
       if (link.href === currentLocation) {
           link.classList.add('active');
       }
   });