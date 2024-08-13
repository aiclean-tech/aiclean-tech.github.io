import { lazy } from 'react';

const Home = lazy(() => import('../views/Home'));
const Product = lazy(() => import('../views/Products'));
const Research = lazy(() => import('../views/Research'));
const Blog = lazy(() => import('../views/Blog/'));
const ArticleDetail = lazy(() => import('../views/Research/ArticleDetail'));
const NewsDetail = lazy(() => import('../views/Blog/NewsDetail'));
const Rank = lazy(() => import('../views/Blog/Rank'));


const routes = [
  {
    id: 'home',
    path: '/',
    component: Home,
  },
  {
    id: 'product',
    path: '/product',
    component: Product,
  },
  {
    id: 'research',
    path: '/research',
    component: Research,
  },
  {
    id: 'blog',
    path: '/blog',
    component: Blog,
  },
  {
    id: 'articleDetail',
    path: '/articleDetail/:id',
    component: ArticleDetail,
  },
  {
    id: 'newsDetail',
    path: '/newsDetail/:id',
    component: NewsDetail,
  },
  {
    id: 'rank',
    path: '/rank',
    component: Rank,
  },
];

export default routes;