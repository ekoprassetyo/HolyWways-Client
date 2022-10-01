import React from "react";
import detailDonate from "../../assets/images/detaildonate.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Button, Card } from "react-bootstrap";
import ContainerListDonate from "./ContainerListDonate";
import ContainerViewFund from "../ViewFund/ContainerViewFund";
import ModalDonate from "../Modal/ModalDonate";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"
// import ModalLogin from "../Auth/ModalLogin";

const DetailDonate = () => {
  const [showDonate, setShowDonate] = useState(false)
  const [state] = useContext(UserContext)
  let navigate = useNavigate()

  useEffect(() => {
    if(state.isLogin == false)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'You have to login first!',
    })
    navigate("/")
    if(state.isLogin == true) {
      navigate(`/detail-donation`)
    }
    // setLoginShow(true)
  },[state])

  return (
    <div style={{ padding: "3rem 10rem" }}>
      <div className="d-flex justify-content-evenly">
        <div style={{  }}>
          <img src={detailDonate} width="500px" className="rounded" />
        </div>
        <div style={{ width: "30%" }}>
          <p className="fw-bold" style={{ fontSize: "30px" }}>
            The Strength of a People. Power of Community
          </p>
          <p className="text-danger fw-bold">
            Rp 25.0000.000 <span className="text-muted">gathered form</span>{" "}
            <span className="text-black">Rp 200.000.000</span>
          </p>
          <ProgressBar now={25} variant="danger" />
          <p className="mt-3" style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            facere laudantium dignissimos temporibus ex earum quibusdam
            perferendis iste animi repellendus doloremque praesentium fugiat,
            quasi eaque adipisci consequatur perspiciatis dolor veritatis,
            laborum error vero voluptatem, architecto blanditiis impedit? Eos
            obcaecati commodi maxime nostrum facilis, dicta, eveniet mollitia
            quis, possimus ducimus error?
          </p>
          <Button
            style={{ width: "100%", border: "none" }}
            className="bg-danger text-light fw-bold"
            onClick={() => setShowDonate(true)}
          >
            Donate
          </Button>
          <ModalDonate showDonate={showDonate} setShowDonate={setShowDonate}/>
        </div>
      </div>
      <div style={{ padding: "0rem 6rem" }}>
        <div className="mt-5 ms-3">
          <p className="fw-bold" style={{ fontSize: "30px" }}>
            List Donation (200)
          </p>
        </div>
        <div>
          <ContainerListDonate />
        </div>
        <div className="mt-5 ms-3">
          <p className="fw-bold" style={{ fontSize: "30px" }}>
            Donation has not been approved (10)
          </p>
        </div>
        <div>
          <ContainerViewFund />
        </div>
      </div>
      {/* <ModalLogin /> */}
    </div>
  );
};

export default DetailDonate;
