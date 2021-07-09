import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'

import { ME, Tabs, List } from './components'

const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ME />
      <Tabs />
      <List />
    </QueryClientProvider>
  );
}
 
export default App;
