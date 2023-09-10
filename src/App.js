import axios from 'axios';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [news, setNews] = useState([]);

  const getNews = async () => {
    try {
      const res = await axios.get(
        'https://newsapi.org/v2/everything?q=tesla&from=2023-08-10&sortBy=publishedAt&apiKey=f1c87e2bb86248de9f9492e513f93e1f'
      );
      console.log('++++++++++++++++++++', res.data.articles);
      setNews(res.data.articles);
    } catch (e) {
      console.log(e.messages);
    }
  };
  useEffect(() => {
    getNews();
  }, []);
  return (
    <div class='flex flex-wrap justify-center mt-10'>
      {news?.map((item, index) => (
        <div class='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-8'>
          <a href='#'>
            <img class='rounded-t-lg' src={item.urlToImage} alt='' />
          </a>
          <div class='p-5'>
            <a href='#'>
              <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                {item.title}
              </h5>
            </a>
            <p class='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              {item.title.slice(0, 15)}
            </p>
            <a
              href='#'
              class='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Read more
              <svg
                class='w-3.5 h-3.5 ml-2'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 10'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M1 5h12m0 0L9 1m4 4L9 9'
                />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
