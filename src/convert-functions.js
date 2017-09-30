function convertRgbToHex(rgb) {
  const convertRgb = rgb.match(/\d+/g) ? rgb.match(/\d+/g) : [];
  let hex = convertRgb.map(function (x) {
    x = parseInt(x).toString(16);
    return (x.length === 1) ? "0" + x : x;
  });
  return hex = '#' + hex.join("");
}

function convertRgbToHsl(rgb) {
  const convertRgb = rgb.match(/\d+/g) ? rgb.match(/\d+/g) : [];
  const r = convertRgb[0] / 255;
  const g = convertRgb[1] / 255;
  const b = convertRgb[2] / 255;

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }

    h /= 6;
  }

  return 'hsl(' + Math.round(h * 360) + ', ' + Math.round(s * 100) + '%, ' + Math.round(l * 100) + '%)';
}

function convertHexToRgb(hex) {
  if (hex.length === 4) {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    const conHex = hex.replace(shorthandRegex, function (m, h, e, x) {
      return h + h + e + e + x + x;
    });
    return hexToRgb(conHex);
  } else {
    return hexToRgb(hex);
  }
}

function hexToRgb(color) {
  const convertHex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
  const r = parseInt(convertHex[1], 16);
  const g = parseInt(convertHex[2], 16);
  const b = parseInt(convertHex[3], 16);
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

function convertHslToRgb(hsl) {
  const convertHsl = hsl.match(/\d+/g) ? hsl.match(/\d+/g) : [];
  const h = convertHsl[0] / 360;
  const s = convertHsl[1] / 100;
  const l = convertHsl[2] / 100;
  let r, g, b;


  if (s === 0) {
    r = g = b = l;
  } else {
    function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    }

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return 'rgb(' + Math.round(r * 255) + ', ' + Math.round(g * 255) + ', ' + Math.round(b * 255) + ')';
}

export { convertRgbToHex, convertRgbToHsl, convertHexToRgb, convertHslToRgb };