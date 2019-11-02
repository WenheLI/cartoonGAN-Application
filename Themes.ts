type ColorTheme = Array<Array<number>>;

const Miyazaki: ColorTheme = [
    [191, 207, 217],
    [189, 147, 146],
    [3, 115, 140],
    [106, 166, 160],
    [128, 166, 133]
]

const Miyazaki2: ColorTheme = [
    [78, 22, 23],
    [20, 36, 26],
    [201, 129, 81],
    [217, 177, 143],
    [124, 39, 42]
]

interface Dictionary {
    [Key: string]: ColorTheme;
}

const themes: Dictionary = {
    Miyazaki,
    Miyazaki2
}

export {
    ColorTheme,
    themes
}