import React, { useEffect, useState } from 'react';
import LOGO from '../src/images/logo.svg';
import IMG1 from '../src/images/illustration-editor-mobile.jpg';
import IMG2 from '../src/images/illustration-editor-desktop.svg';

const getWidth = () => document.documentElement.clientWidth;

const ResponsiveImage = () => {
  const [width, setWidth] = useState(getWidth());

  useEffect(() => {
    const resize = () => setWidth(getWidth());
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <div className=' md:w-40v'>
      {width >= 600 ? <img src={IMG2} className='' alt="" /> : <img src={IMG1} alt="" />}
    </div>
  );
};

const App = () => {
  return (
    <div className=' mx-0'>
      {/* SHOWCASE PART */}
      <div className=' bg-pOneBackground h-94v rounded-es-7xl text-white'>
        {/* CONTAINER */}
        <div className='container mx-auto h-full flex-col'>
          {/* FLEX ITEM 1 */}
          <div className='flex flex-row justify-between pt-12 md:pt-6'>
            <div className='flex flex-row space-x-12'>
              {/* LOGO */}
              <div className=''>
                <img src={LOGO} className="h-8 md:h-9" alt="" />
              </div>
              {/* NAV BAR */}
              <nav className='hidden md:flex pt-2 space-x-8'>
                <div>Product</div>
                <div>Company</div>
                <div>Connect</div>
              </nav>
              {/* Humbugerger */}
            </div>

            <div className='hidden md:flex space-x-5 pt-2'>
              <div>Login</div>
              <div className='bg-white text-pink-900 flex py-2 -mt-2 px-5 rounded-3xl'>
                <div className=''>Sign Up</div>
              </div>
            </div>
          </div>
          {/* FLEX ITEM 2 */}
          <div className='text-center mt-52 text-3.5xl md:text-6xl align-middle md:mt-80'>
            <div className=''>
              <h1>A modern publishing platform</h1>
            </div>
            <div className='text-bigbase text-center px-4 pt-4 md:pt-6 md:text-lg'>
              <p>Grow your audience and build your online brand</p>
            </div>
          </div>
          {/* FLEX ITEM 3 */}
          <div className='flex flex-row justify-around mt-12 md:justify-center md:space-x-4'>
            {/* FIRST BUTTON */}
            <div className='flex justify-center items-center bg-white text-pOneBackground py-2 px-4 rounded-3xl font-extrabold md:px-5'>
              <div>Start for Free</div>
            </div>
            {/* FIRST BUTTON */}
            <div className='flex justify-center items-center bg-transparent border-white border-1 text-white py-2 px-4 rounded-3xl font-extrabold md:px-5'>
              <div>Learn More</div>
            </div>
          </div>
        </div>
      </div>

      {/* SECOND PART */}
      <section className='my-20'>
        {/* container */}
        <div className="container mx-auto">
          {/* TITLE */}
          <div className='text-center font-bold text-2xlnHalf'>
            <h2>Designed for the future</h2>
          </div>
          {/* FLEX ITEM */}
          <div className='flex flex-col mt-10 md:flex-row-reverse md:relative md:items-center'>
            {/* IMAGE */}
            <div className=''>
              <ResponsiveImage />
            </div>
            {/* BOTH ARTICLES */}
            <div className=' flex flex-col my-10 md:w-35v'>
              {/* FIRST ARTICLE */}
              <article className=' '>
                <div className=' text-center text-2xlnHalf font-bold my-4 md:text-left'>
                  <h3>Introducing an extensible editor</h3>
                </div>
                <div className=' text-center text-bigbase md:text-left'>
                  <p>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.</p>
                </div>
              </article>
              {/* SECOND ARTICLE */}
              <article className=' mt-10'>
                <div className=' text-center text-2xlnHalf font-bold my-4 md:text-left'>
                  <h3>Robust content management</h3>
                </div>
                <div className=' text-center text-bigbase md:text-left'>
                  <p>Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
