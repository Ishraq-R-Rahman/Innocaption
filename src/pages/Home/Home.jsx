import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

import "./Home.css";
import { useMediaQuery } from "@mui/material";

import { useNavigate } from "react-router-dom";

function Home() {
    const isMobile = useMediaQuery("(max-width:768px)");

    const manImageUrl = "/src/assets/Man.jpg";
    const womanImageUrl = "/src/assets/Woman.jpg";

    const navigate = useNavigate();

    const goToMain = (gender) => () => {
        navigate(`/${gender}`); // Navigate to /about page
    };

    return (
        <Container
            fluid
            className="container"
            style={{ padding: 0, margin: 0, maxWidth: "100%" }}
        >
            <div
                style={{
                    position: "absolute",
                    top: isMobile ? "50%" : "10%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 10,
                    textAlign: "center",
                }}
            >
                <h1>Innocaption</h1>
            </div>
            <Row style={{ flex: 1 }}>
                <Col
                    xs={12}
                    md={6}
                    className="column-home"
                    style={{
                        height: isMobile ? "50vh" : "100vh",
                        backgroundImage: `url(${manImageUrl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center top",
                        color: "white",
                    }}
                    onClick={goToMain("men")}
                >
                    <motion.h2 className="gender" whileHover={{ scale: 1.1 }}>
                        Men
                    </motion.h2>
                </Col>
                <Col
                    xs={12}
                    md={6}
                    className="column-home"
                    style={{
                        height: isMobile ? "50vh" : "100vh",
                        backgroundImage: `url(${womanImageUrl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center top",
                        color: "black",
                    }}
                    onClick={goToMain("women")}
                >
                    <motion.h2 className="gender" whileHover={{ scale: 1.1 }}>
                        Women
                    </motion.h2>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
