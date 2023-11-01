import "./App.css";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Layout/Navbar";
import { BrowserRouter } from "react-router-dom";
import Table from "./components/Table/Table";
import AppBar from "./components/AppBar/AppBar";
import { FilterProvider } from "./components/services/context/store";
import { QueryClient, QueryClientProvider } from "react-query";
import Wallet from "./components/Wallet/Wallet";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <FilterProvider>
          <div className="App p-4">
            <AppBar />
            <Navbar />
            <Layout>
              <Wallet />
              <Table />
            </Layout>
          </div>
        </FilterProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
