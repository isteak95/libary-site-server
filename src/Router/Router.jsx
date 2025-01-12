import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import AddBook from "../Pages/AddBook/AddBook";
import AllBook from "../Pages/All Book/AllBook";
import Home from "../Pages/Home/Home";
import BookCategories from "../BookCategories/BookCategories";
import BookDetails from "../Pages/BookDetails/BookDetails";
import BrooowedBook from "../Pages/BrooowedBook/BrooowedBook";
import ReadBook from "../Pages/ReadBook/ReadBook";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdatePage from "../Pages/UpdatePage/UpdatePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addbook",
        element: <PrivateRoute><AddBook></AddBook></PrivateRoute>,
      },
      {
        path: "/allbook",
        element: <PrivateRoute><AllBook></AllBook></PrivateRoute>,
        loader: () => fetch("http://localhost:5000/allbook")
      },
      {
        path: "/borrowedbooks",
        element: <PrivateRoute><BrooowedBook></BrooowedBook></PrivateRoute>,
        loader: () => fetch("http://localhost:5000/borrowbook"),
      },
      {
        path: "/novel/read/:bookId",
        element: <ReadBook></ReadBook>,
        loader: ({ params }) => fetch(`http://localhost:5000/novel/${params.bookId}`),
      },
      {
        path: "/thriller/read/:bookId",
        element: <ReadBook></ReadBook>,
        loader: ({ params }) => fetch(`http://localhost:5000/thriller/${params.bookId}`),
      },
      {
        path: "/history/read/:bookId",
        element: <ReadBook></ReadBook>,
        loader: ({ params }) => fetch(`http://localhost:5000/history/${params.bookId}`),
      },
      {
        path: "/drama/read/:bookId",
        element: <ReadBook></ReadBook>,
        loader: ({ params }) => fetch(`http://localhost:5000/drama/${params.bookId}`),
      },
      {
        path: "/sci-fi/read/:bookId",
        element: <ReadBook></ReadBook>,
        loader: ({ params }) => fetch(`http://localhost:5000/sci-fi/${params.bookId}`),
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/novel",
        element: <BookCategories></BookCategories>,
        loader: () => fetch("http://localhost:5000/novel"),
      },
      {
        path: "/thriller",
        element: <BookCategories></BookCategories>,
        loader: () => fetch("http://localhost:5000/thriller"),
      },
      {
        path: "/history",
        element: <BookCategories></BookCategories>,
        loader: () => fetch("http://localhost:5000/history"),
      },
      {
        path: "/drama",
        element: <BookCategories></BookCategories>,
        loader: () => fetch("http://localhost:5000/drama"),
      },
      {
        path: "/sci-fi",
        element: <BookCategories></BookCategories>,
        loader: () => fetch("http://localhost:5000/sci-fi"),
      },
      {
        path: "/novel/details/:bookId",
        element: <PrivateRoute><BookDetails></BookDetails></PrivateRoute>,
        loader: () => fetch("http://localhost:5000/novel"),
      },
      {
        path: "/thriller/details/:bookId",
        element: <PrivateRoute><BookDetails></BookDetails></PrivateRoute>,
        loader: () => fetch("http://localhost:5000/thriller"),
      },
      {
        path: "/history/details/:bookId",
        element: <PrivateRoute><BookDetails></BookDetails></PrivateRoute>,
        loader: () => fetch("http://localhost:5000/history"),
      },
      {
        path: "/drama/details/:bookId",
        element: <PrivateRoute><BookDetails></BookDetails></PrivateRoute>,
        loader: () => fetch("http://localhost:5000/drama"),
      },
      {
        path: "/sci-fi/details/:bookId",
        element: <PrivateRoute><BookDetails></BookDetails></PrivateRoute>,
        loader: () => fetch("http://localhost:5000/sci-fi"),
      },
      {
        path: "/novel/update/:bookId",
        element: <PrivateRoute><UpdatePage></UpdatePage></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/novel/${params.bookId}`) 
      },
      {
        path: "/thriller/update/:bookId",
        element: <PrivateRoute><UpdatePage></UpdatePage></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/thriller/${params.bookId}`)
      },
      {
        path: "/history/update/:bookId",
        element: <PrivateRoute><UpdatePage></UpdatePage></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/history/${params.bookId}`) 
      },
      {
        path: "/drama/update/:bookId",
        element: <PrivateRoute><UpdatePage></UpdatePage></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/drama/${params.bookId}`) 
      },
      {
        path: "/sci-fi/update/:bookId",
        element: <PrivateRoute><UpdatePage></UpdatePage></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/sci-fi/${params.bookId}`) 
      },
      
    ],
  },
]);

export default router;
