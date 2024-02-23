import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Meram Belediyesi Websitesine Hoşgeldiniz.</span>
                <h1>{`Bizim Meram İçin Çalışıyoruz.`}</h1>
                  <p>Seçim çalışmalarımızda bir söz verdik ve seçimlerden sonra da sürekli hemşehrilerimizin arasında olacağımızı, onların görüş ve önerileri doğrultusunda Meram’ı birlikte yönetmek istediğimizi söylemiştik. Şimdi yine onların arasındayız ve beraber olmaya devam edeceğiz.</p>
              </div>}
            </TrackVisibility>
          </Col>
          
        </Row>
      </Container>
    </section>
  )
}
