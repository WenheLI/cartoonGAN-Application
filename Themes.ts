type ColorTheme = Array<Array<number>>;

const Miyazaki: ColorTheme = [
    [191, 207, 217],
    [189, 147, 146],
    [3, 115, 140],
    [106, 166, 160],
    [128, 166, 133]
]

interface Dictionary {
    [Key: string]: ColorTheme;
}

const themes: Dictionary = {
    Miyazaki
}

export {
    ColorTheme,
    themes
}