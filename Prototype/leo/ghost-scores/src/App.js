import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './index.css';
import './App.css';
var ScoreBoard = React.createClass({
	
	getInitialState: function(){
		console.log("init state");
		return {
			
			gameData: {},
			home_team: {name: 'unknown', score: 0},
			away_team: {name: 'unknown', score: 0},
			inning: 0
			
		}
		
	},
	
	setInfo: function() {
		console.log('about to set');
		if(typeof this.state.gameData === 'undefined') {
			console.log('error');
			return;
		}
		
		this.setState({home_team: {name: this.state.gameData.home_sname}});
		this.setState({away_team: {name: this.state.gameData.away_fname}});
		
		console.log('new states set');
		
		
	},
	
	componentWillMount: function() {
		console.log("about to get data");
		var _this = this;
		this.serverRequest = 
		axios
			.get(this.props.url)
			.then(function(result) {
				console.log("recieved");
				console.log(result.data.data.boxscore);    
				_this.setState({
					gameData: result.data.data.boxscore
				});
				console.log("setState done");
				_this.setInfo();
			});	
		
	},
	
	componentWillUnmount: function() {
		this.serverRequest.abort();
		
	},
	
	render: function(){
		
		if(typeof this.state.gameData.linescore === 'undefined'){
			console.log("it's undefined rn...");
			return(
				<div>Loading...</div>
			);
		}
		
		var final_home = 0;
		var final_away = 0;
		
		return (
			<div className="App">
				<table className="flat-table">
					<tbody>
					<tr>
						<th>Innings</th>
						{typeof this.state.gameData.linescore !== 'undefined' && this.state.gameData.linescore.inning_line_score.map(function(_inning, index){
							console.log(_inning.inning);
							return (
								<th>
									{_inning.inning}
								</th>
							);
						})}
						<th>Final</th>
					</tr>
					<tr>
						<th>{this.state.home_team.name}</th>
						{typeof this.state.gameData.linescore !== 'undefined' && this.state.gameData.linescore.inning_line_score.map(function(_inning, index){
							console.log(_inning.inning);
							final_home += parseInt(_inning.home);
							return (
								<td>
									{_inning.home}
								</td>
							);
						})}
						<td>{final_home}</td>
					</tr>
					<tr>
						<th>{this.state.away_team.name}</th>
						{this.state.gameData.linescore.inning_line_score.map(function(_inning, index){
							console.log(_inning.inning);
							final_away += parseInt(_inning.away);

							return (
								<td>
									{_inning.away}
								</td>
							);
						})}
						<td>{final_away}</td>
					</tr>
					</tbody>
				</table>
			</div>
		);
	}
});

export default ScoreBoard;
