import React, { Component } from 'react';

class Map extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   center : {lat: -34.397,
    //     lng: 150.644},
    //   zoom: 10  
    // };
    this.initMap = this.initMap.bind(this);
  }

    initMap(node) {
      console.log('Hola from node', node);
      this.uluru = {lat: -25.363, lng: 131.044};
      this.map = new window.google.maps.Map(node, {
        zoom: 4,
        center: this.uluru
      });
      this.marker = new window.google.maps.Marker({
        position: this.uluru,
        map: this.map
      });
        // this.map = new google.maps.Map(node,
        //   this.setState({center: this.state.center, zoom: this.state.zoom})
        // );
      // this.marker = new google.maps.Marker({
      //   position: this.center,
      //   map: this.map
      // });
    }

  render() {
    return (
      <div>
        <div style={{ height: '300px', width: '500px' }} ref={this.initMap}></div>
      </div>
    )
  }
}

export default Map;