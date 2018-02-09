import React from 'react';

import Trend from './trend';
import Card from './card';
import getTrendingItems from './lib/get-trending-items';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.trendingItems = getTrendingItems();
    this.appName = 'Latest Social Trends';
  }

  trendingItemRenderings() {
    return this.trendingItems.reduce((accumulator, trend) => {
      accumulator.push(<Trend title={trend.title} isTrending={trend.isTrending} />);
      return accumulator;
    }, []);
  }

  render() {
    return (
      <div className="App">
        <Card
          id="outerCard"
          colorClass="grey"
        >
          <Card
            id="innerCard"
            colorClass="blue"
          >
            <h3>{this.appName}</h3>
            <div>
              {this.trendingItemRenderings()}
            </div>
          </Card>
        </Card>
      </div>
    );
  }
}
export default App;
