import React from "react";
import PlaceItem from "./PlaceItem";

import Card from "../../shared/components/UIElements/Card";
import "./PlaceList.css";
import Button from "../../shared/components/FormElements/Button";

const PlaceList = (props) => {
  if (!Array.isArray(props.items) || props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No places found. Maybe Create One</h2>
          <Button to="/places/new">Shaer Place</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
