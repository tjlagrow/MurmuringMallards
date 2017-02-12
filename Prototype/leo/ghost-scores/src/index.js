import React from 'react';
import ReactDOM from 'react-dom';
import ScoreBoard from './App';
import './index.css';

ReactDOM.render(
  <ScoreBoard url='http://gd.mlb.com/components/game/mlb/year_2016/month_06/day_17/gid_2016_06_17_anamlb_oakmlb_1/boxscore.json' />,
  document.getElementById('board1')
);

ReactDOM.render(
  <ScoreBoard url='http://gd.mlb.com/components/game/mlb/year_2015/month_09/day_30/gid_2015_09_30_oakmlb_anamlb_1/boxscore.json' />,
  document.getElementById('board2')
);
