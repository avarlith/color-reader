export function isValidForm(value) {
  const regHex = /^#([a-f\d]{3}|[a-f\d]{6})$/;
  const regHsl = /^hsl\((0|360|35\d|3[0-4]\d|[12]\d\d|0?\d?\d),\s?(0|100|\d{1,2})%,\s?(0|100|\d{1,2})%\)$/;
  const regRgb = /^rgb\((0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),\s?(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),\s?(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)\)$/;

  return regHex.test(value) || regHsl.test(value) || regRgb.test(value);
}
