import { takeEvery } from 'redux-saga/effects';

import * as photos from './sagas/photos';

export default function* dataSaga() {
  yield takeEvery('GET_PHOTOS', photos.getPhotos);
  yield takeEvery('DELETE_PHOTO', photos.deletePhoto);
}
