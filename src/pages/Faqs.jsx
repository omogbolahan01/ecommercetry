import React, { useState } from "react";
import image1 from "/images/fluent.png";
import minus from "/images/minus.png";
import { Link } from "react-router-dom";
// import { preview } from "vite";
export default function Faqs() {
  // const itemId =
  const [showIcon1, setShowIcon1] = useState(false);
  const [showButton1, setShowButton1] = useState(false);
  function handleClick1() {
    setShowIcon1((preState) => !preState);
  }
  function handleButton1() {
    setShowButton1((prevState) => !prevState);
  }
  const [showIcon2, setShowIcon2] = useState(false);
  const [showButton2, setShowButton2] = useState(false);
  function handleClick2() {
    setShowIcon2((preState) => !preState);
  }
  function handleButton2() {
    setShowButton2((prevState) => !prevState);
  }
  const [showIcon3, setShowIcon3] = useState(false);
  const [showButton3, setShowButton3] = useState(false);
  function handleClick3() {
    setShowIcon3((preState) => !preState);
  }
  function handleButton3() {
    setShowButton3((prevState) => !prevState);
  }
  const [showIcon4, setShowIcon4] = useState(false);
  const [showButton4, setShowButton4] = useState(false);
  function handleClick4() {
    setShowIcon4((preState) => !preState);
  }
  function handleButton4() {
    setShowButton4((prevState) => !prevState);
  }
  const [showIconi1, setShowIconi1] = useState(false);
  const [showButtoni1, setShowButtoni1] = useState(false);
  function handleClicki1() {
    setShowIconi1((preState) => !preState);
  }
  function handleButtoni1() {
    setShowButtoni1((prevState) => !prevState);
  }
  const [showIconi2, setShowIconi2] = useState(false);
  const [showButtoni2, setShowButtoni2] = useState(false);
  function handleClicki2() {
    setShowIconi2((preState) => !preState);
  }
  function handleButtoni2() {
    setShowButtoni2((prevState) => !prevState);
  }
  const [showIconi3, setShowIconi3] = useState(false);
  const [showButtoni3, setShowButtoni3] = useState(false);
  function handleClicki3() {
    setShowIconi3((preState) => !preState);
  }
  function handleButtoni3() {
    setShowButtoni3((prevState) => !prevState);
  }
  const [showIcong1, setShowIcong1] = useState(false);
  const [showButtong1, setShowButtong1] = useState(false);
  function handleClickg1() {
    setShowIcong1((preState) => !preState);
  }
  function handleButtong1() {
    setShowButtong1((prevState) => !prevState);
  }
  const [showIcong2, setShowIcong2] = useState(false);
  const [showButtong2, setShowButtong2] = useState(false);
  function handleClickg2() {
    setShowIcong2((preState) => !preState);
  }
  function handleButtong2() {
    setShowButtong2((prevState) => !prevState);
  }
  const [showIcong3, setShowIcong3] = useState(false);
  const [showButtong3, setShowButtong3] = useState(false);
  function handleClickg3() {
    setShowIcong3((preState) => !preState);
  }
  function handleButtong3() {
    setShowButtong3((prevState) => !prevState);
  }
  const [showIcons1, setShowIcons1] = useState(false);
  const [showButtons1, setShowButtons1] = useState(false);
  function handleClicks1() {
    setShowIconi1((preState) => !preState);
  }
  function handleButtons1() {
    setShowButtons1((prevState) => !prevState);
  }
  const [showIcons2, setShowIcons2] = useState(false);
  const [showButtons2, setShowButtons2] = useState(false);
  function handleClicks2() {
    setShowIcons2((preState) => !preState);
  }
  function handleButtons2() {
    setShowButtons2((prevState) => !prevState);
  }

  // }
  const [showIconp1, setShowIconp1] = useState(false);
  const [showButtonp1, setShowButtonp1] = useState(false);
  function handleClickp1() {
    setShowIconp1((preState) => !preState);
  }
  function handleButtonp1() {
    setShowButtonp1((prevState) => !prevState);
  }
  const [showIconp2, setShowIconp2] = useState(false);
  const [showButtonp2, setShowButtonp2] = useState(false);
  function handleClickp2() {
    setShowIconp2((preState) => !preState);
  }
  function handleButtonp2() {
    setShowButtonp2((prevState) => !prevState);
  }

  return (
    <div className="faq-part">
      <div className="faq-pad">
        <h1>Let's get this solved</h1>
        <div className="faq-flex">
          <div className="faq-line">
            <h2>How to use</h2>
            <div className="faq-arrk" onClick={handleButton1}>
              <div className="faq-arrow">
                <h2>Consequat, urna nibh consequat integer feugiat ?</h2>
                <div onClick={handleClick1} className="arrow-faq">
                  {!showButton1 ? (
                    <img src="/images/fluent.png" />
                  ) : (
                    <img src="/images/minus.png" />
                  )}
                </div>
              </div>

              {showButton1 && (
                <p className="arrow-para">
                  At duis viverra quisque volutpat. Diam id lacus, praesent
                  egestas in velit et dignissim vitae. Ut nisl consequat et
                  semper eget. Nibh ut nec ut natoque elementum lectus. In dui,
                  aliquet in pulvinar neque, donec viverra nullam curabitur. Id
                  ac cras risus turpis lorem gravida senectus. Viverra morbi non
                  ultrices egestas. Pellentesque amet venenatis purus justo,
                  morbi ut. Velit diam quam varius duis. Ligula platea quam
                  pulvinar consectetur magnis habitant tellus. Sociis vivamus
                  quam leo quisque egestas turpis sed sit. Orci hendrerit
                  commodo sed bibendum vitae venenatis in enim eget.
                </p>
              )}
            </div>
            <div className="faq-arrk" onClick={handleButton2}>
              <div className="faq-arrow">
                <h2>Consequat, urna nibh consequat integer feugiat ?</h2>
                <div onClick={handleClick2} className="arrow-faq">
                  {!showButton2 ? (
                    <img src="/images/fluent.png" />
                  ) : (
                    <img src="/images/minus.png" />
                  )}
                </div>
              </div>

              {showButton2 && (
                <p className="arrow-para">
                  At duis viverra quisque volutpat. Diam id lacus, praesent
                  egestas in velit et dignissim vitae. Ut nisl consequat et
                  semper eget. Nibh ut nec ut natoque elementum lectus. In dui,
                  aliquet in pulvinar neque, donec viverra nullam curabitur. Id
                  ac cras risus turpis lorem gravida senectus. Viverra morbi non
                  ultrices egestas. Pellentesque amet venenatis purus justo,
                  morbi ut. Velit diam quam varius duis. Ligula platea quam
                  pulvinar consectetur magnis habitant tellus. Sociis vivamus
                  quam leo quisque egestas turpis sed sit. Orci hendrerit
                  commodo sed bibendum vitae venenatis in enim eget.
                </p>
              )}
            </div>
            <div className="faq-arrk" onClick={handleButton3}>
              <div className="faq-arrow">
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                </h2>
                <div onClick={handleClick3} className="arrow-faq">
                  {!showButton3 ? (
                    <img src="/images/fluent.png" />
                  ) : (
                    <img src="/images/minus.png" />
                  )}
                </div>
              </div>

              {showButton3 && (
                <p className="arrow-para">
                  At duis viverra quisque volutpat. Diam id lacus, praesent
                  egestas in velit et dignissim vitae. Ut nisl consequat et
                  semper eget. Nibh ut nec ut natoque elementum lectus. In dui,
                  aliquet in pulvinar neque, donec viverra nullam curabitur. Id
                  ac cras risus turpis lorem gravida senectus. Viverra morbi non
                  ultrices egestas. Pellentesque amet venenatis purus justo,
                  morbi ut. Velit diam quam varius duis. Ligula platea quam
                  pulvinar consectetur magnis habitant tellus. Sociis vivamus
                  quam leo quisque egestas turpis sed sit. Orci hendrerit
                  commodo sed bibendum vitae venenatis in enim eget.
                </p>
              )}
            </div>

            <div className="flex-insur">
              <h2>Insurance</h2>
              <div className="faq-arrk" onClick={handleButtoni1}>
                <div className="faq-arrow">
                  <h2>Am I covered by insurance?</h2>
                  <div onClick={handleClicki1} className="arrow-faq">
                    {!showButtoni1 ? (
                      <img src="/images/fluent.png" />
                    ) : (
                      <img src="/images/minus.png" />
                    )}
                  </div>
                </div>

                {showButtoni1 && (
                  <p className="arrow-para">
                    At duis viverra quisque volutpat. Diam id lacus, praesent
                    egestas in velit et dignissim vitae. Ut nisl consequat et
                    semper eget. Nibh ut nec ut natoque elementum lectus. In
                    dui, aliquet in pulvinar neque, donec viverra nullam
                    curabitur. Id ac cras risus turpis lorem gravida senectus.
                    Viverra morbi non ultrices egestas. Pellentesque amet
                    venenatis purus justo, morbi ut. Velit diam quam varius
                    duis. Ligula platea quam pulvinar consectetur magnis
                    habitant tellus. Sociis vivamus quam leo quisque egestas
                    turpis sed sit. Orci hendrerit commodo sed bibendum vitae
                    venenatis in enim eget.
                  </p>
                )}
              </div>
              <div className="faq-arrk" onClick={handleButtoni2}>
                <div className="faq-arrow">
                  <h2>
                    Leo viverra nulla quam auctor. Suspendisse malesuada orci,
                    mauris vivamus?
                  </h2>
                  <div onClick={handleClicki2} className="arrow-faq">
                    {!showButtoni2 ? (
                      <img src="/images/fluent.png" />
                    ) : (
                      <img src="/images/minus.png" />
                    )}
                  </div>
                </div>

                {showButtoni2 && (
                  <p className="arrow-para">
                    At duis viverra quisque volutpat. Diam id lacus, praesent
                    egestas in velit et dignissim vitae. Ut nisl consequat et
                    semper eget. Nibh ut nec ut natoque elementum lectus. In
                    dui, aliquet in pulvinar neque, donec viverra nullam
                    curabitur. Id ac cras risus turpis lorem gravida senectus.
                    Viverra morbi non ultrices egestas. Pellentesque amet
                    venenatis purus justo, morbi ut. Velit diam quam varius
                    duis. Ligula platea quam pulvinar consectetur magnis
                    habitant tellus. Sociis vivamus quam leo quisque egestas
                    turpis sed sit. Orci hendrerit commodo sed bibendum vitae
                    venenatis in enim eget.
                  </p>
                )}
              </div>
              <div className="faq-arrk" onClick={handleButtoni3}>
                <div className="faq-arrow">
                  <h2>GbdAfri also offers third party insurance?</h2>
                  <div onClick={handleClicki3} className="arrow-faq">
                    {!showButtoni3 ? (
                      <img src="/images/fluent.png" />
                    ) : (
                      <img src="/images/minus.png" />
                    )}
                  </div>
                </div>

                {showButtoni3 && (
                  <p className="arrow-para">
                    At duis viverra quisque volutpat. Diam id lacus, praesent
                    egestas in velit et dignissim vitae. Ut nisl consequat et
                    semper eget. Nibh ut nec ut natoque elementum lectus. In
                    dui, aliquet in pulvinar neque, donec viverra nullam
                    curabitur. Id ac cras risus turpis lorem gravida senectus.
                    Viverra morbi non ultrices egestas. Pellentesque amet
                    venenatis purus justo, morbi ut. Velit diam quam varius
                    duis. Ligula platea quam pulvinar consectetur magnis
                    habitant tellus. Sociis vivamus quam leo quisque egestas
                    turpis sed sit. Orci hendrerit commodo sed bibendum vitae
                    venenatis in enim eget.
                  </p>
                )}
              </div>
              <div className="faq-arrk" onClick={handleButton4}>
                <div className="faq-arrow">
                  <h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                  </h2>
                  <div onClick={handleClick4} className="arrow-faq">
                    {!showButton4 ? (
                      <img src="/images/fluent.png" />
                    ) : (
                      <img src="/images/minus.png" />
                    )}
                  </div>
                </div>

                {showButton4 && (
                  <p className="arrow-para">
                    At duis viverra quisque volutpat. Diam id lacus, praesent
                    egestas in velit et dignissim vitae. Ut nisl consequat et
                    semper eget. Nibh ut nec ut natoque elementum lectus. In
                    dui, aliquet in pulvinar neque, donec viverra nullam
                    curabitur. Id ac cras risus turpis lorem gravida senectus.
                    Viverra morbi non ultrices egestas. Pellentesque amet
                    venenatis purus justo, morbi ut. Velit diam quam varius
                    duis. Ligula platea quam pulvinar consectetur magnis
                    habitant tellus. Sociis vivamus quam leo quisque egestas
                    turpis sed sit. Orci hendrerit commodo sed bibendum vitae
                    venenatis in enim eget.
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="flex-area">
            <div className="flex-general">
              <h2>General</h2>
              <div className="faq-arrk" onClick={handleButtong1}>
                <div className="faq-arrow">
                  <h2>Where is GbdAfri?</h2>
                  <div onClick={handleClickg1} className="arrow-faq">
                    {!showButtong1 ? (
                      <img src="/images/fluent.png" />
                    ) : (
                      <img src="/images/minus.png" />
                    )}
                  </div>
                </div>

                {showButtong1 && (
                  <p className="arrow-para">
                    At duis viverra quisque volutpat. Diam id lacus, praesent
                    egestas in velit et dignissim vitae. Ut nisl consequat et
                    semper eget. Nibh ut nec ut natoque elementum lectus. In
                    dui, aliquet in pulvinar neque, donec viverra nullam
                    curabitur. Id ac cras risus turpis lorem gravida senectus.
                    Viverra morbi non ultrices egestas. Pellentesque amet
                    venenatis purus justo, morbi ut. Velit diam quam varius
                    duis. Ligula platea quam pulvinar consectetur magnis
                    habitant tellus. Sociis vivamus quam leo quisque egestas
                    turpis sed sit. Orci hendrerit commodo sed bibendum vitae
                    venenatis in enim eget.
                  </p>
                )}
              </div>
              <div className="faq-arrk" onClick={handleButtong2}>
                <div className="faq-arrow">
                  <h2>Can I buy two or more devices?</h2>
                  <div onClick={handleClickg2} className="arrow-faq">
                    {!showButtong2 ? (
                      <img src="/images/fluent.png" />
                    ) : (
                      <img src="/images/minus.png" />
                    )}
                  </div>
                </div>

                {showButtong2 && (
                  <p className="arrow-para">
                    At duis viverra quisque volutpat. Diam id lacus, praesent
                    egestas in velit et dignissim vitae. Ut nisl consequat et
                    semper eget. Nibh ut nec ut natoque elementum lectus. In
                    dui, aliquet in pulvinar neque, donec viverra nullam
                    curabitur. Id ac cras risus turpis lorem gravida senectus.
                    Viverra morbi non ultrices egestas. Pellentesque amet
                    venenatis purus justo, morbi ut. Velit diam quam varius
                    duis. Ligula platea quam pulvinar consectetur magnis
                    habitant tellus. Sociis vivamus quam leo quisque egestas
                    turpis sed sit. Orci hendrerit commodo sed bibendum vitae
                    venenatis in enim eget.
                  </p>
                )}
              </div>
              <div className="faq-arrk" onClick={handleButtong3}>
                <div className="faq-arrow">
                  <h2>What is device can you buy?</h2>
                  <div onClick={handleClickg3} className="arrow-faq">
                    {!showButtong3 ? (
                      <img src="/images/fluent.png" />
                    ) : (
                      <img src="/images/minus.png" />
                    )}
                  </div>
                </div>

                {showButtong3 && (
                  <p className="arrow-para">
                    At duis viverra quisque volutpat. Diam id lacus, praesent
                    egestas in velit et dignissim vitae. Ut nisl consequat et
                    semper eget. Nibh ut nec ut natoque elementum lectus. In
                    dui, aliquet in pulvinar neque, donec viverra nullam
                    curabitur. Id ac cras risus turpis lorem gravida senectus.
                    Viverra morbi non ultrices egestas. Pellentesque amet
                    venenatis purus justo, morbi ut. Velit diam quam varius
                    duis. Ligula platea quam pulvinar consectetur magnis
                    habitant tellus. Sociis vivamus quam leo quisque egestas
                    turpis sed sit. Orci hendrerit commodo sed bibendum vitae
                    venenatis in enim eget.
                  </p>
                )}
              </div>
            </div>
            <h2>Safety</h2>
            <div className="faq-arrk" onClick={handleButtons1}>
              <div className="faq-arrow">
                <h2>What should I do in case of an emergency?</h2>
                <div onClick={handleClicks1} className="arrow-faq">
                  {!showButtons1 ? (
                    <img src="/images/fluent.png" />
                  ) : (
                    <img src="/images/minus.png" />
                  )}
                </div>
              </div>

              {showButtons1 && (
                <p className="arrow-para">
                  At duis viverra quisque volutpat. Diam id lacus, praesent
                  egestas in velit et dignissim vitae. Ut nisl consequat et
                  semper eget. Nibh ut nec ut natoque elementum lectus. In dui,
                  aliquet in pulvinar neque, donec viverra nullam curabitur. Id
                  ac cras risus turpis lorem gravida senectus. Viverra morbi non
                  ultrices egestas. Pellentesque amet venenatis purus justo,
                  morbi ut. Velit diam quam varius duis. Ligula platea quam
                  pulvinar consectetur magnis habitant tellus. Sociis vivamus
                  quam leo quisque egestas turpis sed sit. Orci hendrerit
                  commodo sed bibendum vitae venenatis in enim eget.
                </p>
              )}
            </div>
            <div className="faq-arrk" onClick={handleButtons2}>
              <div className="faq-arrow">
                <h2>How old do can you start purchasing in GbdAfri?</h2>
                <div onClick={handleClicks2} className="arrow-faq">
                  {!showButtons2 ? (
                    <img src="/images/fluent.png" />
                  ) : (
                    <img src="/images/minus.png" />
                  )}
                </div>
              </div>

              {showButtons2 && (
                <p className="arrow-para">
                  At duis viverra quisque volutpat. Diam id lacus, praesent
                  egestas in velit et dignissim vitae. Ut nisl consequat et
                  semper eget. Nibh ut nec ut natoque elementum lectus. In dui,
                  aliquet in pulvinar neque, donec viverra nullam curabitur. Id
                  ac cras risus turpis lorem gravida senectus. Viverra morbi non
                  ultrices egestas. Pellentesque amet venenatis purus justo,
                  morbi ut. Velit diam quam varius duis. Ligula platea quam
                  pulvinar consectetur magnis habitant tellus. Sociis vivamus
                  quam leo quisque egestas turpis sed sit. Orci hendrerit
                  commodo sed bibendum vitae venenatis in enim eget.
                </p>
              )}
            </div>
            <div className="price">
              {" "}
              <h2>Pricing and Payment</h2>
              <div className="faq-arrk" onClick={handleButtonp1}>
                <div className="faq-arrow">
                  <h2>Refund?</h2>
                  <div onClick={handleClickp1} className="arrow-faq">
                    {!showButtonp1 ? (
                      <img src="/images/fluent.png" />
                    ) : (
                      <img src="/images/minus.png" />
                    )}
                  </div>
                </div>
                {showButtonp1 && (
                  <p className="arrow-para">
                    At duis viverra quisque volutpat. Diam id lacus, praesent
                    egestas in velit et dignissim vitae. Ut nisl consequat et
                    semper eget. Nibh ut nec ut natoque elementum lectus. In
                    dui, aliquet in pulvinar neque, donec viverra nullam
                    curabitur. Id ac cras risus turpis lorem gravida senectus.
                    Viverra morbi non ultrices egestas. Pellentesque amet
                    venenatis purus justo, morbi ut. Velit diam quam varius
                    duis. Ligula platea quam pulvinar consectetur magnis
                    habitant tellus. Sociis vivamus quam leo quisque egestas
                    turpis sed sit. Orci hendrerit commodo sed bibendum vitae
                    venenatis in enim eget.
                  </p>
                )}
              </div>
              <div className="faq-arrk" onClick={handleButtonp2}>
                <div className="faq-arrow">
                  <h2>How do I pay?</h2>
                  <div onClick={handleClickp2} className="arrow-faq">
                    {!showButtonp2 ? (
                      <img src="/images/fluent.png" />
                    ) : (
                      <img src="/images/minus.png" />
                    )}
                  </div>
                </div>
                {showButtonp2 && (
                  <p className="arrow-para">
                    At duis viverra quisque volutpat. Diam id lacus, praesent
                    egestas in velit et dignissim vitae. Ut nisl consequat et
                    semper eget. Nibh ut nec ut natoque elementum lectus. In
                    dui, aliquet in pulvinar neque, donec viverra nullam
                    curabitur. Id ac cras risus turpis lorem gravida senectus.
                    Viverra morbi non ultrices egestas. Pellentesque amet
                    venenatis purus justo, morbi ut. Velit diam quam varius
                    duis. Ligula platea quam pulvinar consectetur magnis
                    habitant tellus. Sociis vivamus quam leo quisque egestas
                    turpis sed sit. Orci hendrerit commodo sed bibendum vitae
                    venenatis in enim eget.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
