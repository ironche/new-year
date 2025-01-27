function onPageLoad() {
  const preloader = document.querySelector('#preloader');
  const fadeEffect = setInterval(() => {
    if (!preloader.style.opacity) {
      preloader.style.opacity = 1;
    }
    if (preloader.style.opacity > 0) {
      preloader.style.opacity -= 0.25;
    } else {
      clearInterval(fadeEffect);
    }
  }, 200);
}

document.addEventListener('DOMContentLoaded', function () {
  onPageLoad();
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
  script.onload = function () {
    particlesJS('snow', {
      particles: {
        number: {
          value: 200,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: '#ffffff',
        },
        opacity: {
          value: 0.7,
          random: false,
          anim: {
            enable: false,
          },
        },
        size: {
          value: 5,
          random: true,
          anim: {
            enable: false,
          },
        },
        line_linked: {
          enable: false,
        },
        move: {
          enable: true,
          speed: 5,
          direction: 'bottom',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: true,
            rotateX: 300,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        events: {
          onhover: {
            enable: false,
          },
          onclick: {
            enable: false,
          },
          resize: true,
        },
      },
      retina_detect: true,
    });
  };
  document.body.append(script);
});
