

export default (state = {tabname: '首页'}, action) => {
	switch(action.type) {
		case 'CHANGETAB':
			return {tabname: action.data};
			break;
		default: return state; break;
	}
}