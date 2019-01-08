import React, { Component } from 'react';
import './App.css';
import IntlTelInput from 'react-intl-tel-input'
import 'react-intl-tel-input/dist/main.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      infoVisible: false,
    }
    this.onPhoneNumberChange = this.onPhoneNumberChange.bind(this)
  }

  onPhoneNumberChange(isValid, value, countryData, number) {
    this.setState({
      value: number,
      infoVisible: value !== number
    })
  }

  render() {
    const { value, infoVisible } = this.state
    return (
      <div className="container">
        <p>Type here:</p>
        <IntlTelInput
          css={['intl-tel-input', 'form-control']}
          value={value}
          onPhoneNumberChange={this.onPhoneNumberChange}
        />
        {infoVisible && <p style={{ position: 'absolute', color: 'red', top: '30px' }}>Cursor position just broke!</p>}
      </div>
    );
  }
}

export default App;
