import React, { useEffect, useState } from 'react';
import LOGO from '../src/images/logo.svg';
import IMG1 from '../src/images/illustration-editor-mobile.jpg';
import IMG2 from '../src/images/illustration-editor-desktop.svg';
import IMG3 from '../src/images/illustration-phones-cropped.svg';
import IMG4 from '../src/images/illustration-laptop-desktop-cropped.svg';
import IMG5 from '../src/images/illustration-laptop-mobile-cropped.svg';

const getWidth = () => document.documentElement.clientWidth;

const ResponsiveImage = () => {
  const [width, setWidth] = useState(getWidth());

  useEffect(() => {
    const resize = () => setWidth(getWidth());
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <div className=' md:w-55v '>
      {width >= 767 ? <img src={IMG2} className='' alt="" /> : <img src={IMG1} alt="" />}
    </div>
  );
};

const ResponsiveImageTwo = () => {
  const [width1, setWidth1] = useState(getWidth());

  useEffect(() => {
    const resize = () => setWidth1(getWidth());
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <div className=''>
      {width1 >= 767 ? <img src={IMG4} className='' alt="" /> : <img src={IMG5} alt="" />}
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
      <section className='my-20 md:overflow-hidden mb-56'>
        {/* container */}
        <div className="container mx-auto">
          {/* TITLE */}
          <div className='text-center font-bold text-2xlnHalf'>
            <h2>Designed for the future</h2>
          </div>
          {/* FLEX ITEM */}
          <div className='flex flex-col mt-10 md:flex-row-reverse md:relative md:items-center md:w-full md:justify-between'>
            {/* IMAGE */}
            <div className=' md:-mr-40 xl:-mr-85 lg:-mr-55 '>
              <ResponsiveImage />
            </div>
            {/* BOTH ARTICLES */}
            <div className=' flex flex-col my-10 md:w-45v md:pr-0 lg:pr-14 xl:pr-0'>
              {/* FIRST ARTICLE */}
              <article className=' '>
                <div className=' text-center text-2xlnHalf font-bold my-4 md:text-left md:text-2xl lg:text-2xlnHalf'>
                  <h3>Introducing an extensible editor</h3>
                </div>
                <div className=' text-center text-bigbase md:text-left md:text-sm xl:text-bigbase'>
                  <p>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.</p>
                </div>
              </article>
              {/* SECOND ARTICLE */}
              <article className=' mt-10'>
                <div className=' text-center text-2xlnHalf font-bold my-4 md:text-left md:text-2xl lg:text-2xlnHalf'>
                  <h3>Robust content management</h3>
                </div>
                <div className=' text-center text-bigbase md:text-left md:text-sm xl:text-bigbase'>
                  <p>Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* THIRD PART */}
      <section className=' bg-bloo rounded-tr-6xl rounded-bl-6xl md:h-72 lg:h-80 xl:h-85 2xl:h-98'>
        {/* CONTAINER */}
        <div className=' container mx-auto md:h-full'>
          {/* FLEX ITEM */}
          <div className=' flex flex-col md:flex-row md:justify-between md:items-center md:h-full'>
            {/* IMAGE PHONE */}
            <div className=' -mt-44 md:w-30v md:-mt-14'>
              <img src={IMG3} className=' w-auto 2xl:max-h-100' alt="" />
            </div>
            {/* ARTICLE */}
            <article className=' my-5 md:my-0'>
              <div className=' text-center text-3.5xl font-bold text-white my-6 md:text-left md:text-2xlnHalf'>
                <h2>State of the Art Infrastructure</h2>
              </div>
              {/* PARAGRAPH */}
              <div className=' text-center text-white mb-20 md:w-40v md:text-left md:mb-0'>
                <p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
              </div>
            </article>
          </div>
        </div>
      </section>


      {/* FIFTH PART */}
      <section className=' mt-16 mb-20 md:mt-28 md:overflow-hidden'>
        {/* CONTAINER */}
        <div className=' container mx-auto'>
          {/* FLEX ITEM */}
          <div className=' flex flex-col md:flex-row md:justify-between md:items-center md:h-full'>
            {/* IMAGE PHONE */}
            <div className=' md:w-60v mb-9 md:-ml-52 xl:-ml-98 md:mb-8'>
              <ResponsiveImageTwo />
            </div>
            {/* BOTH ARTICLES */}
            <div className=' flex flex-col md:w-40v xl:w-35v'>
              {/* ARTICLE ONE */}
              <article className=' mt-5 md:my-0'>
                <div className=' text-center text-2xlnHalf font-bold mb-5 md:text-left md:text-xlnHalf xl:text-2xlnHalf'>
                  <h2>Free, open, simple</h2>
                </div>
                {/* PARAGRAPH */}
                <div className=' text-center md:text-left md:mb-0  md:text-bxs xl:text-base'>
                  <p>Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
                </div>
              </article>
              {/* ARTICLE TWO */}
              <article className=' mt-9 md:mt-12'>
                <div className=' text-center text-2xlnHalf font-bold mb-5 md:text-left md:text-xlnHalf xl:text-2xlnHalf'>
                  <h2>Powerful tooling</h2>
                </div>
                {/* PARAGRAPH */}
                <div className=' text-center md:text-left md:mb-0 md:text-bxs xl:text-base'>
                  <p>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      {/* SIXTH PART */}
      <footer className=' bg-footer text-neutral-400 py-6 rounded-tr-6xl md:py-16'>
        {/* CONTAINER */}
        <div className="container mx-auto">
          {/* FLEX ITEM */}
          <div className='flex flex-col max-md:items-center text-center space-y-7 md:flex-row md:space-y-0 md:justify-between'>
            {/* LOGO */}
            <div className=' mt-14 mb-10 md:mt-0 md:mb-0'>
              <img src={LOGO} alt="" />
            </div>
            {/* PRODUCT */}
            <ul className=' flex flex-col space-y-1'>
              <li className=' mb-5 font-bold text-white'>Product</li>
              <li><a href="/">Overview</a></li>
              <li><a href="/about">Pricing</a></li>
              <li><a href="/services">Marketplace</a></li>
              <li><a href="/contact">Features</a></li>
              <li><a href="/contact">Integrations</a></li>
            </ul>
            {/* COMPANY */}
            <ul className=' flex flex-col space-y-1'>
              <li className=' mb-5 font-bold text-white'>Company</li>
              <li><a href="/">About</a></li>
              <li><a href="/about">Team</a></li>
              <li><a href="/services">Blog</a></li>
              <li><a href="/contact">Careers</a></li>
            </ul>
            {/* CONNECT */}
            <ul className=' flex flex-col space-y-1'>
              <li className=' mb-5 font-bold text-white'>Connect</li>
              <li><a href="/">Contact</a></li>
              <li><a href="/about">Newsletter</a></li>
              <li><a href="/services">Linkedin</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;