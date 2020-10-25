/* global Fluid, CONFIG */

Fluid.boot = {};

Fluid.boot.registerEvents = function() {
  Fluid.events.registerNavbarEvent();
  Fluid.events.registerParallaxEvent();
  Fluid.events.registerScrollDownArrowEvent();
  Fluid.events.registerScrollTopArrowEvent();
};

Fluid.boot.refresh = function() {
  CONFIG.toc.enable && Fluid.plugins.initTocBot();
  CONFIG.imagezoom && Fluid.plugins.wrapImageWithFancyBox();
  CONFIG.copycode && Fluid.plugins.registerCopyCode();
};

document.addEventListener('DOMContentLoaded', function() {
  Fluid.boot.registerEvents();
  Fluid.boot.refresh();

  if (window.NProgress) {
    if (window.NProgress <= 0.33) {
      window.NProgress.set(0.33);
    }
  }
});
