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