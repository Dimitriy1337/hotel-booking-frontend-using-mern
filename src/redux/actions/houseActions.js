/* eslint-disable no-undef */
export const createNewHouse = (structure, privacyType, location, floorPlan, amenitiesData) => async (dispatch) => {
    console.log(structure)
    let newHouseData = {
        houseType: structure,
        privacyType: privacyType,
        location: location,
        floorPlan: floorPlan,
        amenities: amenitiesData
    }

    dispatch({
        type: "CREATE_NEW_HOUSE",
        payload: newHouseData
    })
}