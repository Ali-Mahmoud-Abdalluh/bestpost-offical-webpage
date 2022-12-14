import loadable from '@loadable/component'
const HomePage = loadable(() => import("./components/HomePage"))
const Blog = loadable(() => import('./components/BlogPage'))
import { Route, Routes } from "react-router-dom";

const App = () => (
  <div>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/blog" element={<Blog />} />
    </Routes>
  </div>
)

export default App