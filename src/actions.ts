import { Todo } from './store'

export const CREATE_TODO = "CREATE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_COMPLETED_STATUS = "TOGGLE_COMPLETED_STATUS";
export const LOAD_TODOS_IN_PROGRESS = "LOAD_TODOS_IN_PROGRESS";
export const LOAD_TODOS_SUCCESS = "LOAD_TODOS_SUCCESS";
export const LOAD_TODOS_FAILURE = "LOAD_TODOS_FAILURE";

interface CreateTodoAction {
  type: typeof CREATE_TODO;
  payload: {
    todo: Todo
  };
}
interface RemoveTodoAction {
  type: typeof REMOVE_TODO;
  payload: {
    id: string;
  };
}
interface ToggleCompletedStatusAction {
  type: typeof TOGGLE_COMPLETED_STATUS;
  payload: {
    text: string;
  };
}
interface LoadTodosInProgressAction {
  type: typeof LOAD_TODOS_IN_PROGRESS;
}
interface LoadTodosSuccessAction {
  type: typeof LOAD_TODOS_SUCCESS;
  payload: {
    todos: Todo[];
  };
}
interface LoadTodosFailureAction {
  type: typeof LOAD_TODOS_FAILURE;
}

export type TodosActionTypes = 
 | CreateTodoAction
 | RemoveTodoAction
 | ToggleCompletedStatusAction
 | LoadTodosInProgressAction
 | LoadTodosSuccessAction
 | LoadTodosFailureAction;

export const createTodo = (todo: Todo): TodosActionTypes => ({
  type: CREATE_TODO,
  payload: { todo },
});

export const removeTodo = (id: string): TodosActionTypes => ({
  type: REMOVE_TODO,
  payload: { id },
});

export const toggleCompleteStatus = (
  text: string
): ToggleCompletedStatusAction => ({
  type: TOGGLE_COMPLETED_STATUS,
  payload: { text },
});

export const loadTodosInProgress = (): TodosActionTypes => {
  return {
    type: LOAD_TODOS_IN_PROGRESS,
  };
};

export const loadTodosSuccess = (todos: Todo[]): TodosActionTypes => ({
  type: LOAD_TODOS_SUCCESS,
  payload: { todos },
});

export const loadTodosFailure = (): TodosActionTypes => ({
  type: LOAD_TODOS_FAILURE,
});
