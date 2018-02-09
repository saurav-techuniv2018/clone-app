import React from 'react';

import Trend from './trend';
import getTrendingItems from './lib/getTrendingItems';

class App extends React.Component {
  constructor() {
    super();

    this.trendingItems = getTrendingItems();
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
        {this.trendingItemRenderings()}
      </div>
    );
  }
}
export default App;
