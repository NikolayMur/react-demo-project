//Categories
export const fetchCategories = () => (dispatch) => {
    fetch('http://online.smartsoft.ro:3333/api/vod/category')
        .then(results => results.json())
        .then(resultsJson => {
            if (resultsJson.data.genres) {
                dispatch({type: 'LOAD_CATEGORIES', payload: resultsJson.data.genres});
            }
        })
        .catch(err => {
            throw err;
        });
}

//Assets
export const fetchAssetsByCategory = (categoryId) => (dispatch) => {
    fetch('http://online.smartsoft.ro:3333/api/vod/category/' + categoryId + '/assets/2')
        .then(results => results.json())
        .then(resultsJson => {
            if (resultsJson.data.results) {
                dispatch({type: 'LOAD_MOVIES_BY_CATEGORY', payload: resultsJson.data.results});
            }
        })
        .catch(err => {
            throw err;
        });
}

export const fetchAssetDetails = (assetId) => (dispatch) => {
    fetch('http://online.smartsoft.ro:3333/api/vod/asset/' + assetId)
        .then(results => results.json())
        .then(resultsJson => {
            if (resultsJson.data) {
                dispatch({type: 'LOAD_ASSET_DETAIL', payload: resultsJson.data});
            }
        })
        .catch(err => {
            throw err;
        });
}

export const searchAssets = (queryString) => (dispatch) => {
    fetch('http://online.smartsoft.ro:3333/api/vod/search?q={' + queryString + '}')
        .then(results => results.json())
    // .then(resultsJson => {
    //     if (resultsJson.data.genres) {
    //         dispatch({type: 'LOAD_CATEGORIES', payload: resultsJson.data.genres});
    //     }
    // })
    // .catch(err => {
    //     throw err;
    // });
}

//Videos
export const fetchVideosByAssetId = (assetId) => (dispatch) => {
    fetch('http://online.smartsoft.ro:3333/api/vod/asset/' + assetId + '/videos')
        .then(results => results.json())
        .then(resultsJson => {
            if (resultsJson.data.results) {
                dispatch({type: 'LOAD_TRAILERS', payload: resultsJson.data.results});
            }
        })
        .catch(err => {
            throw err;
        });
}

export const fetchPopularVideos = () => (dispatch) => {
    fetch('http://online.smartsoft.ro:3333/api/vod/popular')
        .then(results => results.json())
        .then(resultsJson => {
            if (resultsJson.data) {
                dispatch({type: 'LOAD_POPULAR_VIDEO', payload: resultsJson.data});
            }
        })
        .catch(err => {
            throw err;
        });
}

//Menu
export const fetchMenu = () => (dispatch) => {
    fetch(' http://online.smartsoft.ro:3333/api/static/menu')
        .then(results => results.json())
    // .then(resultsJson => {
    //     if (resultsJson.data.genres) {
    //         dispatch({type: 'LOAD_CATEGORIES', payload: resultsJson.data.genres});
    //     }
    // })
    // .catch(err => {
    //     throw err;
    // });
}