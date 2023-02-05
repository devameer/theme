import React, { useEffect, useReducer, useState } from "react";

const ACTIONS = {
  READ: "read",
  CREATE: "create",
  EDIT: "edit",
  DELETE: "delete",
};
const initialState = [
  {
    id: 1,
    title: "title 1",
    body: "body 1",
  },
  {
    id: 2,
    title: "title 2",
    body: "body 2",
  },
];
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INDEX:
      return action.payload;
    case ACTIONS.CREATE:
      return [...state, { ...action.payload, id: state.length + 1 }];
    case ACTIONS.EDIT:
      const newState = [...state];
      const index = newState.findIndex((post) => post.id === action.payload.id);
      newState[index] = action.payload;

      return [...newState];

    case ACTIONS.DELETE:
      return state.filter((post) => post.id !== action.payload);
    default:
      return state;
  }
};
const Posts = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [formData, setFormData] = useState({});
  const [updateData, setUpdateData] = useState({});
  const [renderForm, setRenderForm] = useState(true);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleEditChange = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };
  const createPost = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTIONS.CREATE,
      payload: formData,
    });
    setFormData({});
    setRenderForm(false)
    setTimeout(() => {
      setRenderForm(true)
    }, 1);
  };
  const editData = (post) => {
    setUpdateData(post);
  };
  const updatePost = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTIONS.EDIT,
      payload: updateData,
    });
    setUpdateData({});
  };
  useEffect(() => {
    dispatch({
      type: ACTIONS.READ,
      payload: initialState,
    });
  }, []); // instead of componentWillUnmount()

  return (
    <>
      <div>
        <h1>Posts</h1>
        {renderForm && (
          <form action="" onSubmit={(e) => createPost(e)}>
            <input
              type="text"
              name="title"
              onChange={(e) => handleChange(e)}
              value={formData.title}
            />
            <input
              type="text"
              name="body"
              onChange={(e) => handleChange(e)}
              value={formData.body}
            />
            <button type="submit">Create Post</button>
          </form>
        )}

        <ul>
          {state?.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <button onClick={() => editData(post)}>Edit</button>
              <button
                onClick={() =>
                  dispatch({ type: ACTIONS.DELETE, payload: post.id })
                }
              >
                DELETE
              </button>
              <div>
                {updateData.id === post.id && (
                  <>
                    <h3>Update Post</h3>
                    <form action="" onSubmit={(e) => updatePost(e)}>
                      <input
                        type="text"
                        name="title"
                        value={updateData.title}
                        onChange={(e) => handleEditChange(e)}
                      />
                      <input
                        type="text"
                        name="body"
                        value={updateData.body}
                        onChange={(e) => handleEditChange(e)}
                      />
                      <button type="submit">Update Post</button>
                    </form>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Posts;
