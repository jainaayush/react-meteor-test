import React from 'react';
import AppMenu from './components/app-menu';
import PageHeader from './pages/page-header';
import ContentListView from './pages/content-list-view';

const App = () => (
  <>
    <AppMenu />
    <div className="page">
      <PageHeader />
      <ContentListView />
    </div>
  </>
);

export default App;
