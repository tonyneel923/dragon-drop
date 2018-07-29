import { fromJS } from 'immutable';

export default(state = fromJS({
  photos: null,
}), payload) => {
  switch (payload.type) {
    case 'GET_PHOTOS_SUCCESS':
      return state.updateIn(['photos'],  () => fromJS(payload.response));

    case 'DELETE_PHOTO_SUCCESS':
      return state.deleteIn(['photos', payload.id]);

    default:
      return state;
  }
};
