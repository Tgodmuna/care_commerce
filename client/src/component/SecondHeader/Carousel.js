import React, { Component } from "react";
import { CarouselData } from "./CarouselData";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import EastIcon from '@mui/icons-material/East';
import Swipe from "react-easy-swipe";
import TopCategory from "../Pages/TopCategory";
// import Brand from "../FirstHeader/Brand";
// import Consultation from "../FirstHeader/Consultation";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      paused: false,
    };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.paused === false) {
        let newSlide =
          this.state.currentSlide === CarouselData.length - 1
            ? 0
            : this.state.currentSlide + 1;
        this.setState({ currentSlide: newSlide });
      }
    }, 3000);
  }

  nextSlide = () => {
    let newSlide =
      this.state.currentSlide === CarouselData.length - 1
        ? 0
        : this.state.currentSlide + 1;
    this.setState({ currentSlide: newSlide });
  };

  prevSlide = () => {
    let newSlide =
      this.state.currentSlide === 0
        ? CarouselData.length - 1
        : this.state.currentSlide - 1;
    this.setState({ currentSlide: newSlide });
  };

  setCurrentSlide = (index) => {
    this.setState({ currentSlide: index });
  };

  render() {
    return (
      <div className="mt-8">
        <div className="w-full h-full flex overflow-hidden relative">
          <AiOutlineLeft
            onClick={this.prevSlide}
            className="absolute left-0 text-3xl inset-y-1/2 text-white cursor-pointer"
          />

          <Swipe onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}>
            {CarouselData.map((slide, index) => {
              return (
                <div key={index} className="relative">
                  <img
                    src={slide.image}
                    alt="This is a carousel slide"
                    className={
                      index === this.state.currentSlide
                        ? "block w-full h-full object-cover"
                        : "hidden"
                    }
                    onMouseEnter={() => {
                      this.setState({ paused: true });
                    }}
                    onMouseLeave={() => {
                      this.setState({ paused: false });
                    }}
                  />
                  {index === this.state.currentSlide && (
                    <div className="absolute right-0 top-72 mr-12 transform -translate-y-1/2 p-4 text-white">
                      <div>
                        <p className="font-bold text-3xl text-white">Explore to our related product</p>
                        <div>
                          <h1 className="font-semibold text-2xl text-white">Shop the best product for your home </h1>
                        </div>
                        <button className="bg-indigo-500 text-white p-2 rounded-full mt-4 hover:bg-black-500">
                         Explore Product <EastIcon />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </Swipe>

          <div className="absolute w-full flex justify-center bottom-0">
            {CarouselData.map((element, index) => {
              return (
                <div
                  className={
                    index === this.state.currentSlide
                      ? "h-2 w-2 bg-blue-700 rounded-full mx-2 mb-2 cursor-pointer"
                      : "h-2 w-2 bg-white rounded-full mx-2 mb-2 cursor-pointer"
                  }
                  key={index}
                  onClick={() => {
                    this.setCurrentSlide(index);
                  }}
                ></div>
              );
            })}
          </div>

          <AiOutlineRight
            onClick={this.nextSlide}
            className="absolute right-0 text-3xl inset-y-1/2 text-white cursor-pointer"
          />
        </div>

       <TopCategory />
      </div>
    );
  }
}

export default Carousel;
