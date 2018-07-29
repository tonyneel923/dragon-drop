import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPhotos } from '../../actions/photos';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPhotos();
  }

  render() {
    if (!this.props.photos) {
      return <span>loading ...</span>
    }

    return <div>Home Page!</div>;
  }
}

const mapStateToProps = () => {
  return (state, props) => {
    return {
      photos: state.photos.get('photos'),
    };
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPhotos: bindActionCreators(getPhotos, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
