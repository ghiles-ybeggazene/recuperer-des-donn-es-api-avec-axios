import axios from 'axios'

export const FETCHING_START = 'FETCHING_START'
export const FETCHING_DONE = 'FETCHING_DONE'
export const SORT_BY_NAME = 'SORT_BY_NAME'
export const SORT_BY_MARK = 'SORT_BY_MARK'
export const SEARCH_BY_NAME = 'SEARCH_BY_NAME'

const initialState = {
  students: [],
  loading: true,
  seachText:'',
  sortByName: 'ASC',
  sortByMark: 'ASC',
  activeId: {}
}

export const reducer =  (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_START:
      return {...state, loading: true}

    case FETCHING_DONE:
      return {...state, loading: false, students: action.data}

    case SORT_BY_NAME:
      return {...state, ...action.data}

    case SORT_BY_MARK:

      return {...state, ...action.data}
    case SEARCH_BY_NAME:
      return {...state, ...action.data}

    default:
      return state
  }
}

export const fetch_start = () => ({
  type: FETCHING_START
})

export const fetch_done = (data) => ({
  type: FETCHING_DONE,
  data: data
})

export const sort_by_name = (data) => ({
  type: SORT_BY_NAME,
  data: data
})

export const sort_by_mark = (data) => ({
  type: SORT_BY_MARK,
  data: data
})

export const seacrh_by_name = (data) => ({
  type: SORT_BY_MARK,
  data: data
})


export const fetch = () => {
  return axios.get('https://api.myjson.com/bins/1dlper')
}

export const fetch_student = () => {
  return (dispatch) => {
    dispatch(fetch_start())
    fetch().then((data) => {
        const studs = Object.values(data.data).map(stud => {
          return {
            ...stud,
            marks: Object.values(stud.marks).reduce((sum,mark)=> sum+mark,0)
          }
        })
        dispatch(fetch_done(studs))
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export const search_by_name = (seachText) => {
  return (dispatch) => {
    dispatch(fetch_start())
    fetch().then((data) => {
      const studs = Object.values(data.data).map(stud => {
        return {
          ...stud,
          marks: Object.values(stud.marks).reduce((sum,mark)=> sum+mark,0)
        }
      })
      let filterData = studs.filter((stud) => {
        return stud.name.toLowerCase().startsWith(seachText)
      });
      dispatch(seacrh_by_name({students: filterData, seachText: seachText, loading: false}))
    })
    .catch((error) => {
      console.log(error);
    });
  }
}
