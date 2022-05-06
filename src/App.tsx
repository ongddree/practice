import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilTestPage, FetchTestPage } from './pages';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/fetch-test" element={<FetchTestPage />} />
            <Route path="/recoil-test" element={<RecoilTestPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
