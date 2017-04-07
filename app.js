class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    }
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)} >{this.props.food}</li>
    );

  }
}

var GroceryList = (props) => (
  <ul>
    {props.food.map((thing) => <GroceryListItem food={thing}/>)}
  </ul>
);

var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList food={['Peanut Butter', 'Bananas', 'Meat']} /> 
  </div>
);



ReactDOM.render(<App />, document.getElementById("app"));