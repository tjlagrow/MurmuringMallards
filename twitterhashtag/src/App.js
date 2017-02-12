import React, { Component, PropTypes } from 'react';
import Tweet from 'react-tweet'

class Social extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.timer;
  }

  componentDidMount() {
    /*function update() {
      $.ajax({
        url: 'http://localhost:3000/',
        dataType: 'json',
        cache: false,
        success: function(data) {
          console.log(data);
          console.log('success')
          this.setState({data: data});
        }.bind(this),
        error: function(xhr, status, err) {
          console.log('fail')
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    }
    update = update.bind(this);
    update();
    this.timer = setInterval(function() {
      update() }, 10000);*/
    var data = require('./tweets.json');
    this.setState({data: data});
  }

  componentWillUnmount() {
    //kill the social interval timer
    clearInterval(this.timer);
  }

  render () {
    return (
      <div style={{height:'670.907px',
                  width:'100%',
                  overflow:'scroll',
                  margin: '0 8px 0 8px'}}>
        {this.state.data.map(function(tweet) {
          return (
            <Tweet data={tweet} />
          );
        })}
       </div>
    );
  }
}

module.exports = Social;