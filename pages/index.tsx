import React from 'react';
import Header from './components/Header';

interface Props {}

const IndexPage: React.FC<Props> = () => {
  return (
    <div>
      <Header />
      {/* Hero + FeatureGrid */}
      <section>
        <h1>Hero</h1>
        <p>描述</p>
      </section>
      <section>
        <h2>FeatureGrid</h2>
        <ul>
          <li><a href="#">功能 1</a></li>
          <li><a href="#">功能 2</a></li>
        </ul>
      </section>
    </div>
  );
};

export default IndexPage;
