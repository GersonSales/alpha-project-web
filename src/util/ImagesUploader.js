import React from 'react';
import ImageUploader from 'react-images-upload';

export default class ImagesUploader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {pictures: []};
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(picture) {
    if (this.state.pictures.length < 1) {
      this.setState({
        pictures: this.state.pictures.concat(picture),
      });
    }
  }

  render() {
    return (
      <ImageUploader
        withPreview
        SingleImage
        buttonText="Choose image"
        onChange={this.onDrop}
        imgExtension={['.jpg', '.gif', '.png', '.gif']}
        min
        maxFileSize={5242880}
      />
    );
  }
}