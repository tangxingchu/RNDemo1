

const changeTab = (tabname) => {
	return (dispatch, getState) => {
		return Promise.resolve(dispatch({
			type: "CHANGETAB",
			data: tabname
		}));
	}
}

export default {
	changeTab
}