import React from "react";
import { useCollapse } from "react-collapsed";
import { useEffect, useState } from "react";
import img2 from "../assets/images/img2.png";
import "../assets/css/propertyContent.css";

export default function AuthorDetails(props) {
  const [appartmentDetails, setAppartmentDetails] = useState([]);
  const [buildingDetails, setBuildingDetails] = useState([]);
  const [validatedDetails, setValidatedDetails] = useState([]);
  const [projectDetails, setProjectDetails] = useState([]);
  const [propertyDetails, setPropertyDetails] = useState([]);
  const [color, setColor] = useState("white");

  useEffect(() => {
    setColor(props.color);
    console.log("Props:", color);
    setAppartmentDetails(props.property.apartment_detail);
    setBuildingDetails(props.property.building_information);
    setValidatedDetails(props.property.validated_information);
    setProjectDetails(props.property.project_information);
    setPropertyDetails(props.property.property_detail);
  }, []);

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  const handleCheck = () => {
    console.log("Appartment Details:", appartmentDetails);
    console.log("Building Details:", buildingDetails);
    console.log("Validated Details:", validatedDetails);
    console.log("Project Details:", projectDetails);
    console.log("Property Details:", propertyDetails);
  };

  return (
    <div
      className="properties-main-container"
      style={{ backgroundColor: color }}
    >
      {/* <button onClick={handleCheck}>check</button> */}{" "}
      <div className="author-details" {...getToggleProps()}>
        <div className="personal-info">
          <img src={img2} alt="image" />
          <div className="info">
            <h1 style={{ width: "500px" }}>{appartmentDetails.title}</h1>
            <p>{propertyDetails.sub_state}</p>
          </div>
        </div>
        <div className="function">
          <h1>{`AED ${appartmentDetails.price}`}</h1>
          {/* <p>{props.at}</p> */}
        </div>
        <div className="status">
          <h1>
            {propertyDetails.property_type == "for_sale"
              ? "For Sale"
              : "For Rent"}
          </h1>
        </div>
        <div className="employed">
          <h1>{}</h1>
        </div>
        <div className="employed">
          {
            <h1 style={{width:'100px'}}>{projectDetails.completion =='nan'?'100%': projectDetails.completion}</h1>}
        </div>
      </div>
      <div {...getCollapseProps()}>
        <div className="property-content">
          <div className="appartment-details">
            <h1>Appartment Details</h1>
            <p>
              Rooms: <span>{appartmentDetails.rooms}</span>
            </p>
            <p>
              Baths: <span>{appartmentDetails.baths}</span>
            </p>
            <p>
              Area: <span>{appartmentDetails.area}</span>
            </p>
            <p>
              Furnished:{" "}
              <span>
                {appartmentDetails.furnishing_status == "furnished"
                  ? "Yes"
                  : "No"}
              </span>
            </p>
          </div>
          <div className="building-details">
            <h1>Building Details</h1>
            <p>
              Building Name: <span>{buildingDetails.building_name}</span>
            </p>
            <p>
              Year of Completion:{" "}
              <span>{parseInt(buildingDetails.year_of_completion)}</span>
            </p>
            <p>
              Total Floors: <span>{parseInt(buildingDetails.total_floors)}</span>
            </p>
            <p>
              Swimming Pools: <span>{buildingDetails.swimming_pools}</span>
            </p>
            <p>
              Parking Spaces:{" "}
              <span>{buildingDetails.total_parking_spaces}</span>
            </p>
            <p>
              Elevators: <span>{buildingDetails.elevators}</span>
            </p>
          </div>
          <div className="validated-details">
            <h1>Project Details</h1>
            <p>
              Project Name: <span>{projectDetails.project_name}</span>
            </p>
            <p>
              Developer: <span>{validatedDetails.developer}</span>
            </p>
            <p>
              Owner: <span>{validatedDetails.ownership}</span>
            </p>
            <p>
              Usage: <span>{validatedDetails.usage}</span>
            </p>
            <p>
              Handover: <span>{projectDetails.handover}</span>
            </p>
            <p>
              State: <span>{propertyDetails.state}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
