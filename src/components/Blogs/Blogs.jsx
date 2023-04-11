import React from 'react';

const Blogs = () => {
    return (
        <div className='my-container'>
            <div className='p-6 lg:p-10 border rounded-md mt-5 mb-5 header-css hover:bg-blue-100'>
                <h1 className='text-2xl font-bold mb-4'>I. When should you use context API?</h1>
                <p>
                    The React Context API should be used when you have data or state that needs to be shared across multiple components in a React application. The Context API provides a way to pass data through the component tree without having to pass props down manually at every level.
                </p>
            </div>
            <div className='p-6 lg:p-10 border rounded-md mt-5 mb-5 header-css hover:bg-blue-100'>
                <h1 className='text-2xl font-bold mb-4'>II. What is a custom hook?</h1>
                <p>
                    In React, a custom hook is a function that allows you to reuse stateful logic in your components. Custom hooks are created by extracting stateful logic from a component and encapsulating it in a function that can be used by other components.
                </p>
            </div>
            <div className='p-6 lg:p-10 border rounded-md mt-5 mb-5 header-css hover:bg-blue-100'>
                <h1 className='text-2xl font-bold mb-4'>III. What is useRef?</h1>
                <p>
                    useRef is a hook in React that allows you to create a mutable reference to a DOM element or a value that persists across re-renders of a component.
                </p>
            </div>
            <div className='p-6 lg:p-10 border rounded-md mt-5 mb-5 header-css hover:bg-blue-100'>
                <h1 className='text-2xl font-bold mb-4'>IV. What is useMemo?</h1>
                <p>
                    useMemo is a hook in React that allows you to memoize the result of a function call and cache it so that it can be reused if the inputs to the function have not changed.
                </p>
            </div>
        </div>
    );
};

export default Blogs;