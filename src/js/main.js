if (
  window.location.pathname == '/our-supporters/' ||
  window.location.pathname == '/our-supporters/#in-kind-donors' ||
  window.location.pathname == '/our-supporters/#business-sponsors'
) {
  const colors = [
    '#051958',
    '#FFB400',
    '#00A6ED',
    '#3C54A6',
    '#051958',
    '#051958',
  ];
  confetti({
    particleCount: 200,
    colors: colors,
    disableForReducedMotion: true,
    spread: 70,
    origin: { y: 0.6 },
    disableForReducedMotion: true,
  });
}
