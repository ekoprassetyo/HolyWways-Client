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
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2"
import API from "../../config/api";
import {useQuery} from "react-query"
// import ModalLogin from "../Auth/ModalLogin";

const DetailDonate = () => {
  const [showDonate, setShowDonate] = useState(false)
  const [state] = useContext(UserContext)
  let navigate = useNavigate()
  const {fund_id} = useParams()

  let {data: funds} = useQuery("detailCache",async () => {
    const response = await API.get("/fund/" + fund_id)
    console.log("ini response detail donate",response)

    return response.data.data
})

  useEffect(() => {
    if(state.isLogin == false)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'You have to login first!',
    })
    navigate("/")
    if(state.isLogin == true) {
      navigate(`/detail-donation/${fund_id}`)
    }
    // setLoginShow(true)
  },[state])

  return (
    <div style={{ padding: "3rem 10rem" }}>
      <div className="d-flex justify-content-evenly">
        <div style={{  }}>
          <img src={`http://localhost:5000/uploads/${funds?.thumbnail}`} width="500px" className="rounded" />
        </div>
        <div style={{ width: "30%" }}>
          <p className="fw-bold" style={{ fontSize: "30px" }}>
            {funds?.title}
          </p>
          <p className="text-danger fw-bold">
            Rp 25.0000.000 <span className="text-muted">gathered form</span>{" "}
            <span className="text-black">Rp {funds?.goals}</span>
          </p>
          <ProgressBar now={25} variant="danger" />
          <p className="mt-3" style={{ textAlign: "justify" }}>
            {funds?.description}
          </p>
          <Button
            style={{ width: "100%", border: "none" }}
            className="bg-danger text-light fw-bold"
            onClick={() => setShowDonate(true)}
          >
            Donate
          </Button>
          <ModalDonate showDonate={showDonate} setShowDonate={setShowDonate} funds={funds}/>
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
