import { put } from 'redux-saga/effects';
import axios from 'axios';
import config from '../config';

export function* getPhotos() {
  try {
    const res = yield axios.get(`${config.REACT_APP_API_BASE_URL}/photos`);
    yield put({ type: 'GET_PHOTOS_SUCCESS', response: res.data });
  } catch (axiosError) {
    yield put({ type: 'GET_PHOTOS_FAILURE', error: axiosError });
    console.log('GET_PHOTOS_FAILURE', axiosError);
  }
}

export function* deletePhoto({ id }) {
  try {
    yield axios.delete(`${config.REACT_APP_API_BASE_URL}/photos/${id}`);
    yield put({ type: 'DELETE_PHOTO_SUCCESS', id });
  } catch (axiosError) {
    yield put({ type: 'DELETE_PHOTO_FAILURE', error: axiosError });
    console.log('DELETE_PHOTO_FAILURE', axiosError);
  }
}