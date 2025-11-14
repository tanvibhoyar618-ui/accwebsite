import './About.css'

const About =()=>{
    return(
        <div className='big'>
            <div className="imgcon">
                <div>
                    <img className="img1"src="https://opensource.fb.com/img/projects/react.jpg" alt="react" />
                </div>
                <div className='con1'>
                   <center><h1 className='h1 text-9X1 font-bold text-white'>
                       React JS
                    </h1>
                    </center> 
                    <br />
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">React, often referred to as React.js or ReactJS, is a free and open-source JavaScript library primarily used for building user interfaces (UIs) for web applications. It was developed by Facebook (now Meta) and is maintained by Meta and a large open-source community.The use Hook can also be used to read context values, offering an alternative to useContext in certain scenarios, particularly with the introduction of Server Components. The react-use Library.
                    react-use is a popular open-source library that provides a collection of useful, well-tested custom React Hooks. These Hooks encapsulate various functionalities, making it easier to manage state, interact with browser APIs, handle events, and more within your React components.</p>
                </div>
            </div>
            </div>
    );
};
export default About;