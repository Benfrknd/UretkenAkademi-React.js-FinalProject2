import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp" id="corporate">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Bültenimize Abone Olun<br></br> & En son güncellemeleri asla kaçırmayın</h3>
              {status === 'sending' && <Alert>Gönderiliyor...</Alert>}
              {status === 'error' && <Alert variant="danger">{message}</Alert>}
              {status === 'success' && <Alert variant="success">{message}</Alert>}
            </Col>
            <Col md={6} xl={7}>
              <form onSubmit={handleSubmit}>
                <div className="new-email-bx">
                  <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Adresiniz" />
                  <button type="submit">Kaydol</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
