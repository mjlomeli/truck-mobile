export const SORT_NAME = "SORT_NAME";
export const SORT_ADDRESS = "SORT_ADDRESS";

const receiveSortName = () => ({
    type: SORT_NAME
})

const receiveSortAddress = (permit) => ({
    type: SORT_ADDRESS,
    permit
})


export const sortName = () => (dispatch) => {
    return dispatch(receiveSortName()
    )};

export const sortAddress = () => (dispatch) => {
    return dispatch(receiveSortAddress()
    )};



window.EffectAction = {
    sortName,
    sortAddress
}