//3D Scroll

let zSpasing = -1000,
  lastPost = zSpasing / 5,
  $frames = document.getElementsByClassName("frame"),
  frames = Array.from($frames),
  zVal = [];

window.onscroll = function () {
  let top = document.documentElement.scrollTop,
    delta = lastPost - top;

  lastPost = top;

  frames.forEach(function (n, i) {
    zVal.push(i * zSpasing + zSpasing);
    zVal[i] += delta * -5.5;
    let frame = frames[i],
      transform = `translateZ(${zVal[i]}px)`,
      opacity = zVal[i] < Math.abs(zSpasing) / 1.8 ? 1 : 0;
    frame.setAttribute("style", `transform:${transform}; opacity:${opacity}`);
  });
};

window.scrollTo(0, 1);
