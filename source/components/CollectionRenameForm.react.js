var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.react');
var Button = require('./Button.react');

var inputStyle = {
  marginRight: '5px'
}


// props
  // name={this.state.name}
  // onChangeCollectionName={this.setCollectionName}
// onCancelCollectionNameChange={this.toggleEditCollectionName} />

var CollectionRenameForm = React.createClass({

  getInitialState: function() {
    return {
      inputValue: this.props.name
    };
  },

  setInputValue: function(inputValue) {
    this.setState({
      inputValue: inputValue
    });
  },

  handleInputValueChange: function(event) {
    var inputValue = event.target.value;
    this.setInputValue(inputValue);
  },

  handleFormSubmit: function(event) {
    event.preventDefault();

    var collectionName = this.state.inputValue;
    // changing collectionName with callback
    this.props.onChangeCollectionName(collectionName)
  },

  handleFormCancel: function(event) {
    event.preventDefault();

    var collectionName = this.props.name
    // changing input name back to what original name was
    this.setInputValue(collectionName)
    // callback to function that will change the isEditing boolean andhide the form
    this.props.onCancelCollectionNameChange;
  },

  componentDidMount: function() {
    // guess: CollectionRenameForm successfully mounted. ... What is his
    this.refs.collectionName.focus();
  },

  render: function() {
    // ref allows you to reference a component from outside of the render method
    return (
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <Header text="Collection name:"/>
          <div className="form-group">
            <input
              className-"form-control"
              style={inputStyle}
              onChange={this.handleInputValueChange}
              value={this.state.inputValue}
              ref="collectionName" />
            </div>

          <Button label="Change" handleClick={this.handleFormSubmit} />
          <Button label="Cancel" handleClick={this.handleFormCancel} />
        </div>
    )
  }


})
