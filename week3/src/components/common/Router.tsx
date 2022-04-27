import Error404 from "pages/Error404";
import Main from "pages/Main";
import PreMain from "pages/PreMain";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PreMain />} />
        <Route path="/king" element={<Main />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
