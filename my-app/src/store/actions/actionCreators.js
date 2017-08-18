import {
    assetDetailDownloadActionTypes,
    categoriesDownloadActionTypes,
    moviesByCategoryDownloadActionTypes,
    popularVideoDownloadActionTypes,
    trailersDownloadActionTypes
} from '../../Constants';
//Categories
export const downloadCategories = () => (dispatch) => {

    const url = 'http://online.smartsoft.ro:3333/api/vod/category';

    requestHandler(url, dispatch, categoriesDownloadActionTypes);
}

//Assets
export const downloadAssetsByCategory = (categoryId) => (dispatch) => {

    const url = 'http://online.smartsoft.ro:3333/api/vod/category/' + categoryId + '/assets';

    requestHandler(url, dispatch, moviesByCategoryDownloadActionTypes);
}

export const downloadAssetDetails = (assetId) => (dispatch) => {

    console.log('downloadAssetDetails id: ', assetId);
    const url = 'http://online.smartsoft.ro:3333/api/vod/asset/' + assetId;

    requestHandler(url, dispatch, assetDetailDownloadActionTypes);
}

//Videos
export const downloadVideosByAssetId = (assetId) => (dispatch) => {

    console.log('downloadVideosByAssetId id: ', assetId);
    const url = 'http://online.smartsoft.ro:3333/api/vod/asset/' + assetId + '/videos';

    requestHandler(url, dispatch, trailersDownloadActionTypes);
}

export const downloadPopularVideos = () => (dispatch) => {

    const url = 'http://online.smartsoft.ro:3333/api/vod/popular';

    requestHandler(url, dispatch, popularVideoDownloadActionTypes);
}

//requestHandler
function requestHandler(url, dispatch, setOfActionTypes) {
    let responsePayload = null;
    dispatch({type: setOfActionTypes.get});
    fetch(url)
        .then(results => results.json())
        .then(resultsJson => {
            switch (setOfActionTypes) {
                case assetDetailDownloadActionTypes:
                    responsePayload = resultsJson.data;
                    break;
                case categoriesDownloadActionTypes:
                    responsePayload = resultsJson.data.genres;
                    break;
                case moviesByCategoryDownloadActionTypes:
                    responsePayload = resultsJson.data.results;
                    break;
                case popularVideoDownloadActionTypes:
                    responsePayload = resultsJson.data;
                    break;
                case trailersDownloadActionTypes:
                    responsePayload = resultsJson.data;
                    break;
            }
            if (responsePayload) {
                dispatch({type: setOfActionTypes.received, payload: responsePayload});
            }
        })
        .catch(err => {
            dispatch({type: setOfActionTypes.error});
        });
}