import VenueDataService from "../services/VenueDataService";
import VenueReducer from "../services/VenueReducer";
import Header from "./Header";
import { useState, useReducer, useEffect } from "react";
import InputWithLabel from "./InputWithLabel";
import VenueList from "./VenueList";
function Admin() {
  // mekan verilerini içerir.
  const [venues, dispatchVenues] = useReducer(VenueReducer, {
    data: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
  });
  // mekan bilgilerini getirir
  useEffect(() => {
    dispatchVenues({ type: "FETCH_INIT" });
    try {
      
      VenueDataService.listJsonVenues().then((result) => {
        dispatchVenues({
          type: "FETCH_SUCCESS",
          payload: result.data,
        });
      });
    } catch {
      dispatchVenues({ type: "FETCH_FAILURE" });
    }
  }, []);

  return (
    <div>
      <Header
        headerText="Yönetici"
        motto="Mekanlarınızı Yönetin!"
      />
      <hr />
      {venues.isError ? (
        <p>
          <strong>Birşeyler ters gitti! ...</strong>
        </p>
      ) : venues.isLoading ? (
        <p>
          <strong>Mekanlar Yükleniyor ...</strong>
        </p>
      ) : (
        venues.isSuccess && (
          <div className="row">
            <VenueList venues={venues.data} admin={true} />
          </div>
        )
      )}
    </div>
  );
}

export default Admin;
