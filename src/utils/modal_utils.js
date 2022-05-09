export const activateModal = (type) => {
    return new Promise((resolve, reject) => {
        if (type === 'create' || type === 'update')
            resolve(type)
        else
            reject()
    })
}
