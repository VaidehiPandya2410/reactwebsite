import React from 'react';
import ReactWordcloud from 'react-wordcloud';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import wordclouddata from '../assets/common_total_wordcloud.json';
import wordclouddataNegative from '../assets/negative_wordcloud.json';
import wordclouddataNeutral from '../assets/neutral_wordcloud.json';
import wordclouddataPositive from '../assets/positive_wordcloud.json';
const wordsNegative = wordclouddataNegative;
const words = wordclouddata;
const wordsNeutral = wordclouddataNeutral;
const wordsPositive = wordclouddataPositive;

const options = {
  rotations: 2,
  rotationAngles: [-90, 0],
};
const size = [550, 450];

export default function ReactWordCloud() {
  return (
    <div className='flex justify-evenly flex-wrap  '>
      <div className='  bg-white w-5/10 h-192 mb-4 rounded-lg shadow-lg transform hover:scale-105 transition ease-in-out duration-500'>
        <p className='text-center text-blue-800 font-openSans text-lg font-bold mt-4'>
          Wordcloud for major keywords in Recent Tweets
        </p>
        <ReactWordcloud words={words} options={options} size={size} />
      </div>
      <div className='bg-white w-5/10 h-192 mb-4 rounded-lg shadow-lg transform hover:scale-105 transition ease-in-out duration-500'>
        <p className='text-center text-blue-800 font-openSans text-lg font-bold mt-4'>
          Wordcloud for major keywords in Positive Tweets
        </p>
        <ReactWordcloud words={wordsPositive} options={options} size={size} />
      </div>
      <div className='bg-white w-5/10 h-192 mb-4 rounded-lg shadow-lg transform hover:scale-105 transition ease-in-out duration-500'>
        <p className='text-center text-blue-800 font-openSans text-lg font-bold mt-4'>
          Wordcloud for major keywords in Negative Tweets
        </p>
        <ReactWordcloud words={wordsNegative} options={options} size={size} />
      </div>
      <div className='bg-white w-5/10 h-192 mb-4 rounded-lg shadow-lg transform hover:scale-105 transition ease-in-out duration-500'>
        <p className='text-center text-blue-800 font-openSans text-lg font-bold mt-4'>
          Wordcloud for major keywords in Neutral Tweets
        </p>
        <ReactWordcloud words={wordsNeutral} options={options} size={size} />
      </div>
    </div>
  );
}
