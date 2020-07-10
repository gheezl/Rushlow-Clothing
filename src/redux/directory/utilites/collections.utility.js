const loopCollections = (collections) => {
    for (let key in collections) {
        return key, collections[key]
    }
}

export default loopCollections;