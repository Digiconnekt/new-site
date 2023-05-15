import { useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Index = () => {
  const [isShowMoreSocialMedia, setIsShowMoreSocialMedia] = useState(false);

  return (
    <>
      <div
        className="position-fixed"
        style={{ right: "20px", bottom: "20px", zIndex: "9999" }}
      >
        <ul className="d-flex flex-column items-center gap-2 list-inline mb-0">
          {isShowMoreSocialMedia && (
            <OverlayTrigger
              placement="left"
              overlay={<Tooltip>Facebook</Tooltip>}
            >
              <li
                className="d-flex justify-content-center align-items-center bg-dark"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              >
                <a href="" className="text-white">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
            </OverlayTrigger>
          )}

          {isShowMoreSocialMedia && (
            <OverlayTrigger
              placement="left"
              overlay={<Tooltip>LinkedIn</Tooltip>}
            >
              <li
                className="d-flex justify-content-center align-items-center bg-dark"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              >
                <a href="" className="text-white">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
            </OverlayTrigger>
          )}

          {isShowMoreSocialMedia && (
            <OverlayTrigger
              placement="left"
              overlay={<Tooltip>Twitter</Tooltip>}
            >
              <li
                className="d-flex justify-content-center align-items-center bg-dark"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              >
                <a href="" className="text-white">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
            </OverlayTrigger>
          )}

          {isShowMoreSocialMedia && (
            <OverlayTrigger
              placement="left"
              overlay={<Tooltip>YouTube</Tooltip>}
            >
              <li
                className="d-flex justify-content-center align-items-center bg-dark"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              >
                <a href="" className="text-white">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
            </OverlayTrigger>
          )}

          {/* toggle button start */}
          <OverlayTrigger
            placement="left"
            overlay={
              <Tooltip>
                {isShowMoreSocialMedia ? "Hide More" : "Show More"}
              </Tooltip>
            }
          >
            <li
              onClick={() => setIsShowMoreSocialMedia(!isShowMoreSocialMedia)}
              className="d-flex justify-content-center align-items-center bg-dark"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              <i
                className={`${
                  isShowMoreSocialMedia
                    ? "fa-solid fa-xmark text-white"
                    : "fa-solid fa-plus text-white"
                }`}
              ></i>
            </li>
          </OverlayTrigger>
          {/* toogle button end */}

          <OverlayTrigger placement="left" overlay={<Tooltip>Email</Tooltip>}>
            <li
              className="d-flex justify-content-center align-items-center bg-dark"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              <a href="" className="text-white">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </li>
          </OverlayTrigger>
        </ul>
      </div>
    </>
  );
};

export default Index;
