import React, { useState } from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";
import AlertMessage from "../alert-message/alert-message.component";

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  const [showAlertMessage, setShowAlertMessage] = useState(false);

  const showDissapearingMessage = () => {
    setShowAlertMessage(true);
    setTimeout(function () {
      setShowAlertMessage(false);
    }, 3000);
  };

  return (
    <CollectionItemContainer>
      {showAlertMessage === true ? (
        <AlertMessage message={"Item successfully added to cart"} />
      ) : null}
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton
        onClick={() => {
          addItem(item);
          showDissapearingMessage();
        }}
        inverted
      >
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
