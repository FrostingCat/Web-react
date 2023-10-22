import {PayloadAction, createSlice} from '@reduxjs/toolkit'

interface todoSliceType {
	todos: string[];
}

const INITIAL_STATE: todoSliceType = {
	todos: [],
}

export const todoSlice = createSlice({
	name: 'todoSlyce',
	initianState: INITIAL_STATE,
	reducers: {
		addAction: (state, action: PayloadAction<string>) => {
			state.todos.push(action.payload)
		},
	},
});

export {add} = todoSlice.actions