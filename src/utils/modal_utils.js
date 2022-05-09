export const createRestaurant = (state) => {
    return new Promise((resolve, reject) => {
        if (!state.entities.id) {
            resolve(true)
        } else {
            reject(false)
        }
    })
}

export const updateRestaurant = (state) => {
    return new Promise((resolve, reject) => {
        if (!state.entities.id) {
            resolve(true)
        } else {
            reject(false)
        }
    })
}