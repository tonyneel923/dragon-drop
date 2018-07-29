import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Trash from 'react-icons/lib/fa/trash';

import { getPhotos, pageForward, pageBackward } from '../../actions/photos';

import PhotoCard from '../ui/PhotoCard/PhotoCard';
import PhotoGrid from '../ui/PhotoGrid/PhotoGrid';
import PaginationBar from '../ui/PaginationBar/PaginationBar';

const Container = styled.div`
  margin: 20px 20px;
`;

const DeleteContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  margin-top: 25px;
  justify-content: center;
`;

class HomePage extends React.Component {
  componentDidMount() {
    this.props.getPhotos();
  }

  render() {
    const { photos, pageForward, pageBackward, page } = this.props;

    if (!photos) {
      return <span>loading ...</span>
    }

    const pageSize = 10;
    const lastItem = (page + 1)* pageSize;
    const firstItem = lastItem - 10;
    const photosOnPage = photos.slice(firstItem, lastItem);
    const photoCards = photosOnPage.map(photo => <PhotoCard key={photo.get('id')} photoInfo={photo} />)

    return (
      <Container>
        <PhotoGrid>
          {photoCards}
        </PhotoGrid>
        <PaginationBar
          page={page + 1}
          forwardAction={pageForward}
          backwardAction={pageBackward}
        />
        <DeleteContainer>
          <Trash size={50} />
        </DeleteContainer>
      </Container>
    );
  }
}

const mapStateToProps = () => {
  return (state, props) => {
    return {
      photos: state.photos.get('photos'),
      page: state.photos.get('page'),
    };
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPhotos: bindActionCreators(getPhotos, dispatch),
    pageForward: bindActionCreators(pageForward, dispatch),
    pageBackward: bindActionCreators(pageBackward, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
