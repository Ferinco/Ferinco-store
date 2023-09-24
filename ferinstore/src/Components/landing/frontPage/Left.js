import styled from "styled-components";

export default function Left() {
  return (
    <Wrapper className="left d-flex flex-column">
      <div className="left-body">
        <div className="left-body-text p-3">
          <h1 className="desktop-text pt-5 pb-3 px-3">
            Unleash Your <br /> Street Style with <br /> Our New Collection
          </h1>
          <h1 className="mobile-text desktop-text pt-5 pb-3 px-3">
            Unleash Your Street Style with Our New Collection
          </h1>
          <p className="px-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            eleifend ante sed lectus <br /> bibendum aliquet. Aenean commodo
            justo ut justo finibus, a efficitur ex consequat. <br /> In at
            placerat nisi, vitae tincidunt nunc. Aliqua
          </p>
        </div>
        <div className="left-bottom d-flex flex-row">
          <div className="left-bottom-image">
            <img src="../Images/bottom image.avif" />
            <div className="bottom-text">
              <h5>Zara Fashion week</h5>
              <p>
                letuye ftydieiid iftewi efgd eyyeyie ftye Ferinco will be suoer
                great, everyone will see!
              </p>
            </div>
          </div>
          <div className="left-bottom-image">
            <img src="../Images/bottom image 2.avif" />
            <div className="bottom-text">
              <h5>Zara Fashion week</h5>
              <p>
                letuye ftydieiid iftewi efgd eyyeyie ftye. Watch out for this
                young billionaire....{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0 !important;
  width: 70%;
  height: auto;
  justify-content: space-between;
  .left-body {
    padding-top: 20px;
    &-text {
      border-radius: 10px;
      background-color: rgb(243, 255, 243);
      .desktop-text {
        font-size: 50px;
        font-weight: 700;
      }
      .mobile-text {
        display: none;
      }
      p {
        font-size: 17px;
      }
    }
    .left-bottom {
      padding-top: 20px;
      gap: 20px;
      &-image {
        width: 450px;
        height: 250px;
        position: relative;
        border-radius: 10px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
          rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        img {
          height: 100%;
          width: 100%;
          border-radius: 10px;
          position: absolute;
          object-fit: cover;
        }
        .bottom-text {
          position: absolute;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: end;
          padding: 0 20px;
          border-radius: 10px;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 1),
            rgba(0, 0, 0, 0)
          );
          h5 {
            color: white;
            font-weight: 600;
          }

          p {
            color: white;
            font-size: 15px;
          }
        }
      }
    }
  }
  @media (min-width: 300px) and (max-width: 800px) {
    width: 100% !important;
    .desktop-text {
      display: none !important;
    }
    .mobile-text {
      display: flex !important;
    }
    .left-bottom{
      flex-direction: column !important;
      &-image {
width: 100% !important;

      }
    }
  }
`;
