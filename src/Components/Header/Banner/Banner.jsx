
const Banner = () => {
    return (
        <div className="">
            <div className="carousel w-full lg:h-[1000px] h-[433px] md:h-[550px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img className="w-full opacity-" src="https://i.ibb.co/4VHtXts/watch-ultra-01-500x500.jpg" alt="a5dmrvc7juuyiaj6-0-0-tablet-0-1-X" border="0" />
                    <div className="absolute  lg:my-40 md:my-20 lg:ml-[720px] md:ml-[280px] ml-[140px] my-14 text-center items-center">
                        <h1 className=" lg:font-extrabold lg:text-7xl md:text-3xl md:font-bold text-2xl font-bold text-white">WELCOME</h1>
                        <p className="text-red-400 lg:text-5xl lg:mt-16 md:mt-16 mt-6 lg:font-semibold md:font-semibold">
                            TO
                        </p>
                        <h1 className=" text-cyan-500 lg:text-6xl md:text-3xl font-extrabold lg:mt-14 md:mt-14 mt-5">BANG LIBRARY</h1>
                        <button className=" btn-primary font-bold text-2xl py-3 px-5 lg:py-10 lg:px-20 mt-24 rounded-xl">Buy Book</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full">
                    <img className="w-full" src="https://i.ibb.co/P96VM5m/online-library-website-page-for-landing-books-vector-26211965.jpg" alt="hands-free-voice-control" border="0" />
                    <div className=" absolute  lg:my-12 md:my-8 md:mx-10 md:text-xl  lg:mt-14 mx-5 my-4  ml-10  " >
                        <h1 className="text-cyan-500 lg:font-extrabold md:font-bold lg:text-6xl text-bold text-2xl">Reading is So Important for Student Success</h1>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img className="w-full" src="https://i.ibb.co/fQRVfwF/original-2a51f0cf6f4a0a4bffcf6698f704f3f2.jpg" alt="bd-feature-let-the-higher-power-take-over-534141073" border="0" />
                    <div className=" absolute  lg:mt-10 md:mt-1 mt-16 md:mx-3 lg:mx-16 mx-20" >
                        <h1 className="text-cyan-500 font-bold lg:text-6xl md:text-2xl"></h1>
                        <p className="text-white lg:text-3xl mt-6  font-semibold"> 
                        </p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img className="w-full" src="https://i.ibb.co/L176sKy/online-library-website-design-read-books-vector-29646344.jpg" alt="im-850887" border="0" />
                    <div className=" absolute lg:ml-[1450px] mr-10 md:ml-[580px]  lg:mt-[500px] md:mt-[280px] mt-52 ml-80  text-center">
                        <h1 className="text-white font-bold md:text-3xl lg:text-6xl">Make your life  Beautifull by reading book  </h1>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;