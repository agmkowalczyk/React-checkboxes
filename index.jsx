class Checkbox extends React.Component {
  state = {
    isChecked: false,
  }

  toggleChackboxChange = () => {
    const { label } = this.props;

    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));
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
  

  createCheckbox = label => (
    <Checkbox
      label={label}
      key={label}
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
