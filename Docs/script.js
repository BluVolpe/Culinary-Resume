document.addEventListener("DOMContentLoaded", function () {
  gsap.from(".hero-content h1", { duration: 1, y: -50, opacity: 0 });
  gsap.from(".hero-content h2", { duration: 1, y: 50, opacity: 0, delay: 0.5 });

  // Create ScrollMagic Controller
  var controller = new ScrollMagic.Controller();

  // About Section Animation
  var aboutScene = new ScrollMagic.Scene({
    triggerElement: "#about",
    triggerHook: 0.8,
  })
  .setTween(gsap.from("#about .content", { duration: 1, y: 100, opacity: 0 }))
  .addTo(controller);

  // Experience Section Animation
  var experienceScene = new ScrollMagic.Scene({
    triggerElement: "#experience",
    triggerHook: 0.8,
  })
  .setTween(gsap.from("#experience .content", { duration: 1, y: 100, opacity: 0 }))
  .addTo(controller);

  // Skills Section Animation
  var skillsScene = new ScrollMagic.Scene({
    triggerElement: "#skills",
    triggerHook: 0.8,
  })
  .setTween(gsap.from("#skills .content", { duration: 1, y: 100, opacity: 0 }))
  .addTo(controller);

  // Projects Section Animation
  var projectsScene = new ScrollMagic.Scene({
    triggerElement: "#projects",
    triggerHook: 0.8,
  })
  .setTween(gsap.from("#projects .content", { duration: 1, y: 100, opacity: 0 }))
  .addTo(controller);

  // Contact Section Animation
  var contactScene = new ScrollMagic.Scene({
    triggerElement: "#contact",
    triggerHook: 0.8,
  })
  .setTween(gsap.from("#contact .content", { duration: 1, y: 100, opacity: 0 }))
  .addTo(controller);
});
