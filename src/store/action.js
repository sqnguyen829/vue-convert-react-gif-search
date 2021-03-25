// export default {
//     getGifs: ({commit}, payload) => {
//         commit('appendGifs', payload)
//     }
// }

export default {
    getGifs: ({commit}, searchTerm) => {
        console.log(searchTerm)
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=R3puW40kE2eTKIZDC5qJhH1VmApSiT1t&rating=g`,{
            method:'GET'
        })
        .then(res => res.json())
        .then(gifs => {
            console.log(gifs.data)
            let gifImgs = gifs.data.map(gif => {
                return gif.images.downsized.url
            })
            commit('appendGifs', gifImgs)
        })
        .catch(err => console.log(err))
    }
}