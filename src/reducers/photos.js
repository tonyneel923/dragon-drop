import { fromJS } from 'immutable';

export default(state = fromJS({
  eslint: {},
  photos: null,
  page: 0,
}), payload) => {
  switch (payload.type) {
    case 'GET_PHOTOS_SUCCESS':
      return state.updateIn(['photos'],  () => fromJS(payload.response));

    case 'DELETE_PHOTO_SUCCESS':
      const index = state.get('photos').findIndex(photo => photo.get('id') === payload.id);
      return state.deleteIn(['photos', index]);

    case 'PAGE_FORWARD':
      const numberOfPhotos = state.get('photos').size;
      const maxPages = Math.ceil(numberOfPhotos / 10);
      if ((state.get('page') + 1) > maxPages) return;
      return state.updateIn(['page'], (page) => page + 1);

    case 'PAGE_BACKWARD':
      if (state.get('page') === 0) return;
      return state.updateIn(['page'], (page) => page - 1);

    default:
      return state;
  }
};
