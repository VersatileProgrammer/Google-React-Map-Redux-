import React from 'react';

import { withRouter } from 'react-router';
import classNames from 'classnames';

import GoogleMapReact from 'google-map-react';
import GMap from './GMap';

const AnyReactComponent = ({ text }) => (
  <div style={{
    position: 'relative', color: 'white', background: 'red',
    height: 40, width: 60, top: -20, left: -30,    
  }}>
    {text}
  </div>
);


@withRouter
export default class Main extends React.Component {
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };

  handleNavigation() {
    this.props.router.push('/');
  }

  render() {
    return (
      <GMap/>
    );
  }
}