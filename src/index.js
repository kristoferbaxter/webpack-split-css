import styles from './index.css';

const ROUTES = {
  a: {
    loaded: false,
    loader: require('bundle-loader?lazy&name=RouteA!./route-a/route-a.js'),
    file: null
  },
  b: {
    loaded: false,
    loader: require('bundle-loader?lazy&name=RouteA!./route-b/route-b.js'),
    file: null
  }
};
let currentRoute = 'a';
const routeDisplayText = () => `Route: ${currentRoute}`;

function setupDOM($body=document.body) {
  const $routeDisplay = document.createElement('p');
  $routeDisplay.className = styles.routeDisplay;
  $routeDisplay.innerHTML = routeDisplayText();

  const $toggleRoute = document.createElement('button');
  $toggleRoute.innerHTML = 'toggle';
  $toggleRoute.addEventListener('click', toggleRoute, false);

  const $overlay = document.createElement('div');
  $overlay.className = styles.currentRoute;
  $overlay.appendChild($routeDisplay);
  $overlay.appendChild($toggleRoute);

  $body.appendChild($overlay);
}

function renderRoute() {
  document.querySelector(styles.routeDisplay).innerHTML = routeDisplayText();

  const {loaded, loader, file} = ROUTES[currentRoute];
  if (!loaded) {
    loader((loadedFile) => {
      ROUTES[currentRoute].loaded = true;
      ROUTES[currentRoute].file = loadedFile.default;
      loadedFile.default.render(document.querySelector(styles.routeContainer));
    });
  } else {
    file.render(document.querySelector(styles.routeContainer));
  }
}

function toggleRoute() {
  if (currentRoute === 'a') {
    currentRoute === 'b';
  } else {
    currentRoute === 'a';
  }

  renderRoute();
}

(function() {
  setupDOM(document.body);
  renderRoute();
})();