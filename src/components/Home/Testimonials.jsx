import Container from "../Shared/Container";
import Title from "./Title";

const Testimonials = () => {
  return (
    <Container>
      <Title title={"Our Customers"} />
      <div className="grid grid-cols-4 my-24">
        <div className="mb-8 text-center bg-white rounded shadow dark:bg-gray-700">
          <div className="relative z-20 -mt-14 ">
            <div className="p-8">
              <span className="inline-block p-3 mb-3 text-xs text-white bg-blue-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-quote"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                </svg>
              </span>
              <p className="mb-4 text-base leading-7 text-gray-400">
                Keep on jumping to get the most of the jump rope exercise. It
                will help you to increase your bone density as well
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center pb-5 bg-blue-500 gap-x-4">
            <svg
              className="wave-top"
              viewBox="0 0 1439 147"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                  transform="translate(-1.000000, -14.000000)"
                  fillRule="nonzero"
                >
                  <g
                    className="wave fill-white dark:fill-gray-700"
                    fill="#f8fafc"
                  >
                    <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
                  </g>
                  <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
                    <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                      <path
                        d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                        opacity="0.100000001"
                      ></path>
                      <path
                        d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                        opacity="0.100000001"
                      ></path>
                      <path
                        d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                        opacity="0.200000003"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <div className="relative w-24 h-24 -mt-16 overflow-hidden border-4 border-white rounded-full">
              <img
                className="object-cover w-full h-full transition-all hover:scale-110"
                src="https://i.postimg.cc/Y9K6Wm7h/alexander-aguero-VGE4-S8-ZWg-unsplash.jpg"
                alt=""
              />
            </div>
            <div className="mt-3 text-center info">
              <h2 className="text-lg font-bold text-white dark:text-white">
                Jori King
              </h2>
              <span className="block text-xs font-semibold text-blue-300 uppercase dark:text-blue-300">
                Backend Developer
              </span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Testimonials;
