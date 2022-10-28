const getItemLeft = (arrayTask) => {
    return arrayTask.filter( task => task.status === false )
}

export {
    getItemLeft
}