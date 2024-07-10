if ( window.matchMedia('(prefers-color-scheme: dark)').matches ) {
  document.querySelector('link[rel="icon"]').href = '/icon/icon-light.ico';
} else {
  document.querySelector('link[rel="icon"]').href = '/icon/icon-dark.ico';
}
