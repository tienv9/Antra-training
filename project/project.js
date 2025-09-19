// MVC pattern
// Model: handle the data
// View: User interface
// Controller:


const View = (() => {
    const dom = {
        container_available: document.querySelector("#course_container_available"),
        container_selected: document.querySelector("#course_container_selected"),
    }

    const createTempCourse = (dataList) => {
        let template = "";

        // if course is a requirement, use highlight class instead and change type to Compulsory
        dataList.forEach((course) => {
            if(course.required == true) {
                template +=`<li class="course highlight">${course.courseName} <br>Course Type : Compulsory <br>Course Credit : ${course.credit}`;
            } else {
                template +=`<li class="course">${course.courseName} <br>Course Type : Elective <br>Course Credit : ${course.credit}`;
            }
        });
        return template;
    }

    const render = (elem, template) => {
        elem.innerHTML = template;
    }

    return {
        dom,
        createTempCourse,
        render
    }

})();

const Model = ((view) => {

    // fetch from api 
    const fetchCourses = async () => {
        try {
            const res = await fetch("http://localhost:4232/courseList");
            return await res.json();
        } catch (err) {
            console.error("Error fetching courses:", err);
            return;
        }
    };

    return {
        fetchCourses
    };
})(View);

const Controller = ((model, view) => {
    const { dom, createTempCourse, render } = view;

    const init = async () => {
        // get course list from API
        const courses = await model.fetchCourses();

        // render available courses
        render(dom.container_available, createTempCourse(courses));
        
    };

    return {
        init
    };
    
})(Model, View);

Controller.init();