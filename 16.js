function rgb(r, g, b) {
    let red = '';
    let blue = '';
    let green = '';
    if (r < 1) { red = '00' } else if (r > 255) { red = 'FF' } else { red = r.toString(16) }
    if (g < 1) { green = '00' } else if (g > 255) { green = 'FF' } else { green = g.toString(16) }
    if (b < 1) { blue = '00' } else if (b > 255) { blue = 'FF' } else { blue = b.toString(16) }
    if (red.length === 1) { red = 0 + red }
    if (green.length === 1) { green = 0 + green }
    if (blue.length === 1) { blue = 0 + blue }
    let res = red + green + blue;
    console.log(res.toUpperCase())
    return res.toUpperCase();
}
rgb(255, 255, 255)
rgb(148, 0, 211)
