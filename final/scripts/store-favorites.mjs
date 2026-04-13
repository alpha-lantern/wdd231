let favorites = [];

export function setAsFavorite(filename, id) {
    const data = localStorage.getItem(filename);
    favorites = JSON.parse(data) || [];
    if (!favorites.includes(id)) {
        favorites.push(id);
        localStorage.setItem(filename, JSON.stringify(favorites));
    }
}

export function eraseFavorite(filename, id) {
    const data = localStorage.getItem(filename);
    favorites = JSON.parse(data) || [];
    let actFavorites = favorites.filter(favoriteID => favoriteID != id);
    localStorage.setItem(filename, JSON.stringify(actFavorites));
}

export function getFavorites(filename) {
    const storage = filename;
    
    const localData = localStorage.getItem(storage);
    let favorites = JSON.parse(localData) || [];

    return favorites;
    // console.log(favorites);
}
