import React from 'react';
import logo from './logo.svg';
import './App.css';
import ImageUploader from 'react-images-upload';

function App() {
  return (
    <div className="App">
            <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
    </div>
  );
}

export default App;