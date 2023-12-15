import React from "react";
import { useLocation } from "react-router-dom";
import AdminButton from "./AdminButton";
import AddUpdateInputLabel from "./AddUpdateInputLabel";
function AddUpdateVenue() {

  // Navigate ten gelen verileri almak için
  const { state } = useLocation();
  // Güncelle butonundan gelen veri
  const { venue } = state;

  return (
    <>
      <h1>{venue ? venue.name + " Mekanını Güncelle" : "Yeni Mekan Ekle"}</h1>
      <hr />
      <form className="form-horizontal">
        <AddUpdateInputLabel
          id="venueName"
          defaultValue={venue ? venue.name : ""}
          label={"Mekan Adı"}
        />
        <AddUpdateInputLabel
          id="venueAddress"
          defaultValue={venue ? venue.address : ""}
          label={"Mekan Adresi"}
        />
        <AddUpdateInputLabel
          id="venueFoodAndDrinks"
          defaultValue={venue ? venue.foodanddrink.toString() : ""}
          label={"İmkanlar"}
        />
        <AddUpdateInputLabel
          id="venueLatitude"
          defaultValue={venue ? venue.coordinates[0] : ""}
          label={"Enlem"}
        />
        <AddUpdateInputLabel
          id="venueLongitude"
          defaultValue={venue ? venue.coordinates[1] : ""}
          label={"Boylam"}
        />
        <AddUpdateInputLabel
          id="venueDaysOne"
          defaultValue={venue ? venue.hours[0].days : ""}
          label={"Günler-1"}
        />
        <AddUpdateInputLabel
          id="venueOpeningOne"
          defaultValue={venue ? venue.hours[0].open : ""}
          label={"Açılış-1"}
        />
        <AddUpdateInputLabel
          id="venueClosingOne"
          defaultValue={venue ? venue.hours[0].close : ""}
          label={"Kapanış-1"}
        />
        <AddUpdateInputLabel
          id="venueClosedOne"
          defaultValue={null}
          type="checkbox"
          label={"Kapalı-1"}
        />
        <AddUpdateInputLabel
          id="venueDaysTwo"
          defaultValue={venue ? venue.hours[1].days : ""}
          label={"Günler-2"}
        />
        <AddUpdateInputLabel
          id="venueOpeningTwo"
          defaultValue={venue ? venue.hours[1].open : ""}
          label={"Açılış-2"}
        />
        <AddUpdateInputLabel
          id="venueClosingTwo"
          defaultValue={venue ? venue.hours[1].close : ""}
          label={"Kapanış-2"}
        />
        <AddUpdateInputLabel
          id="venueClosedTwo"
          defaultValue={null}
          type="checkbox"
          label={"Kapalı-2"}
        />
      </form>
      {/* Form'u tamamlamak için tuş ataması */}
      <AdminButton
        name={venue ? "Mekanı Güncelle" : "Mekanı Ekle"}
        onClick={() => console.log("BUTONA BASILDI")}
        type="primary"
      />
    </>
  );
}

export default AddUpdateVenue;