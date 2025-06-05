import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Directory from './pages/Directory';
import Search from './pages/Search';
import InsertData from './pages/insert_data';
import Disclaimer from './pages/Disclaimer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundCancellation from './pages/RefundCancellation';
import TermsCondition from './pages/TermsCondition';
import DirectoryDetails from './pages/DirectoryDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="directory" element={<Directory />} />
          <Route path="directory/:slug" element={<DirectoryDetails />} />
          <Route path="search" element={<Search />} />
          <Route path="insert_data" element={<InsertData />} />
          <Route path="disclaimer" element={<Disclaimer />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="refund-cancellation" element={<RefundCancellation />} />
          <Route path="terms-conditions" element={<TermsCondition />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
