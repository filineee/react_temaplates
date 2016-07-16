import React from 'react';
import Dropzone from 'react-dropzone';
import ajaxUpload from './FileUploadAjax.js';

export default class  Loadfile extends React.Component {
    constructor() {
        super();
        this.state = {
            files: []
        };
    }

   _handleFileDrop (files) {
      this.setState({
        files: files
        }, ()=>{ 
              ajaxUpload( {files: this.state.files, url: 'getfile.php', filesFieldName: 'name', method: 'POST'} );
          });

   }


  render() {
    console.log(this.props.location);
      return (
          <div>
            <Dropzone onDrop={this._handleFileDrop.bind(this)}>
              <div>Try dropping some files here, or click to select files to upload.</div>
            </Dropzone>
          </div>
      );
  }
}



