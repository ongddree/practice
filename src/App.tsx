import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  CodingApiPage,
  MemoPage,
  MemoReducerPage,
  MemoCustomInputPage,
  DebouncePage,
  FetchTestPage,
} from './pages';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/coding-api" element={<CodingApiPage />} />
            <Route path="/memo" element={<MemoPage />} />
            <Route path="/memo-reducer" element={<MemoReducerPage />} />
            <Route path="/memo-custom" element={<MemoCustomInputPage />} />
            <Route path="/debounce" element={<DebouncePage />} />
            <Route path="/fetch-test" element={<FetchTestPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
