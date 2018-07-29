export const getPhotos = () => {
  return {
    type: 'GET_PHOTOS',
  };
};

export const deletePhoto = (id) => {
  return {
    type: 'DELETE_PHOTO',
    id
  };
};

export const pageForward = () => {
  return {
    type: 'PAGE_FORWARD',
  };
};

export const pageBackward = () => {
  return {
    type: 'PAGE_BACKWARD',
  };
};