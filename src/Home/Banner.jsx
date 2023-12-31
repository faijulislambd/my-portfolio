import { TypeAnimation } from "react-type-animation";
import Col from "../Components/Col";
import Container from "../Components/Container";
import Row from "../Components/Row";
import circles from "../assets/round-shape.svg";
import avatar from "./../assets/Avatars/avatar-2.png";
import Button from "../Components/Button";
import ProfileCard from "../Shared/ProfileCard";
import { Fade } from "react-awesome-reveal";
import { FaDownload } from "react-icons/fa";

const Banner = () => {
  return (
    <section
      className="bg-primary-gradient-light min-h-[500px] w-full banner-bg relative text-white z-0 pt-[3rem] md:pt-[8rem] pb-[150px]"
      id="home"
    >
      <Container className="w-full">
        <Row>
          <Col className="lg:w-1/2 mb-16 order-2 md:order-1">
            <Fade direction="left" triggerOnce="true">
              <div className="max-w-md flex flex-col gap-3">
                <p className="font-semibold text-2xl">Hi, I am a</p>
                <div className="card glass py-10 px-3">
                  {" "}
                  <TypeAnimation
                    sequence={[`Web`, 1000, `Mern Stack`, 1000]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: "3em", display: "inline-block" }}
                    repeat={Infinity}
                  />{" "}
                  <span style={{ fontSize: "3em", display: "inline-block" }}>
                    Developer
                  </span>
                </div>
                <p className="font-semibold text-2xl">
                  Here to help you to make your dream site
                </p>
                <div>
                  <a
                    href="https://drive.google.com/uc?export=download&id=1DLUCcp-Cedz9jkEKGIawwN0lqV5ZAlD2"
                    target="__blank"
                  >
                    <Button
                      color="text-gray-900 hover:text-gray-900 md:hover:text-white"
                      className="bg-white"
                    >
                      My Resume <FaDownload />
                    </Button>
                  </a>
                </div>
              </div>
            </Fade>
          </Col>
          <Col className="lg:w-1/2 mb-16 relative order-1 md:order-2 pt-[3rem] md:pt-0">
            <ProfileCard
              img={avatar}
              name="Md. Faijul Islam"
              className="md:absolute"
            ></ProfileCard>
          </Col>
        </Row>
      </Container>
      <img src={circles} className="absolute top-0 w-full h-full -z-[1]" />
    </section>
  );
};

export default Banner;
