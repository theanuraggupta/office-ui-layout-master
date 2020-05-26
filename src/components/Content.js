import React, {PropTypes as T} from 'react';
import {Button} from 'office-ui-fabric-react/lib/Button';
import {Panel} from 'office-ui-fabric-react/lib/Panel';
import '../_styles/Content.css'
import { MultiSelectComponent, CheckBoxSelection, Inject } from '@syncfusion/ej2-react-dropdowns';

class Content extends React.Component {
  constructor() {
    super();
	this.state = {
		showPanel: false
	}
  }

  componentDidMount() {
    this._hasMounted = true
  }
  
  buttonClick = () => {
	this.setState({
		showPanel: true
	});
	console.log("BUTTON CLICKED", this.state.showPanel);
  }
  _closePanel = () => {
	  this.setState({
		showPanel: false
	});
	console.log("BUTTON CLOSED", this.state.showPanel);
  }
 
  render() {
	  const {showPanel} = this.state;
    return (
      <div className="container">
        <Button onClick={this.buttonClick.bind(this)}>Open Panel</Button>
		<Panel
          isOpen={ this.state.showPanel }
          onDismiss= { this._closePanel.bind(this) }
          headerText='Medium Panel'
        >
          <span className='ms-font-m'>Content goes here.</span>
		  <MultiSelectComponent id="checkbox" ref={(scope) => { this.mulObj = scope; }} dataSource={[
            { Name: 'Australia', Code: 'AU' },
            { Name: 'Bermuda', Code: 'BM' },
            { Name: 'Canada', Code: 'CA' },
            { Name: 'Cameroon', Code: 'CM' },
            { Name: 'Denmark', Code: 'DK' },
            { Name: 'France', Code: 'FR' },
            { Name: 'Finland', Code: 'FI' },
            { Name: 'Germany', Code: 'DE' },
            { Name: 'Greenland', Code: 'GL' },
            { Name: 'Hong Kong', Code: 'HK' },
            { Name: 'India', Code: 'IN' },
            { Name: 'Italy', Code: 'IT' },
            { Name: 'Japan', Code: 'JP' },
            { Name: 'Mexico', Code: 'MX' },
            { Name: 'Norway', Code: 'NO' },
            { Name: 'Poland', Code: 'PL' },
            { Name: 'Switzerland', Code: 'CH' },
            { Name: 'United Kingdom', Code: 'GB' },
            { Name: 'United States', Code: 'US' }
        ]} fields={{ text: 'Name', value: 'Code' }} placeholder="Select countries" mode="CheckBox" showSelectAll={true} showDropDownIcon={true} filterBarPlaceholder="Search countries" popupHeight="350px" footerTemplate={() => {
          return (
           <div className='header'><span>Photo</span><span className="columnHeader">Employee Info</span></div>
        );
        }} >
              <Inject services={[CheckBoxSelection]}/>
            </MultiSelectComponent>
        </Panel>
      </div>
    )
  }
}

export default Content
