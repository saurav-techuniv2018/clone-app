import React from 'react';

import Trend from './trend';
import Card from './card';
import getTrendingItems from './lib/get-trending-items';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.trendingItems = getTrendingItems();
    this.appName = 'Latest Social Trends';
  }

  trendingItemRenderings() {
    return this.trendingItems.reduce((accumulator, trend) => {
      accumulator.push(<li><Trend title={`#${trend.title}`} isTrending={trend.isTrending} /></li>);
      return accumulator;
    }, []);
  }

  render() {
    return (
      <div className="App">
        <Card id="outerCard">
          <Card id="innerCard">
            <h3>{this.appName}</h3>
            <ul>
              {this.trendingItemRenderings()}
            </ul>
          </Card>
        </Card>
      </div>
    );
  }
}
export default App;
