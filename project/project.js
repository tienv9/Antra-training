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
                template +=`<li class="course highlight" data-id="${course.courseId}">${course.courseName} <br>Course Type : Compulsory <br>Course Credit : ${course.credit}`;
            } else {
                template +=`<li class="course" data-id="${course.courseId}">${course.courseName} <br>Course Type : Elective <br>Course Credit : ${course.credit}`;
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
    let max_credit = 18;

    const init = async () => {
        // get course list from API
        const courses = await model.fetchCourses();

        // render available courses
        render(dom.container_available, createTempCourse(courses));

        //basic select
        dom.container_available.addEventListener("click", (ck) => {
            ck.target.classList.toggle("selected");

            // check total credits and untoggle if over 18
            if (!updateCreditCounter()) {
                alert("Warning: Total credits cannot exceed 18!");
                ck.target.classList.remove("selected");
            }

        });

        const updateCreditCounter = () => {
            let selectedCredit = 0;
            //select all course class with selected toggled
            const selectedCourses = document.querySelectorAll(".course.selected");
            selectedCourses.forEach(courses => {
                // get credit from innerHTML of selected course
                selectedCredit += parseInt(courses.innerHTML.split("Course Credit : ")[1]);
            });

            // update footer with the new credit count
            const footer = document.querySelector("#current_credit");
            footer.innerHTML = `Total Credit: ${selectedCredit} <button class="select-btn">Select</button>`;

            return selectedCredit < max_credit;
        };


    };

    return {
        init
    };
    
})(Model, View);

Controller.init();