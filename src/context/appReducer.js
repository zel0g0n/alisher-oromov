export const initialState = {
  theme: 'dark',
  about: null,
  skills: null,
  projects: null,
  contactData: null
}

export const reducer = (state,action) => {
  switch(action.type) {
    case 'theme':
      return {...state, theme: action.payload}
    case 'about':
      return {...state, about: action.payload}
    case 'skills':
      return {...state, skills: action.payload}
    case 'projects':
      return {...state, projects: action.payload}
    case "contact":
      return {...state, contactData: action.payload}
  }
}