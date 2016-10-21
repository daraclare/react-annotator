import React, {PropTypes} from 'react';
import $ from "jquery";
import Annotator from 'annotator';

const Ann = new Annotator(document.body);


export default class Notes extends React.Component {
render () {

  return (
    <div>
        <h1>Hello!</h1>
    </div>
  );

}
