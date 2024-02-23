import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg10 from "../assets/img/project-img10.png";
import projImg11 from "../assets/img/project-img11.png";
import projImg12 from "../assets/img/project-img12.png";
import projImg13 from "../assets/img/project-img13.png";
import projImg14 from "../assets/img/project-img14.png";
import projImg15 from "../assets/img/project-img15.png";
import projImg16 from "../assets/img/project-img16.png";
import projImg17 from "../assets/img/project-img17.png";
import projImg18 from "../assets/img/project-img18.png";
import projImg19 from "../assets/img/project-img19.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';



export const Projects = () => {

  const projects = [
    {
      title: "Şükran Mahallesi 4 Adet Tescilli Taşınmazın Rekonstrüksiyon İkmal İnşaat İşi",
      description: "Şükran Mahallesi 2 Adet Tescilli Taşınmazın Rekonstrüksiyon İkmal İnşaatı'nın Yapımı",
      imgUrl: projImg1,
      onclick: "//www.meram.bel.tr/proje/sukran-mahallesi-2-adet-tescilli-tasinmazin-rekonstruksiyon-ikmal-insaati-isi",
    },
    {
      title: "Şükran Mahallesi 2 Adet Tescilli Taşınmazın Rekonstrüksiyon İkmal İnşaatı İşi      ",
      description: "Şükran Mahallesi 2 Adet Tescilli Taşınmazın Rekonstrüksiyon İkmal İnşaatı'nın Yapımı      ",
      imgUrl: projImg2,
      onclick: "https://www.meram.bel.tr/proje/sukran-mahallesi-2-adet-tescilli-tasinmazin-rekonstruksiyon-ikmal-insaati-isi",
    },
    {
      title: "Tantavi Kültür ve Sanat Merkezi",
      description: "",
      imgUrl: projImg3,
      onclick: "https://www.meram.bel.tr/proje/tantavi-kultur-ve-sanat-merkezi",
    },
    {
      title: "Meram Gödene Evleri Konut Yapı Kooperatifi",
      description: "Meram Belediyesi’nin ilçe genelinde yürüttüğü Kentsel Dönüşüm çalışmaları kapsamında kurulmasına öncülük...",
      imgUrl: projImg4,
      onclick: "https://www.meram.bel.tr/proje/meram-godene-evleri-konut-yapi-kooperatifi",
    },
    {
      title: "Bizim Meram Köyü Konut Yapı Kooperatifi",
      description: "Meram da Farklı bir konseptte konut hamlesi devam ediyor…",
      imgUrl: projImg5,
      onclick: "https://www.meram.bel.tr/proje/nazmiye-muslu-spor-salonu-tadilati-yapim-isi",
    },
    {
      title: "Akıllı Atık Yönetim Sistemi",
      description: "",
      imgUrl: projImg6,
      onclick: "https://www.meram.bel.tr/proje/nazmiye-muslu-spor-salonu-tadilati-yapim-isi",
    },
    
  ];

  const projects2 = [
    {
      title: "Oruçreis Evleri Kentsel Dönüşüm Kat Karşılığı Konut Yapımı",
      description: "Oruç Reis Evleri; Meram Belediyesi’nin en büyük kentsel dönüşüm alanı, şehrin yeni cazibe merkezi ve yükselen değeri Aymanas Mahallesinde yer almaktadır.",
      imgUrl: projImg7,
      onclick: "https://www.meram.bel.tr/proje/orucreis-evleri-kentsel-donusum-kat-karsiligi-konut-yapimi",
    },
    {
      title: "Pirireis Evleri Kentsel Dönüşüm Kat Karşılığı Konut Yapımı",
      description: "",
      imgUrl: projImg8,
      onclick: "",
    },
    {
      title: "10 Adet Açık Halı Saha Yapımı",
      description: "",
      imgUrl: projImg10,
      onclick: "",
    },
    {
      title: "6 Adet Açık Halı Saha Yapılması",
      description: "",
      imgUrl: projImg11,
      onclick: "",
    },
    {
      title: "Şükran Mahallesi Kentsel Dönüşüm Bölgesi 2. Etap Ticaret Merkezi İnşaatı Yapım İşi",
      description: "",
      imgUrl: projImg12,
      onclick: "",
    },
    {
      title: "Şükran Mah. Kafeterya ve Çevre Düzenlemesi",
      description: "",
      imgUrl: projImg13,
      onclick: "https://www.meram.bel.tr/proje/sukran-mah-kafeterya-ve-cevre-duzenlemesi-2",
    },
  ];

  const projects3 = [
    {
      title: "Meram Yaka Sosyal Tesisi",
      description: "",
      imgUrl: projImg14,
      onclick: "https://www.meram.bel.tr/proje/meram-yaka-sosyal-tesisi",
    },
    {
      title: "Fahrunnisa Mah Kentsel Dönüşüm Kat Karşılığı Konut Yapımı",
      description: "",
      imgUrl: projImg15,
      onclick: "https://www.meram.bel.tr/proje/fahrunnisa-mah-kentsel-donusum-kat-karsiligi-konut-yapimi",
    },
    {
      title: "Harmancık Pazar Yeri ve Sosyal Tesisi",
      description: "",
      imgUrl: projImg16,
      onclick: "https://www.meram.bel.tr/proje/harmancik-pazar-yeri-ve-sosyal-tesisi",
    },
    {
      title: "Uluırmak Mah. Kentsel Dönüşüm Kat Karşılığı Konut Yapımı",
      description: "",
      imgUrl: projImg17,
      onclick: "https://www.meram.bel.tr/proje/uluirmak-mah-kentsel-donusum-kat-karsiligi-konut-yapimi",
    },
    {
      title: "Aymanas Mah. Kentsel Dönüşüm Kat Karşılığı Konut Yapımı",
      description: "",
      imgUrl: projImg18,
      onclick: "https://www.meram.bel.tr/proje/aymanas-mah-kentsel-donusum-kat-karsiligi-konut-yapimi",
    },
    {
      title: "Aksinne Mah. Kentsel Dönüşüm Kat Karşılığı Konut Yapımı",
      description: "",
      imgUrl: projImg19,
      onclick: "https://www.meram.bel.tr/proje/aksinne-mah-kentsel-donusum-kat-karsiligi-konut-yapimi",
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projeler</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first" className="project">1. Sekme</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second" className="project">2. Sekme</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third" className="project">3. Sekme</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>                    
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>                    
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
