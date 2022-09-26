import React from 'react'
import MintButton from './MintButton';
import Count from './Count';


const Hero = () => {


  return (
    <>
    <div className="relative z-20 mx-auto gap-x-4">
      <div className="container px-12 flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
        <div className="box-shadow mt-16 mb-16">
            <h1 className="text-6xl font-bold xl:text-7xl">Cow NFT</h1>
            <p className="text-3xl font-medium text-gray-300 xl:text-lg">
                Mint for free!
            </p>
            <p className="text-md font-medium text-gray-300 xl:text-lg subtitle">
                CowNFT is powered by Cowsigner and lets you create your NFT even with an empty wallet!
            </p>
        </div>
        <div className="flex flex-col items-center space-x-4 space-y-4 sm:flex-row sm:space-y-0">
          <a target="_blank" href="https://explorer.solana.com/address/GBWse4e7P9FHTiVNDEu8kKgsnuftNi3YbqpkpcaYBwUQ?cluster=devnet">
            <div className="flex w-fit space-x-2 rounded-2xl bg-gray-600 px-4 py-3 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-[1px] hover:bg-gray-700">
              <span>View on Explorer</span>{" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 10 600 400"
                height={26}
                width={26}
                xmlns="http://www.w3.org/2000/svg"
              >
                {/*<path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />*/}
                  <path className="cls-1"
                        d="M84.53,358.89A16.63,16.63,0,0,1,96.28,354H501.73a8.3,8.3,0,0,1,5.87,14.18l-80.09,80.09a16.61,16.61,0,0,1-11.75,4.86H10.31A8.31,8.31,0,0,1,4.43,439Z"
                        transform="translate(-1.98 -55)"/>
                  <path className="cls-2"
                        d="M84.53,59.85A17.08,17.08,0,0,1,96.28,55H501.73a8.3,8.3,0,0,1,5.87,14.18l-80.09,80.09a16.61,16.61,0,0,1-11.75,4.86H10.31A8.31,8.31,0,0,1,4.43,140Z"
                        transform="translate(-1.98 -55)"/>
                  <path className="cls-3"
                        d="M427.51,208.42a16.61,16.61,0,0,0-11.75-4.86H10.31a8.31,8.31,0,0,0-5.88,14.18l80.1,80.09a16.6,16.6,0,0,0,11.75,4.86H501.73a8.3,8.3,0,0,0,5.87-14.18Z"
                        transform="translate(-1.98 -55)"/>
              </svg>
            </div>
          </a>
          <MintButton/>
        </div>
      </div>

      <div className="ml-10 flex mt-10">
        <div className="relative -skew-y-3 mt-24 z-10 skew-x-6">
          <div className="h-[15rem] w-[11rem] rounded-2xl transition-all duration-300 cursor-pointer bg-gray-900 shadow-xl shadow-indigo-500/30 xl:h-[23rem] xl:w-[18rem] hover:scale-90">
            <div className="relative h-[11rem] w-full xl:h-[18rem]">
              <span
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0
                }}
              >
                <img
                  alt="Top Card"
                  src="/images/cowchain1.png"
                  decoding="async"
                  data-nimg="fill"
                  className="heroCard"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    boxSizing: "border-box",
                    padding: 0,
                    border: 0,
                    borderRadius: '17px',
                    margin: "auto",
                    display: "block",
                    width: 0,
                    height: 0,
                    minWidth: "100%",
                    maxWidth: "100%",
                    minHeight: "100%",
                    maxHeight: "100%",
                    objectFit: "cover"
                  }}
                />
              </span>
            </div>
            <div className="flex h-[4rem] w-full items-center justify-between px-4 xl:h-[5rem]">
              <div className="flex items-center space-x-3">
                <div className="relative h-6 w-6 xl:h-8 xl:w-8">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0
                    }}
                  >
                    <img
                      alt="My Profile 1"
                      src="/images/cowchain1.png"
                      decoding="async"
                      data-nimg="fill"
                      className="heroUser"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: 0,
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        objectFit: "cover"
                      }}
                    />
                   </span>
                </div>
                <div>
                  <p className="text-xs text-gray-300 xl:text-sm">#7899</p>
                  <p className="text-md font-medium text-indigo-300 xl:text-xl">
                    30 USDT
                  </p>
                </div>
              </div>
              <span>
                🌟
              </span>
            </div>
          </div>
        </div>
        <div className="relative skew-y-3 -translate-x-20 -skew-x-6">
          <div className="h-[15rem] w-[11rem] rounded-2xl transition-all duration-300 cursor-pointer bg-gray-900 shadow-xl shadow-indigo-500/30 xl:h-[23rem] xl:w-[18rem] hover:scale-90">
            <div className="relative h-[11rem] w-full xl:h-[18rem] hover:rotate[0px] hover:scale-3">
              <span
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  borderRadius: '17px',
                  margin: 0,
                  padding: 0,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0
                }}
              >
                <img
                  alt="Back Card"
                  src="/images/cowchain2.png"
                  decoding="async"
                  data-nimg="fill"
                  className="heroCard"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    boxSizing: "border-box",
                    padding: 0,
                    border: 0,
                    margin: "auto",
                    display: "block",
                    width: 0,
                    height: 0,
                    minWidth: "100%",
                    maxWidth: "100%",
                    minHeight: "100%",
                    maxHeight: "100%",
                    objectFit: "cover"
                  }}
                />

              </span>
            </div>
            <div className="flex h-[4rem] w-full items-center justify-between px-4 xl:h-[5rem]">
              <div className="flex items-center space-x-3">
                <div className="relative h-6 w-6 xl:h-8 xl:w-8">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0
                    }}
                  >
                    <img
                      alt="My Profile 2"
                      src="/images/cowchain2.png"
                      decoding="async"
                      data-nimg="fill"
                      className="heroUser"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: 0,
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        objectFit: "cover"
                      }}

                    />

                  </span>
                </div>
                <div>
                  <p className="text-xs text-gray-300 xl:text-sm">#356</p>
                  <p className="text-md font-medium text-indigo-300 xl:text-xl">
                    30 USDT
                  </p>
                </div>
              </div>
              <span>
                🌟
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
 
  </>
  )
}

export default Hero
