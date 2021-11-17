import Vuex from 'vuex'
import axios from 'axios'
const createStore = () =>{
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
              state.loadedPosts = posts;
            },
            addPost(state, post) {
              state.loadedPosts.push(post)
            },
            editPost(state, editedPost) {
              const postIndex = state.loadedPosts.findIndex(
                post => post.id === editedPost.id
              );
              state.loadedPosts[postIndex] = editedPost
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context){
                return axios.get('https://szfm-beadando-db-default-rtdb.europe-west1.firebasedatabase.app/posts.json')
                .then(res => { //response axios method
                    const postsArray = []
                    for (const key in res.data){
                    postsArray.push({...res.data[key ], id:key})
                    }
                    vuexContext.commit('setPosts', postsArray)
                })
                .catch(e =>context.error(e));
               
               
                // if (!process.client){
                //     console.log(context.req.session)
                // }
                // return new Promise((resolve,reject)=>{
                //     setTimeout(() =>{
                //         vuexContext.commit('setPosts',[
                //         {
                //         id: "1",
                //         title: 'First Post',
                //         previewText: '399ft',
                //         thumbnail:
                //         "https://static.groby.hu/media/9cd/359/conv/25901_se2_cb4bc_back-full.png"
                //         },
                //         {
                //         id: "2",
                //         title: 'Secound Post',
                //         previewText: '420ft',
                //         thumbnail:
                //         "https://static.groby.hu/media/9cd/359/conv/25901_se2_cb4bc_back-full.png"
                //               }
                //             ])
                //      resolve();
                //    },1500)})
                 
            },
            setPosts(vuexContext, posts){
                vuexContext.commit('setPosts', posts)
            }
        },
        getters:{
            loadedPosts(state){
                return state.loadedPosts
            }
        }
    })
}

export default createStore