// This component handles all the global components that are used on every page.
import React, {PropTypes} from 'react';
import Header from './global/Header';
import Notes from './global/Notes';

class Global extends React.Component {
  render() {
    return (
      <div >
        <Notes />
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

Global.propTypes = {
  children: PropTypes.object.isRequired
};

export default Global;
