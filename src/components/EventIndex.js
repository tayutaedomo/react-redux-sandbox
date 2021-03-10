import React from 'react';
import { connect } from 'react-redux';

import { readEvents } from '../actions';

class EventIndex extends React.Component {
  componentDidMount() {
    this.props.readEvents();
  }

  render() {
    const props = this.props;

    return (
      <>
        <div>Value: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = { readEvents };

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex);
