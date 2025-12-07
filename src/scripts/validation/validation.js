const PATTERNS = {
    Latitude : /^-?(0|[1-9]\d*)(\.\d+)?$/,
    Longitude : /^-?(0|[1-9]\d*)(\.\d+)?$/
}

export function validateCoordinates(lat,lon) {
    if (isNaN(lat) || isNaN(lon))
        throw new Error("Введите числовые значения");

    if (!(PATTERNS.Latitude.test(lat) && PATTERNS.Longitude.test(lon)))
        throw new Error("Введите валидные данные")

    if (lat < -90 || lat > 90)
        throw new Error("Широта должна быть от -90 до 90");

    if (lon < -180 || lon > 180)
        throw new Error("Долгота должна быть от -180 до 180");
}