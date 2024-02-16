import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="div">
        <div className="div-2">
          <div className="div-3">
            <div className="column">
              <div className="div-4">
                <div className="div-5">
                  <div className="column-2">
                    <img loading="lazy" srcSet="..." className="img" />
                  </div>
                  <div className="column-3">
                    <div className="div-6">
                      <div className="div-7">Contact Us</div>
                      <div className="div-8">
                        Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate
                        near YTM Market, XYZ-343434
                      </div>
                      <div className="div-9">example2020@gmail.com</div>
                      <div className="div-10">(904) 443-0343</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column-4">
              <div className="div-11">
                <div className="div-12">
                  <div className="column-5">
                    <div className="div-13">
                      <div className="div-14">More</div>
                      <div className="div-15">About Us</div>
                      <div className="div-16">Products</div>
                      <div className="div-17">Career</div>
                      <div className="div-18">Contact Us</div>
                    </div>
                  </div>
                  <div className="column-6">
                    <div className="div-19">
                      <div className="div-20">
                        <img loading="lazy" srcSet="..." className="img-2" />
                        <img loading="lazy" src="truc.jpg" className="img-3" />
                      </div>
                      <div className="div-21">© 2022 Food Truck Example</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .div {
          background-color: #f8f8f8;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 50px 60px;
        }
        @media (max-width: 991px) {
          .div {
            padding: 0 20px;
          }
        }
        .div-2 {
          margin: 41px 42px 0 43px;
        }
        @media (max-width: 991px) {
          .div-2 {
            max-width: 100%;
            margin: 40px 10px 0 0;
          }
        }
        .div-3 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-3 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 61%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .div-4 {
          flex-grow: 1;
        }
        @media (max-width: 991px) {
          .div-4 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-5 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-5 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 60%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column-2 {
            width: 100%;
          }
        }
        .img {
          aspect-ratio: 1.28;
          object-fit: auto;
          object-position: center;
          width: 161px;
          max-width: 100%;
          align-self: stretch;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .img {
            margin-top: 40px;
          }
        }
        .column-3 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 40%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-3 {
            width: 100%;
          }
        }
        .div-6 {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          font-size: 15px;
          color: #646874;
          font-weight: 400;
          line-height: 157%;
        }
        @media (max-width: 991px) {
          .div-6 {
            margin-top: 40px;
          }
        }
        .div-7 {
          color: var(--primary, #0e2368);
          letter-spacing: 0.57px;
          font: 600 19px/144% Source Sans Pro, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-8 {
          font-family: Source Sans Pro, -apple-system, Roboto, Helvetica,
            sans-serif;
          line-height: 23px;
          margin-top: 28px;
        }
        .div-9 {
          font-family: Source Sans Pro, -apple-system, Roboto, Helvetica,
            sans-serif;
          margin-top: 26px;
        }
        .div-10 {
          text-align: center;
          font-family: Source Sans Pro, -apple-system, Roboto, Helvetica,
            sans-serif;
          margin-top: 24px;
        }
        .column-4 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 39%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-4 {
            width: 100%;
          }
        }
        .div-11 {
          flex-grow: 1;
        }
        @media (max-width: 991px) {
          .div-11 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-12 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-12 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column-5 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 50%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column-5 {
            width: 100%;
          }
        }
        .div-13 {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          font-size: 15px;
          color: #646874;
          font-weight: 400;
          white-space: nowrap;
          line-height: 180%;
        }
        @media (max-width: 991px) {
          .div-13 {
            margin-top: 40px;
            white-space: initial;
          }
        }
        .div-14 {
          color: var(--primary, #0e2368);
          letter-spacing: 0.57px;
          font: 600 19px/144% Source Sans Pro, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-15 {
          font-family: Source Sans Pro, -apple-system, Roboto, Helvetica,
            sans-serif;
          line-height: 186%;
          margin-top: 30px;
        }
        @media (max-width: 991px) {
          .div-15 {
            white-space: initial;
          }
        }
        .div-16 {
          font-family: Source Sans Pro, -apple-system, Roboto, Helvetica,
            sans-serif;
          margin-top: 29px;
        }
        .div-17 {
          font-family: Source Sans Pro, -apple-system, Roboto, Helvetica,
            sans-serif;
          margin-top: 30px;
        }
        .div-18 {
          font-family: Source Sans Pro, -apple-system, Roboto, Helvetica,
            sans-serif;
          margin-top: 29px;
        }
        @media (max-width: 991px) {
          .div-18 {
            white-space: initial;
          }
        }
        .column-6 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 50%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-6 {
            width: 100%;
          }
        }
        .div-19 {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-19 {
            margin-top: 40px;
          }
        }
        .div-20 {
          align-self: end;
          display: flex;
          gap: 7px;
        }
        .img-2 {
          aspect-ratio: 1.33;
          object-fit: auto;
          object-position: center;
          width: 102px;
          max-width: 100%;
        }
        .img-3 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 21px;
          margin: auto 0;
        }
        .div-21 {
          color: var(--828-b-9-c, #828b9c);
          text-align: center;
          margin-top: 85px;
          white-space: nowrap;
          font: 400 15px/171% Roboto, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-21 {
            margin-top: 40px;
            white-space: initial;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
