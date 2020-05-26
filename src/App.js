import React from 'react';
import {Fabric} from 'office-ui-fabric-react/lib/Fabric'
import Content from './components/Content.js'

class App extends React.Component {
  render() {
    return (
      <Fabric className="App">
        <div className="body">
          <div className="content">
            <Content />
          </div>     
        </div>
      </Fabric>
    );
  }
}

export default App;