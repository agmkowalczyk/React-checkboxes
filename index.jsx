class Checkbox extends React.Component {
  state = {
    isChecked: false,
  }

  toggleChackboxChange = () => {
    const { handleCheckboxChange, label } = this.props;

    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));
    handleCheckboxChange(label);
  }

  render() {
    const { label } = this.props;
    const { isChecked } = this.state;

    return (
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            value={ label }
            checked={ isChecked }
            onChange={ this.toggleChackboxChange }
          />
          { label }
        </label>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    labels: ['option 1','option 2','option 3','option 4','option 5']
  };
  
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }  
    console.log(this.selectedCheckboxes);
  }

  createCheckbox = label => (
    <Checkbox
      label={label}
      key={label}
      handleCheckboxChange={this.toggleCheckbox}
    />
  )

  createCheckboxes = () => (
    this.state.labels.map(this.createCheckbox)
  )

  render() {
    return (
      <div className="content">
        { this.createCheckboxes() }
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
