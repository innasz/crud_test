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
      <table class='table-fixed'>
        <thead>
          <tr>
            <th>title</th>
            <th>source</th>
            <th>content</th>
            <th>발간일</th>
            <th>바로가기</th>
          </tr>
        </thead>
        <tbody>
          {news?.map((item, index) => (
            <tr>
              <td>{item.title.slice(0, 20)}</td>
              <td>{item.source.name}</td>
              <td>{item.content.slice(0, 60)}</td>
              <td>{item.publishedAt.slice(0, 10)}</td>
              <td>
                <button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                  바로가기
                </button>
              </td>
            </tr>
          ))}{' '}
        </tbody>
      </table>
    </div>
  );
};

export default App;
