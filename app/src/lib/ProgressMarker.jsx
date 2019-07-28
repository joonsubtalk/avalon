import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProgressMarkers from './ProgressMarkers';


export default class ProgressMarker extends Component {
  
    state = {
        initialSlice : 0,
        lastSlice : 5,
    }

  render() {
      const  {initialSlice, lastSlice} = this.state;
      const { arr,
        activeMarker,
        maxShow } = this.props;
      const displayArr = arr.slice(initialSlice,lastSlice);
    return (
      <div className="o-progressMarker">
        <div className="o-progressMarker__container">
            {
                displayArr.map((data, idx)=>{
                    const isActive = idx === activeMarker
                        ? true
                        : false;
                    return <ProgressMarkers
                        key={idx}
                        isActive={isActive}>
                            {data}
                        </ProgressMarkers>
                })
            }
        </div>
      </div>
    )
  }
}
