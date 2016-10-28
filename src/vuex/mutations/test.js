const state = {
	tasks : [
		{id : "1", value : "xubaoshi", isFinish : true, addTime : "2016-04-02"},
		{id : "2", value : "xuning", isFinish : false, addTime : "2016-04-02"}
	],
	editTask : {}
}

const mutations = {
	CREATE (state, text){
		state.tasks.push({
			id : state.tasks.length,
			value : text,
			isFinish : false,
			addTime : "2016-04-05"
		})
		console.log(state)
	}
}

export default {
    state,
    mutations
}