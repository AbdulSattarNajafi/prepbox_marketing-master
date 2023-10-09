import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './layout/Layout';
import Home from './pages/Home';
import Tutor from './pages/Tutor';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/Privacy';
import Terms from './pages/Terms';
import Tutorless from './pages/Tutorless';
import ThankYou from './pages/ThankYou';
import SupportPage from './pages/SupportPage';
import SolutionVideo from './pages/SolutionVideo';
import Worksheet from './pages/Worksheet';
import BookLvl1 from './pages/BookCover';
import Material from './pages/Material';
import SolutionDetail from './components/Solution/solution-detail';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,

        children: [
            { index: true, element: <Home /> },
            { path: 'tutor', element: <Tutor /> },
            { path: 'blog', element: <Blog /> },
            { path: 'worksheets', element: <Worksheet /> },
            { path: 'worksheets/:bookName', element: <BookLvl1 /> },
            { path: 'worksheets/:bookName/:chapterName/:materialName', element: <Material /> },
            {
                path: 'worksheets/:bookName/:chapterName/:materialName/:questionId',
                element: <SolutionDetail />,
            },

            { path: 'support', element: <SupportPage /> },
            { path: 'product/prepbox-ai', element: <Tutorless /> },

            { path: 'blog/:postId', element: <BlogPost /> },
            { path: 'solution/:solutionId', element: <SolutionVideo /> },

            { path: 'privacy-policy', element: <PrivacyPolicy /> },
            { path: 'terms-of-use', element: <Terms /> },

            //SEO pages with repetitive componenets
            { path: 'math-tutoring', element: <Home /> },
            { path: 'trigonometry-math-tutoring', element: <Home /> },
            { path: 'algebra-math-tutoring', element: <Home /> },

            //one-off pages
            { path: 'thankyou', element: <ThankYou /> },
        ],
    },
    { path: '*', element: <NotFound /> },
]);

function App() {
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
